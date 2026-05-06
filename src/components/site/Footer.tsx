import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/site/BrandMark";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-deep">
      <div className="absolute inset-0 gdsp-grain opacity-50 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <BrandMark size="md" />
              <div>
                <div className="font-display text-2xl leading-none">WAPPA</div>
                <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.3em] text-bone/40 mt-1">
                  West Africa's Premier Procurement Authority
                </div>
              </div>
            </div>
            <p className="text-bone/60 leading-relaxed text-sm max-w-md">
              West Africa's premier procurement authority — overseeing infrastructure, healthcare,
              agriculture and consumables for over 553 million people across the sub-region.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 border border-gold/40 text-gold text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.3em]">
              <span className="size-1 rounded-full bg-gold animate-pulse" />
              MoU Signed · US$973.6M
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.3em] text-gold mb-5">
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
            <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.3em] text-gold mb-5">
              Head Office
            </div>
            <address className="not-italic text-sm text-bone/70 leading-relaxed space-y-1">
              <div>No. 12 Independence Avenue</div>
              <div>Ridge District</div>
              <div>Accra</div>
              <div>Greater Accra Region, Republic of Ghana</div>
            </address>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:+233270955659" className="block text-bone hover:text-gold">
                +233 270955659
              </a>
              <a href="mailto:info@wappaghana.org" className="block text-bone hover:text-gold">
                info@wappaghana.org
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-16 pt-8 border-t border-line flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.3em] text-bone/40">
          <div>
            © {new Date().getFullYear()} West Africa's Premier Procurement Authority · All rights
            reserved
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Republic of Ghana</span>
            <span>Est. 2014</span>
            <span className="text-gold">Vision 2030</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
