/**
 * Utilities for generating standard JSON-LD Schema.org structured data.
 * These are highly optimized for AEO and GEO parsing.
 */

export interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
}

export interface WebsiteSchemaProps {
  name: string;
  url: string;
  potentialActionQueryInput?: string;
}

export interface FAQPageSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    item: string; // URL
  }>;
}

/**
 * Generates Organization JSON-LD
 */
export function getOrganizationSchema({
  name,
  url,
  logo,
  description,
  sameAs = [],
}: OrganizationSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    sameAs,
  };
}

/**
 * Generates WebSite JSON-LD (Search action)
 */
export function getWebsiteSchema({
  name,
  url,
  potentialActionQueryInput = 'search_term_string',
}: WebsiteSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={${potentialActionQueryInput}}`,
      },
      'query-input': `required name=${potentialActionQueryInput}`,
    },
  };
}

/**
 * Generates FAQPage JSON-LD
 */
export function getFAQPageSchema({ questions }: FAQPageSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

/**
 * Generates BreadcrumbList JSON-LD
 */
export function getBreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, item }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item,
    })),
  };
}
