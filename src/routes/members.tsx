import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TopBar } from "@/components/site/TopBar";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionFlow, SectionHeading, useToneTokens } from "@/components/site/Section";

const MEMBERS_HERO_IMAGE =
  "https://ghsupplyprojects.org/wp-content/uploads/2023/07/FsApqDGWwAAa2jM.jpg";

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
    bio: `Dr. Richard Kwabena leads strategic sourcing, contract governance and delivery assurance at WAPPA, an organization dedicated to optimizing procurement processes in the public sector. Over nearly two decades, he has crafted a successful career in procurement, directing multi-country programs that span transport, health systems, industrial equipment and logistics corridors. His expertise is backed by a strong record of improving procurement cycle times, enhancing bidder quality and ensuring rigorous post-award compliance, all of which are essential for maintaining integrity in large public contracts.

Dr. Kwabena is highly regarded for developing practical supplier due diligence frameworks that identify supplier risks and establish clear performance standards. This approach ensures that only competent and reliable suppliers are engaged. He has also led negotiations for performance-based contracts that strengthen accountability and align procurement with broader public sector project goals.

At WAPPA, he oversees end-to-end procurement strategy, portfolio risk controls and implementation standards across high-impact initiatives in Ghana and the wider West African sub-region. His role includes proactive risk mitigation, transparent governance and strong control mechanisms that safeguard public funds and build stakeholder confidence.

Beyond operations, Dr. Kwabena actively supports capacity building for emerging procurement professionals across the region. Through mentorship and structured training, he shares practical methods in strategic sourcing and contract governance to raise professional standards and institutional resilience.

He has worked across complex procurement environments shaped by changing regulations, economic volatility and diverse institutional needs. His ability to adapt strategy to context has helped programs remain effective while still delivering measurable development outcomes.

Dr. Kwabena also collaborates with government agencies, NGOs and private sector partners to deliver integrated solutions. He has championed the adoption of digital procurement tools, including e-procurement workflows, to reduce administrative overhead, improve transparency and strengthen execution speed.

He further integrates sustainability into procurement strategy, encouraging supplier selection and contracting approaches that balance immediate delivery needs with long-term environmental and social value.

His leadership style emphasizes collaboration, accountability and continuous improvement. By encouraging broad participation and practical innovation, he has helped shape procurement systems that are both efficient and development-focused.

As procurement practice continues to evolve, Dr. Kwabena remains committed to global best practices, ongoing professional development and institutional learning. His strategic vision continues to position WAPPA as a leading authority in transparent, results-driven procurement across Ghana and West Africa.`,
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
    name: "Mr. Kojo Mensah",
    title: "LLM - CPA - Governance & Compliance Lead",
    creds: ["LLM", "MBA", "CPA", "CA"],
    bio: `Mr. Kojo Mensah plays a crucial role in providing executive oversight on governance assurance, financial controls and contract compliance across WAPPA programmes. His depth of experience has made him a trusted leader in strengthening institutional accountability, particularly within public sector systems.

Through his leadership, Mr. Mensah has spearheaded policy reform initiatives and audit-readiness engagements designed to improve institutional integrity and operational effectiveness. He helps teams build stronger accountability structures by introducing evidence-based approval workflows and transparent expenditure controls that improve clarity and reduce the risk of misuse.

A key part of his work is the design of procurement integrity frameworks that reinforce fairness, efficiency and transparency. By establishing clear standards and governance checkpoints, he helps organizations navigate complex procurement processes with greater confidence while reducing avoidable disputes and delivery delays.

Mr. Mensah also leads and supervises compliance reviews to identify risks early and close governance gaps before they escalate. His practical approach to contract administration has improved compliance consistency and reduced performance slippage across critical programmes.

At board level, he is known for translating complex compliance and risk findings into concise, actionable recommendations that support faster and more informed executive decisions.

He also promotes a culture of accountability through professional development and team capability building, ensuring that personnel are equipped to uphold high governance standards over the long term.

The impact of his work extends beyond immediate controls. By championing integrity, transparency and disciplined oversight, Mr. Mensah helps strengthen public trust, improve institutional credibility and support more sustainable public service delivery outcomes.

His combined expertise in governance assurance, financial control and contract compliance continues to position him as a key driver of measurable improvement across WAPPA and the wider public sector ecosystem.`,
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
    <div className="min-h-dvh bg-[#f7f5ef] text-[#10243d]">
      <TopBar />
      <Header />

      <PageHero
        eyebrow="Management Board"
        breadcrumb="Our Members"
        imageSrc={MEMBERS_HERO_IMAGE}
        imageAlt="Management board members during a formal procurement strategy session."
        imagePosition="50% 35%"
        title={
          <>
            Our <em className="text-[#f2cb79] not-italic">members.</em>
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
              <ExpandableBio
                text={l.bio}
                textClassName={`text-lg ${t.textMuted} leading-relaxed mb-4 whitespace-pre-line`}
                buttonClassName={`inline-flex items-center text-[11px] font-mono uppercase tracking-[0.18em] mb-8 ${
                  t.tone === "dark"
                    ? "text-[#2f5f8a] hover:text-[#24415f]"
                    : "text-[#8b6c2d] hover:text-[#755a22]"
                }`}
              />
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

function ExpandableBio({
  text,
  textClassName,
  buttonClassName,
  collapsedChars = 860,
}: {
  text: string;
  textClassName: string;
  buttonClassName: string;
  collapsedChars?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = text.length > collapsedChars;
  const visibleText =
    expanded || !shouldTruncate ? text : `${text.slice(0, collapsedChars).trimEnd()}...`;

  return (
    <>
      <p className={textClassName}>{visibleText}</p>
      {shouldTruncate && (
        <button type="button" onClick={() => setExpanded((v) => !v)} className={buttonClassName}>
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
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
          Supply Overview
        </Link>
      </div>
    </>
  );
}
