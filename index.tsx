import { motion } from "motion/react";
import heroOrb from "@/assets/hero-orb.jpg";
import { Nav } from "@/components/mifa/Nav";
import { Portfolio } from "@/components/mifa/Portfolio";
import { SectionLabel } from "@/components/mifa/DeviceMockups";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mifa World — Business Engineering for Founders & Enterprise" },
      {
        name: "description",
        content:
          "Mifa World is a Business Engineering Company. We help founders and enterprises launch, build, automate and scale through AI, software engineering and digital transformation.",
      },
      {
        property: "og:title",
        content: "Mifa World — Business Engineering Company",
      },
      {
        property: "og:description",
        content:
          "We don't build websites. We build businesses. AI, software engineering and growth systems for global operators.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

/* ---------- data ---------- */

const stats = [
  { k: "10+", v: "Countries served" },
  { k: "48", v: "Businesses engineered" },
  { k: "$140M", v: "Client revenue impact" },
  { k: "99.9%", v: "System uptime" },
];

const trusted = [
  "TechOrbit",
  "Apna Camera",
  "Tony & Vintage",
  "Leon & Legacy",
  "The Sales Bank",
  "TechSource Ventures",
  "Driven to Detail",
  "Livin Leathers",
  "Decent Travels",
  "Universal Carfax",
];

const challenges = [
  {
    title: "Growth has plateaued.",
    body: "Marketing spend rises, output flattens. The system, not the effort, is capped.",
  },
  {
    title: "Operations run on people, not process.",
    body: "Every scale-up multiplies headcount and error rate instead of margin.",
  },
  {
    title: "Software feels stitched, not engineered.",
    body: "A dozen tools, no source of truth. Data lives in inboxes and spreadsheets.",
  },
  {
    title: "AI is discussed, not deployed.",
    body: "The advantage sits in slide decks. Competitors are shipping it into production.",
  },
];

const solutions = [
  {
    tag: "01",
    label: "AI Transformation",
    title: "Deploy intelligence into the business, not into the pitch.",
    body: "Custom LLM agents, RAG systems, and predictive models trained on your data — measured on outcomes.",
  },
  {
    tag: "02",
    label: "Software Engineering",
    title: "Own the software your business runs on.",
    body: "Bespoke platforms, ERPs, internal tools and commerce engines — engineered to scale with your revenue.",
  },
  {
    tag: "03",
    label: "Growth Systems",
    title: "Turn brand into pipeline into revenue.",
    body: "Full-stack acquisition: SEO architecture, paid infrastructure, CRO systems and CRM automation.",
  },
  {
    tag: "04",
    label: "Digital Transformation",
    title: "Modernise the stack that carries the P&L.",
    body: "Cloud migration, workflow automation and data unification — retiring legacy the market outgrew.",
  },
];

const industries = [
  "Healthcare",
  "Construction",
  "Manufacturing",
  "Education",
  "FinTech",
  "Hospitality",
  "Real Estate",
  "Government",
  "Retail",
  "Automotive",
  "Legal",
  "Technology",
];

const why = [
  {
    n: "01",
    t: "We engineer outcomes.",
    d: "Every engagement is scoped to a business number — not a deliverable list.",
  },
  {
    n: "02",
    t: "We architect for scale.",
    d: "Systems are designed for the company you're becoming, not the one you were.",
  },
  {
    n: "03",
    t: "We ship in weeks, not quarters.",
    d: "A senior pod, no handoffs, direct access to the engineers building it.",
  },
  {
    n: "04",
    t: "We stay in the loop.",
    d: "Post-launch, we operate the growth system with you — not walk away from it.",
  },
];

const process = [
  {
    n: "01",
    title: "Diagnose",
    body: "A structured audit of business, product and infrastructure. We identify the compounding constraint.",
  },
  {
    n: "02",
    title: "Architect",
    body: "A single blueprint spanning stack, data model, automation, and the growth loop it will feed.",
  },
  {
    n: "03",
    title: "Engineer",
    body: "Senior pods ship in tight iterations. Weekly demos, live staging, no black boxes.",
  },
  {
    n: "04",
    title: "Operate",
    body: "We instrument, monitor and optimise the system alongside your team, month over month.",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Supabase",
  "OpenAI",
  "Anthropic",
  "LangChain",
  "AWS",
  "Cloudflare",
  "Vercel",
  "Stripe",
  "HubSpot",
  "Segment",
  "Shopify",
  "Sanity",
];

const testimonials = [
  {
    q: "Mifa didn't sell us a website. They rebuilt the way our business ships to customers.",
    a: "CEO",
    c: "TechOrbit",
  },
  {
    q: "They embed like an engineering team, not a vendor. That's the difference we needed at this stage.",
    a: "Founder",
    c: "TechSource Ventures",
  },
  {
    q: "We doubled our qualified pipeline in a quarter — same team, better system.",
    a: "Managing Partner",
    c: "The Sales Bank",
  },
];

const faqs = [
  {
    q: "Are you an agency?",
    a: "No. We're a business engineering company. Agencies scope deliverables; we scope outcomes and engineer the systems that produce them.",
  },
  {
    q: "What size of company do you work with?",
    a: "Ambitious startups through global enterprises. What matters is intent — clients who treat the engagement as a partnership, not a purchase.",
  },
  {
    q: "How fast can we start?",
    a: "A discovery sprint typically starts within 7–14 days of the strategy call, followed by a shipping engagement inside 3 weeks.",
  },
  {
    q: "Do you work internationally?",
    a: "Yes. We operate across the US, UK, UAE, KSA, Qatar, Canada, EU, Australia and Singapore. Delivery is remote-first, senior throughout.",
  },
  {
    q: "How is pricing structured?",
    a: "Fixed-fee engagements with clear milestones, or an outcome-linked retainer for ongoing growth operations. Never billed by the hour.",
  },
];

const insights = [
  {
    tag: "AI Strategy",
    title: "Why most AI initiatives never make it into production.",
    read: "8 min",
  },
  {
    tag: "Growth",
    title: "The compounding constraint: finding what's actually capping revenue.",
    read: "6 min",
  },
  {
    tag: "Engineering",
    title: "Building software that scales with the P&L, not against it.",
    read: "10 min",
  },
];

/* ---------- section wrapper ---------- */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- page ---------- */

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-40 md:pt-52">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px] animate-pulse-glow" />
        </div>

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 pb-32 md:px-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>Business Engineering · Est. 2019</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-8 font-display text-[44px] leading-[0.95] tracking-tight md:text-[88px] lg:text-[104px]">
                We don't build{" "}
                <span className="text-muted-foreground">websites.</span>
                <br />
                We engineer{" "}
                <span className="text-gradient-brand">businesses.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                A business engineering company for founders, operators and
                enterprise leaders — combining AI, software engineering and
                growth strategy into systems that compound.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#book"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-glow-lg"
                >
                  Book strategy call
                  <span className="grid size-6 place-items-center rounded-full bg-primary-foreground/15 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-glass px-7 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground backdrop-blur transition-all hover:border-white/25"
                >
                  See the work
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-hairline pt-8">
                <div>
                  <div className="font-display text-2xl">10+</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Countries
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl">48</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Engagements
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl">$140M</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Client impact
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-full bg-primary/25 blur-3xl animate-pulse-glow" />
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-glass shadow-elevated">
                  <img
                    src={heroOrb}
                    alt=""
                    width={1600}
                    height={1200}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-background/80 p-4 backdrop-blur-xl">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                    ● Now shipping
                  </div>
                  <div className="mt-1 font-display text-sm">
                    AI ops for a global retailer
                  </div>
                </div>
                <div className="absolute -right-4 -top-4 rounded-2xl border border-white/10 bg-background/80 p-4 backdrop-blur-xl">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Uptime
                  </div>
                  <div className="mt-1 font-display text-lg">99.98%</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TRUSTED ============ */}
      <section className="border-y border-hairline bg-surface/40 py-10">
        <div className="mx-auto flex max-w-[1400px] items-center gap-10 overflow-hidden px-6 md:px-10">
          <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:inline">
            Trusted by operators globally
          </span>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <div className="flex w-max gap-14 animate-marquee">
              {[...trusted, ...trusted].map((n, i) => (
                <span
                  key={i}
                  className="font-display text-xl font-medium uppercase tracking-[0.15em] text-muted-foreground/80"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <SectionLabel>Global Footprint</SectionLabel>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="bg-background p-8 md:p-10"
              >
                <div className="font-display text-4xl tracking-tight md:text-6xl">
                  {s.k}
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.v}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHALLENGES ============ */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel>The Constraint</SectionLabel>
                <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                  Growth is a systems problem.
                </h2>
                <p className="mt-6 max-w-md text-muted-foreground">
                  Every serious business hits the same four ceilings.
                  We rebuild the system underneath so growth compounds again.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="divide-y divide-hairline border-y border-hairline">
                {challenges.map((c, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="group grid grid-cols-[auto_1fr] items-start gap-6 py-6 transition-colors hover:bg-white/[0.02] md:grid-cols-[auto_1fr_auto] md:py-8">
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent md:pt-1">
                        0{i + 1}
                      </div>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl">
                          {c.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground">{c.body}</p>
                      </div>
                      <div className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 md:block">
                        Solved →
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUTIONS ============ */}
      <section
        id="solutions"
        className="relative border-t border-hairline bg-surface/30 py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <SectionLabel>What we engineer</SectionLabel>
              <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Four disciplines. One <span className="text-gradient-brand">operating system</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s.tag} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-hairline bg-background p-8 transition-all hover:border-primary/30 md:p-10">
                  <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {s.tag} · {s.label}
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-white/10 font-mono text-xs transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl leading-tight tracking-tight md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section id="industries" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel>Industries served</SectionLabel>
                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                  Sectors we've engineered inside of.
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                From regulated environments to velocity-first markets — the
                pattern is the same: identify the constraint, engineer the system, compound the outcome.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 flex flex-wrap gap-3">
            {industries.map((i, idx) => (
              <Reveal key={i} delay={idx * 0.03}>
                <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-glass px-5 py-3 font-display text-sm">
                  <span className="size-1 rounded-full bg-accent" />
                  {i}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="relative overflow-hidden border-y border-hairline bg-surface/30 py-24 md:py-32">
        <div className="pointer-events-none absolute -left-40 top-1/2 -z-10 size-[600px] -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel>Why Mifa World</SectionLabel>
                <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                  We build with partners, not for clients.
                </h2>
                <p className="mt-6 max-w-md text-muted-foreground">
                  Every engagement is engineered to a business outcome —
                  and we stay in the loop long after launch.
                </p>
              </Reveal>
            </div>
            <div className="grid gap-4 lg:col-span-7">
              {why.map((w, i) => (
                <Reveal key={w.n} delay={i * 0.08}>
                  <div className="flex items-start gap-6 rounded-2xl border border-hairline bg-background/60 p-6 backdrop-blur md:p-8">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {w.n}
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl">
                        {w.t}
                      </h3>
                      <p className="mt-2 text-muted-foreground">{w.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO ============ */}
      <Portfolio />

      {/* ============ PROCESS ============ */}
      <section
        id="process"
        className="relative border-t border-hairline py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <SectionLabel>Engineering Process</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              A four-phase system, run by seniors.
            </h2>
          </Reveal>

          <div className="relative mt-20">
            <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
              {process.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.1}>
                  <div>
                    <div className="relative grid size-16 place-items-center rounded-full border border-white/10 bg-background font-display text-lg">
                      {p.n}
                      <span className="absolute inset-0 rounded-full bg-primary/10 blur-md" />
                    </div>
                    <h3 className="mt-8 font-display text-2xl">{p.title}</h3>
                    <p className="mt-3 text-muted-foreground">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ AI LAB ============ */}
      <section
        id="lab"
        className="relative overflow-hidden border-y border-hairline bg-surface/40 py-24 md:py-32"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionLabel>Mifa AI Lab</SectionLabel>
                <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                  Applied AI, engineered into your P&L.
                </h2>
                <p className="mt-6 max-w-lg text-muted-foreground">
                  Our lab prototypes AI agents, RAG systems and automation
                  fabrics — then hardens the ones that move a business metric
                  into production. No theatre, no dashboards for the sake of it.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-display text-3xl">14</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Agents shipped
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-3xl">3.4x</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Avg. ops efficiency
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="size-[85%] animate-spin-slow rounded-full border border-dashed border-white/10" />
                  </div>
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="size-[60%] rotate-45 animate-spin-slow rounded-full border border-dashed border-primary/25" />
                  </div>
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="relative grid size-[40%] place-items-center rounded-full border border-white/10 bg-background shadow-glow-lg">
                      <div className="text-center">
                        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                          Mifa · Core
                        </div>
                        <div className="mt-2 font-display text-xl">
                          Agent OS
                        </div>
                      </div>
                    </div>
                  </div>
                  {["LLM", "RAG", "Ops", "Voice", "Vision"].map((n, i) => {
                    const angle = (i / 5) * Math.PI * 2;
                    const r = 44;
                    const x = 50 + Math.cos(angle) * r;
                    const y = 50 + Math.sin(angle) * r;
                    return (
                      <div
                        key={n}
                        style={{ left: `${x}%`, top: `${y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-background/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] backdrop-blur"
                      >
                        {n}
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TECH ECOSYSTEM ============ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <SectionLabel>Technology ecosystem</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
              The stack behind the outcomes.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-6">
              {stack.map((s) => (
                <div
                  key={s}
                  className="flex items-center justify-center bg-background px-4 py-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {s}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="border-y border-hairline bg-surface/30 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <SectionLabel>Partner voice</SectionLabel>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-hairline bg-background/60 p-8 backdrop-blur md:p-10">
                  <blockquote className="font-display text-xl leading-snug md:text-2xl">
                    &ldquo;{t.q}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 border-t border-hairline pt-6">
                    <div className="font-display">{t.a}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {t.c}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AUDIT CTA ============ */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-1/2 mx-auto h-[500px] w-[900px] -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-hairline bg-gradient-to-br from-surface via-background to-surface p-10 md:p-16">
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
                <div className="md:col-span-8">
                  <SectionLabel>Complimentary</SectionLabel>
                  <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                    Get a free business audit.
                  </h2>
                  <p className="mt-6 max-w-xl text-muted-foreground">
                    A 45-minute session with a senior partner. We map the
                    constraint, sketch the architecture, and leave you with a
                    written diagnosis — whether we work together or not.
                  </p>
                </div>
                <div className="md:col-span-4">
                  <a
                    href="#book"
                    className="group flex w-full items-center justify-between rounded-full bg-primary px-6 py-5 font-mono text-[11px] uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-glow-lg"
                  >
                    Request audit
                    <span className="grid size-8 place-items-center rounded-full bg-primary-foreground/15 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="border-t border-hairline py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Questions we hear from operators.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-hairline border-y border-hairline">
              {faqs.map((f, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <details className="group py-6 md:py-8">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <h3 className="font-display text-xl md:text-2xl">
                        {f.q}
                      </h3>
                      <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-white/10 font-mono text-sm transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl text-muted-foreground">
                      {f.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ INSIGHTS ============ */}
      <section className="border-t border-hairline bg-surface/30 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionLabel>Insights</SectionLabel>
              <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Field notes from engineering businesses.
              </h2>
            </Reveal>
            <a
              href="#"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
            >
              All essays →
            </a>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {insights.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.08}>
                <a
                  href="#"
                  className="group block h-full rounded-2xl border border-hairline bg-background p-8 transition-all hover:border-primary/30"
                >
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                    <span>{post.tag}</span>
                    <span className="size-1 rounded-full bg-accent/50" />
                    <span className="text-muted-foreground">{post.read} read</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl leading-tight">
                    {post.title}
                  </h3>
                  <div className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors group-hover:text-foreground">
                    Read essay
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BOOK CALL ============ */}
      <section
        id="book"
        className="relative overflow-hidden border-t border-hairline py-32 md:py-40"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[600px] w-[900px] -translate-y-1/2 rounded-full bg-primary/25 blur-[160px] animate-pulse-glow" />
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <Reveal>
            <SectionLabel>Book a strategy call</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-display text-5xl leading-[0.95] tracking-tight md:text-[110px]">
              Let's engineer<br />
              <span className="text-gradient-brand">what's next.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
              45 minutes. Senior partner. Written diagnosis. No pitch deck.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:contact@mifaworld.com"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-glow-lg"
              >
                contact@mifaworld.com
                <span className="grid size-6 place-items-center rounded-full bg-primary-foreground/15 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="https://wa.me/971566119314"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-glass px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground backdrop-blur hover:border-white/25"
              >
                WhatsApp · +971 56 611 9314
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-hairline bg-background pb-10 pt-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
            <div className="col-span-2 md:col-span-5">
              <a href="#top" className="inline-flex items-center gap-2.5">
                <span className="relative grid size-8 place-items-center">
                  <span className="absolute inset-0 rounded-md bg-primary shadow-glow" />
                  <span className="relative font-display text-lg font-bold text-primary-foreground">
                    M
                  </span>
                </span>
                <span className="font-display text-[15px] font-semibold uppercase tracking-[0.15em]">
                  Mifa World
                </span>
              </a>
              <p className="mt-6 max-w-sm text-muted-foreground">
                A business engineering company for founders, operators and
                enterprise leaders. Build. Automate. Scale.
              </p>
              <div className="mt-8 flex gap-3">
                {["LinkedIn", "X", "Behance", "Dribbble"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="rounded-full border border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] hover:border-white/25"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Company
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                <li><a href="#solutions" className="hover:text-foreground">Solutions</a></li>
                <li><a href="#portfolio" className="hover:text-foreground">Portfolio</a></li>
                <li><a href="#lab" className="hover:text-foreground">AI Lab</a></li>
                <li><a href="#process" className="hover:text-foreground">Process</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Contact
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a href="mailto:contact@mifaworld.com" className="hover:text-foreground">
                    contact@mifaworld.com
                  </a>
                </li>
                <li>
                  <a href="mailto:info@mifaworld.com" className="hover:text-foreground">
                    info@mifaworld.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/971566119314" className="hover:text-foreground">
                    UAE · +971 56 611 9314
                  </a>
                </li>
                <li className="text-muted-foreground">USA · +1 233 000 0000</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
            <div>© {new Date().getFullYear()} Mifa World. Engineered for scale.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
