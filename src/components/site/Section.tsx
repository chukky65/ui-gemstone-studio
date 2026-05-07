import { createContext, useContext, type ReactNode } from "react";

// WAPPA section system with bright alternating surfaces.

export type Tone = "dark" | "light";

const ToneCtx = createContext<Tone>("dark");
export const useSectionTone = () => useContext(ToneCtx);

type Counter = { i: number; start: Tone };
const FlowCtx = createContext<Counter | null>(null);

interface FlowProps {
  children: ReactNode;
  start?: Tone;
}

export function SectionFlow({ children, start = "dark" }: FlowProps) {
  const counter: Counter = { i: 0, start };
  return <FlowCtx.Provider value={counter}>{children}</FlowCtx.Provider>;
}

interface SectionProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  bare?: boolean;
  padding?: "default" | "tight" | "none";
  atmosphere?: "none" | "spot" | "grid";
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
    const idx = flow.i++;
    resolved = idx % 2 === 0 ? flow.start : flow.start === "dark" ? "light" : "dark";
  }

  const surface =
    resolved === "light"
      ? "wappa-band-ivory border-y border-[#e4d6bc]"
      : "wappa-band-mist border-y border-[#d5e1ef]";

  const atmoClass =
    atmosphere === "none"
      ? ""
      : resolved === "light"
        ? atmosphere === "grid"
          ? "gdsp-light-grid opacity-50"
          : "gdsp-light-spot"
        : atmosphere === "grid"
          ? "wappa-mist-grid opacity-55"
          : "wappa-mist-spot";

  return (
    <ToneCtx.Provider value={resolved}>
      <section className={`relative overflow-hidden ${surface} ${className}`}>
        {atmosphere !== "none" && (
          <div className={`absolute inset-0 pointer-events-none ${atmoClass}`} />
        )}
        {resolved === "light" && atmosphere === "none" && (
          <div className="absolute inset-0 gdsp-light-grain opacity-45 pointer-events-none" />
        )}
        {resolved === "dark" && atmosphere === "none" && (
          <div className="absolute inset-0 gdsp-light-grid opacity-35 pointer-events-none" />
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

export function useToneTokens() {
  const tone = useSectionTone();
  const dark = tone === "dark";

  return {
    tone,
    text: "text-[#10243d]",
    textMuted: dark ? "text-[#274565]/82" : "text-[#284565]/78",
    textFaint: dark ? "text-[#274565]/58" : "text-[#284565]/55",
    accent: dark ? "text-[#2f5f8a]" : "text-[#8b6c2d]",
    accentBorder: dark ? "border-[#2f5f8a]/45" : "border-[#8b6c2d]/45",
    border: dark ? "border-[#c8d8ea]" : "border-[#ddcfb0]",
    divider: dark ? "bg-[#d6e2ef]" : "bg-[#e4d8c2]",
    cardBg: dark ? "bg-white/82" : "bg-white/86",
    cardBgHover: "hover:bg-white",
    softCardBg: dark ? "bg-white/74" : "bg-white/76",
    btnPrimary: dark
      ? "bg-[#2f5378] text-white hover:bg-[#24415f]"
      : "bg-[#8b6c2d] text-white hover:bg-[#755a22]",
    btnGhost: dark
      ? "border border-[#2f5f8a]/45 text-[#2f5f8a] hover:border-[#24415f] hover:text-[#24415f]"
      : "border border-[#8b6c2d]/45 text-[#7b6232] hover:border-[#755a22] hover:text-[#755a22]",
  } as const;
}

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
