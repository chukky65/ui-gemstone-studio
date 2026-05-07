import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TopBar } from "@/components/site/TopBar";
import heroHealthcareImg from "@/assets/hero-healthcare.png";
import heroPortLogisticsImg from "@/assets/hero-port-logistics.png";
import heroInfrastructureImg from "@/assets/hero-infrastructure.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "WAPPA - Shaping Africa's Development Future" },
      {
        name: "description",
        content:
          "WAPPA coordinates transparent procurement and strategic supply programmes across West Africa.",
      },
      { property: "og:title", content: "WAPPA - Shaping Africa's Development Future" },
      {
        property: "og:description",
        content:
          "West Africa's premier procurement authority supporting infrastructure, healthcare and regional supply delivery.",
      },
      { property: "og:image", content: heroPortLogisticsImg },
    ],
  }),
});

const HERO_SLIDES = [
  {
    id: "healthcare",
    image: heroHealthcareImg,
    objectPosition: "50% 50%",
    label: "Healthcare Delivery",
    alt: "Modern surgical team in a high-tech operating theatre representing healthcare procurement and medical infrastructure delivery.",
    overlay:
      "radial-gradient(ellipse 66% 52% at 14% 18%, oklch(0.98 0.015 95 / 0.7), transparent 65%), radial-gradient(ellipse 54% 44% at 84% 16%, oklch(0.84 0.11 75 / 0.45), transparent 66%), radial-gradient(ellipse 62% 56% at 70% 86%, oklch(0.84 0.08 220 / 0.3), transparent 72%)",
  },
  {
    id: "port",
    image: heroPortLogisticsImg,
    objectPosition: "50% 50%",
    label: "Port and Freight Logistics",
    alt: "Cargo port at sunset with container ship, cranes, trucks and stacked freight for international trade operations.",
    overlay:
      "radial-gradient(ellipse 72% 55% at 20% 20%, oklch(0.98 0.015 95 / 0.68), transparent 63%), radial-gradient(ellipse 60% 48% at 86% 14%, oklch(0.8 0.13 75 / 0.44), transparent 68%), radial-gradient(ellipse 62% 52% at 74% 84%, oklch(0.76 0.1 210 / 0.28), transparent 70%)",
  },
  {
    id: "infrastructure",
    image: heroInfrastructureImg,
    objectPosition: "50% 50%",
    label: "Infrastructure Development",
    alt: "Urban highway interchange and cranes at golden hour representing large-scale infrastructure growth and mobility.",
    overlay:
      "radial-gradient(ellipse 70% 52% at 18% 18%, oklch(0.98 0.015 95 / 0.7), transparent 64%), radial-gradient(ellipse 58% 46% at 82% 20%, oklch(0.8 0.13 75 / 0.4), transparent 68%), radial-gradient(ellipse 66% 56% at 72% 88%, oklch(0.74 0.09 220 / 0.25), transparent 72%)",
  },
] as const;

const HERO_CHIPS = [
  "Structured Assessment",
  "Supplier Validation",
  "Cross-Border Delivery",
  "Outcome Monitoring",
] as const;

const SIGNAL_CARDS = [
  {
    label: "Active Frameworks",
    value: "42",
    detail: "Live procurement programmes tracked with milestone-level reporting.",
  },
  {
    label: "Priority Corridors",
    value: "18",
    detail: "Trade and logistics lanes supported across regional infrastructure routes.",
  },
  {
    label: "Compliance Uptime",
    value: "96%",
    detail: "Verified documentation completeness before award decisions are issued.",
  },
  {
    label: "Avg. Review Window",
    value: "72h",
    detail: "Typical turnaround for complete supplier submissions and clarifications.",
  },
] as const;

const JOURNEY_STEPS = [
  {
    id: "01",
    title: "Intake and Scope",
    text: "Programme needs are mapped into clear sourcing scopes with delivery timelines and risk markers.",
  },
  {
    id: "02",
    title: "Supplier Screening",
    text: "Vendors pass capability checks, legal review and quality assurance requirements before shortlisting.",
  },
  {
    id: "03",
    title: "Competitive Evaluation",
    text: "Technical and financial offers are assessed through weighted scoring and compliance controls.",
  },
  {
    id: "04",
    title: "Contract Activation",
    text: "Award decisions are documented with governance sign-off and implementation launch planning.",
  },
  {
    id: "05",
    title: "Delivery Assurance",
    text: "Post-award tracking covers performance, outcomes, and corrective actions across each workstream.",
  },
] as const;

