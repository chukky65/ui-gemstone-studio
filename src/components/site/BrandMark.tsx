type BrandMarkProps = {
  size?: "sm" | "md";
  className?: string;
};

const SIZE_CLASS: Record<NonNullable<BrandMarkProps["size"]>, string> = {
  sm: "size-8 sm:size-10",
  md: "size-10",
};

export function BrandMark({ size = "md", className = "" }: BrandMarkProps) {
  return (
    <div
      className={`relative isolate ${SIZE_CLASS[size]} shrink-0 rounded-[28%] border border-gold/55 bg-[radial-gradient(circle_at_32%_28%,rgba(255,241,186,0.45),rgba(213,159,56,0.12)_45%,rgba(11,21,20,0.96)_85%)] shadow-[0_12px_32px_-20px_rgba(213,159,56,0.95),inset_0_1px_0_rgba(255,245,214,0.35)] ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-[16%] rounded-[26%] border border-gold/35 rotate-45" />
      <div className="absolute inset-[33%] rounded-full bg-gold shadow-[0_0_18px_-1px_rgba(213,159,56,0.9)]" />
      <div className="absolute top-[20%] right-[18%] size-[12%] rounded-full bg-bone/80" />
    </div>
  );
}
