import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TopBar } from "@/components/site/TopBar";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionFlow, SectionHeading, useToneTokens } from "@/components/site/Section";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "Our Profile — GDSP" },
      {
        name: "description",
        content:
          "About Ghana Development Supply Projects — established 2014. Our mission, mandate, principles and 23 core operational functions.",
      },
      { property: "og:title", content: "Our Profile — GDSP" },
      {
        property: "og:description",
        content:
          "Established 2014 to provide a legal, institutional and professional framework for public procurement across Ghana and West Africa.",
      },
    ],
  }),
});

const SECTORS = [
  "Peace & Security",
  "Political Affairs",
  "Infrastructure & Energy",
  "Social Development",
  "Women & Gender",
  "Tender Verification",
  "Trade & Industry",
  "Rural Economy",
  "Agriculture",
  "Legal Affairs",
  "Human Resources",
  "Science & Technology",
];

const MILESTONES = [
  {
    y: "2014",
    t: "GDSP Established",
    d: "Founded as a centralised procurement agency for the Government of Ghana, providing legal and institutional framework for public procurement.",
  },
  {
    y: "Jul 2020",
    t: "Project Financing Summit (PFS)",
    d: "Key stakeholders mobilised to accelerate implementation of PIDA — including DFIs, private equity investors, infrastructure funds, commercial banks and pension funds.",
  },
  {
    y: "Nov 2020",
    t: "MoU Agreements Signed",
    d: "Agreements signed with donor agencies valued at US$973.6 Million, plus an economic grant of US$756.2 Million to strengthen regional stability.",
  },
  {
    y: "2021—Now",
    t: "16 Strategic PIDA Projects",
    d: "Selected 16 strategic, regionally balanced projects from the PIDA Priority Action Plan to drive implementation across the project development cycle.",
  },
  {
    y: "2030",
    t: "Ghana Vision 2030",
    d: "Committed to Ghana's Year-2030 Vision — accelerating infrastructure, promoting ethical tendering, and building a competitive, integrated African economy.",
  },
];

const VALUES = [
  {
    t: "Respect for Diversity & Teamwork",
    d: "Honouring the full spectrum of perspectives and working collaboratively across borders, cultures and disciplines to achieve shared goals.",
  },
  {
    t: "Think Africa Above All",
    d: "Every decision, programme and partnership is evaluated through the lens of what benefits Africa and its people most broadly and sustainably.",
  },
  {
    t: "Transparency & Accountability",
    d: "Operating openly, reporting honestly and holding ourselves to the highest standards of accountability in every procurement and programme we manage.",
  },
  {
    t: "Integrity & Impartiality",
    d: "Upholding ethical conduct in every evaluation, contract and relationship — treating all suppliers, partners and stakeholders fairly and without bias.",
  },
  {
    t: "Efficiency & Professionalism",
    d: "Delivering value through streamlined processes, skilled personnel and a commitment to continuous improvement across all operational areas.",
  },
  {
    t: "Information & Knowledge Sharing",
    d: "Fostering a culture of open communication where market intelligence, research and operational knowledge flow freely to inform better decisions.",
  },
];

const PRINCIPLES = [
  "Subsidiary and complementarity with other Organs, Member States and Regional Economic Communities (RECs).",
  "Results orientation, feasibility and impact focus — ensuring every programme delivers measurable real-world outcomes.",
  "Close coordination and cooperation with the Regional Economic Communities across West Africa and the broader continent.",
  "Coherence of policies and programmes — aligning all activities with national, regional and continental development strategies.",
  "A networking approach that takes full advantage of available resources through collaboration with other players and institutions.",
];

const MANDATES = [
  {
    t: "International Relations",
    d: "To develop and maintain constructive and productive institutional relationships between Africa and the rest of the world, and to coordinate the mobilisation of extra-budgetary resources.",
  },
  {
    t: "Strategic Planning & Evaluation",
    d: "To ensure inter-departmental coordination in strategic planning, continuous monitoring and evaluation of programme outputs against action plans, and to assess the efficiency and effectiveness of programmes in realising organisational goals.",
  },
  {
    t: "Research & Statistics",
    d: "To provide and maintain research and statistical services catering for the needs of the entire Commission, other Organs of the Union, RECs and Member States — ensuring data-driven decision making.",
  },
];

