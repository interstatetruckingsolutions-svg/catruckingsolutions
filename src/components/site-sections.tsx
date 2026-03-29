import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import {
  IconArrowUp,
  IconBolt,
  IconHandshake,
  IconLayers,
  IconShield,
} from "@/components/icons";

const processSteps = [
  "Request quote",
  "Submit docs",
  "We file",
  "Plates & insurance",
  "On the road with peace of mind",
];

export function HomeHero() {
  return (
    <section className="border-b border-slate-200 bg-white" aria-labelledby="hero-title">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex w-full max-w-lg shrink-0 justify-center lg:justify-start">
            <Image
              src="/logo.png"
              alt="CA Trucking Solutions — IRP, IFTA, and insurance compliance"
              width={560}
              height={267}
              className="h-auto w-full max-w-lg object-contain"
              priority
            />
          </div>
          <div className="min-w-0 flex-1 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
              California · IRP · IFTA · Insurance
            </p>
            <h1
              id="hero-title"
              className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.35rem] lg:leading-tight"
            >
              CA Trucking Solutions – IRP &amp; Insurance Compliance Made Easy
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Streamline your{" "}
              <strong className="font-semibold text-brand-navy">California IRP registration</strong>
              ,{" "}
              <strong className="font-semibold text-brand-navy">IFTA fuel tax compliance</strong>, and{" "}
              <strong className="font-semibold text-brand-navy">trucking insurance</strong>
              —all in one place. Get in compliance today with friendly, hassle-free service tailored for
              California truckers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-orange/90"
              >
                Get in compliance today
              </Link>
              <a
                href="tel:+18001238785"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand-navy bg-transparent px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                Call (800) 123-TRUCK
              </a>
            </div>
          </div>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-3" role="list">
          <li className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-left shadow-sm">
            <p className="text-sm font-bold text-brand-orange">CA experts</p>
            <p className="mt-1 text-sm text-slate-600">
                  IRP registration &amp; insurance specialists
            </p>
          </li>
          <li className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-left shadow-sm">
            <p className="text-sm font-bold text-brand-orange">Fast</p>
            <p className="mt-1 text-sm text-slate-600">Same-day DMV processing available</p>
          </li>
          <li className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-left shadow-sm">
            <p className="text-sm font-bold text-brand-orange">One call</p>
            <p className="mt-1 text-sm text-slate-600">IRP, IFTA, BOC-3 &amp; liability in one place</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section id="why" className="bg-slate-50 py-16 sm:py-20" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
          Why CA Trucking Solutions?
        </p>
        <h2
          id="why-heading"
          className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl"
        >
          We know interstate trucking is tough enough without paperwork headaches
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          At CA Trucking Solutions, we speak your language and handle the details—so you can focus on
          miles, not mailrooms.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy">
              <IconShield className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-brand-navy">California experts</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  IRP registration and insurance specialists who know{" "}
              <abbr title="California Department of Motor Vehicles" className="no-underline">
                DMV
              </abbr>{" "}
              and{" "}
              <abbr title="Federal Motor Carrier Safety Administration" className="no-underline">
                FMCSA
              </abbr>{" "}
              rules inside out. Less guesswork, fewer surprise fines.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
              <IconBolt className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-brand-navy">Fast turnaround</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Same-day DMV processing available and quick insurance quotes—so you can get rolling
              sooner.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy">
              <IconHandshake className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-brand-navy">Friendly support</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Step-by-step guidance. Questions? Call or text our team—no robotic voicemail mazes.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
              <IconLayers className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-brand-navy">All-in-one compliance</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              From apportioned plates (IRP) to fuel tax (IFTA) to liability insurance—bundled so you only
              make one call.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Services we offer</p>
        <h2
          id="services-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl"
        >
          Full-service compliance for California truckers
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">Our suite keeps your fleet compliant and road-ready.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: "irp",
              title: "IRP registration & renewal",
              body: "Apportioned California plates and cab cards for interstate operation. We calculate fees (mileage, weight, VLF) and submit your application.",
            },
            {
              id: "ifta",
              title: "IFTA fuel tax account",
              body: "California IFTA account setup and decals for fuel tax reporting. We help structure quarterly filing so you avoid penalties.",
            },
            {
              id: "insurance",
              title: "Trucking insurance",
              body: "Commercial auto and cargo insurance: liability, motor truck cargo, physical damage, and more. We compare carriers for competitive rates and solid coverage.",
            },
            {
              id: "dot-mc",
              title: "DOT & MC numbers",
              body: "USDOT number registration and updates with FMCSA, plus MC (operating authority) applications and changes when you need interstate for-hire authority. We walk you through requirements and filings.",
            },
            {
              id: "compliance-consulting",
              title: "Compliance audits & consulting",
              body: "Driver logs, maintenance, fuel reports—we help you maintain records and prepare for DMV, IFTA and DOT audits. Goal: zero surprises on inspection day.",
            },
            {
              id: "boc-3",
              title: "Process agent (BOC-3)",
              body: "We file your FMCSA BOC-3 so you have a legal agent in every state you run—helping keep operating authority active.",
            },
          ].map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-28 rounded-2xl border border-slate-100 bg-slate-50/80 p-6 transition hover:border-slate-200 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-brand-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">How it works</p>
        <h2
          id="how-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl"
        >
          Friendly onboarding, clear steps
        </h2>
        <ol className="mt-10 space-y-4">
          {[
            {
              n: "1",
              t: "Quick quote & consult",
              d: "Tell us about your truck(s)—year, weight, and lanes. We provide a clear estimate for IRP and insurance services.",
            },
            {
              n: "2",
              t: "Document checklist",
              d: "We email a simple list: DMV forms, MC/USDOT numbers, titles, proof of insurance details—we handle most of the legwork.",
            },
            {
              n: "3",
              t: "We do the filing",
              d: "Our team submits online and by mail, pays IRP fees, and pursues your CA plates. You get updates at every step.",
            },
            {
              n: "4",
              t: "Receive credentials",
              d: "Within days—often the same week—you receive apportioned plates, cab card, IFTA decals, and insurance documents. Then you’re cleared to roll.",
            },
            {
              n: "5",
              t: "Ongoing support",
              d: "Before renewals or IFTA quarters, we remind you. We can handle annual IRP and insurance renewals so deadlines don’t slip.",
            },
          ].map((step) => (
            <li
              key={step.n}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/15 text-sm font-bold text-brand-orange">
                {step.n}
              </span>
              <div>
                <p className="font-semibold text-brand-navy">{step.t}</p>
                <p className="mt-1 text-sm text-slate-600">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <h3 className="mt-12 text-center text-sm font-semibold text-brand-navy">
          From quote to on-road peace of mind
        </h3>
        <ul className="mt-4 flex list-none flex-wrap items-center justify-center gap-x-2 gap-y-3 rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm">
          {processSteps.map((label, i) => (
            <li key={label} className="flex items-center gap-2">
              <span
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold sm:text-sm ${
                  i === processSteps.length - 1
                    ? "bg-brand-orange/15 text-brand-orange ring-1 ring-brand-orange/30"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {label}
              </span>
              {i < processSteps.length - 1 ? (
                <span className="text-slate-400 select-none" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-20" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Pricing & packages</p>
        <h2
          id="pricing-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl"
        >
          Transparent tiers—tailored to your fleet
        </h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          Typical costs depend on fleet size, weight, miles, and coverage. Heavier trucks and longer
          hauls usually mean higher IRP fees—we customize to your budget and goals. Sample figures are
          illustrations, not binding quotes.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
            <h3 className="text-xl font-bold text-brand-navy">Entry package</h3>
            <p className="mt-1 text-sm text-slate-500">Owner-operators & single trucks</p>
            <ul className="mt-6 flex-1 list-inside list-disc space-y-2 text-sm text-slate-600">
              <li>Basic IRP setup</li>
                  <li>IFTA account setup</li>
              <li>Liability insurance assistance</li>
            </ul>
            <p className="mt-6 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <strong className="text-brand-navy">Sample:</strong> ~$400 IRP fees + ~$1,000/yr insurance
              ($750K liability)—varies widely.
            </p>
          </article>
          <article className="relative flex flex-col rounded-2xl border-2 border-brand-orange bg-white p-8 shadow-lg ring-1 ring-brand-orange/20">
            <span className="absolute right-6 top-6 rounded-md bg-brand-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
              Popular
            </span>
            <h3 className="pr-20 text-xl font-bold text-brand-navy">Mid package</h3>
            <p className="mt-1 text-sm text-slate-500">Small fleets (2–5 trucks)</p>
            <ul className="mt-6 flex-1 list-inside list-disc space-y-2 text-sm text-slate-600">
              <li>Everything in Entry</li>
              <li>Cargo insurance support</li>
              <li>Annual record review</li>
            </ul>
            <p className="mt-6 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <strong className="text-brand-navy">Sample:</strong> ~$800 IRP/fees + ~$2,500/yr bundled
              insurance—illustrative only.
            </p>
          </article>
          <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
            <h3 className="text-xl font-bold text-brand-navy">Premium package</h3>
            <p className="mt-1 text-sm text-slate-500">Larger fleets & high-value freight</p>
            <ul className="mt-6 flex-1 list-inside list-disc space-y-2 text-sm text-slate-600">
              <li>Full-service compliance</li>
              <li>Unlimited IRP amendments (plan terms)</li>
              <li>High-limit coverage & priority support</li>
            </ul>
            <p className="mt-6 border-t border-slate-200 pt-6 text-sm font-medium text-brand-navy">
              Custom pricing after consult.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section id="trust" className="bg-slate-50 py-16 sm:py-20" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Trust & testimonials</p>
        <h2
          id="trust-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl"
        >
          Trusted, reviewed, transparent
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-navy">
              <IconShield className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-semibold text-brand-navy">Experienced compliance support</h3>
            <p className="mt-2 text-sm text-slate-600">
              We help California carriers with IRP, IFTA, and insurance paperwork. We are not affiliated
              with or endorsed by the DMV, FMCSA, or any government agency.
            </p>
          </article>
          <blockquote className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-orange">
              <IconArrowUp className="h-7 w-7" />
            </div>
            <p className="mt-4 text-base italic leading-relaxed text-brand-navy">
              “CA Trucking Solutions got me my plates and insurance in two days flat. No headache—just
              good, friendly service!”
            </p>
            <footer className="mt-3 text-sm text-slate-500">— Jake R., owner-operator</footer>
          </blockquote>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-brand-navy">Carriers who rely on us</h3>
            <p className="mt-2 text-sm text-slate-600">
              Local fleets, owner-operators, and logistics companies use us for ongoing IRP, IFTA, and
              insurance.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-brand-navy">Secure & upfront</h3>
            <p className="mt-2 text-sm text-slate-600">
              Fees and policy details disclosed clearly. Secure forms and strict confidentiality.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">FAQs</p>
        <h2
          id="faq-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl"
        >
          Common questions
        </h2>
        <div className="mt-8 space-y-3">
          {[
            {
              q: "Do I really need IRP plates if I haul interstate?",
              a: "Yes—qualified vehicles operating across member jurisdictions generally need IRP apportioned registration. Running without proper credentials can lead to fines or being placed out of service. We make California IRP straightforward.",
            },
            {
              q: "What insurance do I legally need?",
              a: "Many for-hire trucks over 10,000 lbs need at least $750,000 in liability per FMCSA. Shippers often require $100,000 or more in cargo coverage. We walk you through statutory minimums versus what your customers demand.",
            },
            {
              q: "How long does the process take?",
              a: "Typically 3–7 business days after we receive complete documents. Temporary plates or credentials may be available in 1–2 days when eligible.",
            },
            {
              q: "Can I pay month-to-month?",
              a: "We accept credit cards and can discuss financing for insurance premiums. Ask us about payment plans.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="rounded-xl border border-slate-200 bg-slate-50/50 open:bg-white open:shadow-sm [&[open]_span.faq-chevron]:rotate-45"
            >
              <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-brand-navy [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="faq-chevron inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-lg font-light text-brand-orange transition-transform duration-200">
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-slate-100 px-5 pb-4 pt-0">
                <p className="pt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReadyCtaSection() {
  return (
    <section
      id="ready"
      className="border-t border-slate-200 bg-brand-navy py-16 text-center sm:py-20"
      aria-labelledby="ready-heading"
    >
      <div className="mx-auto max-w-2xl px-4">
        <h2 id="ready-heading" className="text-2xl font-bold text-white sm:text-3xl">
          Ready to roll? Get in compliance today
        </h2>
        <p className="mt-4 text-slate-300">
          Join California truckers who trust us for on-the-road compliance—without DMV lines or endless
          email chains.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-orange px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-orange/90 sm:w-auto"
          >
            Get in compliance today
          </Link>
          <a
            href="tel:+18001238785"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Call (800) 123-TRUCK
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-16 sm:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Contact us</p>
        <h2
          id="contact-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl"
        >
          Tell us about your operation
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Fill out the form or call{" "}
          <a href="tel:+18001238785" className="font-semibold text-brand-orange hover:underline">
            (800) 123-TRUCK
          </a>
          . We respect your privacy—information is used only to prepare your compliance setup.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
