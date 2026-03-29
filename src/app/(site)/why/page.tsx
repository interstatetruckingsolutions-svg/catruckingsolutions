import type { Metadata } from "next";
import { WhySection } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Why us | CA Trucking Solutions",
  description:
    "Licensed IRP agents and insurance specialists for California truckers—fast DMV processing, friendly support, all-in-one compliance.",
  alternates: { canonical: "/why" },
};

export default function WhyPage() {
  return <WhySection />;
}
