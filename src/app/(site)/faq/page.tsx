import type { Metadata } from "next";
import { FaqSection } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "FAQs | CA Trucking Solutions",
  description:
    "Common questions about California IRP plates, IFTA, insurance requirements, timelines, and payment options.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return <FaqSection />;
}
