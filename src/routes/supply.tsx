import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TopBar } from "@/components/site/TopBar";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionFlow, SectionHeading, useToneTokens } from "@/components/site/Section";

export const Route = createFileRoute("/supply")({
  component: SupplyPage,
  head: () => ({
    meta: [
      { title: "Supply & Procurement — WAPPA" },
      {
        name: "description",
        content:
          "WAPPA procures goods and services on behalf of Ghana's public and private sectors. Contracts US$350K to US$375M. Active method: Sole Source Purchase (SSP).",
      },
      { property: "og:title", content: "Supply & Procurement — WAPPA" },
      {
        property: "og:description",
        content:
          "Transparent procurement aligned with international best practice. Three accepted methods. Six-step SSP supply process.",
      },
    ],
  }),
});

const METHODS = [
  { c: "A", a: "ICS", t: "International Competitive Supply", active: false },
  { c: "B", a: "D&IDPOG", t: "Direct & Indirect Purchase of Goods", active: false },
  { c: "C", a: "SSP", t: "Sole Source Purchase", active: true },
];

const SUPPLY_SECTORS = [
  { n: "01", t: "Hospitals & Maternity", d: "Medical organisations & health systems" },
  { n: "02", t: "Construction Companies", d: "Building & infrastructure firms" },
  { n: "03", t: "Raw Materials", d: "Producing & extracting companies" },
  { n: "04", t: "Agricultural Inputs & Outputs", d: "Agro processing & farming organisations" },
  { n: "05", t: "Amusement & Recreation", d: "Parks & recreational agencies" },
  { n: "06", t: "Consumer Electronics & Apparel", d: "Consumer goods & lifestyle products" },
  { n: "07", t: "Vehicle Parts & Accessories", d: "Automotive components & parts" },
  { n: "08", t: "Sports & Entertainment", d: "Sporting goods & entertainment supply" },
  { n: "09", t: "Industrial Machinery", d: "Heavy equipment & machinery supply" },
  { n: "10", t: "Home & Garden", d: "Household goods & garden products" },
  { n: "11", t: "Fruits, Seeds & Produce", d: "Agricultural produce & seeds" },
  { n: "12", t: "SkinCare & Health Products", d: "Personal health & wellness supply" },
];

const PARTNERS = [
  { t: "UNDP / GEF-SGP", d: "UN Development Programme" },
  { t: "AfDB / DFID", d: "African Development Bank & UK Aid" },
  { t: "USAID", d: "US Agency for International Development" },
  { t: "UKSAID", d: "UK Strategic Aid Programme" },
  { t: "UNICEF", d: "UN Children's Fund" },
  { t: "IMF", d: "International Monetary Fund" },
  { t: "World Bank", d: "International Bank for Reconstruction" },
  { t: "State Foreign Aid", d: "Bilateral state aid programmes" },
  { t: "Domestic Loans", d: "Government of Ghana financing" },
];

const STEPS = [
  {
    c: "A",
    t: "Submit Your Quotation Invoice",
    d: "As a supplier, you may receive an official request directly from WAPPA containing product names, quantities and specifications. Prepare and submit your quotation invoice through WAPPA's official communication channels.",
  },
  {
    c: "B",
    t: "Offer Pre-Evaluation Process (OPEP)",
    d: "WAPPA's Evaluation Team will carry out an Offer Pre-Evaluation Process (OPEP). If the offer meets criteria, the team will issue an Acknowledgment Letter, Customer Reference and File Numbers, along with Supply Validation Forms.",
  },
  {
    c: "C",
    t: "Final Assessment Supply Evaluation (FASE) — 12 to 48 Hours",
    d: "Between 12 to 48 hours after the filled Validation Forms are received, the team will carry out a Final Assessment Supply Evaluation (FASE) on the filled forms alongside the supplier's quotation invoices.",
  },
  {
    c: "D",
    t: "Supply Approval — Official Confirmation Letter",
    d: "If your invoice receives general acceptance, FASE members issue an Official Confirmation Supply Approval Letter, followed by a direct call from Dr. Richard Kwabena, Projects Director - WAPPA.",
  },
  {
    c: "E",
    t: "Complete Supplier Compliance",
    d: "The approved supplier is expected to complete supplier compliance by submitting the validation cost, one company certificate and the final quotation invoice as stated in the Validation Forms.",
  },
  {
    c: "F",
    t: "Purchase Order Issued & Payment Transferred",
    d: "After Supply Validation, the Supplier's Purchase Order, Payment Details and stamped Quotation Invoice are released. The bank will transfer 80% of the supply payment to the supplier's bank account. The remaining 20% is paid before shipment.",
  },
];

