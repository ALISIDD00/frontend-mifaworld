import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#industries", label: "Industries" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#lab", label: "AI Lab" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-hairline bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative grid size-8 place-items-center">
            <span className="absolute inset-0 rounded-md bg-primary shadow-glow" />
            <span className="relative font-display text-lg font-bold text-primary-foreground">
              M
            </span>
          </span>
          <span className="font-display text-[15px] font-semibold uppercase tracking-[0.15em]">
            Mifa <span className="text-muted-foreground">World</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="group relative hidden overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 md:inline-flex"
          >
            <span className="mr-2 inline-block size-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
            Book Strategy Call
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-white/10 md:hidden"
            aria-label="Menu"
          >
            <span className="flex flex-col gap-1">
              <span className="h-px w-4 bg-foreground" />
              <span className="h-px w-4 bg-foreground" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col p-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-primary px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground"
            >
              Book Strategy Call
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
