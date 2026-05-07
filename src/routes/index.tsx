import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TopBar } from "@/components/site/TopBar";
import { Section, SectionFlow, SectionHeading, useToneTokens } from "@/components/site/Section";
import heroHealthcareImg from "@/assets/hero-healthcare.png";
import heroPortLogisticsImg from "@/assets/hero-port-logistics.png";
import heroInfrastructureImg from "@/assets/hero-infrastructure.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "WAPPA — Building Africa's Development Future" },
      {
        name: "description",
        content:
          "WAPPA - West Africa's Premier Procurement Authority overseeing infrastructure, healthcare and supply across the region.",
      },
      { property: "og:title", content: "WAPPA — Building Africa's Development Future" },
      {
        property: "og:description",
        content:
          "West Africa's premier procurement authority. US$973.6M MoU value. 553M+ people served.",
      },
      { property: "og:image", content: heroPortLogisticsImg },
    ],
  }),
});

const TICKER = [
  "US$973.6M framework agreements activated with strategic donor partners",
  "US$756.2M economic support pipeline aligned to regional trade resilience",
  "US$68.8M health and agri-equipment deployment currently in execution",
  "Joint delivery channels with USAID, WHO, UNICEF, AfDB, DFID and World Bank",
];

const PROJECTS = [
  {
    n: "01",
    t: "Infrastructure",
    d: "We oversee infrastructure development projects — logistics & supplies — for investors driving projects across the African continent.",
  },
  {
    n: "02",
    t: "Consumables",
    d: "Coordination of development projects for consumables for foreign investors to meet local impact and livelihood aid objectives.",
  },
  {
    n: "03",
    t: "Health",
    d: "Health is a major priority. We work with financing partners to make healthcare systems reach the desired project levels for communities.",
  },
  {
    n: "04",
    t: "SkinCare",
    d: "We oversee the supply of sustainable and safe skincare products, connecting verified suppliers across the African continent.",
  },
];

const SECTORS_LIST = [
  "Hospitals, Maternity & Medical Organisations",
  "Construction & Building Companies",
  "Raw Materials & Extracting Companies",
  "Agricultural Inputs & Output Organisations",
  "Amusement Park / Recreational Agencies",
  "Consumer Items, Electronics & Apparel",
  "Vehicle Parts & Accessories",
  "Sports & Entertainment",
  "Industrial Machinery",
  "Home & Garden, Fruits, Seeds",
];

const PARTNERS = [
  "Domestic Loans",
  "UNDP / GEF-SGP",
  "AfDB / DFID",
  "USAID",
  "UKSAID",
  "UNICEF",
  "IMF",
  "World Bank",
  "State Foreign Aid",
];

const SERVICES = [
  {
    n: "01",
    t: "Market & Trade Development",
    d: "Unfamiliar markets in West Africa hold great opportunities. We provide effective B2B trade services targeting South Africa, Angola, Nigeria, Ghana and China — built on reliable, up-to-date market intelligence.",
  },
  {
    n: "02",
    t: "Marketing Consultancy",
    d: "Excellent sales requires an excellent marketing plan. We provide efficient marketing schemes and consumer usage strategies that increase sales and revenue, turning your belief in your product into enduring reality.",
  },
  {
    n: "03",
    t: "Strategic Partnership",
    d: "Going into strategic partnership with us is a blueprint for success. We combine expertise, know-how and resources skillfully to achieve common goals — grounded in integrity, trust, dedication and mutual respect.",
  },
  {
    n: "04",
    t: "Resource Management",
    d: "Our aim is to support you in strengthening efficiency and sustainability. We reduce your workload while constantly providing market information, analysis and projections — keeping you current with target market developments.",
  },
];

const PULSE_METRICS = [
  {
    v: "42",
    l: "Active Frameworks",
    d: "Live procurement programmes monitored in our delivery dashboard.",
  },
  {
    v: "18",
    l: "Priority Corridors",
    d: "Infrastructure and logistics lanes supported across key trade routes.",
  },
  {
    v: "96%",
    l: "Compliance Rate",
    d: "Average documentation compliance at pre-award evaluation stage.",
  },
  {
    v: "72h",
    l: "Review Window",
    d: "Typical response time for complete supplier submissions.",
  },
] as const;