const PROGRAM_LANES = [
  {
    title: "Health Systems and Equipment",
    text: "Critical procurement for hospitals, clinical devices, emergency response inventory and maternal care support.",
  },
  {
    title: "Infrastructure Materials",
    text: "Strategic sourcing for construction inputs, utilities, transport corridors and municipal upgrades.",
  },
  {
    title: "Agriculture and Food Security",
    text: "Sustainable supply lines for seeds, post-harvest assets, processing support and storage resilience.",
  },
  {
    title: "Industrial and Consumer Supply",
    text: "Structured procurement for machinery, consumer goods and operational stock for public institutions.",
  },
  {
    title: "Cross-Border Logistics",
    text: "Regional coordination for freight movement, customs readiness and final-mile delivery reliability.",
  },
  {
    title: "Programme Advisory Services",
    text: "Procurement planning, cost modelling, governance support and market intelligence for complex portfolios.",
  },
] as const;

const DASHBOARD_TRACKS = [
  {
    title: "Evaluation Throughput",
    value: "88%",
    progress: 88,
    note: "Bid cycles completed within target review windows.",
  },
  {
    title: "Supplier Readiness",
    value: "91%",
    progress: 91,
    note: "Qualified vendors meeting technical and legal preconditions.",
  },
  {
    title: "On-Time Delivery",
    value: "94%",
    progress: 94,
    note: "Contracts delivering on approved timelines and milestones.",
  },
  {
    title: "Outcome Verification",
    value: "89%",
    progress: 89,
    note: "Programmes with verified impact documentation in cycle.",
  },
] as const;

const TRUST_MARKERS = [
  "Regional supplier network across West Africa",
  "Transparent multi-stage evaluation standards",
  "Board-led governance and compliance monitoring",
  "Cross-sector portfolio support for public and private institutions",
] as const;

const ANNOUNCEMENTS = [
  "US$973.6M framework activity aligned to strategic partner programmes",
  "US$756.2M economic support pipeline linked to trade resilience outcomes",
  "US$68.8M medical and agri-equipment delivery cycle in execution",
  "Joint channels with USAID, WHO, UNICEF, AfDB, DFID and World Bank",
] as const;

