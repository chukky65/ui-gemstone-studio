import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TopBar } from "@/components/site/TopBar";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionFlow, SectionHeading, useToneTokens } from "@/components/site/Section";

export const Route = createFileRoute("/members")({
  component: MembersPage,
  head: () => ({
    meta: [
      { title: "Our Members - WAPPA Management Board" },
      {
        name: "description",
        content:
          "Meet the WAPPA management board: Projects Director, Assistant Director and evaluation specialists guiding procurement delivery for Ghana and West Africa.",
      },
      { property: "og:title", content: "Our Members - WAPPA" },
      {
        property: "og:description",
        content:
          "A board of experienced professionals in procurement, governance, finance, compliance and development.",
      },
    ],
  }),
});

const LEADERS = [
  {
    i: "RK",
    role: "Projects Director",
    name: "Dr. Richard Kwabena",
    title: "PhD - Regional Procurement & Infrastructure Specialist",
    creds: ["PhD", "MSc", "BEng", "MCIPS"],
    bio: "Dr. Richard Kwabena leads strategic sourcing, contract governance and delivery assurance at WAPPA. Over nearly two decades, he has directed multi-country procurement programmes across transport, health systems, industrial equipment and logistics corridors, with a strong record of improving procurement cycle time, bidder quality and post-award compliance. He is known for building practical supplier due-diligence frameworks, negotiating performance-based contracts and aligning large public procurements with measurable development outcomes. At WAPPA, he oversees end-to-end procurement strategy, portfolio risk controls and implementation standards across high-impact initiatives in Ghana and the wider West African sub-region.",
    facts: [
      { l: "Procurement Experience", v: "18+ Years" },
      { l: "Regional Programmes Led", v: "12" },
      { l: "Countries Served", v: "8 Nations" },
      { l: "Specialisation", v: "Strategic Sourcing" },
    ],
  },
  {
    i: "KM",
    role: "Assistant Director",
    name: "Mr. Kojo Mensimah",
    title: "LLM - CPA - Governance & Compliance Lead",
    creds: ["LLM", "MBA", "CPA", "CA"],
    bio: "Mr. Kojo Mensimah provides executive oversight on governance assurance, financial controls and contract compliance across WAPPA programmes. He has led policy reform and audit-readiness engagements for public institutions, helping teams build stronger accountability systems, evidence-based approval workflows and transparent expenditure controls. His work includes designing procurement integrity frameworks, supervising compliance reviews and strengthening contract administration practices to reduce disputes and performance slippage. He also supports board-level reporting by translating complex risk and compliance findings into clear operational recommendations for faster decision-making.",
    facts: [
      { l: "Compliance Audits", v: "150+" },
      { l: "Policy Reform Projects", v: "20+" },
      { l: "Financial Controls", v: "Public Sector" },
      { l: "Specialisation", v: "Contract Governance" },
    ],
  },
  {
    i: "EN",
    role: "Administrative Services Lead",
    name: "Ms. Efua Nartey",
    title: "MSc - Operations & Programme Administration",
    creds: ["MSc", "MA", "BSc"],
    bio: "Ms. Efua Nartey manages board operations, programme administration and executive coordination for WAPPA's leadership and technical teams. She leads delivery planning cycles, governance documentation standards and coordination protocols that keep multi-stakeholder procurement programmes on schedule and audit-ready. Her strengths include structuring decision calendars, improving records management and aligning internal teams around clear milestones, ownership and reporting lines. She also supports communication between operational units and leadership to ensure implementation risks are surfaced early and resolved before they affect programme delivery.",
    facts: [
      { l: "Operations Leadership", v: "10+ Years" },
      { l: "Programmes Coordinated", v: "80+" },
      { l: "Core Area", v: "Delivery Operations" },
      { l: "Languages", v: "English & French" },
    ],
  },
];

const EVALUATION = [
  {
    i: "AS",
    n: "Mrs. Adwoa Sarpong",
    r: "Evaluation Lead",
    d: "Leads technical and commercial evaluation workflows, with focus on bid quality scoring, supplier due diligence and value-for-money benchmarking.",
    tags: ["Bid Scoring", "Due Diligence", "Value for Money"],
  },
  {
    i: "NB",
    n: "Mr. Nana Yaw Bediako",
    r: "Cost & Value Analyst",
    d: "Provides cost intelligence and lifecycle pricing analysis for strategic procurement categories, strengthening budget discipline and contract predictability.",
    tags: ["Cost Analysis", "Lifecycle Pricing", "Budget Control"],
  },
  {
    i: "KT",
    n: "Engr. Kwesi Tetteh",
    r: "Technical Evaluation Member",
    d: "Reviews technical specifications, implementation readiness and engineering compliance across infrastructure and industrial equipment contracts.",
    tags: ["Technical Specs", "Engineering Compliance", "Project Readiness"],
  },
  {
    i: "RO",
    n: "Ms. Regina Owusu",
    r: "Contract Compliance Member",
    d: "Oversees regulatory alignment, vendor documentation integrity and post-award compliance checkpoints to sustain contract performance standards.",
    tags: ["Regulatory Compliance", "Vendor Documentation", "Post-Award Reviews"],
  },
  {
    i: "LA",
    n: "Dr. Linda Aboagye",
    r: "Risk & Governance Reviewer",
    d: "Specialises in procurement risk modelling, ethics controls and governance safeguards for high-impact public procurement programmes.",
    tags: ["Risk Modelling", "Ethics Controls", "Governance Safeguards"],
  },
  {
    i: "PA",
    n: "Rev. Peter A. Asante",
    r: "Independent Advisory Member",
    d: "Supports committee oversight with independent review on institutional accountability, fairness and dispute-sensitive procurement governance.",
    tags: ["Independent Review", "Institutional Accountability", "Fairness"],
  },
];

