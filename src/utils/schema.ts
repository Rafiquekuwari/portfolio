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
    addressLocality: siteConfig.locality,
    addressRegion: siteConfig.region,
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

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.siteUrl}#service`,
  name: `${siteConfig.name} AI Services`,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  provider: {
    '@type': 'Person',
    '@id': `${siteConfig.siteUrl}#person`
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.locality,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country
  },
  areaServed: {
    '@type': 'Country',
    name: 'India'
  },
  serviceType: ['AI Automation Development', 'PDF Extraction Systems', 'RAG Chatbot Development', 'LLM Workflow Automation']
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
