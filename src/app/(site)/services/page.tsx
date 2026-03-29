import type { Metadata } from "next";
import { ServicesSection } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Services | CA Trucking Solutions",
  description:
    "IRP registration, IFTA fuel tax, trucking insurance, DOT and MC numbers, compliance consulting, and BOC-3 process agent for California carriers.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesSection />;
}
