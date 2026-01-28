import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

const SEOHead = ({
  title = 'Cécile Prost - Avocate à Marseille | Droit Pénal & Famille',
  description = 'Maître Cécile Prost, avocate au Barreau de Marseille spécialisée en droit pénal et droit de la famille. Défense, divorce, garde d\'enfants, garde à vue. Consultation rapide.',
  canonical = 'https://cecile-prost-avocat.fr',
  type = 'website',
  keywords = 'avocate Marseille, avocat pénal Marseille, avocat droit de la famille Marseille, avocat divorce Marseille, avocat garde à vue Marseille, cabinet avocat Marseille',
}: SEOHeadProps) => {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Cabinet Cécile Prost - Avocate à Marseille',
    description: 'Avocate spécialisée en droit pénal et droit de la famille au Barreau de Marseille',
    url: canonical,
    telephone: '+33662525687',
    email: 'avocat.prost@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '20 Cours Pierre Puget',
      addressLocality: 'Marseille',
      postalCode: '13006',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.2897,
      longitude: 5.3733,
    },
    areaServed: {
      '@type': 'City',
      name: 'Marseille',
    },
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
    },
    sameAs: [
      'https://www.linkedin.com/in/cecile-prost-avocat/',
    ],
  };

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
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
