import Link from "next/link";
import type { ReactNode } from "react";
import { SITE_NAME } from "@/lib/site";

const serviceLinks = [
  { href: "/services#irp", label: "IRP registration" },
  { href: "/services#ifta", label: "IFTA fuel tax" },
  { href: "/services#insurance", label: "Trucking insurance" },
  { href: "/services#dot-mc", label: "DOT & MC numbers" },
  { href: "/services#compliance-consulting", label: "Compliance consulting" },
  { href: "/services#boc-3", label: "BOC-3 process agent" },
];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/why", label: "Why us" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-white">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-16">
          <div className="shrink-0 lg:max-w-[20rem]">
            <p className="font-semibold text-white">{SITE_NAME}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
              California IRP, IFTA, BOC-3, and trucking insurance support—friendly help so you stay
              compliant and on the road.
            </p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/55">
              Private informational site only—not affiliated with or endorsed by any government
              agency.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          <FooterColumn title="Compliance services">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-medium text-brand-orange/90 hover:text-brand-orange">
                All services →
              </Link>
            </li>
          </FooterColumn>
          <FooterColumn title="Company">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn title="Legal">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
          </div>
        </div>
        <div className="mt-12 space-y-4 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/55">
          <p className="text-sm text-white/70">© 2026 {SITE_NAME}. All rights reserved.</p>
          <p>
            This website is privately owned and the services offered are not provided by or endorsed
            by the California Department of Motor Vehicles (DMV) or any state or federal government
            agency.
          </p>
          <p>
            This site provides general information—not legal advice. Insurance products and IRP
            outcomes depend on underwriting, DMV, and FMCSA rules at the time of application.
          </p>
        </div>
      </div>
    </footer>
  );
}
