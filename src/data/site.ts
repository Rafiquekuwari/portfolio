export const siteConfig = {
  name: 'Mohammad Rafique Kuwari',
  title: 'AI Automation & RAG Engineer',
  shortTitle: 'AI Automation Engineer',
  siteName: 'Mohammad Rafique Kuwari Portfolio',
  description:
    'I build AI systems that help businesses reduce manual work, turn unstructured documents into usable data, and build AI chat systems that make knowledge easier to access.',
  location: 'Based in Bhiwandi, Maharashtra, India',
  locality: 'Bhiwandi',
  region: 'Maharashtra',
  country: 'India',
  siteUrl: 'https://example.netlify.app',
  socialImage: '/social-card.svg',
  email: 'mailto:hello@example.com',
  emailLabel: 'hello@example.com',
  github: 'https://github.com/your-profile',
  githubLabel: 'github.com/your-profile',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  linkedinLabel: 'linkedin.com/in/your-profile',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Articles', href: '/articles' },
    { label: 'Contact', href: '/contact' }
  ],
  geoKeywords: [
    'AI automation engineer',
    'PDF extraction automation',
    'PDF to structured JSON pipelines',
    'RAG chatbot developer for SaaS',
    'LLM workflow automation',
    'healthcare AI systems',
    'routing optimization AI',
    'AI developer in Bhiwandi',
    'AI engineer in Maharashtra',
    'AI developer in India'
  ],
  knowsAbout: [
    'AI automation systems',
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
};

export const services: Service[] = [
  {
    title: 'AI Automation Development',
    description:
      'Designing AI automation systems that remove repetitive manual work from document-heavy and operations-heavy workflows.'
  },
  {
    title: 'PDF Extraction Systems',
    description:
      'Building PDF extraction pipelines that turn invoices, forms, reports, and scanned files into structured JSON and validated records.'
  },
  {
    title: 'RAG Chatbot Development for SaaS',
    description:
      'Creating retrieval-augmented chat systems for SaaS products so teams and customers can access trusted knowledge faster.'
  },
  {
    title: 'Workflow Automation with LLMs',
    description:
      'Orchestrating LLM-driven workflows with validation, routing logic, and integrations to make AI useful inside real business processes.'
  },
  {
    title: 'Healthcare and Routing AI Solutions',
    description:
      'Applying AI and optimization methods to healthcare operations, demand clustering, and routing problems with real constraints.'
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
    title: 'Design AI systems for healthcare and routing problems',
    description:
      'Model operational constraints, optimize routes, and surface decision support for planning-heavy teams.'
  }
];

export const faqs = [
  {
    question: 'What does an AI Automation & RAG Engineer do?',
    answer:
      'An AI Automation & RAG Engineer designs and ships systems that combine language models, retrieval pipelines, and workflow orchestration to automate operational tasks and improve decision speed.'
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
    question: 'Do you build AI systems for healthcare and routing use cases?',
    answer:
      'Yes. I build practical AI systems for healthcare operations and routing optimization, including demand clustering, constraint-aware routing, and decision-support workflows.'
  },
  {
    question: 'Where is Mohammad Rafique Kuwari based?',
    answer:
      'Mohammad Rafique Kuwari is based in Bhiwandi, Maharashtra, India and works on AI automation, document intelligence, RAG systems, and workflow optimization projects.'
  },
  {
    question: 'When should a SaaS company use a RAG chatbot?',
    answer:
      'A SaaS company should use a RAG chatbot when product knowledge changes frequently and answers need to stay grounded in current documentation, support content, and internal knowledge sources.'
  }
];
