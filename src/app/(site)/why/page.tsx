import type { Metadata } from "next";
import { WhySection } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Why us | CA Trucking Solutions",
  description:
    "IRP registration and insurance support for California truckers—fast turnaround, friendly help, all-in-one compliance guidance.",
  alternates: { canonical: "/why" },
};

export default function WhyPage() {
  return <WhySection />;
}
