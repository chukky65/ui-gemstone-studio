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
      className={`relative isolate ${SIZE_CLASS[size]} shrink-0 rounded-[28%] border border-[#caa36a]/70 bg-[radial-gradient(circle_at_34%_26%,rgba(255,255,255,0.95),rgba(244,225,176,0.72)_34%,rgba(160,197,233,0.38)_68%,rgba(42,80,118,0.28)_100%)] shadow-[0_14px_34px_-22px_rgba(42,80,118,0.85),inset_0_1px_0_rgba(255,255,255,0.8)] ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-[16%] rounded-[26%] border border-[#8c6e32]/45 rotate-45" />
      <div className="absolute inset-[33%] rounded-full bg-[#8b6c2d] shadow-[0_0_18px_-1px_rgba(139,108,45,0.85)]" />
      <div className="absolute top-[19%] right-[17%] size-[12%] rounded-full bg-white/90" />
    </div>
  );
}
