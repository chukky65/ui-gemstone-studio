import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TopBar } from "@/components/site/TopBar";
import { PageHero } from "@/components/site/PageHero";
import heroInfrastructureImg from "@/assets/hero-infrastructure.png";
import heroHealthcareImg from "@/assets/hero-healthcare.png";
import heroSupplyOverviewGeneratedImg from "@/assets/hero-supply-overview-generated.png";
import supplyOperationsGeneratedImg from "@/assets/supply-operations-generated.png";
import tradeLogisticsGeneratedImg from "@/assets/trade-logistics-generated.png";
import constructionSupplyGeneratedImg from "@/assets/construction-supply-generated.png";
import agriculturalInputsGeneratedImg from "@/assets/agricultural-inputs-generated.png";
import medicalEquipmentGeneratedImg from "@/assets/medical-equipment-generated.png";
import energyMaterialsGeneratedImg from "@/assets/energy-materials-generated.png";
import { Section, SectionFlow, SectionHeading, useToneTokens } from "@/components/site/Section";

export const Route = createFileRoute("/supply")({
  component: SupplyPage,
  head: () => ({
    meta: [
      { title: "Supply Overview - WAPPA" },
      {
        name: "description",
        content:
          "Supply overview for WAPPA procurement programmes, methods, sectors, terms and SSP procedures.",
      },
      { property: "og:title", content: "Supply Overview - WAPPA" },
      {
        property: "og:description",
        content:
          "Transparent procurement, supply methods, donor support, and step-by-step procedures for suppliers.",
      },
      { property: "og:image", content: heroSupplyOverviewGeneratedImg },
    ],
  }),
});

const SUPPLY_REFERENCE_IMAGES = [
  {
    src: supplyOperationsGeneratedImg,
    label: "Supply Operations",
    desc: "Warehouse distribution and packaging workflows",
  },
  {
    src: tradeLogisticsGeneratedImg,
    label: "Trade Logistics",
    desc: "Cross-border road freight movement",
  },
  {
    src: constructionSupplyGeneratedImg,
    label: "Construction Supply",
    desc: "Container handling and shipment readiness",
  },
] as const;

const ADDITIONAL_SUPPLY_IMAGES = [
  {
    src: heroHealthcareImg,
    label: "Healthcare Delivery",
    desc: "Medical programme support and clinical supply readiness",
  },
  {
    src: heroInfrastructureImg,
    label: "Infrastructure Corridors",
    desc: "Transport and civil works procurement pipelines",
  },
  {
    src: agriculturalInputsGeneratedImg,
    label: "Agricultural Inputs",
    desc: "Crop and produce supply support for food security",
  },
  {
    src: medicalEquipmentGeneratedImg,
    label: "Medical Equipment",
    desc: "Essential diagnostic devices and hospital equipment",
  },
  {
    src: energyMaterialsGeneratedImg,
    label: "Energy Materials",
    desc: "Grid support and power infrastructure components",
  },
] as const;

const METHODS = [
  { c: "A", a: "ICS", t: "International Competitive Supply", active: false },
  { c: "B", a: "D&IDPOG", t: "Direct & Indirect Purchase of Goods", active: false },
  { c: "C", a: "SSP", t: "Sole Source Purchase", active: true },
] as const;

const SUPPLY_SECTORS = [
  { n: "01", t: "Hospitals & Maternity", d: "Medical organisations and health systems" },
  { n: "02", t: "Construction Companies", d: "Building and infrastructure firms" },
  { n: "03", t: "Raw Materials", d: "Producing and extracting companies" },
  { n: "04", t: "Agricultural Inputs & Outputs", d: "Agro processing and farming organisations" },
  { n: "05", t: "Amusement & Recreation", d: "Parks and recreational agencies" },
  { n: "06", t: "Consumer Electronics & Apparel", d: "Consumer goods and lifestyle products" },
  { n: "07", t: "Vehicle Parts & Accessories", d: "Automotive components and parts" },
  { n: "08", t: "Sports & Entertainment", d: "Sporting goods and entertainment supply" },
  { n: "09", t: "Industrial Machinery", d: "Heavy equipment and machinery supply" },
  { n: "10", t: "Home & Garden", d: "Household goods and garden products" },
  { n: "11", t: "Fruits, Seeds & Produce", d: "Agricultural produce and seeds" },
  { n: "12", t: "SkinCare & Health Products", d: "Personal health and wellness supply" },
] as const;

