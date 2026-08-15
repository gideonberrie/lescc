import type { Metadata } from "next";
import { kvCommand, kvConfigured } from "@/lib/kv";
import { login, logout, isAuthed } from "./actions";

export const metadata: Metadata = {
  title: "Admin | LESCC",
  robots: { index: false, follow: false },
};

const SUBSCRIBERS_KEY = "newsletter:subscribers";

async function getSubscribers() {
  if (!kvConfigured()) return null;
  const flat = await kvCommand<string[]>([
    "ZRANGE",
    SUBSCRIBERS_KEY,
    "0",
    "-1",
    "REV",
    "WITHSCORES",
  ]);
  const entries: { email: string; date: string }[] = [];
  for (let i = 0; i < flat.length; i += 2) {
    entries.push({
      email: flat[i],
      date: new Date(Number(flat[i + 1])).toLocaleString(),
    });
  }
  return entries;
}

export default async function AdminPage() {
  const authed = await isAuthed();

  if (!authed) {
    return (
      <div className="mx-auto flex min-h-[60vh] w-full max-w-sm flex-col justify-center gap-4 px-[0.5in]">
        <h1 className="text-2xl font-black tracking-tight">Admin</h1>
        <form action={login} className="flex flex-col gap-3">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full rounded-full border border-black/[.08] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-white/[.145]"
          />
          <button
            type="submit"
            className="rounded-full bg-[#068e4a] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#057a3f]"
          >
            Log in
          </button>
        </form>
      </div>
    );
  }

  const subscribers = await getSubscribers();

  return (
    <div className="mx-auto w-full max-w-2xl px-[0.5in] py-20">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-tight">
          Newsletter subscribers{" "}
          {subscribers && (
            <span className="text-zinc-400">({subscribers.length})</span>
          )}
        </h1>
        <form action={logout}>
          <button
            type="submit"
            className="text-sm font-bold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Log out
          </button>
        </form>
      </div>

      {subscribers === null ? (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Storage isn&rsquo;t configured yet — attach a KV store to this
          project in Vercel (Storage → Create Database) and set{" "}
          <code>KV_REST_API_URL</code> / <code>KV_REST_API_TOKEN</code>.
        </p>
      ) : subscribers.length === 0 ? (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          No signups yet.
        </p>
      ) : (
        <ul className="flex flex-col divide-y divide-black/[.08] dark:divide-white/[.145]">
          {subscribers.map((s) => (
            <li
              key={s.email}
              className="flex items-center justify-between gap-4 py-3 text-sm"
            >
              <span>{s.email}</span>
              <span className="shrink-0 text-zinc-500">{s.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
