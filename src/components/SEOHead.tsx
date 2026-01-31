import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article';
  keywords?: string;
  faqItems?: FAQItem[];
}

const SEOHead = ({
  title = 'Cécile Prost - Avocate à Marseille | Droit Pénal & Famille',
  description = 'Maître Cécile Prost, avocate au Barreau de Marseille spécialisée en droit pénal et droit de la famille. Défense, divorce, garde d\'enfants, garde à vue. Consultation rapide.',
  canonical = 'https://cecile-prost-avocat.fr',
  type = 'website',
  keywords = 'avocate Marseille, avocat pénal Marseille, avocat droit de la famille Marseille, avocat divorce Marseille, avocat garde à vue Marseille, cabinet avocat Marseille',
  faqItems,
}: SEOHeadProps) => {
  // Schema Attorney (more specific than LegalService)
  const attorneySchema = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: 'Maître Cécile Prost - Avocate à Marseille',
    description: 'Avocate spécialisée en droit pénal et droit de la famille au Barreau de Marseille. Défense, divorce, garde d\'enfants, violences conjugales.',
    url: canonical,
    telephone: '+33662525687',
    email: 'avocat.prost@gmail.com',
    image: 'https://cecile-prost-avocat.fr/avocat-portrait.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '20 cours Pierre Puget',
      addressLocality: 'Marseille',
      postalCode: '13006',
      addressRegion: 'Bouches-du-Rhône',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.2897,
      longitude: 5.3733,
    },
    areaServed: [
      { '@type': 'City', name: 'Marseille' },
      { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
      { '@type': 'AdministrativeArea', name: 'Var' },
      { '@type': 'AdministrativeArea', name: 'Alpes-de-Haute-Provence' },
    ],
    knowsAbout: [
      'Droit pénal',
      'Droit de la famille',
      'Divorce',
      'Garde d\'enfants',
      'Violences conjugales',
      'Garde à vue',
    ],
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:30',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '47',
      bestRating: '5',
    },
    sameAs: [
      'https://www.linkedin.com/in/cecile-prost-avocat/',
    ],
  };

  // FAQ Schema if FAQ items provided
  const faqSchema = faqItems && faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Cabinet Cécile Prost Avocat" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Geo */}
      <meta name="geo.region" content="FR-13" />
      <meta name="geo.placename" content="Marseille" />
      <meta name="geo.position" content="43.2965;5.3698" />
      <meta name="ICBM" content="43.2965, 5.3698" />
      
      {/* Schema.org Attorney */}
      <script type="application/ld+json">
        {JSON.stringify(attorneySchema)}
      </script>
      
      {/* Schema.org FAQ (if provided) */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