const PARTNERS = [
  { t: "UNDP / GEF-SGP", d: "UN Development Programme" },
  { t: "AfDB / DFID", d: "African Development Bank and UK Aid" },
  { t: "USAID", d: "US Agency for International Development" },
  { t: "UKSAID", d: "UK Strategic Aid Programme" },
  { t: "UNICEF", d: "UN Children's Fund" },
  { t: "IMF", d: "International Monetary Fund" },
  { t: "World Bank", d: "International Bank for Reconstruction" },
  { t: "State Foreign Aid", d: "Bilateral state aid programmes" },
  { t: "Domestic Loans", d: "Government of Ghana financing" },
] as const;

const STEPS = [
  {
    c: "A",
    t: "Submit Your Quotation Invoice",
    d: "Suppliers submit quotation invoices through official WAPPA channels, including product names, quantities and technical specifications.",
  },
  {
    c: "B",
    t: "Offer Pre-Evaluation Process (OPEP)",
    d: "The evaluation team reviews initial offer quality and eligibility. Qualified suppliers receive acknowledgment details and validation forms.",
  },
  {
    c: "C",
    t: "Final Assessment Supply Evaluation (FASE)",
    d: "Within 12 to 48 hours after completed validation forms are received, final review is performed on forms and quotation invoices.",
  },
  {
    c: "D",
    t: "Supply Approval and Confirmation",
    d: "Approved suppliers receive an official confirmation letter and further onboarding instructions for validation and contract readiness.",
  },
  {
    c: "E",
    t: "Complete Supplier Compliance",
    d: "Suppliers complete compliance documentation, submit certificate evidence and final quotation version for procurement finalisation.",
  },
  {
    c: "F",
    t: "Purchase Order and Payment Release",
    d: "After validation closes, purchase orders and payment instructions are issued. Standard release follows 80 percent advance and 20 percent pre-shipment settlement.",
  },
] as const;

const TERMS = [
  { t: "Product Packaging", d: "According to your company's original export packaging standards." },
  { t: "Supply Terms", d: "Price should be quoted on CIF or FOB basis." },
  { t: "Final Shipment Destination", d: "Tema Harbour Seaport, Republic of Ghana." },
  {
    t: "Payment Method",
    d: "Bank to bank wire transfer, confirmed by your bank before production starts.",
  },
  {
    t: "Payment Terms",
    d: "80 percent down payment to start production and 20 percent before shipment.",
  },
  {
    t: "Inspection",
    d: "SGS verifies quantity at port of lading. Inspection cost is paid by the buyer.",
  },
  {
    t: "Delivery Time",
    d: "Maximum 360 days from date of confirmed 80 percent advance payment receipt.",
  },
  { t: "Currency", d: "Accepted invoice currency is US Dollar or Euro only." },
  {
    t: "Supply Payment Duration",
    d: "80 percent payment is processed within 4 to 5 working days after approval and completed validation.",
  },
  { t: "Purchase Order", d: "Issued immediately once supply validation is fully completed." },
  {
    t: "Shipment Condition",
    d: "Partial supply is accepted but should not exceed 5 to 6 shipment batches.",
  },
  {
    t: "Caution Notice",
    d: "Approved suppliers should complete validation within 3 days from approval date.",
  },
] as const;