function MembersPage() {
  return (
    <div className="min-h-dvh bg-night text-bone">
      <TopBar />
      <Header />

      <PageHero
        eyebrow="Management Board"
        breadcrumb="Our Members"
        title={
          <>
            Our <em className="text-gold not-italic">members.</em>
          </>
        }
        intro="Meet the dedicated professionals guiding WAPPA - a management board of experienced specialists in procurement, governance, finance, evaluation and development."
      />

      <section className="gdsp-bright-band border-b border-night/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-night/15">
          {[
            { v: "1", l: "Projects Director" },
            { v: "1", l: "Assistant Director" },
            { v: "6", l: "Evaluation Specialists" },
            { v: "3", l: "Board Leadership Roles" },
          ].map((s) => (
            <div key={s.l} className="p-6 sm:p-8 lg:p-10 hover:bg-white/55 transition-colors">
              <div className="font-display text-4xl sm:text-5xl text-clay tabular-nums mb-3">
                {s.v}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-night/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionFlow start="light">
        <Section atmosphere="spot">
          <LeadersBlock />
        </Section>
        <Section padding="tight" atmosphere="grid">
          <EvaluationBlock />
        </Section>
        <Section className="text-center">
          <CTABlock />
        </Section>
      </SectionFlow>

      <Footer />
    </div>
  );
}

function LeadersBlock() {
  const t = useToneTokens();
  return (
    <>
      <SectionHeading eyebrow="Board Composition" size="xl">
        Management <em className={`${t.accent} not-italic`}>board.</em>
      </SectionHeading>
      <p className={`mt-6 ${t.textMuted} max-w-3xl mb-16 leading-relaxed`}>
        Our board brings together experienced professionals from public and private sector
        institutions - united by a shared commitment to transparent, accountable and effective
        procurement for Ghana and West Africa.
      </p>
      <div className={`space-y-px ${t.divider} border ${t.border}`}>
        {LEADERS.map((l) => (
          <article
            key={l.i}
            className={`${t.cardBg} p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 ${t.cardBgHover} transition-colors`}
          >
            <div className="lg:col-span-3">
              <div
                className={`size-24 sm:size-32 border ${t.accentBorder} rounded-full flex items-center justify-center font-display text-4xl sm:text-5xl ${t.accent} mb-6`}
              >
                {l.i}
              </div>
              <div className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.accent} mb-3`}>
                {l.role}
              </div>
              <h3 className={`font-display text-3xl mb-2 ${t.text}`}>{l.name}</h3>
              <p className={`text-sm ${t.textMuted} mb-5`}>{l.title}</p>
              <div className="flex flex-wrap gap-2">
                {l.creds.map((c) => (
                  <span
                    key={c}
                    className={`text-[10px] font-mono px-2 py-1 border ${t.border} ${t.accent}`}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-9">
              <p className={`text-lg ${t.textMuted} leading-relaxed mb-8`}>{l.bio}</p>
              <div
                className={`grid grid-cols-2 lg:grid-cols-4 gap-px ${t.divider} border ${t.border}`}
              >
                {l.facts.map((f) => (
                  <div key={f.l} className={`${t.cardBg} p-5`}>
                    <div
                      className={`text-[10px] font-mono uppercase tracking-widest ${t.textFaint} mb-2`}
                    >
                      {f.l}
                    </div>
                    <div className={`font-display text-xl ${t.accent}`}>{f.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function EvaluationBlock() {
  const t = useToneTokens();
  return (
    <>
      <SectionHeading eyebrow="Evaluation Committee" size="xl">
        Evaluation team <em className={`${t.accent} not-italic`}>members.</em>
      </SectionHeading>
      <p className={`mt-6 ${t.textMuted} max-w-3xl mb-16 leading-relaxed`}>
        WAPPA&apos;s evaluation team brings together specialists in procurement, engineering,
        finance, risk and governance - responsible for fair, transparent and expert assessment of
        supply contracts and programmes.
      </p>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-px ${t.divider} border ${t.border}`}>
        {EVALUATION.map((e) => (
          <article key={e.i} className={`${t.cardBg} p-8 ${t.cardBgHover} transition-colors`}>
            <div className="flex items-start gap-5 mb-5">
              <div
                className={`size-14 border ${t.accentBorder} rounded-full flex items-center justify-center font-mono ${t.accent} shrink-0`}
              >
                {e.i}
              </div>
              <div>
                <h3 className={`font-display text-2xl ${t.text}`}>{e.n}</h3>
                <div className={`text-[10px] font-mono uppercase tracking-widest ${t.accent} mt-1`}>
                  {e.r}
                </div>
              </div>
            </div>
            <p className={`${t.textMuted} leading-relaxed text-sm mb-5`}>{e.d}</p>
            <div className="flex flex-wrap gap-2">
              {e.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[10px] font-mono px-2 py-1 border ${t.border} ${t.textMuted}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
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
        Work With WAPPA
      </div>
      <h2
        className={`font-display text-4xl sm:text-5xl md:text-7xl mb-8 max-w-4xl mx-auto leading-[0.95] ${t.text}`}
      >
        Interested in partnering or <em className={`${t.accent} not-italic`}>supplying?</em>
      </h2>
      <p className={`${t.textMuted} max-w-2xl mx-auto mb-10 leading-relaxed`}>
        Our board and evaluation team are ready to assess your proposal. Whether you are a supplier,
        investor or development partner, WAPPA provides a fair and structured pathway to engagement.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/contact"
          className={`${t.btnPrimary} px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center`}
        >
          Contact the Board
        </Link>
        <Link
          to="/supply"
          className={`${t.btnGhost} px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center`}
        >
          Supply Procedures
        </Link>
      </div>
    </>
  );
}
