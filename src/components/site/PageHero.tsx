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
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 pb-16 sm:pb-24">
        {breadcrumb && (
          <div className="mb-6 sm:mb-8 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.3em] text-bone/40 flex flex-wrap gap-y-2">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <span className="mx-2 sm:mx-3 text-gold">›</span>
            <span className="text-bone/70">{breadcrumb}</span>
          </div>
        )}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 text-gold">
          <div className="w-8 sm:w-10 h-px bg-gold" />
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] sm:tracking-[0.4em]">
            {eyebrow}
          </span>
        </div>
        <h1 className="gdsp-rise font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight max-w-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-bone/70 max-w-3xl leading-relaxed">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
