interface SchemaMarkupProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export const SchemaMarkup = ({ data }: SchemaMarkupProps) => {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

// ─── Schema Generators ───────────────────────────────────────────

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'National Tire & Auto',
  alternateName: 'National Transmission',
  url: 'https://nationaltransmission.vercel.app',
  telephone: '(318) 640-5489',
  email: 'nattransmission@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5015 Shreveport Hwy',
    addressLocality: 'Pineville',
    addressRegion: 'LA',
    postalCode: '71360',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.3224,
    longitude: -92.4344,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  areaServed: [
    { '@type': 'City', name: 'Pineville' },
    { '@type': 'City', name: 'Alexandria' },
    { '@type': 'City', name: 'Tioga' },
    { '@type': 'City', name: 'Ball' },
    { '@type': 'City', name: 'Boyce' },
  ],
  priceRange: '$$',
  image: 'https://nationaltransmission.vercel.app/images/about.png',
  sameAs: ['https://www.facebook.com/dandjtire'],
  foundingDate: '2004',
  description:
    'National Tire & Auto provides expert transmission repair, brake service, tire sales, alignment, and suspension repair in Pineville and Alexandria, Louisiana. Over 20 years of certified automotive service with nationwide warranty.',
});

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  slug: string;
  priceRange?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  name: `${service.name} in Pineville, LA`,
  description: service.description,
  url: `https://nationaltransmission.vercel.app/${service.slug}`,
  provider: {
    '@type': 'AutoRepair',
    name: 'National Tire & Auto',
    telephone: '(318) 640-5489',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5015 Shreveport Hwy',
      addressLocality: 'Pineville',
      addressRegion: 'LA',
      postalCode: '71360',
      addressCountry: 'US',
    },
  },
  areaServed: {
    '@type': 'State',
    name: 'Louisiana',
  },
  ...(service.priceRange && {
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        description: service.priceRange,
      },
    },
  }),
});

export const generateFAQSchema = (
  faqs: { question: string; answer: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateBreadcrumbSchema = (
  crumbs: { name: string; url: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: crumb.name,
    item: `https://nationaltransmission.vercel.app${crumb.url}`,
  })),
});
