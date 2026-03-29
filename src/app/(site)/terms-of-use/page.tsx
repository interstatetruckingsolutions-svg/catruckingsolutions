import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { SITE_CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Use | ${SITE_NAME}`,
  description: `Terms governing use of the ${SITE_NAME} website and related communications.`,
  alternates: { canonical: "/terms-of-use" },
  robots: { index: true, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout title="Terms of Use" lastUpdated="March 28, 2026">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">1. Agreement</h2>
        <p>
          These Terms of Use (“Terms”) govern your access to and use of {SITE_URL} (the “Site”)
          operated by {SITE_NAME} (“we,” “us,” or “our”). By accessing or using the Site, you agree
          to these Terms. If you do not agree, do not use the Site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">2. Eligibility and U.S. use</h2>
        <p>
          The Site is intended for users located in the United States. You represent that you are at
          least 18 years old and have authority to agree to these Terms on behalf of yourself or the
          organization you represent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">3. Nature of the Site and services</h2>
        <p>
          The Site provides general information about compliance-related services we may offer.
          Specific services, fees, timelines, and eligibility depend on your situation, applicable
          law, and agreements you enter into with us or third parties (e.g., insurers, government
          agencies). Nothing on the Site guarantees a particular outcome, approval, or filing result.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">4. Not a government site; not legal advice</h2>
        <p>
          This Site is privately operated and is not affiliated with, endorsed by, or sponsored by
          the California Department of Motor Vehicles, the FMCSA, or any federal, state, or local
          government agency. Content on the Site is for general informational purposes only and does
          not constitute legal, tax, or professional advice. Consult qualified professionals for advice
          tailored to your circumstances.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">5. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the Site unlawfully or in a manner that could harm us or others;</li>
          <li>Attempt to gain unauthorized access to systems, data, or accounts;</li>
          <li>Transmit malware, spam, or deceptive content;</li>
          <li>Scrape, harvest, or automate access to the Site without our prior written consent; or</li>
          <li>Misrepresent your identity or affiliation.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">6. Intellectual property</h2>
        <p>
          The Site and its content (including text, graphics, logos, and layout) are owned by us or
          our licensors and are protected by intellectual property laws. You may view and print
          reasonable portions for personal, non-commercial use. No other rights are granted unless
          we agree in writing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">7. Disclaimers</h2>
        <p>
          THE SITE AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY
          KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, TO THE
          FULLEST EXTENT PERMITTED BY LAW.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">8. Limitation of liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE AND OUR OFFICERS, EMPLOYEES, AND
          AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
          DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF
          THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY
          CLAIM ARISING OUT OF OR RELATING TO THE SITE OR THESE TERMS SHALL NOT EXCEED THE GREATER OF
          (A) ONE HUNDRED U.S. DOLLARS (US $100) OR (B) THE AMOUNTS YOU PAID US SPECIFICALLY FOR THE
          SERVICE GIVING RISE TO THE CLAIM IN THE TWELVE (12) MONTHS BEFORE THE CLAIM (IF ANY). SOME
          JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; IN THOSE CASES, OUR LIABILITY IS LIMITED TO
          THE FULLEST EXTENT PERMITTED BY LAW.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">9. Indemnification</h2>
        <p>
          You will defend, indemnify, and hold harmless {SITE_NAME} and its affiliates from claims,
          damages, losses, and expenses (including reasonable attorneys’ fees) arising from your use
          of the Site, your violation of these Terms, or your violation of third-party rights, to the
          extent permitted by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">10. Governing law and venue</h2>
        <p>
          These Terms are governed by the laws of the State of California, without regard to conflict
          of law principles. Subject to applicable law, you agree that exclusive jurisdiction and
          venue for disputes relating to the Site or these Terms shall lie in the state or federal
          courts located in California, and you waive any objection to such jurisdiction or venue.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">11. Changes</h2>
        <p>
          We may modify these Terms at any time. We will post the updated Terms on this page and
          update the “Last updated” date. Continued use of the Site after changes constitutes acceptance
          of the revised Terms, except where prohibited by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">12. Severability</h2>
        <p>
          If any provision of these Terms is held invalid or unenforceable, the remaining provisions
          remain in full force and effect.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-navy">13. Contact</h2>
        <p>
          Questions about these Terms:{" "}
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
