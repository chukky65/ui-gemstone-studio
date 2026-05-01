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
      { title: "Our Members — GDSP Management Board" },
      {
        name: "description",
        content:
          "Meet the GDSP management board: Project Director, Assistant Director, six Evaluation Members and Administrative Staff guiding procurement for Ghana and West Africa.",
      },
      { property: "og:title", content: "Our Members — GDSP" },
      {
        property: "og:description",
        content:
          "A board of seasoned professionals in procurement, law, finance and development guiding GDSP.",
      },
    ],
  }),
});

const LEADERS = [
  {
    i: "KO",
    role: "Projects Director",
    name: "Dr. Kennedy Ofori",
    title: "Ph.D · DFID UK Senior Procurement Specialist",
    creds: ["Ph.D", "MBA", "BSc", "MCIPS"],
    bio: "Dr. Kennedy Ofori is a DFID UK Senior Procurement Specialist currently on secondment to GDSP. He held various procurement positions in the National Health Service from 1990 to 1999, before joining the Department for International Development in 1999 as a Procurement Adviser working across multiple offices in Africa. He has contributed significantly to development in Ghana, Sierra Leone, South Africa, Tanzania, Zambia, Uganda, Zimbabwe, Vietnam and Pakistan.",
    facts: [
      { l: "NHS Experience", v: "1990 — 1999" },
      { l: "DFID Joined", v: "1999" },
      { l: "Countries Served", v: "9+ Nations" },
      { l: "Specialisation", v: "Strategic Procurement" },
    ],
  },
  {
    i: "SA",
    role: "Assistant Director",
    name: "Mr. Sam Adams",
    title: "Lawyer · CPA · Chartered Accountant · Former MP",
    creds: ["BBA", "CPA", "CA", "LLB"],
    bio: "Mr. Sam Adams is a Lawyer by profession. He holds a Bachelor of Business Administration (Accounting Major) from the Wharton Business School, University of Pennsylvania (1977), is a member of the AICPA (1979), the Institute of Chartered Accountants Ghana (1993) and the Ghana Institute of Taxation (1986). He served as Member of Parliament for Upper West Akin Constituency for four years and as Executive Secretary to the Revenue Agencies Governing Board.",
    facts: [
      { l: "Wharton School", v: "BBA 1977" },
      { l: "CPA", v: "AICPA 1979" },
      { l: "Parliament", v: "4 Years MP" },
      { l: "IMF / World Bank", v: "Oversight Cmte" },
    ],
  },
  {
    i: "SO",
    role: "Administrative Staff",
    name: "Miss. Sophia Osei",
    title: "MSc · MA · Aid & Debt Management Specialist",
    creds: ["MSc", "MA", "BA (Hons)"],
    bio: "Miss Sophia Osei holds a Master's degree (MSc) in Secretary Management from the School of Oriental and African Studies, University of London, and a Master's degree (MA) in Economic Policy Management from the University of Ghana. She has specialised in aid and debt management techniques that enhance aid effectiveness, and has consulted for several organisations and countries including the Commonwealth Secretariat.",
    facts: [
      { l: "SOAS London", v: "MSc Sec. Mgmt" },
      { l: "Univ. of Ghana", v: "MA Econ. Policy" },
      { l: "Specialisation", v: "Aid & Debt Mgmt" },
      { l: "Languages", v: "English & French" },
    ],
  },
];

const EVALUATION = [
  {
    i: "OA",
    n: "Mrs. Olivia Amankwah",
    r: "Evaluation Member",
    d: "Has worked in both the USA and Ghana, bringing several years of cross-border experience. One of her prime responsibilities is the supervision of Value for Money Audits on single-sourced contracts under Ghana's Procurement laws.",
    tags: ["Value for Money Audits", "Procurement Law", "USA & Ghana"],
  },
  {
    i: "FK",
    n: "Dr. Frimpong Kobby",
    r: "Evaluation Systems Specialist",
    d: "Specialist in Evaluation Systems for GDSP. Held numerous positions in procurement service from 1993 to 2000. Holds a BSc in Development Planning and an MBA specialising in Strategic Planning and Procurement.",
    tags: ["Evaluation Systems", "Strategic Planning", "MCIPS"],
  },
  {
    i: "GA",
    n: "Gabriel Atta",
    r: "Evaluation Member",
    d: "Serves as an evaluation member on the GDSP board, contributing expertise to the assessment and verification of procurement processes in line with Ghana's public procurement laws.",
    tags: ["Procurement Evaluation", "Contract Assessment"],
  },
  {
    i: "JM",
    n: "Mr. Joe Mensah",
    r: "Evaluation Member",
    d: "Brings sector-level expertise to GDSP's evaluation committee, participating in the fair and transparent assessment of suppliers, contracts and development programmes.",
    tags: ["Supplier Assessment", "Programme Review"],
  },
  {
    i: "MA",
    n: "Dr. Michael Atanda",
    r: "Evaluation Member",
    d: "Brings academic and professional credentials to the oversight of procurement procedures. His role encompasses the review and validation of project eligibility, supplier standards and contract compliance.",
    tags: ["Contract Compliance", "Supplier Standards"],
  },
  {
    i: "JA",
    n: "Rev. Joseph Adechem (Rtd)",
    r: "Evaluation Member (Rtd)",
    d: "Retired member of GDSP's evaluation committee, whose experience in governance, ethics and institutional oversight continues to inform the commission's standards of integrity and impartiality.",
    tags: ["Governance", "Institutional Ethics", "Retired"],
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
        intro="Meet the dedicated professionals guiding GDSP — a management board of experienced specialists in procurement, law, finance, evaluation and development."
      />

      <section className="gdsp-bright-band border-b border-night/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-night/15">
          {[
            { v: "1", l: "Project Director" },
            { v: "1", l: "Assistant Director" },
            { v: "6", l: "Evaluation Members" },
            { v: "—", l: "Administrative Staff" },
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
        Our board brings together seasoned professionals from across the public and private sectors
        — united by a shared commitment to transparent, accountable and effective procurement for
        Ghana and West Africa.
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
        GDSP's evaluation team brings together experienced specialists in procurement, finance, law
        and development — responsible for the fair, transparent and expert assessment of all supply
        contracts and programmes.
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
        Work With GDSP
      </div>
      <h2
        className={`font-display text-4xl sm:text-5xl md:text-7xl mb-8 max-w-4xl mx-auto leading-[0.95] ${t.text}`}
      >
        Interested in partnering or <em className={`${t.accent} not-italic`}>supplying?</em>
      </h2>
      <p className={`${t.textMuted} max-w-2xl mx-auto mb-10 leading-relaxed`}>
        Our board and evaluation team are ready to assess your proposal. Whether you are a supplier,
        investor or development partner, GDSP provides a fair and structured pathway to engagement.
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
