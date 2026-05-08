export function TopBar() {
  return (
    <div className="relative border-b border-[#ddcfb0] bg-gradient-to-r from-[#fffefb] via-[#fdf7ea] to-[#edf5ff] px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-start sm:items-center text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.24em] text-[#284565]/75">
      <div className="flex flex-wrap gap-x-6 gap-y-1 justify-start">
        <span>No. 12 Independence Avenue - Ridge District, Accra</span>
        <span className="hidden sm:flex flex-col leading-tight">
          <span>info@wappaghana.org</span>
          <span>richard@wappaghana.org</span>
        </span>
        <span className="hidden lg:inline">+233 270955659</span>
      </div>
      <div className="inline-flex items-center gap-2 rounded-sm border border-[#ceb98d] bg-white/65 px-2.5 py-1 text-[#7a5f2a]">
        <span className="size-1 rounded-full bg-[#8b6c2d] animate-pulse" />
        MoU Signed / US$973.6M
      </div>
    </div>
  );
}
