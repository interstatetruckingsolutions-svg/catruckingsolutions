import type { Metadata } from "next";
import { ServicesSection } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Services | CA Trucking Solutions",
  description:
    "IRP registration, IFTA fuel license, BOC-3 process agent, trucking insurance, and compliance consulting for California carriers.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesSection />;
}
