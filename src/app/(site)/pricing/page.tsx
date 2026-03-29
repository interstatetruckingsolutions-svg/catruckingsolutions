import type { Metadata } from "next";
import { PricingSection } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Pricing | CA Trucking Solutions",
  description:
    "Transparent IRP and insurance package tiers for owner-operators and fleets—sample figures and custom quotes.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <PricingSection />;
}
