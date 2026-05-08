import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  breadcrumb?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
  imageSrc,
  imageAlt,
  imagePosition = "50% 50%",
}: Props) {
  const hasImage = Boolean(imageSrc);

  return (
    <section
      className={`relative overflow-hidden border-b border-[#ddcfb0] ${
        hasImage ? "bg-[#10243d]" : "bg-gradient-to-br from-[#fffefb] via-[#fef8ea] to-[#eef5ff]"
      }`}
    >
      {hasImage ? (
        <>
          <img
            src={imageSrc}
            alt={imageAlt ?? ""}
            style={{ objectPosition: imagePosition }}
            className="absolute inset-0 w-full h-full object-cover wappa-page-hero-image"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1f35]/88 via-[#10243d]/72 to-[#10243d]/54 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_46%_at_12%_18%,rgba(255,255,255,0.28),transparent_66%),radial-gradient(ellipse_52%_44%_at_84%_20%,rgba(246,203,121,0.3),transparent_70%),radial-gradient(ellipse_68%_54%_at_72%_88%,rgba(98,149,195,0.24),transparent_72%)] pointer-events-none" />
          <div className="absolute inset-0 wappa-hero-light-aurora opacity-55 pointer-events-none" />
          <div className="absolute inset-0 wappa-hero-light-shimmer opacity-75 pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 gdsp-light-grain opacity-35 pointer-events-none" />
          <div className="absolute inset-0 wappa-page-hero-aura pointer-events-none" />
        </>
      )}

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 pb-16 sm:pb-24">
        {breadcrumb && (
          <div
            className={`mb-6 sm:mb-8 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.3em] flex flex-wrap gap-y-2 ${
              hasImage ? "text-white/70" : "text-[#284565]/55"
            }`}
          >
            <Link to="/" className={hasImage ? "hover:text-[#f2cb79]" : "hover:text-[#8b6c2d]"}>
              Home
            </Link>
            <span className={`mx-2 sm:mx-3 ${hasImage ? "text-[#f2cb79]" : "text-[#8b6c2d]"}`}>
              /
            </span>
            <span className={hasImage ? "text-white/85" : "text-[#284565]/75"}>{breadcrumb}</span>
          </div>
        )}

        <div
          className={`flex items-center gap-3 mb-6 sm:mb-8 ${hasImage ? "text-[#f2cb79]" : "text-[#8b6c2d]"}`}
        >
          <div className={`w-8 sm:w-10 h-px ${hasImage ? "bg-[#f2cb79]" : "bg-[#8b6c2d]"}`} />
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] sm:tracking-[0.4em]">
            {eyebrow}
          </span>
        </div>

        <h1
          className={`gdsp-rise font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight max-w-5xl ${
            hasImage ? "text-white drop-shadow-[0_3px_22px_rgba(0,0,0,0.45)]" : "text-[#10243d]"
          }`}
        >
          {title}
        </h1>

        {intro && (
          <p
            className={`mt-8 sm:mt-10 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed ${
              hasImage ? "text-white/92" : "text-[#284565]/80"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
