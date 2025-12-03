import { getPing } from "@/lib/api";

export default async function HomePage() {
  const ping = await getPing();

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="max-w-md w-full rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
        <h1 className="text-2xl font-bold mb-4">Kazantaru API Test</h1>

        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Message:</span> {ping.message}
          </p>
          <p>
            <span className="font-semibold">App:</span> {ping.app}
          </p>
          <p>
            <span className="font-semibold">Time:</span> {ping.time}
          </p>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Kalau data ini muncul, berarti Next.js sudah berhasil connect ke
          Laravel API pakai <code>/api/ping</code>.
        </p>
      </div>
    </main>
  );
}
