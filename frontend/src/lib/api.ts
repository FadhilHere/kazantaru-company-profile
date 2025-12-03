const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export type PingResponse = {
  message: string;
  app: string;
  time: string;
};

export async function getPing(): Promise<PingResponse> {
  const res = await fetch(`${API_BASE}/api/ping`, {
    // data ping bisa di-cache sebentar aja
    next: { revalidate: 5 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch /api/ping");
  }

  return res.json();
}
