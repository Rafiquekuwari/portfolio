export const siteConfig = {
  name: 'Mohammed Rafique Kuwari',
  title: 'AI Automation, SEO & GEO Implementer',
  shortTitle: 'AI Automation & SEO Implementer',
  siteName: 'Mohammed Rafique Kuwari Portfolio',
  description:
    'I help businesses solve workflow, document, and visibility problems using AI automation, SEO, and GEO. I automate repetitive processes, turn unstructured documents into usable data, build RAG chat systems from internal knowledge, and implement technical search foundations for Google and AI-assisted search.',
  location: 'Based in Bhiwandi, Maharashtra, India',
  streetAddress: '2nd Nizampur',
  locality: 'Bhiwandi',
  region: 'Maharashtra',
  country: 'India',
  countryCode: 'IN',
  postalCode: '421302',
  siteUrl: 'https://mohammedrk.netlify.app',
  socialImage: '/social-card.svg',
  email: 'mailto:kuwari84@gmail.com',
  emailLabel: 'kuwari84@gmail.com',
  github: 'https://github.com/Rafiquekuwari',
  githubLabel: 'github.com/Rafiquekuwari',
  linkedin: 'https://www.linkedin.com/in/mohammed-rafique-kuwari-165a3222b/',
  linkedinLabel: 'linkedin.com/in/mohammed-rafique-kuwari-165a3222b',
  instagram: 'https://www.instagram.com/mohammedrafiquekuwari/',
  instagramLabel: 'instagram.com/mohammedrafiquekuwari',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Articles', href: '/articles' },
    { label: 'Contact', href: '/contact' }
  ],
  geoKeywords: [
    'AI automation engineer',
    'AI automation in Bhiwandi',
    'AI engineer in Bhiwandi',
    'SEO implementation',
    'local SEO implementation',
    'GEO implementation',
    'AI-search visibility implementation',
    'PDF extraction automation',
    'PDF to structured JSON pipelines',
    'RAG chatbot developer for SaaS',
    'RAG systems in Bhiwandi',
    'RAG chatbots in Bhiwandi',
    'LLM workflow automation',
    'healthcare AI systems',
    'routing optimization AI',
    'AI developer in Bhiwandi',
    'AI engineer in Maharashtra',
    'AI developer in India'
  ],
  knowsAbout: [
    'AI Engineer',
    'Automation Expert',
    'AI Automation',
    'AI automation systems',
    'SEO implementation',
    'Technical SEO foundations',
    'Local SEO',
    'GEO implementation',
    'AI-search visibility',
    'PDF extraction pipelines',
    'Document intelligence',
    'RAG chatbot development',
    'SaaS knowledge assistants',
    'LLM workflow automation',
    'Healthcare AI',
    'Routing optimization AI',
    'Vector search',
    'Prompt engineering'
  ]
};

export type Service = {
  title: string;
  description: string;
  href?: string;
};

export const services: Service[] = [
  {
    title: 'AI Automation',
    description:
      'Implement systems that reduce manual work, connect business tools, and make repetitive operations easier to run.',
    href: '/bhiwandi/workflow-automation-developer'
  },
  {
    title: 'RAG Chatbots',
    description:
      'Build retrieval-backed chat systems that help teams and customers access trusted internal knowledge faster.',
    href: '/bhiwandi/rag-systems'
  },
  {
    title: 'Document Automation',
    description:
      'Turn PDFs, forms, and unstructured records into validated structured data that can move through real workflows.',
    href: '/bhiwandi/document-workflow-automation'
  },
  {
    title: 'SEO / Local SEO',
    description:
      'Implement the technical search foundations that help service businesses improve crawlability, relevance, and local discoverability.',
    href: '/services/seo-geo-implementation'
  },
  {
    title: 'GEO / AI-search Visibility',
    description:
      'Improve how your business is understood by AI-assisted search systems through schema, content structure, internal linking, and discoverability work.',
    href: '/services/seo-geo-implementation'
  }
];

export type Problem = {
  title: string;
  description: string;
};

export const problemsSolved: Problem[] = [
  {
    title: 'Reduce manual document processing',
    description:
      'Replace repetitive review and copy-paste work with AI-assisted extraction, validation, and workflow handoff.'
  },
  {
    title: 'Convert PDFs into structured, usable data',
    description:
      'Turn inconsistent PDF inputs into machine-readable fields, schema-validated payloads, and operationally useful data.'
  },
  {
    title: 'Build knowledge assistants for SaaS companies',
    description:
      'Help support, sales, and product teams answer questions with retrieval-backed assistants grounded in trusted content.'
  },
  {
    title: 'Automate repetitive business workflows with AI',
      description:
      'Combine LLMs, APIs, and business rules to reduce task switching, manual triage, and avoidable turnaround time.'
  },
  {
    title: 'Improve Google and AI-search visibility',
    description:
      'Fix metadata, schema, indexing, internal linking, and local search foundations so service businesses are easier to discover.'
  }
];

export const faqs = [
  {
    question: 'What does an AI Automation & RAG Engineer do?',
    answer:
      'This work combines AI automation, retrieval systems, document intelligence, and implementation-heavy search foundations to reduce manual work and improve how businesses are found and understood online.'
  },
  {
    question: 'How can AI automate PDF extraction workflows?',
    answer:
      'AI can classify document layouts, extract entities and tables, validate outputs, and transform unstructured PDFs into structured JSON or database-ready records with quality checks.'
  },
  {
    question: 'What is a RAG chatbot for SaaS companies?',
    answer:
      'A RAG chatbot connects LLMs with trusted internal knowledge sources so users get context-aware answers grounded in product docs, support content, and operational data.'
  },
  {
    question: 'Can AI convert unstructured documents into structured data?',
    answer:
      'Yes. With OCR, parsing, schema mapping, and validation layers, AI pipelines can reliably convert complex unstructured documents into structured fields and JSON outputs.'
  },
  {
    question: 'What does SEO and GEO implementation mean in your work?',
    answer:
      'It means implementing metadata, schema, indexing fixes, internal linking, local service pages, sitemap improvements, and AI-search visibility foundations so a business is easier to discover in Google and AI-assisted search.'
  },
  {
    question: 'Where is Mohammed Rafique Kuwari based?',
    answer:
      'Mohammed Rafique Kuwari is based in Bhiwandi, Maharashtra, India and works on AI automation, document intelligence, RAG systems, and workflow optimization projects.'
  },
  {
    question: 'When should a SaaS company use a RAG chatbot?',
    answer:
      'A SaaS company should use a RAG chatbot when product knowledge changes frequently and answers need to stay grounded in current documentation, support content, and internal knowledge sources.'
  },
  {
    question: 'Who is SEO and local SEO implementation for?',
    answer:
      'It is for service businesses that need clearer technical SEO foundations, stronger local discoverability, and content structures that help both search engines and AI-assisted systems understand what the business does.'
  }
];
