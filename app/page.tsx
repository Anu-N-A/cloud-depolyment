export default function Home() {
  return (
    <main className="min-h-screen bg-[#06060f] text-white overflow-x-clip antialiased">
      {/* background glows */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#6d5bff]/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-[#7c3aed]/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[480px] px-5 pb-16 sm:max-w-2xl lg:max-w-4xl">
        {/* NAV */}
        <nav className="flex items-center justify-between py-5 text-[13px]">
          <a href="#" className="flex shrink-0 items-center">
            <img
              src="/logo.svg.png"
              alt="Coherence"
              className="h-6 w-auto"
            />
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-7 text-white/60 md:flex">
              <a href="#" className="flex items-center gap-1 hover:text-white">
                Features
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-white">Pricing</a>
              <a href="#" className="hover:text-white">Docs</a>
              <a href="#" className="hover:text-white">Login</a>
            </div>
            <div className="flex items-center gap-2">
            <a
              href="#"
              className="rounded-[6px] border border-[#8b7cff]/60 px-3 py-1.5 text-white/85 hover:bg-white/10"
            >
              Create an app
            </a>
            <a
              href="#"
              className="rounded-[6px] bg-white px-3 py-1.5 font-medium text-black hover:bg-white/90"
            >
              Book a demo
            </a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="pt-10 text-left sm:pt-14">
          <h1 className="text-[44px] font-semibold leading-[1.02] tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-[#c4b5fd] via-[#e9d5ff] to-white bg-clip-text text-transparent">
              Easy-mode
            </span>{" "}
            <span className="text-white">for</span>
            <br />
            <span className="text-white">Cloud Deployment</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            Coherence automates preview environments, CI/CD pipelines, and
            production deployments in your{" "}
            <span className="text-white/85">◍ AWS</span> or{" "}
            <span className="text-white/85">◍ GCP</span> account. More power,
            less hassle.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-md bg-white px-4 py-2 text-[13px] font-medium text-black hover:bg-white/90"
            >
              Try it self-host
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-[13px] text-white/80 hover:bg-white/10"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15 text-[10px]">
                ▶
              </span>
              Watch the demo
            </a>
          </div>
        </section>

        {/* dotted connector */}
        <div className="flex flex-col items-center gap-1.5 py-8" aria-hidden>
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className={`h-1 w-1 rounded-full ${
                i === 5 ? "bg-teal-300" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* DASHBOARD MOCK */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a17]/90 shadow-[0_0_80px_rgba(124,58,237,0.25)] backdrop-blur">
          {/* window bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2 text-[12px] text-white/70">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10 text-[10px]">
                ✦
              </span>
              <span className="rounded bg-[#7c3aed]/30 px-1.5 py-0.5 text-[11px] text-purple-200">
                ✦ and/or drop emoji
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-white/50">
              <span>Days</span>
              <span className="h-4 w-4 rounded-full bg-teal-400" />
            </div>
          </div>
          {/* tabs */}
          <div className="flex gap-4 overflow-x-auto border-b border-white/10 px-4 py-2.5 text-[12px] text-white/50">
            <span className="text-white">Overview</span>
            <span>Review</span>
            <span>Production</span>
            <span>Collaboration</span>
            <span>Settings</span>
          </div>

          <div className="grid gap-0 md:grid-cols-[1fr_190px]">
            {/* left */}
            <div className="p-4">
              <h3 className="text-[15px] font-semibold">Overview</h3>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                {[
                  { k: "Builds this week", v: "21", s: "+2.3%", c: "text-white/40" },
                  { k: "Build success rate", v: "81%", s: "+10%", c: "text-teal-300" },
                  { k: "Avg. build time", v: "9m 21s", s: "-3%", c: "text-pink-300" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5"
                  >
                    <p className="text-[10px] leading-tight text-white/45">{s.k}</p>
                    <p className="mt-1 text-[15px] font-semibold">
                      {s.v}{" "}
                      <span className={`text-[10px] font-normal ${s.c}`}>{s.s}</span>
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[12px] font-medium text-white/70">
                Stored environments
              </p>
              <div className="mt-2 space-y-2">
                {[
                  { env: "Production", commit: "61e5e7b", tag: "v2.40.0" },
                  { env: "Staging", commit: "1e2d2e2", tag: "pr-1042" },
                ].map((r) => (
                  <div
                    key={r.env}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 text-[11px]"
                  >
                    <span className="flex items-center gap-2 text-white/80">
                      <span className="text-white/40">◍</span> {r.env}
                    </span>
                    <span className="flex items-center gap-2 text-white/50">
                      <span className="flex items-center gap-1 text-teal-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                        Successful
                      </span>
                      <span className="hidden sm:inline">49 ago</span>
                      <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px]">
                        {r.commit}
                      </span>
                      <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px]">
                        {r.tag}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-[12px] font-medium text-white/70">Live previews</p>
                <a href="#" className="text-[11px] text-white/40 hover:text-white">
                  View features →
                </a>
              </div>
              <div className="mt-2 space-y-2">
                {[
                  "https://main-control-plane-reviewe...",
                  "https://qcp-build-collectiveforest-pr...",
                ].map((u) => (
                  <div
                    key={u}
                    className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 text-[11px]"
                  >
                    <span className="truncate text-white/60">{u}</span>
                    <span className="flex shrink-0 items-center gap-2 text-white/50">
                      <span className="flex items-center gap-1 text-teal-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                        Successful
                      </span>
                      <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px]">
                        07FAce2
                      </span>
                      <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px]">
                        pr-1042
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* right */}
            <div className="border-t border-white/10 p-4 md:border-l md:border-t-0">
              <div className="grid grid-cols-5 gap-1.5 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] p-4 text-center text-[14px]">
                {["✦", "✧", "◆", "✦", "✧", "◆", "✦", "◆", "✦", "✧"].map((g, i) => (
                  <span key={i} className={i % 3 === 0 ? "text-pink-200" : i % 3 === 1 ? "text-teal-200" : "text-white"}>
                    {g}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-wider text-white/40">
                Summary
              </p>
              <p className="mt-1 font-mono text-[10px] leading-relaxed text-white/60">
                coherencepreview-emp...
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-wider text-white/40">
                Accounts
              </p>
              <div className="mt-1 space-y-1.5 text-[11px] text-white/60">
                <p>◍ coherence-emp</p>
                <p>◍ coherence-emp-prod</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-10 grid gap-8 text-[13px] leading-relaxed text-white/60 sm:grid-cols-2">
          <figure>
            <blockquote>
              “Coherence sped up all of our workflows”. The Rounds’ Journey to
              a Robust QA Process with Coherence.{" "}
              <a href="#" className="text-white/85 underline">Read More</a>
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-gradient-to-br from-orange-300 to-pink-500" />
              <span>
                <span className="block text-[11px] text-white">Scottie Ruthven-Ling</span>
                <span className="block text-[10px] uppercase tracking-wider text-white/40">
                  The Rounds
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <blockquote>
              “Coherence allows us to harness the capabilities of AWS in the
              simplest possible way”. Ultralight’s Move from PaaS to the Cloud
              with Coherence.{" "}
              <a href="#" className="text-white/85 underline">Read More</a>
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-200 to-orange-500" />
              <span>
                <span className="block text-[11px] text-white">Nikhil Dhar</span>
                <span className="block text-[10px] text-white/40">@ultralight</span>
              </span>
            </figcaption>
          </figure>
        </section>

        {/* LOGOS */}
        <footer className="mt-12 border-t border-white/10 pt-6">
          <p className="text-[10px] text-white/30">
            Many fast-growing teams run on Coherence
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-semibold tracking-wide text-white/35">
            <span>⬣ Pattern</span>
            <span>◍ EatClub</span>
            <span className="font-serif">LUXE</span>
            <span>◍ Ultralight</span>
            <span>CUBBY</span>
            <span>SUNO☾</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
