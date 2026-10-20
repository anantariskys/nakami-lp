import React from "react";
import { FAQS } from "@/lib/constants";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://nakamistudio.com/#organization",
        name: "Nakami Studio",
        url: "https://nakamistudio.com",
        logo: "https://nakamistudio.com/icon.svg",
        image: "https://nakamistudio.com/og-image.png",
        description:
          "Solusi pembuatan website bisnis, software kasir kustom UMKM, dan live mentoring coding 1-on-1 etis tanpa joki.",
        email: "nakamistudio.id@gmail.com",
        telephone: "+6285608675771",
        priceRange: "Rp 150.000 - Rp 15.000.000",
        address: {
          "@type": "PostalAddress",
          addressCountry: "ID",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        sameAs: [
          "https://instagram.com/nakamistudio",
          "https://github.com/nakamistudio",
        ],
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://nakamistudio.com/#education",
        name: "Nakami Studio Mentoring",
        url: "https://nakamistudio.com/#services-edu",
        description:
          "Program edukasi dan bimbingan teknis 1-on-1 untuk mahasiswa teknik informatika dan riset perangkat lunak berintegritas tanpa jalan pintas joki.",
        parentOrganization: {
          "@id": "https://nakamistudio.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://nakamistudio.com/#faq",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
