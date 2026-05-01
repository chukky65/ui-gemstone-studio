import { createContext, useContext, type ReactNode } from "react";

/**
 * GDSP Section system — auto-alternating dark/light surfaces.
 *
 * Wrap a page's content in <SectionFlow> and use <Section> for each band.
 * Surfaces alternate dark → light → dark automatically. You can pin a band
 * with `tone="dark"` or `tone="light"` to override the alternation.
 *
 * The current tone is exposed via useSectionTone() so children can pick the
 * correct token classes (e.g. text-bone vs text-night).
 */

export type Tone = "dark" | "light";

const ToneCtx = createContext<Tone>("dark");
export const useSectionTone = () => useContext(ToneCtx);

// Mutable counter shared by a single SectionFlow render pass.
type Counter = { i: number; start: Tone };
const FlowCtx = createContext<Counter | null>(null);

interface FlowProps {
  children: ReactNode;
  /** Tone of the FIRST <Section>. Defaults to "dark". */
  start?: Tone;
}

/** Wraps a page so child <Section>s automatically alternate. */
export function SectionFlow({ children, start = "dark" }: FlowProps) {
  // New counter object per render — order of children determines tone.
  const counter: Counter = { i: 0, start };
  return <FlowCtx.Provider value={counter}>{children}</FlowCtx.Provider>;
}

interface SectionProps {
  children: ReactNode;
  /** Force a tone instead of using the alternation. */
  tone?: Tone;
  /** Extra classes on the outer <section>. */
  className?: string;
  /** Skip the inner max-width container (use when you need full-bleed grids). */
  bare?: boolean;
  /** Padding preset for the inner container. */
  padding?: "default" | "tight" | "none";
  /** Decorative atmospheric layer behind content. */
  atmosphere?: "none" | "spot" | "grid";
  /** Render without alternation tracking (e.g. hero, ticker). */
  unmanaged?: boolean;
}

const padMap = {
  default: "px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32",
  tight: "px-4 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-24",
  none: "",
} as const;

export function Section({
  children,
  tone,
  className = "",
  bare = false,
  padding = "default",
  atmosphere = "none",
  unmanaged = false,
}: SectionProps) {
  const flow = useContext(FlowCtx);
  let resolved: Tone = tone ?? "dark";
  if (!tone && !unmanaged && flow) {
    // Alternate based on order of appearance.
    const idx = flow.i++;
    resolved = idx % 2 === 0 ? flow.start : flow.start === "dark" ? "light" : "dark";
  }

  const surface =
    resolved === "light"
      ? "gdsp-light border-y border-night/10"
      : "bg-night text-bone border-y border-line";

  const atmoClass =
    atmosphere === "none"
      ? ""
      : resolved === "light"
        ? atmosphere === "grid"
          ? "gdsp-light-grid opacity-50"
          : "gdsp-light-spot"
        : atmosphere === "grid"
          ? "gdsp-grid opacity-50"
          : "gdsp-spot";

  return (
    <ToneCtx.Provider value={resolved}>
      <section className={`relative overflow-hidden ${surface} ${className}`}>
        {atmosphere !== "none" && (
          <div className={`absolute inset-0 pointer-events-none ${atmoClass}`} />
        )}
        {resolved === "light" && atmosphere === "none" && (
          <div className="absolute inset-0 gdsp-light-grain opacity-50 pointer-events-none" />
        )}
        {bare ? (
          <div className="relative">{children}</div>
        ) : (
          <div className={`relative max-w-[1400px] mx-auto ${padMap[padding]}`}>{children}</div>
        )}
      </section>
    </ToneCtx.Provider>
  );
}

/* ─────────────────────────────────────────────────────────────
   Tone-aware token helpers — keep all components consistent.
   Use these inside a Section so colors flip with the surface.
   ───────────────────────────────────────────────────────────── */

export function useToneTokens() {
  const tone = useSectionTone();
  const dark = tone === "dark";
  return {
    tone,
    text: dark ? "text-bone" : "text-night",
    textMuted: dark ? "text-bone/70" : "text-night/70",
    textFaint: dark ? "text-bone/50" : "text-night/55",
    accent: dark ? "text-gold" : "text-clay",
    accentBorder: dark ? "border-gold" : "border-clay",
    border: dark ? "border-line" : "border-night/15",
    divider: dark ? "bg-line" : "bg-night/15",
    cardBg: dark ? "bg-night" : "bg-bone",
    cardBgHover: dark ? "hover:bg-deep" : "hover:bg-white",
    softCardBg: dark ? "bg-deep/40" : "bg-white/70",
    btnPrimary: dark ? "bg-gold text-night hover:bg-bone" : "bg-night text-bone hover:bg-clay",
    btnGhost: dark
      ? "border border-bone/20 text-bone hover:border-gold hover:text-gold"
      : "border border-night/30 text-night hover:border-clay hover:text-clay",
  } as const;
}

/** Eyebrow + title block reused at the top of most sections. */
interface SectionHeadingProps {
  eyebrow?: string;
  children: ReactNode;
  size?: "md" | "lg" | "xl";
  className?: string;
}
export function SectionHeading({
  eyebrow,
  children,
  size = "lg",
  className = "",
}: SectionHeadingProps) {
  const t = useToneTokens();
  const sizeClass =
    size === "xl"
      ? "text-4xl sm:text-5xl md:text-7xl"
      : size === "md"
        ? "text-3xl sm:text-4xl md:text-5xl"
        : "text-4xl sm:text-5xl md:text-6xl";
  return (
    <div className={className}>
      {eyebrow && (
        <div
          className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.3em] ${t.accent} mb-4 sm:mb-6`}
        >
          {eyebrow}
        </div>
      )}
      <h2 className={`font-display ${sizeClass} leading-[0.95] ${t.text}`}>{children}</h2>
    </div>
  );
}
