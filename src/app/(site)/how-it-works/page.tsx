import type { Metadata } from "next";
import { HowItWorksSection } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "How it works | CA Trucking Solutions",
  description:
    "From quote to plates and insurance—clear steps for California IRP, IFTA, and compliance onboarding.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return <HowItWorksSection />;
}
