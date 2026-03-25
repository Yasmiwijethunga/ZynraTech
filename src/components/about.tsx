// @ts-nocheck
import Image from "next/image";

/* ─────────────────────────────────────────────
   Team — 7 members (4 boys, 3 girls)
───────────────────────────────────────────── */
const TEAM = [
  {
    name: "Mihishan Gunasekara",
    title: "Full Stack Software Engineer",
    bio: "Leads end-to-end development of web and mobile applications with expertise in React, Node.js, and cloud deployment.",
    image: "/team/boy1.jpeg",
    hasPhoto: true,
    accent: "from-cyan-500 to-sky-700",
    titleColor: "text-cyan-400",
  },
  {
    name: "Banitha Madushan",
    title: "Full Stack Software Engineer",
    bio: "Specialises in building scalable web platforms and RESTful APIs, delivering robust solutions for clients across industries.",
    image: "/team/boy2.png",
    hasPhoto: true,
    accent: "from-sky-500 to-indigo-700",
    titleColor: "text-sky-400",
  },
  {
    name: "Chamod Danajaya",
    title: "QA Engineer & Project Manager",
    bio: "Ensures product quality through structured testing pipelines and drives projects to on-time delivery using agile methodologies.",
    image: "/team/boy3.jpeg",
    hasPhoto: true,
    accent: "from-emerald-500 to-teal-700",
    titleColor: "text-emerald-400",
  },
  {
    name: "Laalitha Gunarathne",
    title: "UI/UX Designer & Fullstack Developer",
    bio: "Combines user-centred design principles with full-stack engineering to craft visually compelling and highly functional products.",
    image: "/team/boy4.jpeg",
    hasPhoto: true,
    accent: "from-violet-500 to-purple-700",
    titleColor: "text-violet-400",
  },
  {
    name: "Yasmi Wijethunga",
    title: "Full Stack Software Engineer",
    bio: "Builds performant web and mobile applications with clean, maintainable code and a laser focus on user experience.",
    image: "/team/girl1.jpg",
    hasPhoto: true,
    accent: "from-fuchsia-500 to-pink-700",
    titleColor: "text-fuchsia-400",
  },
  {
    name: "Nadumi Prathiba",
    title: "Full Stack Software Engineer",
    bio: "Bridges backend logic and frontend design to deliver seamless digital experiences across web and mobile platforms.",
    image: "/team/girl2.png",
    hasPhoto: true,
    accent: "from-rose-500 to-red-700",
    titleColor: "text-rose-400",
  },
  {
    name: "Palindi Fernando",
    title: "Full Stack Software Engineer",
    bio: "Passionate about clean, efficient code and delivering polished applications that consistently exceed client expectations.",
    image: "/team/girl3.png",
    hasPhoto: true,
    accent: "from-amber-500 to-orange-700",
    titleColor: "text-amber-400",
  },
];

