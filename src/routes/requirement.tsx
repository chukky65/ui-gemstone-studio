import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TopBar } from "@/components/site/TopBar";
import { PageHero } from "@/components/site/PageHero";
import heroRequirementGeneratedImg from "@/assets/hero-requirement-generated.png";
import reqPaddyRiceGeneratedImg from "@/assets/req-paddy-rice-generated.png";
import reqWheatGeneratedImg from "@/assets/req-wheat-generated.png";
import reqMaizeGeneratedImg from "@/assets/req-maize-generated.png";
import reqSugarcaneGeneratedImg from "@/assets/req-sugarcane-generated.png";
import reqSoyaBeansGeneratedImg from "@/assets/req-soya-beans-generated.png";
import reqGeneralMedicalEquipmentGeneratedImg from "@/assets/req-general-medical-equipment-generated.png";
import reqPharmaceuticalProductsGeneratedImg from "@/assets/req-pharmaceutical-products-generated.png";
import reqBandagesCottonGeneratedImg from "@/assets/req-bandages-cotton-generated.png";
import reqStethoscopeDiagnosticsGeneratedImg from "@/assets/req-stethoscope-diagnostics-generated.png";
import reqSurgicalConsumablesGeneratedImg from "@/assets/req-surgical-consumables-generated.png";
import reqEarthmovingEquipmentGeneratedImg from "@/assets/req-earthmoving-equipment-generated.png";
import reqCementGeneratedImg from "@/assets/req-cement-generated.png";
import reqSteelBarsGeneratedImg from "@/assets/req-steel-bars-generated.png";
import reqCivilWorksMaterialsGeneratedImg from "@/assets/req-civil-works-materials-generated.png";
import reqSiteSafetyEquipmentGeneratedImg from "@/assets/req-site-safety-equipment-generated.png";
import { Section, SectionFlow, SectionHeading, useToneTokens } from "@/components/site/Section";

export const Route = createFileRoute("/requirement")({
  component: RequirementPage,
  head: () => ({
    meta: [
      { title: "Requirements - WAPPA" },
      {
        name: "description",
        content:
          "Supply requirement page covering category requirements, invoice conditions, SSP process and supplier compliance expectations.",
      },
      { property: "og:title", content: "Requirements - WAPPA" },
      {
        property: "og:description",
        content:
          "Detailed supply requirements for agriculture, medical and construction products under WAPPA procurement programmes.",
      },
      { property: "og:image", content: heroRequirementGeneratedImg },
    ],
  }),
});

const CATEGORY_GROUPS = [
  {
    title: "Agricultural Products",
    intro: "Supplies for food security, farm productivity and agro value-chain support programmes.",
    items: [
      {
        name: "Paddy Rice",
        image: reqPaddyRiceGeneratedImg,
      },
      {
        name: "Wheat",
        image: reqWheatGeneratedImg,
      },
      {
        name: "Maize",
        image: reqMaizeGeneratedImg,
      },
      {
        name: "Sugarcane",
        image: reqSugarcaneGeneratedImg,
      },
      {
        name: "Soya Beans",
        image: reqSoyaBeansGeneratedImg,
      },
    ],
  },
  {
    title: "Medical Equipment & Supplies",
    intro:
      "Procurement categories for hospitals, clinics, emergency systems and pharmaceutical support chains.",
    items: [
      {
        name: "General Medical Equipment",
        image: reqGeneralMedicalEquipmentGeneratedImg,
      },
      {
        name: "Pharmaceutical Products",
        image: reqPharmaceuticalProductsGeneratedImg,
      },
      {
        name: "Bandages & Cotton Wool",
        image: reqBandagesCottonGeneratedImg,
      },
      {
        name: "Stethoscope & Diagnostics",
        image: reqStethoscopeDiagnosticsGeneratedImg,
      },
      {
        name: "Surgical Consumables",
        image: reqSurgicalConsumablesGeneratedImg,
      },
    ],
  },
  {
    title: "Construction & Infrastructure Materials",
    intro:
      "Core materials used in strategic infrastructure, transport and utility development projects.",
    items: [
      {
        name: "Earthmoving Equipment",
        image: reqEarthmovingEquipmentGeneratedImg,
      },
      {
        name: "Cement",
        image: reqCementGeneratedImg,
      },
      {
        name: "Steel Bars",
        image: reqSteelBarsGeneratedImg,
      },
      {
        name: "Civil Works Materials",
        image: reqCivilWorksMaterialsGeneratedImg,
      },
      {
        name: "Site Safety Equipment",
        image: reqSiteSafetyEquipmentGeneratedImg,
      },
    ],
  },
] as const;

