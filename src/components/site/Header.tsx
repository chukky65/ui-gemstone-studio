import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { BrandMark } from "@/components/site/BrandMark";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/members", label: "Our Members" },
  { to: "/supply", label: "Supply Overview" },
  { to: "/requirement", label: "Requirements" },
  { to: "/profile", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 relative h-16 sm:h-20 border-b border-[#ddcfb0] bg-[#fffefb]/88 backdrop-blur-md px-4 sm:px-6 lg:px-10 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 sm:gap-4 group min-w-0">
        <BrandMark size="sm" className="transition-transform group-hover:scale-110" />
        <div className="min-w-0">
          <div className="font-display text-3xl sm:text-4xl font-extrabold leading-none tracking-tight text-[#10243d]">
            WAPPA
          </div>
          <div className="hidden sm:block text-[8px] md:text-[9px] font-mono uppercase tracking-[0.18em] md:tracking-[0.3em] text-[#284565]/55 mt-1 truncate">
            West Africa Procurement Authority
          </div>
        </div>
      </Link>

      <div className="hidden lg:flex gap-10 text-[13px] font-medium">
        {NAV.map((item) => {
          const active = loc.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={
                active
                  ? "text-[#8b6c2d] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-px after:bg-[#8b6c2d]"
                  : "text-[#1f3956]/72 hover:text-[#10243d] transition-colors"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="hidden lg:block">
        <Link
          to="/contact"
          className="px-5 py-2 border border-[#c9b289] bg-white/60 text-[#7b6232] text-[11px] uppercase tracking-widest font-mono hover:bg-[#fff2d7] transition-colors"
        >
          Partner Portal
        </Link>
      </div>

      <button
        className="lg:hidden size-9 sm:size-10 border border-[#d6c5a3] bg-white/70 flex items-center justify-center shrink-0"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <span className="block w-5 h-px bg-[#18314e]" />
          <span className="block w-5 h-px bg-[#18314e]" />
          <span className="block w-5 h-px bg-[#18314e]" />
        </div>
      </button>

      {open && (
        <div className="absolute top-16 sm:top-20 left-0 right-0 border-y border-[#ddcfb0] bg-[#fffdf8] lg:hidden max-h-[70svh] overflow-y-auto">
          <div className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 sm:px-6 py-4 border-b border-[#e6d9c1] text-sm uppercase tracking-[0.2em] font-mono text-[#1e3856] hover:text-[#8b6c2d]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