/* ─────────────────────────────────────────────
   Team Card
───────────────────────────────────────────── */
function TeamCard({ member }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-[#0d1535]/80 border border-slate-700/40 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.10)] transition-all duration-300">
      <div className="relative h-52 w-full overflow-hidden flex-shrink-0">
        {member.hasPhoto ? (
          <>
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              style={{ objectFit: "cover", objectPosition: "top center" }}
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1535] via-transparent to-transparent" />
          </>
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${member.accent} opacity-50 flex items-center justify-center`}>
            <svg className="w-16 h-16 text-white/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5 p-5 flex-1">
        <h3 className="text-sm font-bold text-white">{member.name}</h3>
        <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.16em] ${member.titleColor}`}>
          {member.title}
        </p>
        <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{member.bio}</p>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   Shared container
───────────────────────────────────────────── */
function Section({ dark = false, children, className = "", style = {} }) {
  return (
    <div
      className={`w-full py-20 ${className}`}
      style={{
        background: dark
          ? "rgba(5, 8, 20, 0.85)"
          : "rgba(11, 18, 44, 0.75)",
        ...style,
      }}
    >
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   About Page
───────────────────────────────────────────── */
export default function About() {
  return (
    <div
      className="min-h-screen text-slate-100"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(30,64,175,0.55) 0%, rgba(6,22,70,0.35) 40%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(14,116,144,0.25) 0%, transparent 60%), #07091b",
      }}
    >

      {/* ══ SECTION 1 — Hero (gradient) ══════════ */}
      <Section dark={false} className="pt-24 pb-24"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 20% 40%, rgba(14,116,180,0.30) 0%, rgba(10,30,80,0.45) 40%, rgba(5,8,20,0.92) 75%), radial-gradient(ellipse 60% 50% at 70% -10%, rgba(30,64,175,0.35) 0%, transparent 60%), rgba(5,8,20,0.92)",
        }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span>Established 2026</span>
            </div>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              <span className="block text-white">Pioneering</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                Digital Solutions.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm text-slate-300 sm:text-base leading-relaxed">
              ZynraTech is a forward-thinking software startup delivering cutting-edge web and
              mobile applications, POS &amp; ERP systems, creative graphic design, and reliable
              system maintenance — all under one roof.
            </p>

            <div className="mt-8">
              <button className="inline-flex items-center rounded-lg border border-cyan-400/60 px-7 py-2.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-200">
                Explore Our Work
              </button>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 lg:h-[360px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-700/50 shadow-[0_0_60px_rgba(6,182,212,0.10)]">
              <Image
                src="/server-room.jpg"
                alt="ZynraTech workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05081b]/60 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </Section>

      {/* ══ SECTION 2 — Mission & Vision (dark) ═══ */}
      <Section dark={true}>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission */}
          <article className="relative overflow-hidden rounded-2xl bg-[#080f28]/80 p-8 border border-slate-700/40">
            <div className="absolute top-5 right-5 opacity-[0.12] text-7xl select-none pointer-events-none">🚀</div>
            <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              To empower businesses of all sizes with innovative, tailor-made software solutions
              from dynamic web and mobile apps to intelligent POS &amp; ERP systems built to
              accelerate growth and operational efficiency.
            </p>
            <div className="mt-8 flex gap-2 items-center">
              <div className="h-1 w-8 rounded-full bg-cyan-400" />
              <div className="h-1 w-4 rounded-full bg-slate-600" />
            </div>
          </article>

          {/* Vision */}
          <article className="relative overflow-hidden rounded-2xl bg-[#0e1a40]/80 p-8 border border-slate-700/40">
            <div className="absolute bottom-2 right-2 opacity-[0.08] text-[8rem] select-none pointer-events-none leading-none">🌐</div>
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              To become the most trusted technology partner in the region a company where every
              client's digital ambition becomes reality through smart engineering, creative design,
              and lasting technical support.
            </p>
          </article>
        </div>
      </Section>

      {/* ══ SECTION 3 — What We Do (light) ══════════ */}
      <Section dark={false}>
        <div className="mb-14">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-slate-400 mb-3">
            Our Expertise
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            The Zynra <span className="text-cyan-400">Advantage</span>.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 items-start">
          <article className="md:pt-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1535] border border-slate-700/50 text-cyan-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-2">Web &amp; Mobile Applications</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We design and develop fast, scalable web platforms and cross-platform mobile apps
              tailored to your business needs and user expectations.
            </p>
          </article>

          <article>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1535] border border-slate-700/50 text-sky-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-2">POS &amp; ERP Systems</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Custom-built point-of-sale and enterprise resource planning systems that streamline
              operations, inventory, and reporting for businesses of every scale.
            </p>
          </article>

          <article className="md:pt-20">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1535] border border-slate-700/50 text-emerald-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-2">Graphic Design &amp; System Maintenance</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              From striking brand identities and UI assets to ongoing system monitoring and
              maintenance — we keep your digital presence sharp and running smoothly.
            </p>
          </article>
        </div>
      </Section>

      {/* ══ SECTION 4 — Our Journey (dark) ═════════ */}
      <Section dark={true}>
        <div className="text-center mb-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Journey</h2>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-1/2 top-3 bottom-3 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-slate-700 to-sky-400" />

          {/* Milestone 1 */}
          <div className="relative grid grid-cols-2 pb-16">
            <div className="text-right pr-10 pt-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 mb-1">Q1 2026</p>
              <h3 className="text-base font-bold text-white">The Beginning</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                ZynraTech was founded with a bold vision to deliver world-class software solutions
                to businesses across Sri Lanka and beyond.
              </p>
            </div>
            <div className="absolute left-1/2 top-1 -translate-x-1/2 z-10">
              <div className="relative flex h-7 w-7 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-cyan-400/70 bg-[#0b1228]" />
                <div className="absolute inset-[-5px] rounded-full border border-cyan-400/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              </div>
            </div>
            <div />
          </div>

          {/* Milestone 2 */}
          <div className="relative grid grid-cols-2 pb-4">
            <div />
            <div className="absolute left-1/2 top-1 -translate-x-1/2 z-10">
              <div className="relative flex h-7 w-7 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-sky-400/70 bg-[#0b1228]" />
                <div className="absolute inset-[-5px] rounded-full border border-sky-400/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              </div>
            </div>
            <div className="text-left pl-10 pt-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400 mb-1">Q3 2026</p>
              <h3 className="text-base font-bold text-white">First Product Launch</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Successfully delivered our first full-scale web application and POS system,
                establishing ZynraTech as a reliable technology partner.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ══ SECTION 5 — The Collective Mind (light) ══ */}
      <Section dark={false}>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold sm:text-3xl">The Collective Mind</h2>
          <p className="mt-3 text-sm text-slate-400">
            A passionate team of engineers, designers, and innovators building the future of software.
          </p>
        </div>

        {/* Row 1 — 4 members */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.slice(0, 4).map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        {/* Row 2 — 3 members, centered */}
        <div className="flex justify-center mt-6">
          <div className="grid gap-6 sm:grid-cols-3 w-full lg:w-3/4">
            {TEAM.slice(4).map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </Section>

      {/* ══ SECTION 6 — CTA (dark) ══════════════════ */}
      <Section dark={true}>
        <div className="rounded-2xl bg-[#080f28]/60 px-8 py-14 text-center border border-slate-700/40">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to build something great?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 sm:text-base leading-relaxed">
            Whether you need a web app, mobile solution, POS system, or a brand refresh —
            ZynraTech is your end-to-end technology partner.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full bg-emerald-400 px-8 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_40px_rgba(16,185,129,0.4)] transition hover:bg-emerald-300 hover:shadow-[0_12px_40px_rgba(16,185,129,0.6)]">
              Get a Free Consultation
            </button>
            <button className="rounded-full border border-slate-600 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400 hover:bg-slate-800/40">
              View Our Portfolio
            </button>
          </div>
        </div>
      </Section>

    </div>
  );
}