const TERMS = [
  { t: "Product Packaging", d: "According to your company's original export packaging standards." },
  { t: "Supply Terms", d: "Price should be quoted on: CIF or FOB" },
  { t: "Final Shipment Destination", d: "Tema Harbour Seaport, Republic of Ghana" },
  {
    t: "Payment Method",
    d: "Bank to Bank Wire Transfer (T.T) — confirmed by your bank before production starts.",
  },
  {
    t: "Payment Terms",
    d: "80% down payment to start production. 20% paid when product is ready for shipment.",
  },
  {
    t: "Inspection",
    d: "SGS to confirm quantity at port of lading. Cost to be paid by the buyer.",
  },
  {
    t: "Delivery Time",
    d: "Maximum 360 days from the date the 80% advance payment is received by the supplier.",
  },
  { t: "Currency", d: "Invoice submitted currency: US Dollars or Euro only." },
  {
    t: "Supply Payment Duration",
    d: "80% supply payment within 4–5 working days from invoice approval, after supply validation is completed.",
  },
  { t: "Purchase Order", d: "Will be issued immediately after supply validation is completed." },
  {
    t: "Shipment Condition",
    d: "Partial supply is accepted but cannot be more than 5 or 6 shipments.",
  },
  {
    t: "Caution Notice",
    d: "If approved, you must complete Supply Validation within THREE DAYS from the date of approval.",
  },
];

function SupplyPage() {
  return (
    <div className="min-h-dvh bg-[#f7f5ef] text-[#10243d]">
      <TopBar />
      <Header />

      <PageHero
        eyebrow="Procurement Framework"
        breadcrumb="Supply"
        title={
          <>
            Supply & <em className="text-[#8b6c2d] not-italic">procurement.</em>
          </>
        }
        intro="WAPPA procures goods and services on behalf of Ghana's public and private sectors — using transparent, accountable procurement methods aligned with international best practice."
      />

      <section className="gdsp-bright-band border-b border-night/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-night/15">
          {[
            { v: "$375M", l: "Max Contract Value" },
            { v: "$350K", l: "Min Contract Value" },
            { v: "SSP", l: "Primary Method" },
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
          <AboutBlock />
        </Section>
        <Section padding="tight">
          <MethodsBlock />
        </Section>
        <Section atmosphere="spot">
          <SectorsBlock />
        </Section>
        <Section padding="tight">
          <PartnersBlock />
        </Section>
        <Section atmosphere="grid">
          <StepsBlock />
        </Section>
        <Section padding="tight">
          <TermsBlock />
        </Section>
        <Section className="text-center">
          <CTABlock />
        </Section>
      </SectionFlow>

      <Footer />
    </div>
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
          West Africa's Premier Procurement Authority procures products and services on behalf of
          both private and public sector organisations. All contracts are valued between $350,000
          and $375,000,000 USD and are financed in whole or in part with public and private funds.
        </p>
        <p>
          WAPPA has been assigned responsibility to procure products from verified suppliers and
          companies for the use of Ghana's healthcare, construction, agricultural, industrial and
          consumer sectors — ensuring value for money through a rigorous evaluation process.
        </p>
        <p>
          The aim is to make judicious use of public funds from capable, reliable and verified
          companies that can deliver value for money — protecting consumers and the public from
          uncertified or unauthorised supply sources.
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
        WAPPA accepts quotation invoices through any of the following three procurement frameworks.
        The active method for current supply orders is{" "}
        <span className={t.accent}>SSP — Sole Source Purchase</span>.
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
      <SectionHeading eyebrow="Sectors We Supply" size="xl">
        Products procured across <em className={`${t.accent} not-italic`}>12 sectors.</em>
      </SectionHeading>
      <p className={`mt-6 ${t.textMuted} max-w-3xl mb-16 leading-relaxed`}>
        WAPPA manages supply contracts across 12 sectors — from healthcare and construction to
        agricultural inputs and consumer goods.
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

function PartnersBlock() {
  const t = useToneTokens();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Funding Partners">
            Donor & partner <em className={`${t.accent} not-italic`}>organisations.</em>
          </SectionHeading>
        </div>
        <p className={`lg:col-span-5 ${t.textMuted} leading-relaxed`}>
          WAPPA's supply programmes are supported by a network of international donors, development
          finance institutions and bilateral partners.
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
          { v: "US$68.8M", l: "Hospital & Farming Projects" },
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

function StepsBlock() {
  const t = useToneTokens();
  return (
    <>
      <SectionHeading eyebrow="Step-by-Step Process" size="xl">
        Supply procedures using <em className={`${t.accent} not-italic`}>SSP method.</em>
      </SectionHeading>
      <p className={`mt-6 ${t.textMuted} max-w-3xl mb-16 leading-relaxed`}>
        In accordance with our administrative procedures, WAPPA is currently using Sole Source
        Purchase (SSP). Follow these steps to submit your quotation invoice and complete the supply
        validation process.
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
        Supply terms & <em className={`${t.accent} not-italic`}>conditions.</em>
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
          Why Validation is Mandatory
        </div>
        <p className={`${t.textMuted} leading-relaxed max-w-4xl`}>
          The purpose of Supply Validation is to protect consumers and the country against the use
          of imported products from unknown, uncertified or unauthorised companies. Product
          Registration is a constitutional mandate under the Public Health Act of 1999, Constitution
          of the Republic of Ghana.
        </p>
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
        Contact WAPPA to begin the supply submission process. Our evaluation team is ready to assess
        your quotation invoice.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/contact"
          className={`${t.btnPrimary} px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center`}
        >
          Contact WAPPA
        </Link>
        <Link
          to="/members"
          className={`${t.btnGhost} px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center`}
        >
          Meet Our Board
        </Link>
      </div>
    </>
  );
}
