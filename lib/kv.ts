const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

export function kvConfigured() {
  return Boolean(KV_URL && KV_TOKEN);
}

export async function kvCommand<T = unknown>(
  command: (string | number)[],
): Promise<T> {
  if (!KV_URL || !KV_TOKEN) {
    throw new Error(
      "KV_REST_API_URL / KV_REST_API_TOKEN are not set — attach a KV store to this project.",
    );
  }

  const res = await fetch(KV_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`KV request failed: ${res.status} ${await res.text()}`);
  }

  const data = (await res.json()) as { result: T };
  return data.result;
}
