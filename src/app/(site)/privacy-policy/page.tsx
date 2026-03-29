import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { SITE_CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `How ${SITE_NAME} collects, uses, and protects personal information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="March 28, 2026">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">1. Introduction</h2>
        <p>
          {SITE_NAME} (“we,” “us,” or “our”) respects your privacy. This Privacy Policy describes how
          we collect, use, disclose, and safeguard information when you visit {SITE_URL} (the “Site”) or
          contact us about our services. By using the Site, you agree to the practices described
          here. If you do not agree, please do not use the Site.
        </p>
        <p className="text-slate-600">
          This policy is provided to support transparency under applicable U.S. state and federal
          privacy expectations, including for California residents. It is not legal advice; consult
          qualified counsel for your specific situation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">2. Information we collect</h2>
        <p>We may collect the following categories of information, depending on how you interact with us:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-brand-navy">Identifiers and contact data:</strong> name, company
            name, email address, phone number, postal address, and similar details you provide via
            forms, email, or phone.
          </li>
          <li>
            <strong className="text-brand-navy">Commercial and compliance-related information:</strong>{" "}
            USDOT/MC numbers, vehicle or fleet details, insurance or registration information, and
            other information you choose to share for quotes or filings.
          </li>
          <li>
            <strong className="text-brand-navy">Technical and usage data:</strong> IP address, browser
            type, device type, general location derived from IP, pages viewed, and referring URLs,
            collected through cookies and similar technologies or server logs.
          </li>
          <li>
            <strong className="text-brand-navy">Communications:</strong> content of messages you send us
            and records of calls or correspondence as permitted by law.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">3. How we use information</h2>
        <p>We use information for purposes such as:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Responding to inquiries and providing requested information about our services;</li>
          <li>Preparing quotes, applications, filings, or insurance-related assistance you request;</li>
          <li>Operating, maintaining, and improving the Site and our operations;</li>
          <li>Detecting and preventing fraud, abuse, or security issues;</li>
          <li>Complying with legal obligations and enforcing our terms; and</li>
          <li>Sending service-related messages; where required by law, we will obtain consent for marketing.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">4. How we share information</h2>
        <p>
          We do not sell your personal information for money. We may share information with service
          providers who assist us (e.g., hosting, email, analytics, or compliance-related vendors)
          subject to appropriate safeguards. We may disclose information if required by law,
          regulation, legal process, or to protect rights, safety, and security. Business transfers
          (e.g., merger) may involve transfer of information as permitted by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">5. Cookies and similar technologies</h2>
        <p>
          We may use cookies and similar tools to remember preferences, measure Site traffic, and
          improve performance. You can control cookies through your browser settings; disabling
          cookies may affect Site functionality.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">6. Data retention</h2>
        <p>
          We retain information for as long as needed to fulfill the purposes described in this
          policy, meet legal and regulatory requirements, resolve disputes, and enforce agreements.
          Retention periods vary based on the nature of the data and our relationship with you.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">7. Security</h2>
        <p>
          We implement reasonable administrative, technical, and organizational measures designed to
          protect information. No method of transmission or storage is completely secure; we cannot
          guarantee absolute security.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">8. California residents</h2>
        <p>
          If you are a California resident, state law may provide you with rights regarding personal
          information, such as rights to know, delete, and correct certain information, and to opt out
          of certain sharing that may be considered a “sale” or “sharing” under California law (we do
          not sell personal information for monetary consideration as described in this policy).
          You may also have the right not to receive discriminatory treatment for exercising privacy
          rights. To submit a request, contact us using the information below. We will verify requests
          as required by law and respond within applicable timeframes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">9. Other U.S. states</h2>
        <p>
          Residents of other states with comprehensive privacy laws may have additional rights
          (e.g., access, deletion, correction, opt-out of targeted advertising or certain sales).
          Contact us to exercise rights available to you under applicable law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">10. Children</h2>
        <p>
          The Site is not directed to children under 16, and we do not knowingly collect personal
          information from children. If you believe we have collected such information, contact us so
          we can delete it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">11. Third-party links</h2>
        <p>
          The Site may link to third-party websites. We are not responsible for their privacy
          practices. Review their policies before providing information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">12. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the revised policy on this
          page and update the “Last updated” date. Material changes may be communicated as required by
          law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">13. Contact us</h2>
        <p>
          For questions about this Privacy Policy or to exercise privacy rights, contact {SITE_NAME} at{" "}
          <a
            href={`mailto:${SITE_CONTACT_EMAIL}`}
            className="font-medium text-brand-orange underline decoration-brand-orange/40 hover:decoration-brand-orange"
          >
            {SITE_CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