const FUNCTIONS = [
  "Prepare rules and procedures for policy formulation, coordination and evaluation.",
  "Promote internal best practices concerning strategic planning, monitoring projects and evaluation.",
  "Survey and propose overall operational priorities of the Commission to guide effective resource allocation.",
  "Assist Directorates and Offices to develop strategic planning skills and institutional capacity.",
  "Organise coordination meetings on policy formulation and strategic planning across departments.",
  "Lead and provide support for sectorial research projects, and ensure their effective implementation.",
  "Develop and manage Research and Statistics Services for the Union and member institutions.",
  "Prepare the Annual Report of the Commission to ensure accountability and transparency.",
  "Produce an approved annual statement on general orientations and priorities relating to operational programmes.",
  "Propose training programmes relating to programme designing and programme coordination.",
  "Ensure that the Statistics Unit is accessible to all Organs and Member States with updated information.",
  "Design and implement monitoring and evaluation procedures for assessing programme achievements.",
  "Strengthen existing relations and develop relations with other world regions for mutual cooperation.",
  "Seek new areas of cooperation with international partners to expand GDSP's reach and impact.",
  "Promote a positive image of Africa within the international arena through engagement.",
  "Popularise the African Union and market its programmes and activities to a wider global audience.",
  "Initiate, develop and manage policy for international cooperation and resource mobilisation.",
  "Coordinate and develop strategies for resource mobilisation aligned with organisational priorities.",
  "Coordinate the process of proposal and project formulation for new programmes and initiatives.",
  "Coordinate the process of project and programme monitoring and evaluation throughout the lifecycle.",
  "Develop an outline for progress reports to ensure consistent and transparent performance tracking.",
  "Initiate, develop and manage strategies for sustainability, self-financing, income generation and investment.",
  "Facilitate logistical support to coordinate interaction with partners, donors and member institutions.",
];

