import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Floating device mockup cluster: laptop + tablet + phone, all showing
 * variations of the same screenshot. Purely presentational.
 */
export function DeviceStack({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="relative aspect-[16/11] w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient blue glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
        <div className="absolute inset-8 rounded-full bg-primary/25 animate-pulse-glow" />
      </div>

      {/* Laptop */}
      <div className="absolute inset-x-[6%] top-0 h-[78%]">
        <div className="h-full rounded-t-[14px] border border-white/10 bg-surface-2 p-[6px] shadow-elevated ring-1 ring-white/5">
          <div className="relative h-full overflow-hidden rounded-[8px] bg-background">
            <img
              src={src}
              alt={alt}
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
        {/* Laptop base */}
        <div className="mx-[-4%] h-[12px] rounded-b-2xl bg-gradient-to-b from-white/15 to-white/5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]" />
      </div>

      {/* Tablet — bottom left */}
      <div className="absolute -bottom-2 left-[2%] w-[26%] rotate-[-8deg]">
        <div className="rounded-[18px] border border-white/10 bg-surface-2 p-[5px] shadow-elevated">
          <div className="aspect-[3/4] overflow-hidden rounded-[13px] bg-background">
            <img
              src={src}
              alt=""
              aria-hidden
              width={600}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Phone — bottom right */}
      <div className="absolute -bottom-4 right-[4%] w-[15%] rotate-[7deg]">
        <div className="rounded-[24px] border border-white/10 bg-surface-2 p-[4px] shadow-elevated">
          <div className="aspect-[9/19] overflow-hidden rounded-[20px] bg-background">
            <img
              src={src}
              alt=""
              aria-hidden
              width={400}
              height={844}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-accent/60" />
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
        {children}
      </span>
    </div>
  );
}
