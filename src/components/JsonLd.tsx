const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://catruckingsolutions.com/#organization",
      name: "CA Trucking Solutions",
      url: "https://catruckingsolutions.com/",
      description:
        "California IRP registration, IFTA fuel licensing, BOC-3 process agent filing, and trucking insurance for interstate carriers.",
      areaServed: { "@type": "State", name: "California" },
      serviceType: [
        "IRP apportioned registration",
        "IFTA fuel tax",
        "BOC-3 process agent filing",
        "Commercial trucking insurance",
        "DOT compliance consulting",
      ],
      telephone: "+18001238785",
    },
    {
      "@type": "WebSite",
      "@id": "https://catruckingsolutions.com/#website",
      url: "https://catruckingsolutions.com/",
      name: "CA Trucking Solutions",
      publisher: { "@id": "https://catruckingsolutions.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I really need IRP plates if I haul interstate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Trucks operating in multiple states generally need IRP apportioned registration. Operating without proper apportioned plates can result in fines or being placed out of service. We simplify California IRP setup and renewals.",
          },
        },
        {
          "@type": "Question",
          name: "What insurance do I legally need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many for-hire trucks over 10,000 lbs need at least $750,000 in liability coverage per FMCSA rules. Shippers often require $100,000 or more in cargo coverage. We review your operation and explain required versus contract-driven limits.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the process take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typically 3–7 business days after documents are submitted. Temporary credentials may be available in 1–2 days when eligible.",
          },
        },
        {
          "@type": "Question",
          name: "Can I pay month-to-month?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We accept credit cards and can discuss financing options for insurance premiums. Contact us for payment plan details.",
          },
        },
      ],
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
