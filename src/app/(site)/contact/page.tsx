import type { Metadata } from "next";
import { ContactSection } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Contact | CA Trucking Solutions",
  description:
    "Get a compliance quote for California IRP, IFTA, BOC-3, and trucking insurance—call or send your details.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactSection />;
}
