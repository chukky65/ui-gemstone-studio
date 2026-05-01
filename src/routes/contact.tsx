import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TopBar } from "@/components/site/TopBar";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionFlow, SectionHeading, useToneTokens } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact GDSP — Ghana Development Supply Projects" },
      {
        name: "description",
        content:
          "Get in touch with GDSP. Head office in Sekondi-Takoradi, Ghana. Phone, email and enquiry form for suppliers, investors and partners.",
      },
      { property: "og:title", content: "Contact GDSP" },
      {
        property: "og:description",
        content: "Suppliers, investors and partners — our team responds within 2 business days.",
      },
    ],
  }),
});

const ENQUIRY_TYPES = [
  "Supplier Registration",
  "Investment / Partnership",
  "Healthcare Supply",
  "Infrastructure Project",
  "Agricultural Supply",
  "Agent Accreditation",
  "General Enquiry",
  "Other",
];

const COUNTRIES = [
  "Ghana",
  "Nigeria",
  "South Africa",
  "Angola",
  "Ivory Coast",
  "Senegal",
  "Kenya",
  "United Kingdom",
  "United States",
  "China",
  "Other",
];

function ContactPage() {
  return (
    <div className="min-h-dvh bg-night text-bone">
      <TopBar />
      <Header />

      <PageHero
        eyebrow="Get In Touch"
        breadcrumb="Contact Us"
        title={
          <>
            Contact <em className="text-gold not-italic">GDSP.</em>
          </>
        }
        intro="Whether you are a supplier, investor, partner organisation or member of the public — we welcome your enquiry. Our team is ready to assist you."
      />

      {/* Contact info — bright white-gold strip */}
      <section className="gdsp-bright-band border-b border-night/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-night/15">
          <div className="p-6 sm:p-10">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-clay mb-5">
              Mail Address
            </div>
            <h3 className="font-display text-2xl mb-3 text-night">Physical Address</h3>
            <address className="not-italic text-night/70 leading-relaxed text-sm">
              F507/2 Nmetsobu Street
              <br />
              Near Simbins Furniture
              <br />
              Sekondi, Takoradi
              <br />
              W/R, Republic of Ghana
            </address>
          </div>
          <div className="p-6 sm:p-10">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-clay mb-5">
              Contact Information
            </div>
            <div className="space-y-5">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-night/45 mb-1">
                  Phone
                </div>
                <a
                  href="tel:+233561195994"
                  className="font-display text-xl hover:text-clay text-night"
                >
                  +233 (0) 561 195 994
                </a>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-night/45 mb-1">
                  Official Email
                </div>
                <a
                  href="mailto:info@ghsupplyprojects.org"
                  className="text-night hover:text-clay break-all"
                >
                  info@ghsupplyprojects.org
                </a>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-night/45 mb-1">
                  Project Email
                </div>
                <a
                  href="mailto:ghdevelopmentsupplyproject@gmail.com"
                  className="text-night hover:text-clay break-all text-sm"
                >
                  ghdevelopmentsupplyproject@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-10">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-clay mb-5">
              Office Hours
            </div>
            <ul className="space-y-3 text-sm text-night">
              <li className="flex justify-between border-b border-night/15 pb-3">
                <span>Mon — Fri</span>
                <span className="text-clay">8:00 AM — 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-night/15 pb-3">
                <span>Saturday</span>
                <span className="text-night/70">9:00 AM — 1:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-night/15 pb-3">
                <span>Sunday</span>
                <span className="text-night/45">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Public Holidays</span>
                <span className="text-night/45">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SectionFlow start="light">
        <Section atmosphere="spot">
          <FormBlock />
        </Section>
        <Section padding="tight">
          <LocationBlock />
        </Section>
      </SectionFlow>

      <Footer />
    </div>
  );
}