const HOME_VIDEO_THUMBNAIL = "https://img.youtube.com/vi/i_WCAKHmLPk/hqdefault.jpg";

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
    <div className="min-h-dvh bg-[#f7f5ef] text-[#10243d]">
      <TopBar />
      <Header />

      <section
        className="relative overflow-hidden border-b border-[#ddcfb0] min-h-[calc(100svh-6.5rem)] sm:min-h-[calc(100svh-8rem)]"
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
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1400ms] ease-out ${
              idx === activeSlide ? "opacity-[0.55] scale-100" : "opacity-0 scale-110"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcf8]/95 via-[#fff8e8]/85 to-[#e6f0ff]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f3ea]/95 via-[#f6f1e6]/50 to-transparent" />

        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={`${slide.id}-overlay`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: slide.overlay }}
          />
        ))}

        <div className="absolute inset-0 wappa-hero-light-aurora" />
        <div className="wappa-hero-light-orb wappa-hero-light-orb-a" />
        <div className="wappa-hero-light-orb wappa-hero-light-orb-b" />
        <div className="hidden md:block wappa-hero-light-orb wappa-hero-light-orb-c" />
        <div className="absolute inset-0 wappa-hero-light-shimmer" />

        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-10 z-20 flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous hero slide"
            onClick={prevSlide}
            className="size-9 sm:size-10 border border-[#b9a16f] bg-white/70 text-[#10243d] hover:bg-white hover:border-[#8c7748] transition-colors flex items-center justify-center"
          >
            {"<"}
          </button>
          <button
            type="button"
            aria-label="Next hero slide"
            onClick={nextSlide}
            className="size-9 sm:size-10 border border-[#b9a16f] bg-white/70 text-[#10243d] hover:bg-white hover:border-[#8c7748] transition-colors flex items-center justify-center"
          >
            {">"}
          </button>
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 lg:pt-24 pb-14 sm:pb-18">
          <div className="inline-flex items-center gap-2 rounded-sm border border-[#c2ab79]/60 bg-white/70 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#7a5f2a] backdrop-blur-sm mb-7">
            <span className="size-1.5 rounded-full bg-[#7a5f2a] animate-pulse" />
            {HERO_SLIDES[activeSlide].label}
          </div>

          <h1 className="gdsp-rise font-display text-[#10243d] text-4xl sm:text-6xl md:text-8xl lg:text-[9.6rem] leading-[0.9] tracking-[-0.02em] max-w-6xl">
            Shaping Africa&apos;s <em className="text-[#8b6c2d] not-italic">development</em> future.
          </h1>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-end">
            <div className="lg:col-span-6">
              <p className="text-base sm:text-lg text-[#1f3450]/85 leading-relaxed max-w-2xl">
                A regional procurement institution coordinating infrastructure, healthcare,
                agriculture and essential supply programmes across West Africa, linking trusted
                suppliers to 553 million people.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {HERO_CHIPS.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-[#d8c9aa] bg-white/75 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-[#36516d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/supply"
                className="rounded-sm bg-[#8b6c2d] text-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-center hover:bg-[#755820] transition-colors"
              >
                Explore Supply
              </Link>
              <Link
                to="/profile"
                className="rounded-sm border border-[#c7b38d] bg-white/70 text-[#10243d] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-center hover:bg-white transition-colors"
              >
                Our Profile
              </Link>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-sm border border-[#d8c9aa] bg-white/70 backdrop-blur-md p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#8b6c2d]">
                    Programme Cycle
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#3e5874]/70">
                    Q2 / 2026
                  </span>
                </div>
                <div className="space-y-3 text-sm text-[#1e3651]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#1e3651]/70">Active Reviews</span>
                    <span className="font-semibold">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1e3651]/70">Priority Tracks</span>
                    <span className="font-semibold">18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1e3651]/70">Current Focus</span>
                    <span className="font-semibold text-[#8b6c2d]">Cross-Border</span>
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
                  idx === activeSlide
                    ? "w-10 bg-[#8b6c2d]"
                    : "w-4 bg-[#6d85a0]/45 hover:bg-[#6d85a0]/75"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8c8a7] bg-[#f9f3e7]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-5 overflow-hidden">
          <div className="flex items-center gap-4">
            <span className="flex-shrink-0 rounded-sm bg-[#10243d] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-[#f4e5bf]">
              Live Updates
            </span>
            <div className="overflow-hidden flex-1">
              <div className="flex gap-10 whitespace-nowrap wappa-light-marquee text-sm text-[#1f3652]">
                {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, idx) => (
                  <span key={idx} className="flex items-center gap-10">
                    {item}
                    <span className="text-[#7b6232]">|</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e5d8bf] bg-[#fffdf8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8b6c2d] mb-4">
                Command Overview
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-[#10243d]">
                Programme signals in
                <span className="text-[#8b6c2d]"> real time.</span>
              </h2>
            </div>
            <p className="max-w-xl text-[#2a4665]/80 leading-relaxed">
              We operate with measurable checkpoints across evaluation, compliance, supplier quality
              and delivery performance to keep strategic procurement transparent and on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {SIGNAL_CARDS.map((card, idx) => (
              <article
                key={card.label}
                className="wappa-card-lift rounded-sm border border-[#e5d7bc] bg-white p-6 sm:p-7"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#3a5979] mb-4">
                  {card.label}
                </div>
                <div className="font-display text-5xl text-[#8b6c2d] tabular-nums mb-4">
                  {card.value}
                </div>
                <p className="text-sm text-[#2e4d6c] leading-relaxed">{card.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7e1ef] bg-gradient-to-br from-[#eef4fb] via-[#f7fbff] to-[#fffaf0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#7c6533] mb-4">
                Delivery Journey
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-[#10243d]">
                One workflow from request
                <span className="text-[#365a80]"> to impact.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-[#274564]/80 leading-relaxed">
              The operating model is designed for speed without compromising scrutiny. Every stage
              is documented, auditable and tied to outcome accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
            {JOURNEY_STEPS.map((step) => (
              <article
                key={step.id}
                className="rounded-sm border border-[#d6e2f0] bg-white/85 backdrop-blur-sm p-6 flex flex-col"
              >
                <div className="font-display text-3xl text-[#8b6c2d] mb-3">{step.id}</div>
                <h3 className="font-display text-2xl leading-tight text-[#132a43] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#2c4b6b] leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e5d7bd] bg-[#fffdfa]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8b6c2d] mb-4">
                Programme Lanes
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] text-[#10243d] mb-6">
                Sector coverage built for scale.
              </h2>
              <p className="text-[#2c4b6a]/80 leading-relaxed mb-8">
                WAPPA coordinates procurement across high-priority development sectors, combining
                supplier reliability with strategic funding alignment.
              </p>
              <div className="rounded-sm border border-[#ddcfb1] bg-[#f7efdf] p-6">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#7a5f2a] mb-3">
                  Trust Markers
                </p>
                <ul className="space-y-3">
                  {TRUST_MARKERS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#1f3956] leading-relaxed"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8b6c2d]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROGRAM_LANES.map((lane, idx) => (
                <article
                  key={lane.title}
                  className="rounded-sm border border-[#e4d7bf] bg-white p-6 sm:p-7 wappa-card-lift"
                  style={{ animationDelay: `${idx * 70}ms` }}
                >
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#547395] mb-3">
                    Lane {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl text-[#142d47] leading-tight mb-3">
                    {lane.title}
                  </h3>
                  <p className="text-sm text-[#2d4e6e] leading-relaxed">{lane.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9e2ee] bg-gradient-to-br from-[#f4f8fd] via-[#ffffff] to-[#fff8ec]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8a6b2d] mb-4">
                Performance Dashboard
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] text-[#10243d] mb-6">
                Visibility across the full cycle.
              </h2>
              <p className="text-[#294666]/80 leading-relaxed mb-8">
                Every portfolio is monitored through quantifiable indicators so partners can track
                progress, identify risks and maintain delivery confidence.
              </p>
              <div className="rounded-sm border border-[#d4e1f0] bg-white p-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#3f6186] mb-3">
                  Coverage Snapshot
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-display text-4xl text-[#8b6c2d]">553M+</div>
                    <div className="text-xs text-[#2a4a6a]/75 uppercase tracking-[0.12em] mt-1">
                      People Served
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-4xl text-[#8b6c2d]">US$973M+</div>
                    <div className="text-xs text-[#2a4a6a]/75 uppercase tracking-[0.12em] mt-1">
                      Programme Value
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {DASHBOARD_TRACKS.map((track) => (
                <article
                  key={track.title}
                  className="rounded-sm border border-[#d4e0ee] bg-white p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm sm:text-base font-semibold text-[#173350]">
                      {track.title}
                    </h3>
                    <span className="font-display text-3xl text-[#8b6c2d] tabular-nums">
                      {track.value}
                    </span>
                  </div>
                  <div className="h-2 bg-[#e8eff8] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#2f5378] to-[#8b6c2d]"
                      style={{ width: `${track.progress}%` }}
                    />
                  </div>
                  <p className="mt-3 text-sm text-[#2c4a69]/80 leading-relaxed">{track.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#decfb0] bg-[#fffefb]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8a6a2b] mb-4">
                Mission Briefing
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] text-[#10243d] mb-5">
                Understand the WAPPA operating model.
              </h2>
              <p className="text-[#2a4767]/80 leading-relaxed mb-8 max-w-2xl">
                Watch a quick briefing on how our teams coordinate fair evaluation, trusted supplier
                engagement and accountable delivery for high-impact programmes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/profile"
                  className="rounded-sm bg-[#10243d] text-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#17385b] transition-colors"
                >
                  Full Profile
                </Link>
                <Link
                  to="/contact"
                  className="rounded-sm border border-[#c9b38a] bg-[#fff7e6] text-[#765c2a] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#ffefcf] transition-colors"
                >
                  Contact WAPPA
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <a
                href="https://www.youtube.com/watch?v=i_WCAKHmLPk"
                target="_blank"
                rel="noreferrer"
                className="block group rounded-sm overflow-hidden border border-[#d7c7a7] bg-white shadow-[0_16px_40px_rgba(22,46,74,0.12)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={HOME_VIDEO_THUMBNAIL}
                    alt="Video preview for WAPPA mission overview"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f243d]/65 via-[#143255]/30 to-transparent" />
                  <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#f3e6c6] mb-2">
                        Video Briefing
                      </div>
                      <div className="font-display text-2xl text-white leading-tight">
                        WAPPA Overview
                      </div>
                    </div>
                    <div className="size-12 rounded-full border border-white/70 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-lg">
                      Play
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#10243d] via-[#17385c] to-[#8a6a2d]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#f1dfb8] mb-3">
                Partnership Desk
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-white leading-[0.95]">
                Ready to collaborate with WAPPA?
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/supply"
                className="rounded-sm bg-white text-[#123151] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#f3f8ff] transition-colors"
              >
                Start Supply Process
              </Link>
              <Link
                to="/members"
                className="rounded-sm border border-white/60 text-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
              >
                Meet The Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
