import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  breadcrumb?: string;
};

export function PageHero({ eyebrow, title, intro, breadcrumb }: Props) {
  return (
    <section className="relative border-b border-line overflow-hidden">
      <div className="absolute inset-0 gdsp-grain pointer-events-none" />
      <div className="absolute inset-0 gdsp-spot pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-24">
        {breadcrumb && (
          <div className="mb-8 text-[10px] font-mono uppercase tracking-[0.3em] text-bone/40">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <span className="mx-3 text-gold">›</span>
            <span className="text-bone/70">{breadcrumb}</span>
          </div>
        )}
        <div className="flex items-center gap-3 mb-8 text-gold">
          <div className="w-10 h-px bg-gold" />
          <span className="text-[11px] font-mono uppercase tracking-[0.4em]">{eyebrow}</span>
        </div>
        <h1 className="gdsp-rise font-display text-6xl md:text-8xl leading-[0.9] tracking-tight max-w-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-10 text-lg md:text-xl text-bone/70 max-w-3xl leading-relaxed">{intro}</p>
        )}
      </div>
    </section>
  );
}
