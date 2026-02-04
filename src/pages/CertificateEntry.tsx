import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

/** Extract certificate ID from pasted URL or return trimmed input as ID. */
function extractId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  try {
    if (trimmed.includes("/")) {
      const url = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
      const path = new URL(url).pathname;
      const segments = path.split("/").filter(Boolean);
      const id = segments[segments.length - 1];
      return id && id.length > 10 ? id : trimmed;
    }
    return trimmed;
  } catch {
    return trimmed;
  }
}

export default function CertificateEntry() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const id = extractId(value);
    if (!id) {
      setError("Please enter a certificate URL or ID.");
      return;
    }
    navigate(`/certificate/${encodeURIComponent(id)}`, { replace: true });
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(56,189,248,0.06),transparent)]" />

      <header className="relative z-10 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Cassiopia AASTU" className="h-10 w-10 rounded-full object-contain sm:h-12 sm:w-12" />
            <span className="font-semibold text-white">Cassiopia AASTU</span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Home
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-lg px-4 py-16 sm:py-24">
        <div className="rounded-2xl border border-slate-700/80 bg-slate-800/50 p-6 shadow-xl ring-1 ring-white/5 sm:p-8">
          <div className="mb-6 flex justify-center">
            <img src={logo} alt="" className="h-14 w-14 rounded-xl object-contain" />
          </div>
          <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Verify certificate
          </h1>
          <p className="mt-2 text-center text-slate-400 text-sm">
            Paste the full certificate URL or enter the certificate ID below.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="cert-input" className="sr-only">
                Certificate URL or ID
              </label>
              <input
                id="cert-input"
                type="text"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setError("");
                }}
                placeholder="https://.../certificate/your-id or paste certificate ID"
                className="w-full rounded-xl border border-slate-600 bg-slate-900/80 px-4 py-3.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 py-3.5 font-semibold text-white transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Verify
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-500">
            The ID is taken from the URL (e.g. the part after <code className="rounded bg-slate-700/80 px-1 font-mono">/certificate/</code>) if you paste a full link.
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          <Link to="/" className="text-emerald-400 hover:underline">Back to home</Link>
        </p>
      </main>
    </div>
  );
}
