import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(56,189,248,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_50%,rgba(16,185,129,0.06),transparent)]" />

      <header className="relative z-10 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Cassiopia AASTU" className="h-10 w-10 rounded-full object-contain sm:h-12 sm:w-12" />
            <span className="font-semibold text-white">Cassiopia AASTU</span>
          </Link>
          <Link
            to="/certificate"
            className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 transition hover:bg-emerald-500/20"
          >
            Verify certificate
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero — asymmetric split: text left, logo + orbs right */}
        <section className="relative flex min-h-[88vh] items-center overflow-hidden py-16 sm:py-20 lg:py-24">
          {/* Background: gradient mesh */}
          <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-[80vh] w-[80vh] rounded-full bg-sky-500/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-1/4 -left-1/4 h-[70vh] w-[70vh] rounded-full bg-emerald-500/12 blur-[100px]" />
          <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[80px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

          <div className="relative grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: copy */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sky-400/80 sm:text-sm">
                AASTU • Innovation & Skill Development
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Cassiopia
              </h1>
              <p className="mt-3 text-2xl font-medium text-slate-400 sm:text-3xl lg:mt-4">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AASTU Club
                </span>
              </p>
              <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-slate-500 lg:mx-0 lg:mt-8 lg:max-w-lg">
                A student-led club empowering students through hands-on learning and teamwork. We offer training in programming, embedded systems, PCB design, 3D CAD, machine learning, and MIT Calc — and engage members in real-world projects that foster creativity, collaboration, and sustainable engineering solutions.
              </p>
            </div>

            {/* Right: logo + decorative orbs */}
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative flex items-center justify-center">
                {/* Floating blur orbs behind logo */}
                <div className="absolute h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
                <div className="absolute h-48 w-48 rounded-full bg-emerald-500/25 blur-2xl" />
                <div className="absolute h-32 w-32 rounded-full bg-teal-400/15 blur-xl" />
                {/* Logo frame */}
                <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl backdrop-blur-sm sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/10 via-transparent to-emerald-500/10" />
                  <img
                    src={logo}
                    alt="Cassiopia AASTU"
                    className="relative z-10 h-40 w-40 object-contain sm:h-48 sm:w-48 lg:h-56 lg:w-56"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mt-24">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Who we are
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-400 leading-relaxed">
            CASSIOPIA is a student-led innovation and skill development club at AASTU dedicated to empowering students through hands-on learning and teamwork. We provide training in programming, embedded systems, PCB design, 3D CAD modeling, machine learning, and MIT Calc, while engaging members in real-world projects that foster creativity, collaboration, and sustainable engineering solutions.
          </p>
        </section>

        {/* Trainings */}
        <section className="mt-24">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Our trainings
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400 text-sm">
            Hands-on learning in programming, hardware, design, and data — with real-world projects and collaboration.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-800/40 p-6 transition hover:border-violet-500/30">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Programming</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Build a strong foundation in coding. Learn languages and practices used in industry and in our embedded and ML projects.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-800/40 p-6 transition hover:border-sky-500/30">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Embedded Systems</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Microcontrollers, firmware, sensors, and real-time systems. Hands-on prototyping and debugging of embedded devices.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-800/40 p-6 transition hover:border-amber-500/30">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">PCB Design</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Design and layout printed circuit boards with industry tools. From schematics to manufacturable boards.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-800/40 p-6 transition hover:border-rose-500/30">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">3D CAD Modeling</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Create and iterate on 3D models for parts and assemblies. Essential for prototyping and sustainable product design.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-800/40 p-6 transition hover:border-fuchsia-500/30">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Machine Learning</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Introduction to ML concepts and tools. Apply data-driven approaches in projects and collaborate on real-world applications.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-800/40 p-6 transition hover:border-emerald-500/30">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">MIT Calc</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Spreadsheets and calculation tools for analysis and reporting. Support for technical and project workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Mentorship */}
        <section className="mt-24">
          <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-800/40 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Mentorship
                </h2>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  Our mentors are experienced students and practitioners who have completed the same trainings.
                  They guide new members through projects, answer questions, and help you get the most out of the club.
                </p>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  Mentor certificates are issued alongside training certificates and can be verified the same way — so your role is visible and trusted.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className="flex items-center gap-3 rounded-xl bg-slate-900/60 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Trained mentors</p>
                    <p className="text-sm text-slate-400">Certified to support Embedded Systems, PCB, and MIT Calc.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-slate-900/60 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Community</p>
                    <p className="text-sm text-slate-400">Learn with peers and grow within the AASTU tech community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why join / benefits */}
        <section className="mt-24">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Why Cassiopia?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-700/80 bg-slate-800/30 p-5">
              <h3 className="font-semibold text-white">Empowering & student-led</h3>
              <p className="mt-2 text-sm text-slate-400">
                A club run by students, for students. Hands-on learning and teamwork at the heart of everything we do.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/80 bg-slate-800/30 p-5">
              <h3 className="font-semibold text-white">Real-world projects</h3>
              <p className="mt-2 text-sm text-slate-400">
                Creativity, collaboration, and sustainable engineering solutions through projects you can be proud of.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/80 bg-slate-800/30 p-5">
              <h3 className="font-semibold text-white">Verified certificates</h3>
              <p className="mt-2 text-sm text-slate-400">
                Training and mentor completions are certified and verifiable online for employers and institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Certification section — verify CTA at the end */}
        <section className="mt-24 rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-slate-900/50 p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Certificate verification
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Cassiopia issues certificates for completed trainings and for mentors. Each certificate has a unique ID and can be verified online. Paste the certificate URL or ID below to confirm authenticity.
            </p>
            <Link
              to="/certificate"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-500"
            >
              Verify the certificate
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-slate-800">
          <div className="mx-auto grid max-w-6xl gap-10 py-12 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Cassiopia AASTU" className="h-10 w-10 rounded-full object-contain" />
                <span className="font-semibold text-white">Cassiopia AASTU</span>
              </Link>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                Innovation and Skill Development Club since 2019. AASTU.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="https://t.me/cassiopia_aastu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-sky-400"
                  >
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:cassiopiaaastu@gmail.com"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-sky-400"
                  >
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    cassiopiaaastu@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Support</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="https://t.me/Cassiopia_aastubot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-emerald-400"
                  >
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Cassiopia Support Bot
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
            Cassiopia AASTU Club • Powered by Proghubs
          </div>
        </footer>
      </main>
    </div>
  );
}
