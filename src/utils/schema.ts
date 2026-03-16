import { articles } from '../data/articles';
import { projects } from '../data/projects';
import { siteConfig } from '../data/site';
import { absoluteUrl } from './seo';

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.siteUrl}#person`,
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  description: 'AI Engineer, Automation Expert, and AI Automation consultant focused on RAG systems and production workflow automation.',
  url: siteConfig.siteUrl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.locality,
    addressRegion: siteConfig.region,
    postalCode: siteConfig.postalCode,
    addressCountry: siteConfig.country
  },
  homeLocation: {
    '@type': 'Place',
    name: `${siteConfig.locality}, ${siteConfig.region}, ${siteConfig.country}`
  },
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.instagram],
  knowsAbout: siteConfig.knowsAbout,
  image: absoluteUrl(siteConfig.socialImage)
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.siteUrl}#website`,
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  inLanguage: 'en',
  about: siteConfig.knowsAbout,
  publisher: {
    '@type': 'Person',
    '@id': `${siteConfig.siteUrl}#person`
  }
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.siteUrl}#local-business`,
  name: siteConfig.name,
  description:
    'AI automation and RAG engineering services in Bhiwandi, Maharashtra, including PDF extraction pipelines, SaaS knowledge assistants, and LLM workflow automation.',
  url: siteConfig.siteUrl,
  image: absoluteUrl(siteConfig.socialImage),
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.instagram],
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.locality,
    addressRegion: siteConfig.region,
    postalCode: siteConfig.postalCode,
    addressCountry: siteConfig.country
  },
  areaServed: `${siteConfig.locality}, ${siteConfig.region}, ${siteConfig.country}`,
  founder: {
    '@type': 'Person',
    '@id': `${siteConfig.siteUrl}#person`
  }
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.siteUrl}#service`,
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: 'AI Automation & RAG engineering services.',
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.instagram],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Automation Development',
          serviceType: 'AI Automation Development',
          provider: {
            '@type': 'Person',
            name: siteConfig.name,
            jobTitle: siteConfig.title,
            description: siteConfig.description,
            url: siteConfig.siteUrl,
            sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.instagram],
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteConfig.streetAddress,
              addressLocality: siteConfig.locality,
              addressRegion: siteConfig.region,
              postalCode: siteConfig.postalCode,
              addressCountry: siteConfig.countryCode
            }
          }
        }
      }
    ]
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.locality,
    addressRegion: siteConfig.region,
    postalCode: siteConfig.postalCode,
    addressCountry: siteConfig.country
  },
  areaServed: `${siteConfig.locality}, ${siteConfig.region}, ${siteConfig.country}`
};

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}#person`,
      name: siteConfig.name,
      jobTitle: siteConfig.title,
      url: siteConfig.siteUrl,
      sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.instagram],
      description:
        'AI Automation & RAG Engineer specializing in workflow automation, AI-driven solutions, and chatbot development.'
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteConfig.siteUrl}#professional-service`,
      name: `${siteConfig.name} AI Automation Services`,
      description:
        'AI Engineer and Automation Expert delivering AI Automation, RAG systems, PDF extraction pipelines, and workflow automation services.',
      url: siteConfig.siteUrl,
      keywords: ['AI Automation', 'RAG systems', 'AI Engineer', 'Automation Expert'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.streetAddress,
        addressLocality: siteConfig.locality,
        addressRegion: siteConfig.region,
        postalCode: siteConfig.postalCode,
        addressCountry: siteConfig.country
      },
      areaServed: `${siteConfig.locality}, ${siteConfig.region}, ${siteConfig.country}`,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Automation and RAG Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Automation',
              description: 'AI-driven automation systems for document-heavy and workflow-heavy business operations.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'RAG Systems',
              description: 'Retrieval-augmented generation systems and chatbots grounded in trusted business knowledge.'
            }
          }
        ]
      }
    }
  ]
};

export const localServiceSchema = ({
  name,
  path,
  description,
  serviceType,
  keywords = []
}: {
  name: string;
  path: string;
  description: string;
  serviceType: string;
  keywords?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${absoluteUrl(path)}#service`,
  name,
  description,
  url: absoluteUrl(path),
  serviceType,
  keywords,
  areaServed: {
    '@type': 'Place',
    name: `${siteConfig.locality}, ${siteConfig.region}, ${siteConfig.country}`
  },
  provider: {
    '@type': 'Organization',
    '@id': `${siteConfig.siteUrl}#local-business`
  },
  audience: {
    '@type': 'BusinessAudience',
    geographicArea: {
      '@type': 'Place',
      name: `${siteConfig.locality}, ${siteConfig.region}, ${siteConfig.country}`
    }
  }
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: absoluteUrl(item.path)
  }))
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const articleSchema = (slug: string) => {
  const article = articles.find((item) => item.slug === slug);
  if (!article) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: absoluteUrl(`/articles/${article.slug}`),
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}#person`
    },
    publisher: {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}#person`
    },
    mainEntityOfPage: absoluteUrl(`/articles/${article.slug}`),
    about: article.tags,
    keywords: article.tags,
    image: absoluteUrl(siteConfig.socialImage)
  };
};

export const projectSchema = (slug: string) => {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.title,
    description: project.summary,
    keywords: project.keywords ?? project.techStack,
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}#person`
    },
    about: project.techStack,
    inLanguage: 'en',
    mainEntityOfPage: absoluteUrl(`/projects/${project.slug}`),
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(siteConfig.socialImage)
  };
};
