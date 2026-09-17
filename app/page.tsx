export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0A10] text-white overflow-x-clip antialiased">
      {/* dark-theme ambient glows - matches reference */}
      <div className="pointer-events-none fixed inset-0 bg-[#0C0A10]">
        <div className="absolute -top-48 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[#6d5bff]/[0.13] blur-[150px]" />
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#1a1440]/40 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-[380px] w-[900px] -translate-x-1/2 rounded-full bg-[#7c3aed]/[0.12] blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8">
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
          <h1 className="font-[family-name:var(--font-display)] text-[52px] font-normal leading-[1.04] tracking-[-0.035em] sm:text-[68px]">
            <span className="text-[#B9A6FF]">Easy-mode</span>{" "}
            <span className="text-[#EDEDF2]">for</span>
            <br />
            <span className="text-[#F4F4F6]">Cloud Deployment</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] font-light leading-[1.65] tracking-[-0.01em] text-[#A1A1B3]">
            Coherence automates{" "}
            <span className="font-light text-[#B9A6FF]">
              preview environments
            </span>
            ,{" "}
            <span className="font-light text-[#B9A6FF]">
              CI/CD pipelines
            </span>
            , and{" "}
            <span className="font-light text-[#B9A6FF]">
              production deployments
            </span>{" "}
            in your{" "}
            <span className="inline-flex translate-y-[3px] items-center gap-1.5 font-semibold text-[#EDEDF2]">
              <svg width="21" height="13" viewBox="0 0 26 15" fill="none" aria-hidden>
                <text
                  x="1"
                  y="8.5"
                  fontSize="8"
                  fontWeight="800"
                  fill="white"
                  fontFamily="Arial, sans-serif"
                  letterSpacing="-0.3"
                >
                  aws
                </text>
                <path
                  d="M3.5 11C9 14.5 18.5 14.5 22.5 11"
                  stroke="#FF9900"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20.8 9.6l2.3 1.3-2 1.6-.6-.6 1-0.7-1.2-.7.5-.9z"
                  fill="#FF9900"
                />
              </svg>
              AWS
            </span>{" "}
            or{" "}
            <span className="inline-flex translate-y-[3px] items-center gap-1.5 font-semibold text-[#EDEDF2]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.9-.1-1.5-.3-2.3H12v4.5h6.5c-.1 1.1-.9 2.8-2.6 3.9l3.9 3c2.4-2.2 3.7-5.5 3.7-9.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.8-3c-1 .7-2.4 1.2-4.1 1.2-3.2 0-5.9-2.2-6.9-5.1l-4 3.1C3.1 21.2 7.1 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.1 14.2c-.2-.7-.4-1.5-.4-2.2s.1-1.5.4-2.2L1 6.6C.4 8.2 0 10 0 12s.4 3.8 1 5.4l4.1-3.2z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.7c1.8 0 3 .8 3.7 1.4l3.3-3.2C17.9 1.1 15.2 0 12 0 7.1 0 3.1 2.8 1 6.6l4.1 3.2c1-2.9 3.7-5.1 6.9-5.1z"
                />
              </svg>
              GCP
            </span>{" "}
            account. More power, less hassle.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-[6px] bg-[#F4F4F6] px-4 py-2 text-[13px] font-medium text-black hover:bg-white"
            >
              Try a sandbox
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-[8px] border border-white/[0.18] bg-[#0d0d18] px-3 py-2 text-[14px] font-medium text-[#EDEDF2] hover:bg-white/[0.06]"
            >
              <span className="flex items-center gap-1.5 rounded-[6px] border border-white/20 bg-black/50 px-2 py-1.5">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
                  <rect x="0.75" y="0.75" width="16.5" height="10.5" rx="3" stroke="white" strokeOpacity="0.75" strokeWidth="1.2" />
                  <path d="M7.5 3.4v5.2L12 6 7.5 3.4z" fill="white" fillOpacity="0.9" />
                </svg>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
                  <circle cx="5.5" cy="5.5" r="4.4" stroke="white" strokeOpacity="0.65" strokeWidth="1.2" />
                  <circle cx="5.5" cy="5.5" r="1.3" fill="white" fillOpacity="0.85" />
                </svg>
              </span>
              Watch the demo
            </a>
          </div>
        </section>

        {/* sparkle connector - little gap like reference */}
        <div className="relative mx-auto flex h-[92px] w-[220px] items-center justify-center py-2" aria-hidden>
          {/* faint side arcs */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 220 92" fill="none">
            <path
              d="M20 0 Q110 34 200 0"
              stroke="white"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
            <path
              d="M28 8 Q110 42 192 8"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
          </svg>
          {/* center dotted line */}
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <span className="relative flex flex-col items-center gap-[9px]">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="relative grid place-items-center">
                <span className="absolute h-6 w-6 rounded-full border border-dotted border-white/20" />
                <span className="text-[13px] leading-none text-white drop-shadow-[0_0_7px_rgba(255,255,255,0.95)]">
                  ✦
                </span>
              </span>
            ))}
          </span>
        </div>

        {/* DASHBOARD MOCK - framed like reference */}
        <div className="mx-auto w-full max-w-[1320px] rounded-[24px] border border-white/20 border-t-[3px] border-t-white/30 bg-black p-4 shadow-[0_0_90px_rgba(124,58,237,0.18)] sm:p-6">
          {/* top highlight */}
          <div className="pointer-events-none relative">
            <div className="absolute -top-[10px] left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
        <section className="overflow-hidden rounded-[14px] border border-white/[0.07] bg-[#0b0b14]">
          <div className="p-4 sm:p-6">
            {/* top bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 grid-cols-3 place-items-center gap-[3px] text-[5px] text-white" aria-hidden>
                  <span>●</span><span>●</span><span>●</span>
                  <span>●</span><span>●</span><span>●</span>
                  <span>●</span><span>●</span><span>●</span>
                </span>
                <span className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[12px] text-white/85">
                  <span className="h-4 w-4 rounded-[4px] bg-[#5b3df5]" />
                  rocket-ship-emoji
                  <span className="flex flex-col text-[8px] leading-none text-white/40">
                    <span>▲</span>
                    <span>▼</span>
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-[12px]">
                <span className="text-white/50">Docs</span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#14b8a6] text-[11px] font-bold text-black">
                  GH
                </span>
              </div>
            </div>

            {/* tabs */}
            <div className="mt-4 flex gap-5 overflow-x-auto border-b border-white/10 pb-2.5 text-[13px]">
              <span className="relative text-white">
                Overview
                <span className="absolute -bottom-[11px] left-0 h-[2px] w-full bg-white/80" />
              </span>
              <span className="text-white/45">Review</span>
              <span className="text-white/45">Production</span>
              <span className="text-white/45">Collaborators</span>
              <span className="text-white/45">Settings</span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_210px]">
              {/* left */}
              <div className="min-w-0">
                <h3 className="text-[32px] font-light tracking-tight text-white">Overview</h3>

                {/* stats */}
                <div className="relative mt-4 rounded-xl border border-white/10 bg-white/[0.015] px-5 py-4">
                  <span className="absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-md border border-white/10 text-white/40">
                    •••
                  </span>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-[13px] text-white/45">Builds this week</p>
                      <p className="mt-2 text-[26px] font-light tracking-tight text-white">
                        21 <span className="text-[12px] text-white/40">+3%</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-[13px] text-white/45">Build success rate</p>
                      <p className="mt-2 text-[26px] font-light tracking-tight text-white">
                        81% <span className="text-[12px] text-[#2dd4bf]">+16%</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-[13px] text-white/45">Avg. Build time</p>
                      <p className="mt-2 text-[26px] font-light tracking-tight text-white">
                        9m 21s <span className="text-[12px] text-[#f87171]">+5%</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* starred */}
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.015]">
                  <p className="px-5 pb-3 pt-4 text-[14px] font-medium text-white">
                    Starred environments
                  </p>
                  {[
                    { env: "Production", hash: "8f3ae753", commit: "abH6cds" },
                    { env: "Staging", hash: "fv3Ersf2", commit: "9dsad3e" },
                  ].map((r) => (
                    <div
                      key={r.env}
                      className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] px-5 py-3.5 text-[12px]"
                    >
                      <span className="flex min-w-[140px] items-center gap-2 text-white">
                        <span className="text-white/40">⊕</span> {r.env}
                        <span className="text-[10px] text-[#B9A6FF]">✦</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
                        <span className="text-white/85">Successful</span>
                        <span className="text-white/40">12 ago</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-white/50">
                          <span className="text-[10px] font-bold text-[#FF9900]">aws</span>
                          {r.hash}
                        </span>
                        <span className="flex items-center gap-1 rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[11px] text-white/60">
                          <span>⊣⊢</span> {r.commit}
                        </span>
                        <span className="grid h-7 w-7 place-items-center rounded-md border border-white/10 text-white/40">↗</span>
                        <span className="grid h-7 w-7 place-items-center rounded-md border border-white/10 text-white/40">•••</span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* live previews */}
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.015]">
                  <div className="flex items-center justify-between px-5 pb-3 pt-4">
                    <p className="text-[14px] font-medium text-white">Live previews</p>
                    <span className="text-[12px] text-white/40">View features →</span>
                  </div>
                  {[
                    {
                      url: "https://main.control-plane-review.cohere...",
                      branch: "main",
                      hash: "01YHssd",
                      commit: "vds8dsj",
                    },
                    {
                      url: "https://js-gcp-build-callbacks.control-pla...",
                      branch: "js-gcp-build-callbacks",
                      hash: "w23Ese0",
                      commit: "m1Lk9es",
                    },
                  ].map((r) => (
                    <div
                      key={r.url}
                      className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] px-5 py-3.5 text-[12px]"
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-[#b8c0d4]">
                          {r.url} <span className="text-white/40">↗</span>
                        </span>
                        <span className="mt-1 block text-[11px] text-white/35">
                          ⎇ {r.branch}
                        </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
                        <span className="text-white/85">Successful</span>
                        <span className="text-white/40">12 ago</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-white/50">
                          <span className="text-[10px] font-bold text-[#FF9900]">aws</span>
                          {r.hash}
                        </span>
                        <span className="flex items-center gap-1 rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[11px] text-white/60">
                          <span>⊣⊢</span> {r.commit}
                        </span>
                        <span className="grid h-7 w-7 place-items-center rounded-md border border-white/10 text-white/40">•••</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* right */}
              <div className="min-w-0">
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#7c5cf0] via-[#5b2ee5] to-[#4c1d95] p-3">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                    aria-hidden
                  />
                  <div className="relative grid grid-cols-5 gap-x-2 gap-y-3 p-3 text-[20px] leading-none">
                    <span className="text-[#f9a8d4]">✦</span>
                    <span />
                    <span className="text-[#f9a8d4]/80">✦</span>
                    <span className="text-[#e9e4ff]">✦</span>
                    <span className="text-[#c4b5fd]">✦</span>
                    <span className="text-[#5eead4]">✦</span>
                    <span className="text-[#f9a8d4]">✦</span>
                    <span className="text-[#c4b5fd]/80">✦</span>
                    <span className="text-[#5eead4]">✦</span>
                    <span className="text-[#5eead4]">✦</span>
                    <span className="text-[#5eead4]">✦</span>
                    <span />
                    <span />
                    <span className="text-[#5eead4]">✦</span>
                    <span className="text-[#fed7aa]">✦</span>
                  </div>
                </div>
                <p className="mt-5 text-[11px] uppercase tracking-[0.08em] text-white/40">
                  Repository
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[12px] text-white/80">
                  <span className="grid h-4 w-4 place-items-center rounded-full border border-white/20 text-[10px]">◍</span>
                  coherence/rocketship-emoji
                </p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.08em] text-white/40">
                  Accounts
                </p>
                <div className="mt-2 space-y-2 text-[12px] text-white/70">
                  <p className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#FF9900]">aws</span>
                    rocketship-emoji
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#FF9900]">aws</span>
                    rocketship-emoji-prod
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* TESTIMONIALS + LOGOS - exact from reference */}
        <section className="relative mt-2 overflow-hidden rounded-b-2xl">
          {/* subtle dark mist - matches #0C0A10 background */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-x-0 bottom-0 top-16 bg-gradient-to-b from-transparent via-[#14101f]/40 to-[#1b1440]/40" />
            <div className="absolute -left-10 bottom-0 h-56 w-72 rounded-full bg-[#2a1f5e]/25 blur-[70px]" />
            <div className="absolute bottom-0 left-1/3 h-64 w-96 rounded-full bg-[#3b2a7e]/20 blur-[80px]" />
            <div className="absolute -right-10 bottom-0 h-60 w-80 rounded-full bg-[#3b2a7e]/20 blur-[70px]" />
          </div>

          <div className="relative px-1 pb-8 pt-12 sm:px-4">
            <div className="grid gap-10 lg:grid-cols-2">
              <figure>
                <blockquote className="text-[21px] font-light leading-[1.35] tracking-[-0.01em]">
                  <span className="text-[#B9A6FF]">
                    “Coherence sped up all of our workflows”.
                  </span>{" "}
                  <span className="text-white">
                    The Rounds' Journey to a Robust QA Process with Coherence.
                  </span>{" "}
                  <a
                    href="#"
                    className="whitespace-nowrap text-white underline decoration-dotted decoration-white/60 underline-offset-[6px]"
                  >
                    Read More
                  </a>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-teal-200 via-orange-200 to-stone-500 text-[12px] font-bold text-black">
                    GT
                  </span>
                  <span>
                    <span className="block text-[13px] text-white">Griffin Tschurwald</span>
                    <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.08em] text-white/70">
                      The Rounds
                    </span>
                  </span>
                </figcaption>
              </figure>

              <figure>
                <blockquote className="text-[21px] font-light leading-[1.35] tracking-[-0.01em]">
                  <span className="text-[#B9A6FF]">
                    “Coherence allows us to harness the capabilities of AWS in
                    the simplest possible way”.
                  </span>{" "}
                  <span className="text-white">
                    Ultralight's Move from PaaS to the Cloud with Coherence.
                  </span>{" "}
                  <a
                    href="#"
                    className="whitespace-nowrap text-white underline decoration-dotted decoration-white/60 underline-offset-[6px]"
                  >
                    Read More
                  </a>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-green-800 to-lime-900 text-[12px] font-bold text-white">
                    SG
                  </span>
                  <span>
                    <span className="block text-[13px] text-white">Shiv Ghai</span>
                    <span className="mt-1 flex items-center gap-1 text-[12px] font-semibold text-white/85">
                      <span className="font-black">⋓</span> Ultralight
                    </span>
                  </span>
                </figcaption>
              </figure>
            </div>

            <footer className="mt-16">
              <p className="text-[12px] text-white/70">
                Many more growing teams trust Coherence
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/85">
                <span className="flex items-center gap-1.5 text-[17px] font-bold tracking-tight">
                  <span className="grid h-5 w-5 place-items-center rounded-[4px] bg-white/85 text-[13px] text-black">P</span>
                  Pattern
                </span>
                <span className="flex items-center gap-1.5 text-[16px] font-semibold">
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-white/70 text-[12px]">◍</span>
                  CarEdge
                </span>
                <span className="leading-none">
                  <span className="block text-[16px] font-light tracking-[0.18em]">LUXE</span>
                  <span className="block text-[9px] tracking-[0.28em] text-white/70">SOFTWARE</span>
                </span>
                <span className="flex items-center gap-1 text-[15px] font-semibold">
                  <span className="font-black">⋓</span> Ultralight
                </span>
                <span className="flex items-center gap-1.5 text-[17px] font-extrabold tracking-tight">
                  <span className="grid grid-cols-3 gap-[1.5px] text-[5px] leading-none">
                    <span>▪</span><span>▪</span><span>▪</span>
                    <span>▪</span><span>▪</span><span>▪</span>
                    <span>▪</span><span>▪</span><span>▪</span>
                  </span>
                  CUBBY
                </span>
                <span className="flex items-center gap-1 text-[17px] font-bold tracking-tight">
                  SUNO
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-white/70 text-[11px]">◍</span>
                </span>
              </div>
            </footer>
          </div>
        </section>

        {/* DEVOPS IS NEVER DONE */}
        <section className="relative mt-24">
          <h2 className="font-[family-name:var(--font-display)] max-w-3xl text-[32px] font-extralight leading-[1.1] tracking-[-0.035em] text-[#F2F2F5] sm:text-[44px]">
            DevOps is never &quot;done.&quot;
          </h2>
          <p className="mt-5 max-w-xl text-[15px] font-extralight leading-[1.75] tracking-[0.005em] text-[#9595a8]">
            From managing multiple tools and frameworks, to keeping track of
            the latest updates and patches, there&apos;s always something that
            needs your attention, taking time away from building a successful
            product.
          </p>

          <div className="mask-fade-x -mx-6 mt-10 space-y-4 overflow-hidden lg:-mx-8">
            {/* row 1 */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee flex w-max shrink-0 items-center gap-4 pr-4">
                {[
                  <>What&apos;s the best way to <span className="text-[#B9A6FF]">deploy</span> our app?</>,
                  <>How do we get rid of <span className="text-[#B9A6FF]">staging bottlenecks</span>?</>,
                  <>How can we get production <span className="text-[#B9A6FF]">parity</span> with dev environments?</>,
                  <>Do we have to <span className="text-[#B9A6FF]">build preview</span> environments <span className="text-[#B9A6FF]">ourselves</span>?</>,
                  <>Is our AWS configuration <span className="text-[#B9A6FF]">efficient</span>?</>,
                ].concat([
                  <>What&apos;s the best way to <span className="text-[#B9A6FF]">deploy</span> our app?</>,
                  <>How do we get rid of <span className="text-[#B9A6FF]">staging bottlenecks</span>?</>,
                  <>How can we get production <span className="text-[#B9A6FF]">parity</span> with dev environments?</>,
                  <>Do we have to <span className="text-[#B9A6FF]">build preview</span> environments <span className="text-[#B9A6FF]">ourselves</span>?</>,
                  <>Is our AWS configuration <span className="text-[#B9A6FF]">efficient</span>?</>,
                ]).map((q, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap rounded-[10px] border border-white/10 bg-white/[0.02] px-4 py-3 text-[13px] font-light text-white/65"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
            {/* row 2 */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee marquee-slow marquee-reverse flex w-max shrink-0 items-center gap-4 pr-4">
                {[
                  <>Why is it so hard to maintain our environments?</>,
                  <>Who has time to set up <span className="text-[#B9A6FF]">integration tests</span>?</>,
                  <>Can we rely on GitHub Actions for <span className="text-[#B9A6FF]">CI/CD</span>?</>,
                  <>How can we <span className="text-[#B9A6FF]">onboard new devs faster</span>?</>,
                  <>Can we afford to <span className="text-[#B9A6FF]">hire DevOps</span>?</>,
                  <>Can we stop worrying about YAML?</>,
                ].concat([
                  <>Why is it so hard to maintain our environments?</>,
                  <>Who has time to set up <span className="text-[#B9A6FF]">integration tests</span>?</>,
                  <>Can we rely on GitHub Actions for <span className="text-[#B9A6FF]">CI/CD</span>?</>,
                  <>How can we <span className="text-[#B9A6FF]">onboard new devs faster</span>?</>,
                  <>Can we afford to <span className="text-[#B9A6FF]">hire DevOps</span>?</>,
                  <>Can we stop worrying about YAML?</>,
                ]).map((q, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap rounded-[10px] border border-white/10 bg-white/[0.02] px-4 py-3 text-[13px] font-light text-white/65"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
            {/* row 3 */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee flex w-max shrink-0 items-center gap-4 pr-4" style={{ animationDuration: "52s" }}>
                {[
                  <>How do we get production off of <span className="text-[#B9A6FF]">Heroku</span>?</>,
                  <>Who&apos;s going to write and manage our <span className="text-[#B9A6FF]">Terraform</span>?</>,
                  <>How well do our cloud <span className="text-[#B9A6FF]">resources scale</span>?</>,
                  <>Are my test environments up-to-date?</>,
                  <>Is our staging environment reliable?</>,
                ].concat([
                  <>How do we get production off of <span className="text-[#B9A6FF]">Heroku</span>?</>,
                  <>Who&apos;s going to write and manage our <span className="text-[#B9A6FF]">Terraform</span>?</>,
                  <>How well do our cloud <span className="text-[#B9A6FF]">resources scale</span>?</>,
                  <>Are my test environments up-to-date?</>,
                  <>Is our staging environment reliable?</>,
                ]).map((q, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap rounded-[10px] border border-white/10 bg-white/[0.02] px-4 py-3 text-[13px] font-light text-white/65"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
            {/* row 4 */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee marquee-slow marquee-reverse flex w-max shrink-0 items-center gap-4 pr-4">
                {[
                  <>How do we free up our <span className="text-[#B9A6FF]">senior engineers</span> from troubleshooting?</>,
                  <>How do we get <span className="text-[#B9A6FF]">infrastructure work</span> off of our tech roadmap?</>,
                  <>How can we prioritize <span className="text-[#B9A6FF]">best practices</span> as a small team?</>,
                  <>What do we need to do to <span className="text-[#B9A6FF]">automate</span> our <span className="text-[#B9A6FF]">deployment</span> process?</>,
                  <>Is our AWS configuration <span className="text-[#B9A6FF]">cost efficient</span>?</>,
                ].concat([
                  <>How do we free up our <span className="text-[#B9A6FF]">senior engineers</span> from troubleshooting?</>,
                  <>How do we get <span className="text-[#B9A6FF]">infrastructure work</span> off of our tech roadmap?</>,
                  <>How can we prioritize <span className="text-[#B9A6FF]">best practices</span> as a small team?</>,
                  <>What do we need to do to <span className="text-[#B9A6FF]">automate</span> our <span className="text-[#B9A6FF]">deployment</span> process?</>,
                  <>Is our AWS configuration <span className="text-[#B9A6FF]">cost efficient</span>?</>,
                ]).map((q, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap rounded-[10px] border border-white/10 bg-white/[0.02] px-4 py-3 text-[13px] font-light text-white/65"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL DEVELOPER PLATFORM */}
        <section className="relative mt-24">
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-light leading-[1.28] tracking-[-0.015em] sm:text-[30px]">
            <span className="text-[#B9A6FF]">
              Your internal developer platform is here.
            </span>{" "}
            <span className="text-white">Your</span>
            <br />
            <span className="text-white">
              team will love using it. You&apos;ll love not building,
            </span>
            <br />
            <span className="text-white">supporting, or maintaining it.</span>
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {/* card 1 */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-[15px] leading-[1.6]">
                <span className="font-medium text-white">Ephemeral preview environments </span>
                <span className="font-light text-white/50">
                  created with every PR. Collaborate with frontend and backend
                  support, custom domains, and more.
                </span>
              </p>
              <a href="#" className="mt-2 block text-[12px] text-white/45 hover:text-white">
                Learn more ↗
              </a>
              <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-[#0a0a14]">
                <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
                  <span className="grid h-6 w-6 grid-cols-3 place-items-center gap-[2px] text-[4px] text-white">
                    <span>●</span><span>●</span><span>●</span>
                    <span>●</span><span>●</span><span>●</span>
                    <span>●</span><span>●</span><span>●</span>
                  </span>
                  <p className="text-[12px] text-white/80">
                    Coherence{" "}
                    <span className="rounded border border-white/15 px-1 text-[10px] text-white/50">bot</span>{" "}
                    <span className="text-white/40">commented now</span>
                  </p>
                </div>
                <div className="space-y-2 px-4 py-3 text-[11px] leading-relaxed">
                  <p className="text-white/60">Your preview is live at:</p>
                  <p className="break-all font-mono text-[10.5px] text-white/75">
                    https://gh-build-pipeline-ui-control-plane-review.coherencesites.cc
                  </p>
                  <p className="pt-1 text-white/60">Last build pipeline:</p>
                  <p className="flex items-center gap-1.5 text-white/75">
                    <span className="grid h-3.5 w-3.5 place-items-center rounded-[4px] bg-emerald-500/90 text-[9px] text-black">✓</span>
                    Test link
                  </p>
                  <p className="flex items-center gap-1.5 text-white/75">
                    <span className="grid h-3.5 w-3.5 place-items-center rounded-[4px] bg-emerald-500/90 text-[9px] text-black">✓</span>
                    Deploy link
                  </p>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-[15px] leading-[1.6]">
                <span className="font-medium text-white">Automated terraform </span>
                <span className="font-light text-white/50">
                  does the heavy lifting for you. One simple yaml file
                  continuously configures your infrastructure as code with
                  cloud native services.
                </span>
              </p>
              <a href="#" className="mt-2 block text-[12px] text-white/45 hover:text-white">
                Learn more ↗
              </a>
              <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-[#0a0a14] p-4 font-mono text-[10.5px] leading-[1.9]">
                <p className="flex items-center gap-1.5 text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
                  Successful <span className="text-white/40">after 43s (15 min ago)</span>
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-wider text-white/35">Environments</p>
                <p className="mt-1 rounded bg-[#2dd4bf]/15 px-2 py-0.5 text-[#5eead4]">
                  <span className="text-white/40">▸</span> jj-worker-config
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-wider text-white/35">Resources</p>
                <div className="mt-1 space-y-1 text-emerald-200/80">
                  {[
                    "aws_acm_certificate: jj-worker-config",
                    "aws_region-ssl-cert: jj-worker-config",
                    "aws_route53_zone: jj-worker-config_zone",
                    "aws_ecs_cluster: jj-worker-config_cluster",
                    "aws_s3_bucket: jj-worker-config_cluster_source",
                  ].map((r) => (
                    <p key={r} className="truncate rounded bg-emerald-500/[0.07] px-2 py-0.5">
                      <span className="text-emerald-400">▾ {r.split(":")[0]}:</span>
                      <span className="text-white/55">{r.split(":")[1]}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-[15px] leading-[1.6]">
                <span className="font-medium text-white">Managed CI/CD </span>
                <span className="font-light text-white/50">
                  offers configurable pipelines with database seeding,
                  migrations, end-to-end tests, and parallelized unit tests.
                </span>
              </p>
              <a href="#" className="mt-2 block text-[12px] text-white/45 hover:text-white">
                Learn more ↗
              </a>
              <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-[#0a0a14] text-[11px]">
                {[
                  { dot: "bg-emerald-400", label: "BUILD", sub: "complete in 23s" },
                  { dot: "bg-teal-300", label: "TEST", sub: "complete in 2m 3s" },
                  { dot: "border border-amber-400", label: "DEPLOY", sub: "15s" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-2.5">
                    <span className={`h-2 w-2 rounded-full ${r.dot}`} />
                    <span className="font-semibold text-white/85">{r.label}</span>
                    <span className="text-white/40">{r.sub}</span>
                  </div>
                ))}
                <div className="space-y-2 px-4 py-3">
                  <p className="flex items-center gap-2 text-white/70">
                    <span className="h-2 w-2 rounded-full bg-teal-300" />
                    frontend-service <span className="text-white/35">15s</span>
                    <span className="ml-auto rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-white/45">Logs</span>
                  </p>
                  <p className="flex items-center gap-2 text-white/70">
                    <span className="h-2 w-2 rounded-full border border-amber-400" />
                    backend-service <span className="text-white/35">15s</span>
                    <span className="ml-auto rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-white/45">Logs</span>
                  </p>
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-[15px] leading-[1.6]">
                <span className="font-medium text-white">Production deployments </span>
                <span className="font-light text-white/50">
                  are a click away. Rest assured, production lives in a
                  separate cloud account and you control who has deploy access.
                </span>
              </p>
              <a href="#" className="mt-2 block text-[12px] text-white/45 hover:text-white">
                Learn more ↗
              </a>
              <div className="relative mt-5 overflow-hidden rounded-lg border border-white/10 bg-[#0a0a14] p-4 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-lime-200/90 px-1.5 py-0.5 text-[10px] font-semibold text-black">Deployed</span>
                  <span className="rounded border border-white/10 px-1.5 py-0.5 text-white/40">⊣⊢ Release</span>
                  <span className="ml-auto text-white/40">6m ago</span>
                  <span className="rounded border border-white/10 px-1.5 text-white/40">•••</span>
                </div>
                <div className="absolute right-4 top-3 rounded-lg border border-white/10 bg-[#101018] p-1.5 shadow-xl">
                  <p className="rounded bg-[#7c5cf0] px-3 py-1.5 text-center text-[11px] font-medium text-white">
                    Promote to Production
                  </p>
                  <p className="px-3 py-1.5 text-center text-white/50">Promote to Staging</p>
                </div>
                <div className="mt-4 space-y-2 text-white/45">
                  <p className="flex items-center justify-between rounded border border-white/[0.07] px-3 py-2">
                    completed in 23s <span>›</span>
                  </p>
                  <p className="flex items-center justify-between rounded border border-white/[0.07] px-3 py-2">
                    completed in 3m 12s <span>›</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* wide card: cloud development environments */}
          <div className="mt-5 grid overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] md:grid-cols-[1fr_1.2fr]">
            <div className="p-6 sm:p-8">
              <p className="text-[17px] leading-[1.55]">
                <span className="font-medium text-white">Cloud development environments </span>
                <span className="font-light text-white/50">
                  let you run code in the browser for editing, reviewing, and
                  experimenting with your codebase. One click and it just works.
                </span>
              </p>
              <a href="#" className="mt-3 block text-[12px] text-[#B9A6FF] hover:text-white">
                Learn more ↗
              </a>
            </div>
            <div className="overflow-hidden border-t border-white/10 bg-[#0a0a14] md:border-l md:border-t-0">
              <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-2.5 text-[11px]">
                <span className="text-white/40">←</span>
                <span className="flex items-center gap-1.5 rounded bg-white/[0.06] px-2 py-1 font-mono text-white/70">
                  <span className="text-white/40">⎇</span> main-collection-button
                </span>
                <span className="flex items-center gap-1.5 text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Running
                </span>
              </div>
              <div className="grid grid-cols-[130px_1fr] text-[10px] leading-[1.9]">
                <div className="border-r border-white/[0.07] p-3 font-mono text-white/50">
                  <p className="mb-1 text-[9px] uppercase tracking-wider text-white/30">Explorer</p>
                  {["pokemon-tester-playground", "hello.ts", "index.ts", "package.json", "readme.md", "src", "out-app", "launch", "lexica"].map((f) => (
                    <p key={f} className="truncate">
                      <span className="text-amber-200/60">▸ </span>{f}
                    </p>
                  ))}
                </div>
                <div className="overflow-x-auto p-3 font-mono">
                  <div className="flex gap-3 border-b border-white/[0.07] pb-1.5 text-white/45">
                    <span className="text-white">readme.md</span>
                    <span>$ natash</span>
                    <span className="ml-auto">×</span>
                  </div>
                  <pre className="mt-2 whitespace-pre text-[10px] leading-[1.85]">
                    <code>
                      <span className="text-white/35">1  </span><span className="text-purple-300">if</span> <span className="text-white/70">[ </span><span className="text-green-300">&quot;$STATE&quot;</span> <span className="text-white/70">= </span><span className="text-green-300">&quot;visible&quot;</span><span className="text-white/70"> ];</span> <span className="text-purple-300">then</span>{"\n"}
                      <span className="text-white/35">2  </span><span className="text-white/60">  realpath() &#123; [[ $1 = /* ]] &amp;&amp; </span><span className="text-amber-200">echo</span><span className="text-white/60"> &quot;$1&quot; || </span><span className="text-amber-200">echo</span><span className="text-white/60"> &quot;$PWD/$&#123;1#./&#125;&quot;; &#125;</span>{"\n"}
                      <span className="text-white/35">3  </span><span className="text-white/60">  </span><span className="text-purple-300">else</span>{"\n"}
                      <span className="text-white/35">4  </span><span className="text-white/60">    </span><span className="text-amber-200">echo</span><span className="text-white/60"> &quot;hidden&quot;; </span><span className="text-purple-300">fi</span>{"\n"}
                      <span className="text-white/35">5  </span><span className="text-white/60">  ROOT=$(dirname $(readlink </span><span className="text-green-300">$0</span><span className="text-white/60">))</span>{"\n"}
                      <span className="text-white/35">6  </span><span className="text-white/60">  </span><span className="text-purple-300">DEVELOPER</span><span className="text-white/60">=$(xcode-select --print-path)</span>{"\n"}
                      <span className="text-white/35">7  </span><span className="text-white/60">  LIPO=$(xcrun --sdk iphoneos --find lipo)</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
