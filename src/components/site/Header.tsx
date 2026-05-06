import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { BrandMark } from "@/components/site/BrandMark";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/members", label: "Our Members" },
  { to: "/supply", label: "Supply" },
  { to: "/profile", label: "Our Profile" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex justify-between items-center border-b border-line bg-night/80 backdrop-blur-md sticky top-0 z-40">
      <Link to="/" className="flex items-center gap-2 sm:gap-4 group min-w-0">
        <BrandMark size="sm" className="transition-transform group-hover:scale-110" />
        <div className="min-w-0">
          <div className="font-display text-xl sm:text-2xl leading-none tracking-tight">WAPPA</div>
          <div className="hidden sm:block text-[8px] md:text-[9px] font-mono uppercase tracking-[0.18em] md:tracking-[0.3em] text-bone/40 mt-1 truncate">
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
                  ? "text-gold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-px after:bg-gold"
                  : "text-bone/60 hover:text-bone transition-colors"
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
          className="px-5 py-2 border border-gold/40 text-gold text-[11px] uppercase tracking-widest font-mono hover:bg-gold hover:text-night transition-colors"
        >
          Partner Portal
        </Link>
      </div>

      <button
        className="lg:hidden size-9 sm:size-10 border border-line flex items-center justify-center shrink-0"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <span className="block w-5 h-px bg-bone" />
          <span className="block w-5 h-px bg-bone" />
          <span className="block w-5 h-px bg-bone" />
        </div>
      </button>

      {open && (
        <div className="absolute top-16 sm:top-20 left-0 right-0 border-y border-line bg-night lg:hidden max-h-[70svh] overflow-y-auto">
          <div className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 sm:px-6 py-4 border-b border-line/60 text-sm uppercase tracking-[0.2em] font-mono hover:text-gold"
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