function FormBlock() {
  const t = useToneTokens();
  const [sent, setSent] = useState(false);
  const focusClass =
    t.tone === "dark"
      ? "focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/35"
      : "focus-visible:border-clay focus-visible:ring-2 focus-visible:ring-clay/35";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <SectionHeading eyebrow="Send Us a Message">
          We respond within <em className={`${t.accent} not-italic`}>2 business days.</em>
        </SectionHeading>
        <p className={`mt-6 ${t.textMuted} leading-relaxed`}>
          Complete the form and our team will review your enquiry. For supplier registrations please
          be ready to share your company details and quotation invoice.
        </p>
      </div>

      <div className="lg:col-span-7">
        {sent ? (
          <div className={`border ${t.accentBorder} p-8 sm:p-12 text-center ${t.softCardBg}`}>
            <div
              className={`size-16 mx-auto mb-6 border-2 ${t.accentBorder} rounded-full flex items-center justify-center ${t.accent} text-3xl`}
            >
              ✓
            </div>
            <h3 className={`font-display text-3xl mb-3 ${t.text}`}>Message Sent Successfully</h3>
            <p className={`${t.textMuted} mb-8`}>
              Thank you for reaching out to GDSP. A member of our team will review your enquiry and
              respond within 2 business days.
            </p>
            <button
              onClick={() => setSent(false)}
              className={`${t.btnGhost} px-6 py-3 text-[11px] font-mono uppercase tracking-widest transition-colors`}
            >
              Send Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className={`border ${t.border} p-8 lg:p-10 ${t.softCardBg} backdrop-blur-sm space-y-6`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="First Name *"
                name="firstName"
                required
                tone={t}
                focusClass={focusClass}
              />
              <Field
                label="Last Name *"
                name="lastName"
                required
                tone={t}
                focusClass={focusClass}
              />
              <Field
                label="Email Address *"
                name="email"
                type="email"
                required
                tone={t}
                focusClass={focusClass}
              />
              <Field label="Phone Number" name="phone" tone={t} focusClass={focusClass} />
              <Field label="Organisation / Company" name="org" tone={t} focusClass={focusClass} />
              <Select
                label="Country / Region"
                name="country"
                options={["Select your country", ...COUNTRIES]}
                tone={t}
                focusClass={focusClass}
              />
            </div>
            <Select
              label="Enquiry Type *"
              name="enquiry"
              options={["Select the nature of your enquiry", ...ENQUIRY_TYPES]}
              required
              tone={t}
              focusClass={focusClass}
            />
            <div>
              <label
                htmlFor="message"
                className={`block text-[10px] font-mono uppercase tracking-[0.3em] ${t.textMuted} mb-2`}
              >
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`w-full ${t.cardBg} border ${t.border} ${t.text} p-4 ${focusClass} focus-visible:outline-none resize-none`}
              />
            </div>
            <label className={`flex items-start gap-3 text-xs ${t.textMuted} cursor-pointer`}>
              <input
                type="checkbox"
                required
                className={`mt-1 ${t.tone === "dark" ? "accent-gold" : "accent-clay"}`}
              />
              <span>
                I agree that GDSP may contact me regarding my enquiry. I have read and accept the
                Privacy Policy and Terms of Use.
              </span>
            </label>
            <button
              type="submit"
              className={`w-full ${t.btnPrimary} px-7 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors`}
            >
              Send Enquiry →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function LocationBlock() {
  const t = useToneTokens();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5">
        <SectionHeading eyebrow="Our Location">
          Find us in <em className={`${t.accent} not-italic`}>Takoradi.</em>
        </SectionHeading>
        <p className={`mt-6 ${t.textMuted} leading-relaxed mb-8`}>
          We are located in Sekondi-Takoradi, Ghana's industrial capital and a key hub for West
          African trade.
        </p>
        <div className={`border ${t.border} p-6 ${t.cardBg} mb-6`}>
          <div className={`text-[10px] font-mono uppercase tracking-widest ${t.accent} mb-3`}>
            GDSP Head Office
          </div>
          <address className={`not-italic ${t.textMuted} leading-relaxed text-sm`}>
            Ghana Development Supply Projects
            <br />
            F507/2 Nmetsobu Street
            <br />
            Near Simbins Furniture
            <br />
            Sekondi, Takoradi · W/R, Ghana
          </address>
        </div>
        <a
          href="https://maps.google.com/?q=Sekondi-Takoradi,Ghana"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-3 ${t.btnPrimary} px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full sm:w-auto`}
        >
          Get Directions →
        </a>
      </div>
      <div className="lg:col-span-7">
        <div className={`aspect-[4/3] relative border ${t.border} ${t.cardBg} overflow-hidden`}>
          <div
            className={`absolute inset-0 ${t.tone === "dark" ? "gdsp-grid" : "gdsp-light-grid"} opacity-50`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                className={`size-20 mx-auto border-2 ${t.accentBorder} rounded-full flex items-center justify-center mb-4`}
              >
                <div
                  className={`size-3 ${t.tone === "dark" ? "bg-gold" : "bg-clay"} rounded-full animate-pulse`}
                />
              </div>
              <div className={`font-display text-3xl ${t.accent} mb-2`}>Sekondi-Takoradi</div>
              <div className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.textMuted}`}>
                Western Region · Republic of Ghana
              </div>
            </div>
          </div>
          <div
            className={`absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest ${t.accent} opacity-60`}
          >
            04°53′N · 01°45′W
          </div>
          <div
            className={`absolute bottom-4 right-4 text-[10px] font-mono uppercase tracking-widest ${t.accent} opacity-60`}
          >
            GDSP HQ
          </div>
        </div>
      </div>
    </div>
  );
}

type ToneTokens = ReturnType<typeof useToneTokens>;

function Field({
  label,
  name,
  type = "text",
  required,
  tone,
  focusClass,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  tone: ToneTokens;
  focusClass: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className={`block text-[10px] font-mono uppercase tracking-[0.3em] ${tone.textMuted} mb-2`}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={`w-full ${tone.cardBg} border ${tone.border} ${tone.text} px-4 py-3 ${focusClass} focus-visible:outline-none`}
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required,
  tone,
  focusClass,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  tone: ToneTokens;
  focusClass: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className={`block text-[10px] font-mono uppercase tracking-[0.3em] ${tone.textMuted} mb-2`}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className={`w-full ${tone.cardBg} border ${tone.border} ${tone.text} px-4 py-3 ${focusClass} focus-visible:outline-none`}
      >
        {options.map((o, i) => (
          <option key={o} value={i === 0 ? "" : o} disabled={i === 0}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
