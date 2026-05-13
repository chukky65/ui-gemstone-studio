import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/site/BrandMark";

export function Footer() {
  return (
    <footer className="relative border-t border-[#ddcfb0] bg-gradient-to-br from-[#fffefb] via-[#f9f5ea] to-[#eef4fc]">
      <div className="absolute inset-0 gdsp-light-grain opacity-35 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <BrandMark size="md" />
              <div>
                <div className="font-display text-2xl leading-none text-[#10243d]">WAPPA</div>
                <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.3em] text-[#284565]/50 mt-1">
                  West Africa&apos;s Premier Procurement Authority
                </div>
              </div>
            </div>
            <p className="text-[#284565]/78 leading-relaxed text-sm max-w-md">
              West Africa&apos;s premier procurement authority overseeing infrastructure,
              healthcare, agriculture and essential supply programmes for over 553 million people
              across the sub-region.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 border border-[#ccb88b] bg-white/65 text-[#7a5f2a] text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.3em]">
              <span className="size-1 rounded-full bg-[#8b6c2d] animate-pulse" />
              MoU Signed / US$973.6M
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.3em] text-[#8b6c2d] mb-5">
              Navigate
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-[#1f3956]/78 hover:text-[#8b6c2d]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/members" className="text-[#1f3956]/78 hover:text-[#8b6c2d]">
                  Our Members
                </Link>
              </li>
              <li>
                <Link to="/supply" className="text-[#1f3956]/78 hover:text-[#8b6c2d]">
                  Supply Overview
                </Link>
              </li>
              <li>
                <Link to="/requirement" className="text-[#1f3956]/78 hover:text-[#8b6c2d]">
                  Requirements
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-[#1f3956]/78 hover:text-[#8b6c2d]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#1f3956]/78 hover:text-[#8b6c2d]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.3em] text-[#8b6c2d] mb-5">
              Head Office
            </div>
            <address className="not-italic text-sm text-[#284565]/78 leading-relaxed space-y-1">
              <div>No. 12 Independence Avenue</div>
              <div>Ridge District</div>
              <div>Accra</div>
              <div>Greater Accra Region, Republic of Ghana</div>
            </address>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:+233560930117" className="block text-[#153352] hover:text-[#8b6c2d]">
                +233 560930117
              </a>
              <a
                href="mailto:info@wappaghana.org"
                className="block text-[#153352] hover:text-[#8b6c2d]"
              >
                info@wappaghana.org
              </a>
              <a
                href="mailto:richard@wappaghana.org"
                className="block text-[#153352] hover:text-[#8b6c2d]"
              >
                richard@wappaghana.org
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-16 pt-8 border-t border-[#ddcfb0] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[#284565]/55">
          <div>
            Copyright {new Date().getFullYear()} West Africa&apos;s Premier Procurement Authority /
            All rights reserved
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Republic of Ghana</span>
            <span>Est. 2014</span>
            <span className="text-[#8b6c2d]">Vision 2030</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
