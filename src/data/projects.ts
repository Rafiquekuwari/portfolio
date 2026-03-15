export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string[];
  techStack: string[];
  outcome: string;
  architecture?: string[];
  relatedArticleSlugs?: string[];
  keywords?: string[];
};

export const projects: Project[] = [
  {
    slug: 'pdf-extraction-automation',
    title: 'PDF Extraction Automation',
    summary:
      'An AI-first pipeline that converts high-volume business PDFs into validated structured records for downstream workflows.',
    problem:
      'Operations teams were manually reading invoices, forms, and reports, creating delays and inconsistent data quality.',
    approach: [
      'Built a multi-stage parser with OCR fallback for scanned pages.',
      'Applied LLM-assisted entity extraction mapped to strict JSON schemas.',
      'Added rule-based validation, confidence thresholds, and human-review queues.',
      'Integrated outputs into internal APIs for real-time downstream processing.'
    ],
    techStack: ['Python', 'FastAPI', 'LLMs', 'OCR', 'PostgreSQL', 'Docker'],
    outcome:
      'Significantly reduced manual document processing and made PDF to structured JSON output more dependable for finance and operations teams.',
    architecture: [
      'Document intake service with queue-based processing',
      'Hybrid extraction layer (OCR + LLM)',
      'Schema validation and exception handling service',
      'Webhook/API delivery for structured JSON'
    ],
    relatedArticleSlugs: ['designing-pdf-extraction-pipeline-real-world-documents'],
    keywords: ['PDF extraction automation', 'PDF to structured JSON pipelines', 'document intelligence']
  },
  {
    slug: 'saas-rag-chatbot',
    title: 'SaaS RAG Chatbot',
    summary:
      'A retrieval-augmented SaaS knowledge assistant that answers customer and internal support queries using trusted product content.',
    problem:
      'Support teams spent time repeatedly answering the same product and onboarding questions across channels.',
    approach: [
      'Ingested product docs, changelogs, and support knowledge base articles.',
      'Implemented chunking, embeddings, and vector retrieval with metadata filters.',
      'Added citation-first response design with query rewriting and safety guardrails.',
      'Created feedback loops to monitor answer quality and retrieval drift.'
    ],
    techStack: ['TypeScript', 'Node.js', 'LLMs', 'Vector Database', 'REST APIs'],
    outcome:
      'Improved support response speed and consistency while helping users self-serve answers from the SaaS knowledge base.',
    architecture: [
      'Content ingestion and indexing workers',
      'Vector retrieval API with tenant-aware filters',
      'RAG orchestration layer with citations',
      'Monitoring dashboard for query and relevance metrics'
    ],
    relatedArticleSlugs: ['how-to-build-rag-chatbot-saas-knowledge-base'],
    keywords: ['RAG chatbot developer for SaaS', 'SaaS knowledge assistants', 'LLM workflow automation']
  },
  {
    slug: 'healthcare-routing-ai',
    title: 'Healthcare Routing AI',
    summary:
      'A routing optimization system for healthcare operations that combines demand clustering with constraint-aware path planning.',
    problem:
      'Manual route planning could not efficiently handle changing demand, service windows, and resource constraints.',
    approach: [
      'Modeled operational constraints including time windows and capacity limits.',
      'Applied clustering to reduce route complexity and improve assignment quality.',
      'Used CVRP-style optimization with domain-specific penalty tuning.',
      'Built scenario simulation tools for planners to compare route strategies.'
    ],
    techStack: ['Python', 'OR-Tools', 'Geo APIs', 'Pandas', 'LLM-assisted analytics'],
    outcome:
      'Enabled more efficient route planning and better decision support for healthcare logistics teams.',
    architecture: [
      'Demand preprocessing and geospatial normalization',
      'Clustering and route candidate generation',
      'Constraint-aware optimization engine',
      'Planner dashboard with scenario comparison'
    ],
    relatedArticleSlugs: ['healthcare-routing-optimization-clustering-cvrp'],
    keywords: ['healthcare AI systems', 'routing optimization AI', 'CVRP optimization']
  }
];
