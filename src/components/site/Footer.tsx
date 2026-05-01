import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-deep">
      <div className="absolute inset-0 gdsp-grain opacity-50 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-10 border border-gold/40 rotate-45 flex items-center justify-center">
                <div className="size-3 bg-gold -rotate-45" />
              </div>
              <div>
                <div className="font-display text-2xl leading-none">GDSP</div>
                <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-bone/40 mt-1">
                  Ghana Development Supply Projects
                </div>
              </div>
            </div>
            <p className="text-bone/60 leading-relaxed text-sm max-w-md">
              West Africa's premier procurement authority — overseeing infrastructure, healthcare,
              agriculture and consumables for over 553 million people across the sub-region.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 border border-gold/40 text-gold text-[10px] font-mono uppercase tracking-[0.3em]">
              <span className="size-1 rounded-full bg-gold animate-pulse" />
              MoU Signed · US$973.6M
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold mb-5">
              Navigate
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-bone/70 hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/members" className="text-bone/70 hover:text-gold">
                  Our Members
                </Link>
              </li>
              <li>
                <Link to="/supply" className="text-bone/70 hover:text-gold">
                  Supply
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-bone/70 hover:text-gold">
                  Our Profile
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-bone/70 hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold mb-5">
              Head Office
            </div>
            <address className="not-italic text-sm text-bone/70 leading-relaxed space-y-1">
              <div>F507/2 Nmetsobu Street</div>
              <div>Near Simbins Furniture</div>
              <div>Sekondi, Takoradi</div>
              <div>Western Region, Republic of Ghana</div>
            </address>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:+233561195994" className="block text-bone hover:text-gold">
                +233 (0) 561 195 994
              </a>
              <a href="mailto:info@gdspghana.org" className="block text-bone hover:text-gold">
                info@gdspghana.org
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-bone/40">
          <div>
            © {new Date().getFullYear()} Ghana Development Supply Projects · All rights reserved
          </div>
          <div className="flex gap-6">
            <span>Republic of Ghana</span>
            <span>Est. 2014</span>
            <span className="text-gold">Vision 2030</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
