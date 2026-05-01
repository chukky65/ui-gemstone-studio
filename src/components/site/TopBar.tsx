export function TopBar() {
  return (
    <div className="relative border-b border-line px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-start sm:items-center text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.24em] text-bone/60">
      <div className="flex flex-wrap gap-x-6 gap-y-1 justify-start">
        <span>F507/2 Nmetsobu Street · Sekondi-Takoradi</span>
        <span className="hidden sm:inline">info@gdspghana.org</span>
        <span className="hidden lg:inline">+233 (0) 561 195 994</span>
      </div>
      <div className="flex items-center gap-2 text-gold">
        <span className="size-1 rounded-full bg-gold animate-pulse" />
        MoU Signed · US$973.6M
      </div>
    </div>
  );
}
