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
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.locality,
    addressRegion: siteConfig.region,
    postalCode: siteConfig.postalCode,
    addressCountry: siteConfig.countryCode
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
    addressCountry: siteConfig.countryCode
  },
  areaServed: {
    '@type': 'Country',
    name: 'India'
  }
};

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
