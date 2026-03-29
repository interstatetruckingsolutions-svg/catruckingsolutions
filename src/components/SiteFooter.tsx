import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          <div>
            <p className="font-semibold text-white">CA Trucking Solutions</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed">
              Not licensed by the California DMV or any other government agencies. Informational
              purposes only.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm md:items-end">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="/faq" className="hover:text-white">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-10 space-y-4 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/55">
          <p className="text-sm text-white/70">© 2026 CA Trucking Solutions. All rights reserved.</p>
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
