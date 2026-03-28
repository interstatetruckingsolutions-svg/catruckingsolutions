import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          <div>
            <p className="font-semibold text-white">CA Trucking Solutions</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed">
              Licensed by the California DMV for IRP services; errors &amp; omissions coverage
              maintained. Clients should retain copies of all filings—we provide a digital packet
              of documents submitted.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm md:items-end">
            <Link href="#services" className="hover:text-white">
              Services
            </Link>
            <Link href="#pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="#faq" className="hover:text-white">
              FAQs
            </Link>
            <Link href="#contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/55">
          This site provides general information—not legal advice. Insurance products and IRP
          outcomes depend on underwriting, DMV, and FMCSA rules at the time of application.
        </p>
      </div>
    </footer>
  );
}