const REQUIREMENT_TERMS = [
  "Product packaging must follow your company export standards.",
  "Price quotation should be based on CIF or FOB terms.",
  "Final shipment destination is Tema Harbour Seaport, Republic of Ghana.",
  "Payment method is bank to bank wire transfer (T.T).",
  "Payment terms are 80 percent advance and 20 percent before shipment.",
  "Inspection is conducted by SGS at port of lading and paid by buyer.",
  "Maximum delivery period is 360 days after 80 percent advance payment.",
  "Accepted quotation currency is US Dollar or Euro only.",
  "Purchase order is issued immediately after supply validation is completed.",
  "Partial shipment is accepted but limited to approximately 5 to 6 lots.",
  "If approved, supplier validation should be completed within 3 days.",
  "Supply validation is mandatory for legal and compliance clearance.",
] as const;

const SSP_PROCEDURE = [
  {
    id: "A",
    title: "Submit Your Quotation Invoice",
    text: "Submit detailed quotation invoices only through official WAPPA channels with clear product, quantity and specification descriptions.",
  },
  {
    id: "B",
    title: "Offer Pre-Evaluation (OPEP)",
    text: "The evaluation team screens the offer and issues acknowledgment references and validation forms to qualifying suppliers.",
  },
  {
    id: "C",
    title: "Final Assessment (FASE)",
    text: "A final review is carried out within 12 to 48 hours after completed forms and supporting information are received.",
  },
  {
    id: "D",
    title: "Supply Approval Notification",
    text: "Successful applications receive an official confirmation approval letter and supplier onboarding instructions.",
  },
  {
    id: "E",
    title: "Supplier Compliance Completion",
    text: "Supplier submits required validation cost, company certificate and final quotation details for compliance closure.",
  },
  {
    id: "F",
    title: "Purchase Order and Payment Activation",
    text: "After validation completion, purchase order and payment documentation are released according to approved terms.",
  },
] as const;

const REQUIRED_DOCUMENTS = [
  "Official quotation invoice with product specifications",
  "Company registration certificate or equivalent legal record",
  "Validated supplier contact and banking details",
  "Packaging and shipment readiness confirmation",
  "Lead-time schedule for production and dispatch",
  "Any requested compliance declarations",
] as const;