function ProfilePage() {
  return (
    <div className="min-h-dvh bg-night text-bone">
      <TopBar />
      <Header />

      <PageHero
        eyebrow="About GDSP"
        breadcrumb="Our Profile"
        title={
          <>
            Our <em className="text-gold not-italic">profile.</em>
          </>
        }
        intro="Ghana Development Supply Projects was established to provide a legal, institutional and professional framework for public procurement — serving the people of Ghana and the West African sub-region with accountability and integrity."
      />

      {/* Quick stats — bright white-gold strip */}
      <section className="gdsp-bright-band border-b border-night/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-night/15">
          {[
            { v: "2014", l: "Established" },
            { v: "12+", l: "Sectors Served" },
            { v: "23", l: "Core Functions" },
            { v: "2030", l: "Vision Year" },
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
          <MilestonesBlock />
        </Section>
        <Section atmosphere="spot">
          <MissionBlock />
        </Section>
        <Section padding="tight">
          <PrinciplesBlock />
        </Section>
        <Section atmosphere="grid">
          <FunctionsBlock />
        </Section>
        <Section>
          <CommitmentBlock />
        </Section>
      </SectionFlow>

      <Footer />
    </div>
  );
}

function AboutBlock() {
  const t = useToneTokens();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="About GDSP">
            Established to serve <em className={`${t.accent} not-italic`}>Ghana & West Africa.</em>
          </SectionHeading>
        </div>
        <div className={`lg:col-span-7 space-y-5 text-lg ${t.textMuted} leading-relaxed`}>
          <p>
            The Ghana Development Supply Project (GDSP) was originally established in 2014 as a
            centralised procurement agency for the Government of Ghana — to carry out the
            responsibility of Government Supply Orders and provide a legal, institutional and
            professional framework for public procurement.
          </p>
          <p>
            Infrastructure development is a key driver for progress across the African continent and
            a critical enabler for sustainable and socially inclusive growth. GDSP operates within
            the Program for Infrastructure Development (PIDA) — the strategic framework transforming
            Africa through modern, interconnected infrastructure.
          </p>
          <p>
            We remain committed to supporting Ghana's Year-2030 Vision by accelerating
            infrastructure projects, supporting economic development, and becoming a global
            benchmark for ethical and effective tendering practices.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <div className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.accent} mb-6`}>
          Sectors We Contract For
        </div>
        <div className="flex flex-wrap gap-2">
          {SECTORS.map((s) => (
            <span
              key={s}
              className={`px-4 py-2 border ${t.border} text-sm ${t.text} transition-colors ${
                t.tone === "dark"
                  ? "hover:border-gold hover:text-gold"
                  : "hover:border-clay hover:text-clay"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function MilestonesBlock() {
  const t = useToneTokens();
  return (
    <>
      <SectionHeading eyebrow="Key Milestones" size="xl" className="mb-16">
        A timeline of <em className={`${t.accent} not-italic`}>impact.</em>
      </SectionHeading>
      <div className={`space-y-px ${t.divider} border ${t.border}`}>
        {MILESTONES.map((m, i) => (
          <div
            key={m.y}
            className={`${t.cardBg} p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 ${t.cardBgHover} transition-colors`}
          >
            <div
              className={`lg:col-span-2 text-[10px] font-mono uppercase tracking-widest ${t.textFaint}`}
            >
              {String(i + 1).padStart(2, "0")} / {MILESTONES.length}
            </div>
            <div className={`lg:col-span-3 font-display text-3xl ${t.accent}`}>{m.y}</div>
            <div className="lg:col-span-7">
              <h3 className={`font-display text-2xl mb-2 ${t.text}`}>{m.t}</h3>
              <p className={`${t.textMuted} leading-relaxed`}>{m.d}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function MissionBlock() {
  const t = useToneTokens();
  return (
    <>
      <SectionHeading eyebrow="Mission & Values" size="xl" className="mb-12">
        What guides everything <em className={`${t.accent} not-italic`}>we do.</em>
      </SectionHeading>
      <blockquote
        className={`font-display text-3xl md:text-5xl leading-[1.1] max-w-5xl border-l-2 ${t.accentBorder} pl-8 mb-20 ${t.text}`}
      >
        <span className={t.accent}>"</span>An efficient and value-adding institution driving the
        Ghana integration and development process in close collaboration with African Union Member
        States, the Regional Economic Communities and African citizens.
        <span className={t.accent}>"</span>
      </blockquote>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px ${t.divider} border ${t.border}`}
      >
        {VALUES.map((v, i) => (
          <div key={v.t} className={`${t.cardBg} p-8 group ${t.cardBgHover} transition-colors`}>
            <div
              className={`font-display text-4xl ${t.tone === "dark" ? "text-gold/30 group-hover:text-gold" : "text-clay/40 group-hover:text-clay"} transition-colors mb-4`}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className={`font-display text-2xl mb-3 ${t.text}`}>{v.t}</h3>
            <p className={`${t.textMuted} leading-relaxed text-sm`}>{v.d}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function PrinciplesBlock() {
  const t = useToneTokens();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-6">
        <div className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.accent} mb-6`}>
          Guiding Principles
        </div>
        <h3 className={`font-display text-4xl mb-10 ${t.text}`}>How we operate.</h3>
        <ol className="space-y-6">
          {PRINCIPLES.map((p, i) => (
            <li key={i} className={`flex gap-6 border-b ${t.border} pb-6`}>
              <span className={`font-display text-3xl ${t.accent} tabular-nums shrink-0`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className={`${t.textMuted} leading-relaxed`}>{p}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="lg:col-span-6">
        <div className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.accent} mb-6`}>
          Our Mandate
        </div>
        <h3 className={`font-display text-4xl mb-10 ${t.text}`}>Three pillars.</h3>
        <div className={`space-y-px ${t.divider} border ${t.border}`}>
          {MANDATES.map((m) => (
            <div key={m.t} className={`${t.cardBg} p-8`}>
              <h4 className={`font-display text-2xl mb-3 ${t.text}`}>{m.t}</h4>
              <p className={`${t.textMuted} leading-relaxed text-sm`}>{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FunctionsBlock() {
  const t = useToneTokens();
  return (
    <>
      <SectionHeading eyebrow="Core Functions" size="xl">
        23 operational <em className={`${t.accent} not-italic`}>functions.</em>
      </SectionHeading>
      <p className={`mt-6 ${t.textMuted} max-w-3xl mb-16 leading-relaxed`}>
        The following functions define how GDSP delivers on its mandate — from policy formulation
        and strategic planning to international cooperation, resource mobilisation and programme
        evaluation.
      </p>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px ${t.divider} border ${t.border}`}
      >
        {FUNCTIONS.map((f, i) => (
          <div key={i} className={`${t.cardBg} p-6 group ${t.cardBgHover} transition-colors`}>
            <div
              className={`text-[10px] font-mono uppercase tracking-widest ${t.accent} mb-3 tabular-nums`}
            >
              Function {String(i + 1).padStart(2, "0")}
            </div>
            <p className={`text-sm ${t.textMuted} leading-relaxed`}>{f}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function CommitmentBlock() {
  const t = useToneTokens();
  return (
    <>
      <SectionHeading eyebrow="Our Commitment" size="xl" className="mb-12">
        Building a better <em className={`${t.accent} not-italic`}>Ghana — together.</em>
      </SectionHeading>
      <div className={`space-y-6 text-lg ${t.textMuted} leading-relaxed max-w-4xl`}>
        <p>
          The Commission will endeavour to fulfil its Mission by developing clear goals and
          strategies. Guided by our values and principles, we commit the requisite resources for
          effective discharge of our mandate — presenting specific proposals that bring new
          possibilities and benefits to the citizens of Africa.
        </p>
        <p>
          Ghana Development Supply Projects is focused on making development projects in Ghana
          easier and more efficient. We believe Ghana can become a global benchmark for ethical and
          effective tendering practices — because together, we can build a better Ghana.
        </p>
        <p className={`${t.textFaint} italic`}>
          A service culture of excellence, developed through consistent application of our values,
          will be the foundation on which GDSP achieves its mission for the next decade and beyond.
        </p>
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/supply"
          className={`${t.btnPrimary} px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center`}
        >
          Explore Supply
        </Link>
        <Link
          to="/contact"
          className={`${t.btnGhost} px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full sm:w-auto text-center`}
        >
          Get in Touch
        </Link>
      </div>
    </>
  );
}
