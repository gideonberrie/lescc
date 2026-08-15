import { NextRequest, NextResponse } from "next/server";
import { kvCommand, kvConfigured } from "@/lib/kv";

const SUBSCRIBERS_KEY = "newsletter:subscribers";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  if (!kvConfigured()) {
    return NextResponse.json(
      { error: "Newsletter storage isn't configured yet." },
      { status: 500 },
    );
  }

  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  await kvCommand(["ZADD", SUBSCRIBERS_KEY, Date.now(), email]);

  return NextResponse.json({ ok: true });
}