function SupplyPage() {
  return (
    <div className="min-h-dvh bg-[#f7f5ef] text-[#10243d]">
      <TopBar />
      <Header />

      <PageHero
        eyebrow="Procurement Framework"
        breadcrumb="Supply Overview"
        imageSrc={heroSupplyOverviewGeneratedImg}
        imageAlt="Major port and logistics operations supporting cross-border procurement delivery."
        imagePosition="50% 50%"
        title={
          <>
            Supply <em className="text-[#f2cb79] not-italic">overview.</em>
          </>
        }
        intro="WAPPA procures goods and services for public and private sector programmes in Ghana and across West Africa, using transparent procurement methods and accountable delivery controls."
      />

      <section className="gdsp-bright-band border-b border-night/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-night/15">
          {[
            { v: "$375M", l: "Max Contract Value" },
            { v: "$350K", l: "Min Contract Value" },
            { v: "SSP", l: "Current Method" },
            { v: "80 / 20", l: "Payment Split" },
          ].map((s) => (
            <div key={s.l} className="p-6 sm:p-8 lg:p-10 hover:bg-white/55 transition-colors">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-clay mb-5">
                {s.l}
              </div>
              <div className="font-display text-4xl sm:text-5xl tabular-nums text-night">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <SectionFlow start="light">
        <Section atmosphere="spot">
          <VisualGalleryBlock />
        </Section>
        <Section padding="tight">
          <AboutBlock />
        </Section>
        <Section atmosphere="spot">
          <MethodsBlock />
        </Section>
        <Section padding="tight">
          <SectorsBlock />
        </Section>
        <Section atmosphere="grid">
          <StepsBlock />
        </Section>
        <Section padding="tight">
          <TermsBlock />
        </Section>
        <Section atmosphere="spot">
          <PartnersBlock />
        </Section>
        <Section className="text-center">
          <CTABlock />
        </Section>
      </SectionFlow>

      <Footer />
    </div>
  );
}

function VisualGalleryBlock() {
  const t = useToneTokens();
  return (
    <>
      <SectionHeading eyebrow="Supply Visuals" size="xl">
        Replicated images and{" "}
        <em className={`${t.accent} not-italic`}>expanded programme gallery.</em>
      </SectionHeading>
      <p className={`mt-6 ${t.textMuted} max-w-3xl mb-12 leading-relaxed`}>
        The first row mirrors the supply imagery from the reference page. The second row adds more
        relevant visuals to give suppliers and partners clearer operational context.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {SUPPLY_REFERENCE_IMAGES.map((img) => (
          <article
            key={img.label}
            className={`border ${t.border} ${t.cardBg} overflow-hidden ${t.cardBgHover} transition-colors`}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className={`font-display text-2xl ${t.text} mb-1`}>{img.label}</div>
              <p className={`text-sm ${t.textMuted}`}>{img.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {ADDITIONAL_SUPPLY_IMAGES.map((img, idx) => (
          <article key={img.label} className={`border ${t.border} ${t.cardBg} overflow-hidden`}>
            <div className="aspect-square overflow-hidden">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className={`text-[10px] font-mono uppercase tracking-widest ${t.accent} mb-2`}>
                Image {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className={`font-display text-lg ${t.text} leading-tight mb-1`}>{img.label}</h3>
              <p className={`text-xs ${t.textMuted}`}>{img.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function AboutBlock() {
  const t = useToneTokens();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <SectionHeading eyebrow="About Our Supply">
          How WAPPA procures on <em className={`${t.accent} not-italic`}>your behalf.</em>
        </SectionHeading>
      </div>
      <div className={`lg:col-span-7 space-y-5 text-lg ${t.textMuted} leading-relaxed`}>
        <p>
          WAPPA procures products and services for both public and private sector organisations.
          Contracts are typically valued between 350,000 USD and 375,000,000 USD and are financed in
          whole or in part with public and private funds.
        </p>
        <p>
          We work with verified suppliers across healthcare, construction, agriculture, industrial
          and consumer sectors, ensuring strong value-for-money outcomes through strict evaluation.
        </p>
        <p>
          The objective is to protect public resources and improve procurement quality by engaging
          qualified suppliers with proven capacity, compliance readiness and delivery reliability.
        </p>
      </div>
    </div>
  );
}

function MethodsBlock() {
  const t = useToneTokens();
  return (
    <>
      <SectionHeading eyebrow="Procurement Methods">
        Three accepted <em className={`${t.accent} not-italic`}>supply methods.</em>
      </SectionHeading>
      <p className={`mt-4 ${t.textMuted} max-w-3xl mb-16 leading-relaxed`}>
        WAPPA accepts quotation invoices through three procurement frameworks. The active method for
        current supply orders is <span className={t.accent}>SSP - Sole Source Purchase</span>.
      </p>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-px ${t.divider} border ${t.border}`}>
        {METHODS.map((m) => {
          const activeBg = t.tone === "dark" ? "bg-gold text-night" : "bg-clay text-bone";
          return (
            <div
              key={m.c}
              className={`p-10 transition-colors ${m.active ? activeBg : `${t.cardBg} ${t.cardBgHover}`}`}
            >
              <div
                className={`flex items-center justify-between mb-6 ${m.active ? "opacity-70" : t.textFaint}`}
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
                  Method {m.c}
                </span>
                {m.active && (
                  <span className="px-2 py-0.5 bg-[#10243d] text-white text-[9px] font-mono uppercase tracking-widest">
                    Active
                  </span>
                )}
              </div>
              <div className={`font-display text-5xl sm:text-6xl mb-4 ${m.active ? "" : t.accent}`}>
                {m.a}
              </div>
              <h3 className={`text-xl font-medium ${m.active ? "" : t.text}`}>{m.t}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

function SectorsBlock() {
  const t = useToneTokens();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-end">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Sectors We Supply" size="xl">
            Products procured across <em className={`${t.accent} not-italic`}>12 sectors.</em>
          </SectionHeading>
        </div>
        <div className="lg:col-span-5 flex justify-start lg:justify-end">
          <Link
            to="/requirement"
            className={`${t.btnGhost} px-6 py-3 text-[11px] font-mono uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center`}
          >
            View Requirements Page
          </Link>
        </div>
      </div>
      <p className={`mt-6 ${t.textMuted} max-w-3xl mb-16 leading-relaxed`}>
        Supply programmes span healthcare, construction, agriculture and consumer categories. For
        full category-level product requirements, open the Requirement page.
      </p>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px ${t.divider} border ${t.border}`}
      >
        {SUPPLY_SECTORS.map((s) => (
          <div key={s.n} className={`${t.cardBg} p-8 group ${t.cardBgHover} transition-colors`}>
            <div
              className={`font-display text-5xl ${
                t.tone === "dark"
                  ? "text-[#2f5f8a]/40 group-hover:text-[#2f5f8a]"
                  : "text-[#8b6c2d]/45 group-hover:text-[#8b6c2d]"
              } transition-colors mb-3`}
            >
              {s.n}
            </div>
            <h3 className={`font-display text-2xl mb-2 ${t.text}`}>{s.t}</h3>
            <p className={`text-sm ${t.textMuted}`}>{s.d}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function StepsBlock() {
  const t = useToneTokens();
  return (
    <>
      <SectionHeading eyebrow="Step-by-Step Process" size="xl">
        Supply procedures using <em className={`${t.accent} not-italic`}>SSP method.</em>
      </SectionHeading>
      <p className={`mt-6 ${t.textMuted} max-w-3xl mb-16 leading-relaxed`}>
        These steps show how suppliers move from quotation submission to approval, compliance and
        purchase order issuance.
      </p>
      <div className={`space-y-px ${t.divider} border ${t.border}`}>
        {STEPS.map((s) => (
          <div
            key={s.c}
            className={`${t.cardBg} p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 ${t.cardBgHover} transition-colors`}
          >
            <div className="lg:col-span-2">
              <div
                className={`size-16 border-2 ${t.accentBorder} flex items-center justify-center font-display text-3xl ${t.accent}`}
              >
                {s.c}
              </div>
            </div>
            <div className="lg:col-span-10">
              <h3 className={`font-display text-2xl sm:text-3xl mb-4 ${t.text}`}>{s.t}</h3>
              <p className={`${t.textMuted} leading-relaxed`}>{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function TermsBlock() {
  const t = useToneTokens();
  return (
    <>
      <SectionHeading eyebrow="Terms & Conditions" size="xl" className="mb-16">
        Supply terms and <em className={`${t.accent} not-italic`}>conditions.</em>
      </SectionHeading>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px ${t.divider} border ${t.border}`}
      >
        {TERMS.map((trm) => (
          <div key={trm.t} className={`${t.cardBg} p-8`}>
            <div className={`text-[10px] font-mono uppercase tracking-widest ${t.accent} mb-3`}>
              {trm.t}
            </div>
            <p className={`${t.textMuted} leading-relaxed`}>{trm.d}</p>
          </div>
        ))}
      </div>
      <div className={`mt-12 border-l-2 ${t.accentBorder} pl-8 py-2`}>
        <div className={`text-[10px] font-mono uppercase tracking-widest ${t.accent} mb-2`}>
          Why validation is mandatory
        </div>
        <p className={`${t.textMuted} leading-relaxed max-w-4xl`}>
          Supply validation protects public consumers and institutions against uncertified or
          unauthorised products. It also helps legalise approved supply orders and improve
          accountability across the entire procurement lifecycle.
        </p>
      </div>
    </>
  );
}

function PartnersBlock() {
  const t = useToneTokens();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Funding Partners">
            Donor and partner <em className={`${t.accent} not-italic`}>organisations.</em>
          </SectionHeading>
        </div>
        <p className={`lg:col-span-5 ${t.textMuted} leading-relaxed`}>
          Supply programmes are supported by international donors, development finance institutions
          and bilateral partners.
        </p>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px ${t.divider} border ${t.border} mb-12`}
      >
        {PARTNERS.map((p) => (
          <div key={p.t} className={`${t.cardBg} p-8`}>
            <div className={`font-display text-2xl ${t.accent} mb-2`}>{p.t}</div>
            <div className={`text-sm ${t.textMuted}`}>{p.d}</div>
          </div>
        ))}
      </div>
      <div className={`grid grid-cols-2 lg:grid-cols-4 divide-x ${t.divider} border ${t.border}`}>
        {[
          { v: "US$973.6M", l: "MoU Agreement Value" },
          { v: "US$756.2M", l: "Economic Grant Secured" },
          { v: "US$68.8M", l: "Hospital and Farming Projects" },
          { v: "9", l: "Donor Partners" },
        ].map((s) => (
          <div key={s.l} className={`p-8 ${t.cardBg}`}>
            <div className={`font-display text-3xl ${t.accent} tabular-nums mb-3`}>{s.v}</div>
            <div className={`text-[10px] font-mono uppercase tracking-widest ${t.textFaint}`}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function CTABlock() {
  const t = useToneTokens();
  return (
    <>
      <div className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.accent} mb-6`}>
        Become a Supplier
      </div>
      <h2
        className={`font-display text-4xl sm:text-5xl md:text-7xl mb-8 max-w-4xl mx-auto leading-[0.95] ${t.text}`}
      >
        Ready to submit your <em className={`${t.accent} not-italic`}>quotation?</em>
      </h2>
      <p className={`${t.textMuted} max-w-2xl mx-auto mb-10 leading-relaxed`}>
        Contact WAPPA to begin supply submission. You can also review detailed category and legal
        requirement notes on the Requirements page.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/contact"
          className={`${t.btnPrimary} px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center`}
        >
          Contact WAPPA
        </Link>
        <Link
          to="/requirement"
          className={`${t.btnGhost} px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center`}
        >
          Open Requirements
        </Link>
      </div>
    </>
  );
}