function RequirementPage() {
  return (
    <div className="min-h-dvh bg-[#f7f5ef] text-[#10243d]">
      <TopBar />
      <Header />

      <PageHero
        eyebrow="Supply Requirement"
        breadcrumb="Requirements"
        imageSrc={heroRequirementGeneratedImg}
        imageAlt="Medical and industrial supply requirement showcase."
        imagePosition="50% 50%"
        title={
          <>
            Supply <em className="text-[#f2cb79] not-italic">requirement.</em>
          </>
        }
        intro="Detailed requirement guide for products and services requested under WAPPA programmes, including categories, terms, supplier compliance and SSP process flow."
      />

      <section className="gdsp-bright-band border-b border-night/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-night/15">
          {[
            { v: "3", l: "Core Product Groups" },
            { v: "15", l: "Category Samples" },
            { v: "12", l: "Supply Conditions" },
            { v: "6", l: "SSP Process Steps" },
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
          <CategoryBlock />
        </Section>
        <Section padding="tight">
          <TermsBlock />
        </Section>
        <Section atmosphere="grid">
          <ProcedureBlock />
        </Section>
        <Section padding="tight" atmosphere="spot">
          <DocumentsBlock />
        </Section>
        <Section className="text-center">
          <CTABlock />
        </Section>
      </SectionFlow>

      <Footer />
    </div>
  );
}

function CategoryBlock() {
  const t = useToneTokens();

  return (
    <>
      <SectionHeading eyebrow="Product Categories" size="xl">
        Supply product categories from{" "}
        <em className={`${t.accent} not-italic`}>active programmes.</em>
      </SectionHeading>
      <p className={`mt-6 ${t.textMuted} max-w-3xl mb-16 leading-relaxed`}>
        The categories below are adapted from the reference requirement structure and organised for
        easier mobile and desktop browsing.
      </p>

      <div className="space-y-12">
        {CATEGORY_GROUPS.map((group, groupIndex) => (
          <section key={group.title}>
            <div className="flex items-end justify-between gap-4 mb-5">
              <div>
                <div
                  className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.accent} mb-2`}
                >
                  Group {String(groupIndex + 1).padStart(2, "0")}
                </div>
                <h3 className={`font-display text-3xl sm:text-4xl ${t.text}`}>{group.title}</h3>
              </div>
            </div>
            <p className={`${t.textMuted} leading-relaxed mb-6 max-w-3xl`}>{group.intro}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {group.items.map((item) => (
                <article
                  key={item.name}
                  className={`border ${t.border} ${t.cardBg} overflow-hidden ${t.cardBgHover} transition-colors`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className={`font-display text-lg leading-tight ${t.text}`}>{item.name}</h4>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function TermsBlock() {
  const t = useToneTokens();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <div className="lg:col-span-5">
        <SectionHeading eyebrow="Conditions & Agreement" size="xl">
          Supply invoice <em className={`${t.accent} not-italic`}>conditions.</em>
        </SectionHeading>
        <p className={`mt-6 ${t.textMuted} leading-relaxed`}>
          Suppliers should align submitted quotation invoices with these terms before final approval
          and purchase order release.
        </p>
      </div>

      <div className="lg:col-span-7">
        <div className={`space-y-px ${t.divider} border ${t.border}`}>
          {REQUIREMENT_TERMS.map((term, idx) => (
            <div key={term} className={`${t.cardBg} p-6 sm:p-7`}>
              <div className="flex gap-4">
                <div className={`font-display text-2xl ${t.accent} shrink-0`}>
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <p className={`${t.textMuted} leading-relaxed`}>{term}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcedureBlock() {
  const t = useToneTokens();

  return (
    <>
      <SectionHeading eyebrow="How To Get Supply Order" size="xl">
        SSP requirement <em className={`${t.accent} not-italic`}>process flow.</em>
      </SectionHeading>
      <p className={`mt-6 ${t.textMuted} max-w-3xl mb-16 leading-relaxed`}>
        Follow this step-by-step sequence from quotation submission to approval and payment
        activation.
      </p>
      <div className={`space-y-px ${t.divider} border ${t.border}`}>
        {SSP_PROCEDURE.map((step) => (
          <article
            key={step.id}
            className={`${t.cardBg} p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 ${t.cardBgHover} transition-colors`}
          >
            <div className="lg:col-span-2">
              <div
                className={`size-16 border-2 ${t.accentBorder} flex items-center justify-center font-display text-3xl ${t.accent}`}
              >
                {step.id}
              </div>
            </div>
            <div className="lg:col-span-10">
              <h3 className={`font-display text-2xl sm:text-3xl mb-3 ${t.text}`}>{step.title}</h3>
              <p className={`${t.textMuted} leading-relaxed`}>{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function DocumentsBlock() {
  const t = useToneTokens();

  return (
    <>
      <SectionHeading eyebrow="Supplier Checklist" size="xl">
        Core requirement <em className={`${t.accent} not-italic`}>documents.</em>
      </SectionHeading>
      <p className={`mt-6 ${t.textMuted} max-w-3xl mb-10 leading-relaxed`}>
        Keep these materials ready to speed up review, approval and onboarding.
      </p>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px ${t.divider} border ${t.border}`}
      >
        {REQUIRED_DOCUMENTS.map((doc, idx) => (
          <div key={doc} className={`${t.cardBg} p-7 ${t.cardBgHover} transition-colors`}>
            <div className={`text-[10px] font-mono uppercase tracking-widest ${t.accent} mb-3`}>
              Item {String(idx + 1).padStart(2, "0")}
            </div>
            <p className={`${t.textMuted} leading-relaxed`}>{doc}</p>
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
        Start Submission
      </div>
      <h2
        className={`font-display text-4xl sm:text-5xl md:text-7xl mb-8 max-w-4xl mx-auto leading-[0.95] ${t.text}`}
      >
        Ready to submit your <em className={`${t.accent} not-italic`}>supply requirement?</em>
      </h2>
      <p className={`${t.textMuted} max-w-2xl mx-auto mb-10 leading-relaxed`}>
        Contact WAPPA for supplier onboarding, clarification support and requirement validation.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/contact"
          className={`${t.btnPrimary} px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center`}
        >
          Contact Us
        </Link>
        <Link
          to="/supply"
          className={`${t.btnGhost} px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center`}
        >
          Supply Overview
        </Link>
      </div>
    </>
  );
}
