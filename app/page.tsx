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
            <div className="hidden items-center gap-2 sm:flex">
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
            <details className="relative sm:hidden">
              <summary className="grid h-9 w-9 cursor-pointer list-none place-items-center rounded-[6px] border border-white/15 text-white/80 [&::-webkit-details-marker]:hidden" aria-label="Menu">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
                  <path d="M1 1h14M1 6h14M1 11h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="absolute right-0 top-11 z-50 flex w-48 flex-col gap-1 rounded-xl border border-white/10 bg-[#12121c] p-2 text-[13px] shadow-2xl">
                <a href="#" className="rounded-md px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white">Features</a>
                <a href="#" className="rounded-md px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white">Pricing</a>
                <a href="#" className="rounded-md px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white">Docs</a>
                <a href="#" className="rounded-md px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white">Login</a>
                <div className="my-1 h-px bg-white/10" />
                <a href="#" className="rounded-md border border-[#8b7cff]/60 px-3 py-2 text-center text-white/85">Create an app</a>
                <a href="#" className="rounded-md bg-white px-3 py-2 text-center font-medium text-black">Book a demo</a>
              </div>
            </details>
          </div>
        </nav>

        {/* HERO */}
        <section className="pt-10 text-left sm:pt-14">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,10.5vw,3.25rem)] font-normal leading-[1.04] tracking-[-0.035em] sm:text-[68px]">
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
          <div className="mt-6 flex flex-col items-stretch gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center">
            <a
              href="#"
              className="rounded-[6px] bg-[#F4F4F6] px-4 py-2.5 text-center text-[13px] font-medium text-black hover:bg-white min-[480px]:py-2"
            >
              Try a sandbox
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 rounded-[8px] border border-white/[0.18] bg-[#0d0d18] px-3 py-2.5 text-[14px] font-medium text-[#EDEDF2] hover:bg-white/[0.06] min-[480px]:py-2"
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

        {/* DASHBOARD MOCK - framed like reference */}
        <div className="mx-auto mt-10 w-full max-w-[1320px] rounded-[24px] border border-white/20 border-t-[3px] border-t-white/30 bg-black p-4 shadow-[0_0_90px_rgba(124,58,237,0.18)] sm:p-6">
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
                  <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 min-[480px]:gap-4">
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

          <div className="mt-10 grid items-stretch gap-5 md:auto-rows-fr md:grid-cols-2">
            {/* card 1 */}
            <div className="flex flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-[#1b1b26] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
              <p className="text-[13px] font-medium leading-[1.6] text-white">
                Ephemeral preview environments
              </p>
              <p className="mt-1 text-[13px] font-light leading-[1.6] text-white/45">
                created with every PR. Collaborate with
                <br />
                frontend and backend support, custom
                <br />
                domains, and more.
              </p>
              <a href="#" className="mb-3 mt-2 block text-[11px] font-light text-[#a78bfa] hover:text-white">
                Learn more ↗
              </a>
              <div className="mt-auto flex items-start gap-2 -mr-5">
                <span className="h-9 w-9 shrink-0 overflow-hidden rounded-md bg-black" aria-hidden>
                  <img src="/logo.svg.png" alt="" className="h-9 w-auto max-w-none" />
                </span>
                <div className="min-w-0 flex-1 overflow-hidden rounded-l-lg rounded-r-none border border-r-0 border-white/[0.07] bg-[#0c0c13] shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                <div className="border-b border-white/[0.06] px-3.5 py-2.5">
                  <p className="text-[12px] text-white">
                    Coherence{" "}
                    <span className="rounded-full border border-white/20 px-1.5 py-px text-[9px] font-light text-white/55">bot</span>{" "}
                    <span className="font-light text-white/40">commented now</span>
                  </p>
                </div>
                <div className="space-y-2 bg-black/50 px-4 py-3 text-[11px] leading-relaxed">
                  <p className="text-white/80">Your preview is live at:</p>
                  <p className="truncate font-mono text-[10px] text-[#b7a6f5]">
                    https://gh-build-pipeline-ui-control-plane-review.coherencesites.cc
                  </p>
                  <p className="pt-1.5 text-white/80">Last build pipeline:</p>
                  <p className="flex items-center gap-1.5 text-white/80">
                    <span className="grid h-3.5 w-3.5 place-items-center rounded bg-emerald-400/90 text-[9px] font-bold text-black">✓</span>
                    Test <span className="text-[#a78bfa]">link</span>
                  </p>
                  <p className="flex items-center gap-1.5 text-white/80">
                    <span className="grid h-3.5 w-3.5 place-items-center rounded bg-emerald-400/90 text-[9px] font-bold text-black">✓</span>
                    Deploy <span className="text-[#a78bfa]">link</span>
                  </p>
                </div>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-[#1b1b26] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
              <p className="text-[13px] font-medium leading-[1.6] text-white">
                Automated terraform
              </p>
              <p className="mt-1 text-[13px] font-light leading-[1.6] text-white/45">
                does the heavy
                <br />
                lifting for you. One simple yaml file
                <br />
                continuously configures your
                <br />
                infrastructure as code with cloud native
                <br />
                services.
              </p>
              <a href="#" className="mb-3 mt-2 block text-[11px] font-light text-[#a78bfa] hover:text-white">
                Learn more ↗
              </a>
              <div className="mt-auto overflow-hidden rounded-t-lg rounded-b-none border border-b-0 border-white/[0.07] bg-[#0c0c13] p-3.5 font-mono text-[10px] leading-[1.8] shadow-[0_10px_35px_rgba(0,0,0,0.5)] -mb-5">
                <p className="flex items-center gap-1.5 text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
                  Successful <span className="font-sans font-light text-white/40">after 43s (15 min ago)</span>
                </p>
                <p className="mt-2.5 font-sans text-[9px] uppercase tracking-[0.1em] text-white/40">Environments</p>
                <p className="mt-1 rounded bg-gradient-to-r from-[#134e4a]/70 to-[#134e4a]/10 px-2 py-0.5 text-[#5eead4]">
                  <span className="mr-1 text-[9px]">+</span>jj-worker-config
                </p>
                <p className="mt-2 font-sans text-[9px] uppercase tracking-[0.1em] text-white/40">Resources</p>
                <div className="mt-1 space-y-1">
                  {[
                    "aws-acm-certificate: jj-worker-config",
                    "aws-region-ssl-cert: jj-worker-config",
                    "aws-route53_zone: jj-worker-config_zone",
                    "aws-ecs_cluster: jj-worker-config_cluster",
                    "aws-s3_bucket: jj-worker-config_cluster_source",
                  ].map((r) => (
                    <p key={r} className="truncate rounded bg-gradient-to-r from-[#134e4a]/45 to-[#134e4a]/5 px-2 py-0.5">
                      <span className="mr-1 text-[9px] text-[#2dd4bf]">+</span>
                      <span className="text-[#99f6e4]/90">{r.split(":")[0]}:</span>
                      <span className="text-white/50">{r.split(":")[1]}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="flex flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-[#1b1b26] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
              <p className="text-[13px] font-medium leading-[1.6] text-white">
                Managed CI/CD
              </p>
              <p className="mt-1 text-[13px] font-light leading-[1.6] text-white/45">
                offers configurable
                <br />
                pipelines with database seeding,
                <br />
                migrations, end-to-end tests, and
                <br />
                parallelized unit tests.
              </p>
              <a href="#" className="mb-3 mt-2 block text-[11px] font-light text-[#a78bfa] hover:text-white">
                Learn more ↗
              </a>
              <div className="mt-auto flex flex-col gap-[2px] -mb-5">
                <div className="flex items-center gap-2 rounded-[6px] border border-white/[0.07] bg-[#0c0c13] px-4 py-2 text-[11px] shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                  <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-emerald-400/90 text-[8px] font-bold text-black">✓</span>
                  <span className="font-semibold text-white/85">BUILD</span>
                  <span className="font-light text-white/40">complete in 23s</span>
                </div>
                <div className="flex items-center gap-2 rounded-[6px] border border-white/[0.07] bg-[#0c0c13] px-4 py-2 text-[11px] shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                  <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-emerald-400/90 text-[8px] font-bold text-black">✓</span>
                  <span className="font-semibold text-white/85">TEST</span>
                  <span className="font-light text-white/40">complete in 2m 3s</span>
                </div>
                <div className="rounded-[6px] border border-white/[0.07] bg-[#0c0c13] text-[11px] shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-2 px-4 py-2">
                    <span className="grid h-3.5 w-3.5 place-items-center rounded-full border border-dotted border-amber-400 text-[8px] text-amber-400">◌</span>
                    <span className="font-semibold text-white/85">DEPLOY</span>
                    <span className="font-light text-white/40">15s</span>
                  </div>
                  <div className="space-y-1.5 px-4 py-2 pl-10">
                    <p className="flex items-center gap-2 text-white/70">
                      <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-teal-400/90 text-[8px] font-bold text-black">✓</span>
                      frontend-service <span className="font-light text-white/35">15s</span>
                      <span className="text-[10px] font-light text-white/45">Logs</span>
                    </p>
                    <p className="flex items-center gap-2 text-white/70">
                      <span className="grid h-3.5 w-3.5 place-items-center rounded-full border border-dotted border-amber-400 text-[8px] text-amber-400">◌</span>
                      backend-service <span className="font-light text-white/35">15s</span>
                      <span className="text-[10px] font-light text-white/45">Logs</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div className="flex flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-[#1b1b26] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
              <p className="text-[13px] font-medium leading-[1.6] text-white">
                Production deployments
              </p>
              <p className="mt-1 text-[13px] font-light leading-[1.6] text-white/45">
                are a click
                <br />
                away. Rest assured, production lives in
                <br />
                a separate cloud account and you
                <br />
                control who has deploy access.
              </p>
              <a href="#" className="mb-3 mt-2 block text-[11px] font-light text-[#a78bfa] hover:text-white">
                Learn more ↗
              </a>
              <div className="relative -mb-5 -ml-5 mt-auto w-full lg:w-[70%]">
                <div className="absolute -top-14 right-2 z-10 w-[170px] rounded-xl border border-white/10 bg-[#121219] p-1 shadow-2xl lg:-right-36">
                  <p className="rounded-md bg-[#7c5cf0] px-2.5 py-1 text-center text-[10px] font-medium text-white">
                    Promote to Production
                  </p>
                  <p className="px-2.5 py-1 text-center text-[10px] text-white/55">Promote to Staging</p>
                </div>
              <div className="overflow-hidden rounded-r-lg rounded-l-none rounded-b-none border border-b-0 border-l-0 border-white/[0.07] bg-[#0c0c13] text-[14px] shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
                  <span className="rounded bg-lime-200/90 px-1.5 py-px text-[10px] font-semibold text-black">Deployed</span>
                  <span className="rounded-md bg-white/[0.06] px-1.5 py-px font-mono text-[10px] text-white/55">⊣⊢ 9dsad3e</span>
                  <span className="ml-auto flex shrink-0 items-center gap-1.5">
                    <span className="font-light text-white/40">6m ago</span>
                    <span className="rounded-md border border-white/15 bg-[#1a1a24] px-1.5 py-px text-white/60">•••</span>
                  </span>
                </div>
                <div className="bg-black/30 text-[13px] font-light text-white/40">
                  <div className="flex h-6 w-full items-center justify-end border-b border-white/[0.07] bg-white/[0.05] px-4" aria-hidden>
                    <span className="text-[10px] text-white/30">▾</span>
                  </div>
                  <p className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-4 py-2.5">
                    completed in 23s <span className="text-white/30">›</span>
                  </p>
                  <p className="flex items-center justify-between px-4 py-2.5">
                    completed in 3m 12s <span className="text-white/30">›</span>
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* wide card: cloud development environments */}
          <div className="mt-5 grid overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] md:grid-cols-[1fr_1.2fr]">
            <div className="p-6 sm:p-8">
              <p className="text-[17px] font-medium leading-[1.55] text-white">
                Cloud development environments
              </p>
              <p className="mt-1 text-[17px] font-light leading-[1.55] text-white/50">
                let you
                <br />
                run code in the browser for editing,
                <br />
                reviewing, and experimenting with your
                <br />
                codebase. One click and it just works.
              </p>
              <a href="#" className="mt-3 block text-[12px] text-[#B9A6FF] hover:text-white">
                Learn more ↗
              </a>
            </div>
            <div className="overflow-hidden border-t border-white/10 bg-[#0a0a14] md:ml-0 md:mt-6 md:rounded-tl-xl md:border-l md:border-t md:border-t-white/10">
              <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-2.5 text-[11px]">
                <span className="text-white/40">←</span>
                <span className="flex items-center gap-1.5 rounded bg-white/[0.06] px-2 py-1 font-mono text-white/70">
                  <span className="text-white/40">⎇</span> main-collection-button
                </span>
                <span className="flex items-center gap-1.5 text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Running
                </span>
              </div>
              <div className="grid grid-cols-1 text-[10px] leading-[1.9] min-[560px]:grid-cols-[130px_1fr]">
                <div className="hidden border-r border-white/[0.07] p-3 font-mono text-white/50 min-[560px]:block">
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

        {/* ROADMAP */}
        <section className="relative mt-36">
          <h2 className="font-[family-name:var(--font-display)] max-w-3xl text-[26px] font-light leading-[1.28] tracking-[-0.015em] sm:text-[32px]">
            <span className="text-[#B9A6FF]">Don&apos;t build all this stuff yourself. </span>
            <span className="text-white">Coherence</span>
            <br />
            <span className="text-white">gets infrastructure work off your roadmap.</span>
          </h2>

          <div className="relative mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#0a0a13]">
            <div className="overflow-x-auto">
            <div className="min-w-[760px]">
            {/* month header */}
            <div className="grid grid-cols-[110px_repeat(5,1fr)] border-b border-white/[0.07] text-[10px] uppercase tracking-[0.12em] text-white/35 sm:grid-cols-[150px_repeat(5,1fr)]">
              <span />
              {["January", "February", "March", "April", "May"].map((m) => (
                <span key={m} className="border-l border-dashed border-white/[0.07] px-3 py-3">{m}</span>
              ))}
            </div>
            {[
              { label: "Infra as code", pills: [
                { t: "Infra-as-code for staging", c: "col-start-2 col-span-2" },
                { t: "Per environment templates", c: "col-start-5 col-span-1" },
                { t: "Infra-as-code for CI/CD", c: "col-start-6 col-span-1" },
              ]},
              { label: "CI/CD", pills: [
                { t: "Build/deploy pipeline", c: "col-start-2 col-span-2" },
                { t: "Tests", c: "col-start-4 col-span-1" },
                { t: "Integration tests", c: "col-start-5 col-span-1" },
                { t: "Templates for new apps", c: "col-start-6 col-span-1" },
              ]},
              { label: "Environments", pills: [
                { t: "Setup doc", c: "col-start-3 col-span-1" },
                { t: "Setup script", c: "col-start-4 col-span-1" },
                { t: "Automated Docker setup", c: "col-start-5 col-span-1" },
                { t: "Cloud IDE configuration", c: "col-start-6 col-span-1" },
              ]},
              { label: "Dashboard", pills: [
                { t: "Multi-env pipeline viewer", c: "col-start-5 col-span-1" },
                { t: "Service catalog", c: "col-start-6 col-span-1" },
              ]},
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-[110px_repeat(5,1fr)] border-b border-white/[0.05] sm:grid-cols-[150px_repeat(5,1fr)]">
                <span className="px-4 py-3.5 text-[12px] text-white/70">{row.label}</span>
                <div className="col-span-5 grid grid-cols-5 gap-2 p-2.5">
                  {row.pills.map((p) => (
                    <span key={p.t} className={`truncate rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-2 font-mono text-[10.5px] text-white/65 ${p.c}`}>
                      {p.t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {/* bottom timeline */}
            <div className="relative grid grid-cols-[110px_repeat(5,1fr)] items-stretch bg-gradient-to-r from-[#7c5cf0]/25 via-[#7c5cf0]/10 to-transparent sm:grid-cols-[150px_repeat(5,1fr)]">
              <span className="border border-[#8b7cff]/50 bg-[#1a1440]/60 px-3 py-3 text-[12px] text-white">Make your app great</span>
              <span className="border-y border-r border-white/10 px-3 py-3 font-mono text-[11px] text-white/70">Get Coherence</span>
              <span className="relative col-span-4 border-y border-white/10">
                <span className="absolute left-[12%] top-1/2 -translate-y-1/2 text-[12px] text-white drop-shadow-[0_0_6px_white]">✦</span>
                <span className="absolute left-[38%] top-[15%] text-[15px] text-white drop-shadow-[0_0_8px_white]">✦</span>
                <span className="absolute left-[44%] top-[70%] text-[11px] text-white drop-shadow-[0_0_6px_white]">✦</span>
                <span className="absolute right-[8%] top-1/2 -translate-y-1/2 text-[14px] text-white drop-shadow-[0_0_8px_white]">✦</span>
              </span>
            </div>
            </div>
            </div>
            {/* stickers */}
            <div className="pointer-events-none absolute left-[38%] top-[34%] -rotate-[8deg] rounded-lg bg-[#d9f99d] px-3 py-2 text-[11px] font-semibold leading-tight text-black shadow-xl sm:px-4 sm:py-2.5 sm:text-[15px]">
              1,000+ dev hours of<br />undifferentiated work
            </div>
            <div className="pointer-events-none absolute bottom-[16%] right-[22%] rotate-[8deg] rounded-lg bg-[#7c5cf0] px-3 py-2 text-[11px] font-semibold leading-tight text-white shadow-xl sm:px-4 sm:py-2.5 sm:text-[15px]">
              Vs. spending time on<br />your actual product
            </div>
          </div>

          {/* features */}
          <div className="mt-24 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Secure", d: "Configure your infrastructure in your own cloud, using best practices, automatically",
                icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3.5" y="7" width="9" height="6.5" rx="1.2" stroke="#A5A3C7" strokeWidth="1.1" /><path d="M5.8 7V5.2a2.2 2.2 0 014.4 0V7" stroke="#A5A3C7" strokeWidth="1.1" /><circle cx="8" cy="10.2" r="0.9" fill="#A5A3C7" /></svg>) },
              { t: "Compliant", d: "Get an audit trail of your SDLC from requirements, to development, to testing & deployment.",
                icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.2" stroke="#A5A3C7" strokeWidth="1.1" /><path d="M10.2 10.2L13.8 13.8" stroke="#A5A3C7" strokeWidth="1.1" strokeLinecap="round" /></svg>) },
              { t: "Developer-native", d: "Builds and deployments are surfaced intuitively, empowering your team regardless of DevOps experience.",
                icon: (<svg width="17" height="16" viewBox="0 0 18 16" fill="none"><path d="M6.5 4.5L3 8l3.5 3.5M11.5 4.5L15 8l-3.5 3.5" stroke="#A5A3C7" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
              { t: "Scalable", d: "Coherence makes sure your cloud is there for your users, and that you are avoiding surprise costs from automation.",
                icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9.5 2.8h3.7v3.7M13.2 2.8L8.8 7.2M6.5 13.2H2.8V9.5M2.8 13.2l4.4-4.4" stroke="#A5A3C7" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
              { t: "No Lock-in", d: "You can cut off Coherence's access at any time — your infrastructure remains safe in your own cloud.",
                icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.2" y="4" width="11.6" height="8.5" rx="1.2" stroke="#A5A3C7" strokeWidth="1.1" /><path d="M2.2 6.3h11.6" stroke="#A5A3C7" strokeWidth="1.1" /><path d="M4.5 10h2.6" stroke="#A5A3C7" strokeWidth="1.1" strokeLinecap="round" /></svg>) },
              { t: "Cost-effective", d: "You get back engineering time and optimize your cloud deployments to lower your spend.",
                icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 13.5v-3M6.8 13.5V9.5M10.1 13.5V6.8M13.4 13.5V4" stroke="#A5A3C7" strokeWidth="1.1" strokeLinecap="round" /></svg>) },
            ].map((f) => (
              <div key={f.t}>
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03]">{f.icon}</span>
                <p className="mt-3 text-[14px] font-medium text-white">{f.t}</p>
                <p className="mt-1.5 max-w-xs text-[13px] font-light leading-[1.65] text-white/50">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <footer className="relative mt-28 pt-14">
          <h2 className="font-[family-name:var(--font-display)] max-w-3xl text-[30px] font-light leading-[1.2] tracking-[-0.02em] sm:text-[42px]">
            <span className="text-[#B9A6FF]">Get back to building your product.</span>
            <br />
            <span className="text-white">Let Coherence handle the rest.</span>
          </h2>
          <div className="mt-7 flex flex-col items-stretch gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center">
            <a
              href="#"
              className="rounded-[6px] bg-[#F4F4F6] px-4 py-2.5 text-center text-[13px] font-medium text-black hover:bg-white min-[480px]:py-2"
            >
              Try a sandbox
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 rounded-[8px] border border-white/[0.18] bg-[#0d0d18] px-3 py-2.5 text-[14px] font-medium text-[#EDEDF2] hover:bg-white/[0.06] min-[480px]:py-2"
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
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 py-6 text-[11px] text-white/35">
            <span>© 2022 Coherence Technologies</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white" aria-label="LinkedIn">
                <span className="grid h-5 w-5 place-items-center rounded border border-white/15 text-[10px]">in</span>
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <span className="text-[12px]">𝕏</span>
              </a>
              <a href="#" className="hover:text-white">Blog</a>
              <a href="#" className="hover:text-white">Jobs</a>
              <a href="#" className="hover:text-white">Terms of Use</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
