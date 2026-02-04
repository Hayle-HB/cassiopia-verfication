import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { CertificateResult } from "../types/certificate";
import logo from "../assets/logo.png";

import studentsData from "../asset/certified-students.json";
import mentorsData from "../asset/mentors.json";

const students = studentsData as { Unique_ID: string; "Cert ID": string; Name: string; Course: string; "Issue Date": string }[];
const mentors = mentorsData as { Unique_ID: string; "Cert ID": string; Name: string; Course: string; "Issue Date": string }[];

function findCertificate(id: string): CertificateResult | null {
  const normalizedId = id.trim().toLowerCase();
  const student = students.find((s) => s.Unique_ID.toLowerCase() === normalizedId);
  if (student) return { ...student, type: "student" };
  const mentor = mentors.find((m) => m.Unique_ID.toLowerCase() === normalizedId);
  if (mentor) return { ...mentor, type: "mentor" };
  return null;
}

function Spinner() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="h-14 w-14 animate-spin rounded-full border-4 border-slate-600 border-t-emerald-500"
        aria-hidden
      />
      <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">
        Verifying certificate…
      </p>
    </div>
  );
}

function VerifiedCard({ cert }: { cert: CertificateResult }) {
  const isMentor = cert.type === "mentor";
  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/95 p-8 shadow-2xl ring-1 ring-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]" />
      <div className="relative space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90">
                Certificate verified
              </p>
              <p className="text-slate-300 text-sm">
                {isMentor ? "Mentor" : "Student"} • {cert["Cert ID"]}
              </p>
            </div>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
              isMentor
                ? "bg-amber-500/20 text-amber-400 ring-1 ring-amber-400/30"
                : "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-400/30"
            }`}
          >
            {isMentor ? "Mentor" : "Student"}
          </span>
        </div>

        <div className="border-t border-slate-700/80 pt-6">
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">Name</dt>
              <dd className="mt-1 text-lg font-semibold text-white">{cert.Name}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">Course</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-200">{cert.Course}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">Cert ID</dt>
              <dd className="mt-1 font-mono text-sm text-slate-300">{cert["Cert ID"]}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">Issue date</dt>
              <dd className="mt-1 text-slate-300">{cert["Issue Date"]}</dd>
            </div>
          </dl>
        </div>

        <p className="text-center text-xs text-slate-500">
          This certificate was issued by Cassiopia and can be verified at this URL.
        </p>
        <Link
          to="/certificate"
          className="mt-4 block text-center text-sm font-medium text-emerald-400 hover:text-emerald-300"
        >
          Verify another certificate
        </Link>
      </div>
    </div>
  );
}

function NotFoundCard({ id }: { id: string }) {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/95 p-8 shadow-2xl ring-1 ring-red-500/20">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20 text-red-400">
          <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Certificate not found</h2>
          <p className="mt-2 text-slate-400 text-sm">
            No certificate matches the ID <code className="rounded bg-slate-700/80 px-1.5 py-0.5 font-mono text-xs">{id}</code>.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/certificate"
            className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            Verify another
          </Link>
          <Link
            to="/"
            className="rounded-xl bg-slate-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-600"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CertificateVerification() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<CertificateResult | null>(null);

  useEffect(() => {
    setLoading(true);
    setResult(null);
    const timer = setTimeout(() => {
      const cert = id ? findCertificate(id) : null;
      setResult(cert ?? null);
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 sm:py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-10">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-500 transition hover:text-slate-300"
        >
          <img src={logo} alt="" className="h-8 w-8 rounded-full object-contain" />
          <span className="text-sm font-medium">Cassiopia AASTU</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>

        {loading ? (
          <div className="flex min-h-[320px] items-center justify-center">
            <Spinner />
          </div>
        ) : result ? (
          <VerifiedCard cert={result} />
        ) : (
          <NotFoundCard id={id ?? ""} />
        )}
      </div>
    </div>
  );
}
