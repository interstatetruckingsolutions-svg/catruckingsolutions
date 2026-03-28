import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://catruckingsolutions.com"),
  title: "CA Trucking Solutions | IRP & Insurance Compliance Made Easy",
  description:
    "California IRP registration, IFTA fuel tax licensing, BOC-3 process agents, and trucking insurance in one place. Licensed IRP agents—fast DMV processing, FMCSA compliance, friendly support for CA truckers.",
  keywords: [
    "California IRP",
    "IFTA California",
    "trucking insurance California",
    "apportioned plates",
    "FMCSA compliance",
    "BOC-3 filing",
    "CA DMV IRP",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://catruckingsolutions.com/",
    siteName: "CA Trucking Solutions",
    title: "CA Trucking Solutions | IRP & Insurance Compliance Made Easy",
    description:
      "Streamline California IRP registration, IFTA fuel licensing, and trucking insurance. Licensed IRP agents, fast turnaround, all-in-one compliance for California truckers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CA Trucking Solutions | IRP & Insurance Compliance Made Easy",
    description:
      "California IRP, IFTA, BOC-3, and trucking insurance—friendly, hassle-free service for interstate carriers.",
  },
  alternates: { canonical: "/" },
  other: {
    "theme-color": "#0B2545",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={inter.variable}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-orange focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