const DELIVERY_PILLARS = [
  {
    k: "01",
    t: "Evidence-Led Procurement",
    d: "Every major decision is backed by supplier intelligence, category benchmarks and risk signals before award.",
  },
  {
    k: "02",
    t: "Faster Portfolio Delivery",
    d: "We align procurement planning to implementation timelines so projects move from approval to execution with fewer bottlenecks.",
  },
  {
    k: "03",
    t: "Transparent Governance",
    d: "Our teams maintain structured review trails, compliance checkpoints and clear reporting for partner confidence.",
  },
] as const;

const HOME_VIDEO_THUMBNAIL = "https://img.youtube.com/vi/i_WCAKHmLPk/hqdefault.jpg";

const HERO_SLIDES = [
  {
    id: "healthcare",
    image: heroHealthcareImg,
    objectPosition: "50% 50%",
    label: "Healthcare Delivery",
    alt: "Modern surgical team in a high-tech operating theatre representing healthcare procurement and medical infrastructure delivery.",
    overlay:
      "radial-gradient(ellipse 72% 58% at 82% 18%, oklch(0.78 0.13 75 / 0.2), transparent 64%), radial-gradient(ellipse 55% 44% at 10% 92%, oklch(0.78 0.13 75 / 0.12), transparent 63%)",
  },
  {
    id: "port",
    image: heroPortLogisticsImg,
    objectPosition: "50% 50%",
    label: "Port & Freight Logistics",
    alt: "Cargo port at sunset with container ship, cranes, trucks and stacked freight for international trade operations.",
    overlay:
      "radial-gradient(ellipse 66% 52% at 20% 14%, oklch(0.78 0.13 75 / 0.24), transparent 60%), radial-gradient(ellipse 72% 58% at 88% 88%, oklch(0.62 0.16 35 / 0.14), transparent 64%)",
  },
  {
    id: "infrastructure",
    image: heroInfrastructureImg,
    objectPosition: "50% 50%",
    label: "Infrastructure Development",
    alt: "Urban highway interchange and cranes at golden hour representing large-scale infrastructure growth and mobility.",
    overlay:
      "radial-gradient(ellipse 76% 60% at 74% 20%, oklch(0.62 0.16 35 / 0.22), transparent 62%), radial-gradient(ellipse 56% 48% at 12% 88%, oklch(0.78 0.13 75 / 0.12), transparent 61%)",
  },
] as const;

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="min-h-dvh bg-night text-bone">
      <TopBar />
      <Header />

      {/* HERO — image slider */}
      <section
        className="relative overflow-hidden border-b border-line min-h-[calc(100svh-6.5rem)] sm:min-h-[calc(100svh-8rem)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {HERO_SLIDES.map((slide, idx) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1080}
            style={{ objectPosition: slide.objectPosition }}
            className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-[1400ms] ease-out ${
              idx === activeSlide ? "opacity-50 scale-100" : "opacity-0 scale-110"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={`${slide.id}-overlay`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: slide.overlay }}
          />
        ))}
        <div className="absolute inset-0 wappa-hero-aurora opacity-90" />
        <div className="wappa-hero-orb wappa-hero-orb-one" />
        <div className="wappa-hero-orb wappa-hero-orb-two" />
        <div className="hidden md:block wappa-hero-orb wappa-hero-orb-three" />
        <div className="wappa-hero-shimmer opacity-90" />
        <div className="absolute inset-0 gdsp-grain opacity-60 pointer-events-none" />

        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-10 z-10 flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous hero slide"
            onClick={prevSlide}
            className="size-9 sm:size-10 border border-bone/35 bg-night/45 text-bone hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next hero slide"
            onClick={nextSlide}
            className="size-9 sm:size-10 border border-bone/35 bg-night/45 text-bone hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
          >
            ›
          </button>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-8 sm:mb-10 text-gold">
            <div className="w-8 sm:w-10 h-px bg-gold" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] sm:tracking-[0.4em]">
              Infrastructure & Logistics
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-gold/35 text-gold text-[10px] font-mono uppercase tracking-[0.2em] mb-6 sm:mb-8 bg-night/30 backdrop-blur-sm">
            <span className="size-1 rounded-full bg-gold animate-pulse" />
            {HERO_SLIDES[activeSlide].label}
          </div>
          <h1 className="gdsp-rise font-display text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-[-0.02em] max-w-6xl">
            Shaping Africa's <em className="text-gold not-italic font-normal">development</em>{" "}
            <span className="italic">future.</span>
          </h1>
          <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-end">
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-bone/80 leading-relaxed max-w-md">
                A regional procurement institution coordinating infrastructure, healthcare,
                agriculture and essential supply programmes across West Africa - linking trusted
                suppliers to <span className="text-bone">553 million people</span>.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Structured Assessment",
                  "Supplier Validation",
                  "Cross-Border Delivery",
                  "Outcome Monitoring",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 border border-bone/25 wappa-hero-glass text-bone/80 text-[10px] font-mono uppercase tracking-[0.18em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to="/supply"
                className="bg-gold text-night px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-bone transition-colors w-full sm:w-auto"
              >
                Explore Supply <span>→</span>
              </Link>
              <Link
                to="/profile"
                className="border border-bone/30 text-bone px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors backdrop-blur-sm text-center w-full sm:w-auto"
              >
                Our Profile
              </Link>
            </div>
            <div className="lg:col-span-3">
              <div className="wappa-hero-glass border border-bone/20 p-4 sm:p-5 text-[10px] font-mono uppercase tracking-[0.2em] text-bone/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gold">Live Cycle</span>
                  <span className="text-bone/60">Q2 · 2026</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-bone/55">Active Reviews</span>
                    <span className="text-bone">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-bone/55">Priority Tracks</span>
                    <span className="text-bone">18</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={`${slide.id}-dot`}
                type="button"
                aria-label={`Go to ${slide.label} slide`}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeSlide ? "w-10 bg-gold" : "w-4 bg-bone/45 hover:bg-bone/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS — bright white-gold strip */}
      <section className="gdsp-bright-band border-b border-night/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-night/15">
          {[
            { l: "MoU Value", v: "$973.6", s: "M" },
            { l: "People Served", v: "553", s: "M+" },
            { l: "Regional Offices", v: "6", s: "+" },
            { l: "Partnership", v: "5", s: " yr" },
          ].map((s) => (
            <div key={s.l} className="p-6 sm:p-8 lg:p-10 hover:bg-white/55 transition-colors group">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-clay mb-5">
                {s.l}
              </div>
              <div className="font-display text-5xl lg:text-6xl tabular-nums text-night">
                {s.v}
                <span className="text-night/40">{s.s}</span>
              </div>
              <div className="mt-4 h-px w-8 bg-clay/45 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* TICKER — gold band */}
      <section className="bg-gold text-night border-b border-night/20 overflow-hidden">
        <div className="flex items-center">
          <div className="px-4 sm:px-6 py-4 bg-night text-gold text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.3em] flex-shrink-0 flex items-center gap-2">
            <span className="size-1 rounded-full bg-gold animate-pulse" />
            Latest
          </div>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-12 py-4 whitespace-nowrap gdsp-marquee">
              {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
                <span
                  key={i}
                  className="text-sm font-medium tracking-wide flex items-center gap-12"
                >
                  {t} <span className="text-night/40">●</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-night/85">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold">
              Operational Pulse
            </div>
            <div className="hidden sm:block text-[10px] font-mono uppercase tracking-[0.2em] text-bone/45">
              Live Programme Indicators
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PULSE_METRICS.map((metric) => (
              <article
                key={metric.l}
                className="border border-line bg-night/50 p-5 sm:p-6 hover:border-gold/40 transition-colors"
              >
                <div className="font-display text-4xl sm:text-5xl text-gold tabular-nums">
                  {metric.v}
                </div>
                <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.22em] text-bone/60">
                  {metric.l}
                </div>
                <p className="mt-4 text-sm text-bone/65 leading-relaxed">{metric.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-alternating content sections start here.
          start="light" → first section is light, then dark, light, dark... */}
      <SectionFlow start="light">
        {/* WELCOME / GLANCE */}
        <Section atmosphere="spot">
          <WelcomeBlock />
        </Section>

        {/* PROJECTS */}
        <Section padding="tight">
          <ProjectsBlock />
        </Section>

        {/* DELIVERY PILLARS */}
        <Section atmosphere="grid">
          <PillarsBlock />
        </Section>

        {/* SECTORS LIST + PARTNERS */}
        <Section atmosphere="spot">
          <SectorsBlock />
        </Section>

        {/* DIRECTOR QUOTE */}
        <Section atmosphere="grid">
          <QuoteBlock />
        </Section>

        {/* WATCH & LEARN */}
        <Section>
          <WatchBlock />
        </Section>

        {/* SERVICES */}
        <Section padding="tight" atmosphere="grid">
          <ServicesBlock />
        </Section>

        {/* VISION */}
        <Section atmosphere="grid">
          <VisionBlock />
        </Section>
      </SectionFlow>

      <Footer />
    </div>
  );
}

/* ─────────────── tone-aware blocks ─────────────── */

function WelcomeBlock() {
  const t = useToneTokens();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-5">
        <div className={`border ${t.border} p-10 ${t.softCardBg} backdrop-blur-sm`}>
          <div className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.accent} mb-4`}>
            WAPPA At a Glance
          </div>
          <h3 className={`font-display text-4xl mb-4 ${t.text}`}>Procurement with Precision</h3>
          <p className={`${t.textMuted} leading-relaxed mb-10`}>
            Serving public &amp; private sectors across West Africa with transparency,
            accountability and efficiency.
          </p>
          <div className={`grid grid-cols-2 gap-px ${t.divider}`}>
            {[
              { v: "$973M+", l: "Total MoU Value" },
              { v: "553M+", l: "People Served" },
              { v: "6+", l: "Regional Offices" },
              { v: "2020", l: "MoU Signed" },
            ].map((s) => (
              <div key={s.l} className={`${t.cardBg} p-5`}>
                <div className={`font-display text-2xl ${t.accent} tabular-nums`}>{s.v}</div>
                <div
                  className={`text-[10px] font-mono uppercase tracking-widest ${t.textFaint} mt-1`}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <SectionHeading eyebrow="Welcome to WAPPA">
          West Africa's Premier <em className={`${t.accent} not-italic`}>Procurement Authority.</em>
        </SectionHeading>
        <div className={`mt-10 space-y-5 text-lg ${t.textMuted} leading-relaxed`}>
          <p>
            WAPPA is mandated to coordinate transparent procurement programmes for public and
            private institutions, connecting verified suppliers with high-priority development needs
            across Ghana and West Africa.
          </p>
          <p>
            Our scope spans healthcare systems, infrastructure materials, agricultural inputs,
            industrial goods and essential consumables - managed through disciplined evaluation,
            structured governance and value-for-money controls.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/profile"
            className={`${t.btnPrimary} px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors`}
          >
            Read Our Profile
          </Link>
          <Link
            to="/supply"
            className={`${t.btnGhost} px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors`}
          >
            Supply Areas
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectsBlock() {
  const t = useToneTokens();
  return (
    <>
      <div className={`flex items-center gap-3 mb-6 ${t.accent}`}>
        <div className={`w-8 h-px ${t.tone === "dark" ? "bg-gold" : "bg-clay"}`} />
        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.4em]">
          What We Cover
        </span>
      </div>
      <SectionHeading size="xl" className="mb-16">
        Discover our <em className={`${t.accent} not-italic`}>projects.</em>
      </SectionHeading>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-px ${t.divider} border ${t.border}`}>
        {PROJECTS.map((p) => (
          <article
            key={p.n}
            className={`${t.cardBg} p-10 ${t.cardBgHover} transition-colors group relative`}
          >
            <div
              className={`font-display text-6xl sm:text-7xl ${t.tone === "dark" ? "text-gold/30 group-hover:text-gold" : "text-clay/30 group-hover:text-clay"} transition-colors mb-4`}
            >
              {p.n}
            </div>
            <h3 className={`font-display text-3xl mb-4 ${t.text}`}>{p.t}</h3>
            <p className={`${t.textMuted} leading-relaxed`}>{p.d}</p>
          </article>
        ))}
      </div>
    </>
  );
}

function PillarsBlock() {
  const t = useToneTokens();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14 items-end">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="How We Deliver" size="xl">
            Built for measurable <em className={`${t.accent} not-italic`}>results.</em>
          </SectionHeading>
        </div>
        <p className={`lg:col-span-5 ${t.textMuted} leading-relaxed`}>
          Our operating model combines speed, verification and accountability, so strategic
          procurement decisions translate into real outcomes for communities and partners.
        </p>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-px ${t.divider} border ${t.border}`}>
        {DELIVERY_PILLARS.map((pillar) => (
          <article
            key={pillar.k}
            className={`${t.cardBg} p-8 sm:p-10 ${t.cardBgHover} transition-colors group`}
          >
            <div
              className={`font-display text-5xl ${t.tone === "dark" ? "text-gold/35 group-hover:text-gold" : "text-clay/40 group-hover:text-clay"} transition-colors mb-4`}
            >
              {pillar.k}
            </div>
            <h3 className={`font-display text-3xl mb-4 ${t.text}`}>{pillar.t}</h3>
            <p className={`${t.textMuted} leading-relaxed`}>{pillar.d}</p>
          </article>
        ))}
      </div>
    </>
  );
}

function SectorsBlock() {
  const t = useToneTokens();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-7">
        <SectionHeading eyebrow="Our Mandate">Sectors we serve.</SectionHeading>
        <p className={`${t.textMuted} max-w-2xl my-10 leading-relaxed`}>
          WAPPA procures for a broad range of public and private sector organisations, ensuring
          quality, compliance and value.
        </p>
        <ul className={`divide-y ${t.divider} border-y ${t.border}`}>
          {SECTORS_LIST.map((s, i) => (
            <li
              key={s}
              className={`py-5 flex items-center justify-between group transition-colors ${
                t.tone === "dark" ? "hover:text-gold" : "hover:text-clay"
              }`}
            >
              <div className="flex items-center gap-6">
                <span className={`text-[10px] font-mono ${t.textFaint} tabular-nums`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-base md:text-lg ${t.text}`}>{s}</span>
              </div>
              <span className={`${t.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                →
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-5">
        <div className={`border ${t.border} p-6 sm:p-8 ${t.softCardBg} lg:sticky lg:top-28`}>
          <div className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.accent} mb-6`}>
            Major Donors & Partners
          </div>
          <div className={`grid grid-cols-2 gap-px ${t.divider} border ${t.border} mb-8`}>
            {PARTNERS.map((p) => (
              <div
                key={p}
                className={`${t.cardBg} px-4 py-5 text-sm font-medium text-center ${t.text}`}
              >
                {p}
              </div>
            ))}
          </div>
          <div className="space-y-5 pt-2">
            {[
              {
                v: "US$973.6M",
                d: "MoU value signed with international donor agencies and corporate bodies.",
              },
              {
                v: "US$756.2M",
                d: "Economic grant to strengthen regional stability and trade competitiveness.",
              },
            ].map((b) => (
              <div key={b.v} className={`border-l-2 ${t.accentBorder} pl-5`}>
                <div className={`font-display text-3xl ${t.accent} tabular-nums`}>{b.v}</div>
                <div className={`text-xs ${t.textMuted} mt-1`}>{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuoteBlock() {
  const t = useToneTokens();
  return (
    <>
      <div className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.accent} mb-8`}>
        Statement — Project Director
      </div>
      <blockquote
        className={`font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] max-w-5xl ${t.text}`}
      >
        <span className={t.accent}>"</span>We commit resources with discipline and urgency to
        deliver essential <em className={t.accent}>health and infrastructure supplies</em> where
        impact is highest, ensuring communities receive reliable support now and in the years ahead.
        <span className={t.accent}>"</span>
      </blockquote>
      <div className="mt-10 flex items-center gap-6">
        <div
          className={`size-14 rounded-full border ${t.accentBorder} flex items-center justify-center font-mono ${t.accent}`}
        >
          JF
        </div>
        <div>
          <div className={`font-medium ${t.text}`}>Dr. Joe Forson</div>
          <div
            className={`text-sm ${t.textMuted} font-mono uppercase tracking-widest text-[11px] mt-1`}
          >
            Project Director, WAPPA · Tamale, Northern Region
          </div>
        </div>
      </div>
    </>
  );
}

function WatchBlock() {
  const t = useToneTokens();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-7 order-2 lg:order-1">
        <SectionHeading eyebrow="Watch & Learn">
          Learn more about our <em className={`${t.accent} not-italic`}>mission & impact.</em>
        </SectionHeading>
        <p className={`mt-8 ${t.textMuted} leading-relaxed mb-5`}>
          Watch our official briefing to see how WAPPA is modernising procurement systems across
          West Africa - combining transparent assessment, supplier integrity checks and measurable
          delivery outcomes for communities.
        </p>
        <p className={`${t.textMuted} leading-relaxed mb-10`}>
          Our work reaches over 553 million people across the African sub-region, connecting
          verified suppliers with critical development needs.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/profile"
            className={`${t.btnPrimary} px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors`}
          >
            Our Full Profile
          </Link>
          <Link
            to="/contact"
            className={`${t.btnGhost} px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors`}
          >
            Get Involved
          </Link>
        </div>
      </div>
      <div className="lg:col-span-5 order-1 lg:order-2">
        <a
          href="https://www.youtube.com/watch?v=i_WCAKHmLPk"
          target="_blank"
          rel="noopener noreferrer"
          className={`block aspect-video relative border ${t.border} ${t.cardBg} group overflow-hidden`}
        >
          <img
            src={HOME_VIDEO_THUMBNAIL}
            alt="Video preview for WAPPA mission and impact presentation on YouTube"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
          <div
            className={`absolute inset-0 ${t.tone === "dark" ? "gdsp-grid" : "gdsp-light-grid"} opacity-50`}
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-night/70 border border-gold/40 text-gold text-[10px] font-mono uppercase tracking-[0.2em]">
            Watch Briefing
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`size-20 rounded-full ${t.tone === "dark" ? "bg-gold" : "bg-clay"} flex items-center justify-center group-hover:scale-110 transition-transform`}
            >
              <svg
                viewBox="0 0 24 24"
                className={`size-8 ${t.tone === "dark" ? "text-night" : "text-bone"} fill-current ml-1`}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function ServicesBlock() {
  const t = useToneTokens();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="What We Offer" size="xl">
            Strategic <em className={`${t.accent} not-italic`}>services.</em>
          </SectionHeading>
        </div>
        <p className={`lg:col-span-5 ${t.textMuted} leading-relaxed`}>
          We go beyond procurement — offering market intelligence, consultancy, partnerships and
          resource management to drive your success in West African markets.
        </p>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-px ${t.divider} border ${t.border}`}>
        {SERVICES.map((s) => (
          <article
            key={s.n}
            className={`${t.cardBg} p-10 group ${t.cardBgHover} transition-colors`}
          >
            <div className="flex items-baseline justify-between mb-6">
              <span className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.accent}`}>
                Service {s.n}
              </span>
              <span
                className={`font-display text-5xl ${t.tone === "dark" ? "text-bone/10 group-hover:text-gold/30" : "text-night/10 group-hover:text-clay/40"} transition-colors`}
              >
                {s.n}
              </span>
            </div>
            <h3 className={`font-display text-3xl mb-4 ${t.text}`}>{s.t}</h3>
            <p className={`${t.textMuted} leading-relaxed mb-6`}>{s.d}</p>
            <Link
              to="/contact"
              className={`text-[11px] font-mono uppercase tracking-[0.3em] ${t.accent} inline-flex items-center gap-2 group-hover:gap-4 transition-all`}
            >
              Learn More <span>→</span>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

function VisionBlock() {
  const t = useToneTokens();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5">
        <div className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.accent} mb-6`}>
          Vision 2025
        </div>
        <h2 className={`font-display text-4xl sm:text-6xl md:text-8xl leading-[0.9] ${t.text}`}>
          Our <em className={`${t.accent} not-italic`}>vision.</em>
        </h2>
      </div>
      <div className="lg:col-span-7">
        <blockquote
          className={`font-display text-3xl md:text-4xl leading-[1.15] ${t.text} mb-10 border-l-2 ${t.accentBorder} pl-8`}
        >
          "A world-class, efficient, transparent, accountable and professionally managed public
          sector evaluation system in Africa."
        </blockquote>
        <p className={`${t.textMuted} leading-relaxed`}>
          WAPPA aims to be the leading procurement authority in Africa — ensuring consistent
          attainment of best value for money, supporting national development and fiscal policies,
          and driving trade competitiveness across the continent to achieve Vision 2025 economic
          growth as one of Africa's industrialised nations.
        </p>
      </div>
    </div>
  );
}
