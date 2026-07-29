import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DeviceStack } from "./DeviceMockups";

import techorbit from "@/assets/portfolio/techorbit.jpg";
import apnacamera from "@/assets/portfolio/apnacamera.jpg";
import tonyvintage from "@/assets/portfolio/tonyvintage.jpg";
import leonlegacy from "@/assets/portfolio/leonlegacy.jpg";
import salesbank from "@/assets/portfolio/salesbank.jpg";
import techsource from "@/assets/portfolio/techsource.jpg";
import driventodetail from "@/assets/portfolio/driventodetail.jpg";
import livinleathers from "@/assets/portfolio/livinleathers.jpg";
import decenttravels from "@/assets/portfolio/decenttravels.jpg";
import carfax from "@/assets/portfolio/carfax.jpg";

export type Project = {
  slug: string;
  name: string;
  url: string;
  industry: string;
  country: string;
  stack: string[];
  goal: string;
  description: string;
  image: string;
  category:
    | "Ecommerce"
    | "Corporate"
    | "Automotive"
    | "Fashion"
    | "Travel"
    | "Technology"
    | "Real Estate";
};

export const projects: Project[] = [
  {
    slug: "techorbit",
    name: "TechOrbit",
    url: "https://techorbit.pk/",
    industry: "Consumer Electronics",
    country: "Pakistan",
    stack: ["Next.js", "Node", "Stripe", "AWS"],
    goal: "Scale a national tech retail brand into a category leader.",
    description:
      "A high-conversion commerce architecture engineered for velocity — SKU catalogue automation, headless storefront, and real-time inventory across warehouses.",
    image: techorbit,
    category: "Ecommerce",
  },
  {
    slug: "apnacamera",
    name: "Apna Camera",
    url: "https://apnacamera.pk",
    industry: "Photography Retail",
    country: "Pakistan",
    stack: ["Shopify Plus", "Klaviyo", "Meta CAPI"],
    goal: "Turn niche gear expertise into a national commerce engine.",
    description:
      "Editorial commerce for professional photography — buyer-guide journeys, wishlist automation, and rental logistics stitched into one funnel.",
    image: apnacamera,
    category: "Ecommerce",
  },
  {
    slug: "tonyvintage",
    name: "Tony & Vintage",
    url: "https://tonyandvintage.com/",
    industry: "Luxury Fashion",
    country: "United States",
    stack: ["Next.js", "Sanity", "Shopify"],
    goal: "Position a vintage house as a modern luxury destination.",
    description:
      "Editorial-grade fashion experience with campaign storytelling, look-book navigation, and a global checkout tuned for high AOV.",
    image: tonyvintage,
    category: "Fashion",
  },
  {
    slug: "leonlegacy",
    name: "Leon & Legacy",
    url: "https://leonandlegacy.com/",
    industry: "Home & Lifestyle",
    country: "United Kingdom",
    stack: ["Next.js", "Shopify Hydrogen", "Contentful"],
    goal: "Launch a premium lifestyle label into a global market.",
    description:
      "Minimal, cinematic commerce built to breathe — quiet luxury design system, editorial CMS, and international VAT-aware checkout.",
    image: leonlegacy,
    category: "Fashion",
  },
  {
    slug: "salesbank",
    name: "The Sales Bank",
    url: "https://tsbthesalesbank.com/",
    industry: "B2B Consulting",
    country: "United Kingdom",
    stack: ["Next.js", "HubSpot", "Segment"],
    goal: "Convert enterprise attention into qualified pipeline.",
    description:
      "A conversion-first corporate site engineered as a sales instrument — dynamic case studies, tracked CTAs, and CRM-native lead routing.",
    image: salesbank,
    category: "Corporate",
  },
  {
    slug: "techsource",
    name: "TechSource Ventures",
    url: "https://techsourceventuresllc.com/",
    industry: "Venture Capital",
    country: "United States",
    stack: ["Next.js", "Sanity", "Vercel"],
    goal: "Communicate portfolio-level authority to founders and LPs.",
    description:
      "A refined venture platform: portfolio surfacing, thesis storytelling, and investor communications with editorial rigor.",
    image: techsource,
    category: "Corporate",
  },
  {
    slug: "driventodetail",
    name: "Driven to Detail",
    url: "https://driventodetail.online/",
    industry: "Automotive Detailing",
    country: "United States",
    stack: ["Next.js", "Stripe", "Twilio"],
    goal: "Turn a specialty service into a bookable premium brand.",
    description:
      "Dramatic automotive brand experience with online booking, dynamic pricing, and studio-grade cinematography throughout the funnel.",
    image: driventodetail,
    category: "Automotive",
  },
  {
    slug: "livinleathers",
    name: "Livin Leathers",
    url: "https://livinleathers.com/",
    industry: "Luxury Leather",
    country: "United Arab Emirates",
    stack: ["Shopify Plus", "Klaviyo", "Yotpo"],
    goal: "Scale a heritage craft label across global markets.",
    description:
      "Craft-forward commerce with material storytelling, model & bag editorial, and a subscription loop for repeat luxury customers.",
    image: livinleathers,
    category: "Fashion",
  },
  {
    slug: "decenttravels",
    name: "Decent Travels",
    url: "https://decenttravels.com/",
    industry: "Travel & Tourism",
    country: "United Arab Emirates",
    stack: ["Next.js", "Amadeus API", "Contentful"],
    goal: "Compress travel inspiration into instant bookings.",
    description:
      "A modern travel platform with destination editorial, live rate integrations, and a booking engine tuned for GCC buyer behaviour.",
    image: decenttravels,
    category: "Travel",
  },
  {
    slug: "carfax",
    name: "Universal Carfax",
    url: "https://universalcarfax.com/",
    industry: "Automotive Data",
    country: "United States",
    stack: ["Next.js", "Postgres", "Stripe"],
    goal: "Own the vehicle-history search moment at a global scale.",
    description:
      "A trust-first data product: VIN lookup, monetised reports, and an SEO architecture built to compound organic traffic.",
    image: carfax,
    category: "Automotive",
  },
];

const filters = [
  "All",
  "Ecommerce",
  "Corporate",
  "Automotive",
  "Fashion",
  "Travel",
] as const;

export function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      className="relative border-t border-hairline bg-background py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-accent/60" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                Selected Work / Featured Portfolio
              </span>
            </div>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Engineered outcomes,<br />
              <span className="text-muted-foreground">not just deliverables.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] transition-all ${
                  active === f
                    ? "border-primary bg-primary/15 text-foreground"
                    : "border-white/10 text-muted-foreground hover:border-white/25 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <DeviceStack src={p.image} alt={`${p.name} website preview`} />
                </div>
                <div
                  className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    <span className="text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>/</span>
                    <span>{p.category}</span>
                    <span>·</span>
                    <span>{p.country}</span>
                  </div>
                  <h3 className="font-display text-3xl leading-tight md:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-hairline pt-6 text-sm">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        Industry
                      </dt>
                      <dd className="mt-1">{p.industry}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        Objective
                      </dt>
                      <dd className="mt-1">{p.goal}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        Stack
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-white/10 bg-glass px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                          >
                            {s}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-glow"
                    >
                      Live Website
                      <span className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                    <button className="rounded-full border border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground transition-all hover:border-white/30">
                      Case Study
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
