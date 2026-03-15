export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  sections: { heading: string; content: string }[];
  relatedProjectSlugs?: string[];
};

export const articles: Article[] = [
  {
    slug: 'designing-pdf-extraction-pipeline-real-world-documents',
    title: 'Designing a PDF Extraction Pipeline for Real-World Documents',
    description:
      'A practical blueprint for building PDF extraction automation that handles inconsistent layouts, scanned files, and schema validation at production scale.',
    publishedDate: '2026-03-01',
    readTime: '7 min read',
    tags: ['PDF extraction automation', 'Document AI', 'Structured JSON pipelines'],
    sections: [
      {
        heading: 'Why PDF extraction fails in production',
        content:
          'Real-world PDFs vary across templates, quality, and languages. A robust system needs adaptive parsing and fallback logic instead of single-template assumptions.'
      },
      {
        heading: 'Pipeline design for reliability',
        content:
          'Use layered processing: classification, OCR or text extraction, field-level parsing, schema mapping, and post-validation to produce dependable structured data.'
      },
      {
        heading: 'Operationalizing output quality',
        content:
          'Track confidence scores, maintain exception queues, and monitor extraction drift so business teams can trust automated records over time.'
      },
      {
        heading: 'Why this matters for workflow automation',
        content:
          'Reliable PDF extraction is often the first step in a larger AI automation workflow because downstream approvals, analytics, and integrations depend on structured data.'
      }
    ],
    relatedProjectSlugs: ['pdf-extraction-automation']
  },
  {
    slug: 'how-to-build-rag-chatbot-saas-knowledge-base',
    title: 'How to Build a RAG Chatbot for a SaaS Knowledge Base',
    description:
      'An implementation-focused guide for RAG chatbot development in SaaS environments with retrieval quality, citations, and lifecycle monitoring.',
    publishedDate: '2026-03-03',
    readTime: '8 min read',
    tags: ['RAG chatbot developer for SaaS', 'Knowledge assistants', 'LLM systems'],
    sections: [
      {
        heading: 'Source quality determines answer quality',
        content:
          'Before model tuning, normalize and deduplicate your source content. Retrieval grounded in stale docs leads to low trust and poor product support outcomes.'
      },
      {
        heading: 'Retrieval architecture and guardrails',
        content:
          'Adopt metadata-aware retrieval, tenant isolation, and citation requirements to maintain correctness in multi-team SaaS deployments.'
      },
      {
        heading: 'Measure what matters',
        content:
          'Evaluate retrieval recall, citation coverage, and unresolved query rates, then iterate on chunking and indexing strategies.'
      },
      {
        heading: 'How RAG supports SaaS operations',
        content:
          'A well-designed RAG chatbot reduces repeated support work, improves onboarding answers, and gives SaaS teams a scalable knowledge access layer.'
      }
    ],
    relatedProjectSlugs: ['saas-rag-chatbot']
  },
  {
    slug: 'healthcare-routing-optimization-clustering-cvrp',
    title: 'Healthcare Routing Optimization Using Clustering and CVRP',
    description:
      'A practical approach to designing healthcare routing AI systems using clustering and CVRP optimization under real operational constraints.',
    publishedDate: '2026-03-05',
    readTime: '9 min read',
    tags: ['Healthcare AI systems', 'Routing optimization AI', 'Operations research'],
    sections: [
      {
        heading: 'Routing complexity in healthcare operations',
        content:
          'Healthcare logistics often includes strict timing, variable demand, and constrained fleets, which makes naive route planning costly.'
      },
      {
        heading: 'Combining clustering with CVRP',
        content:
          'Cluster demand points to reduce search complexity, then solve CVRP variants with hard constraints and tuned penalties for missed windows.'
      },
      {
        heading: 'From optimization to practical workflows',
        content:
          'Expose scenario analysis and route confidence metrics so dispatch teams can adopt AI-assisted routing in daily operations.'
      },
      {
        heading: 'Why routing AI needs domain context',
        content:
          'The strongest routing systems balance mathematical optimization with operational realities such as service priorities, time windows, and changing field conditions.'
      }
    ],
    relatedProjectSlugs: ['healthcare-routing-ai']
  }
];
