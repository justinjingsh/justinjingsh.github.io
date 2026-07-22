import { Code2, Smartphone, Cloud, RefreshCw, Plug, Users, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Services',
  description:
    'Seven freelance services — full-stack web & API development, mobile app development, cloud architecture & migration, legacy modernisation, third-party API integration, generative AI development, and fractional engineering leadership. Fixed-price or hourly, scoped to fit.',
  openGraph: {
    title: 'Services — Lyranova',
    description:
      'Full-stack web & API development, mobile apps, cloud architecture, legacy modernisation, API integration, generative AI development, and fractional engineering leadership — fixed-price or hourly.',
  },
}

export const SERVICE_PRODUCTS = [
  {
    icon: <Sparkles size={24} />,
    title: 'Generative AI Development',
    painPoint: "Want to add AI features to your product, but need someone who's actually shipped LLM-backed systems, not just called an API once?",
    deliverables: [
      'LLM integration (OpenAI, Anthropic/Claude) for chat, generation, and summarisation features',
      'Retrieval-augmented generation (RAG) — vector search and embeddings over your own documents and data',
      'Agentic, tool-using systems that plan and execute multi-step workflows',
      'Custom MCP servers and tool integrations for AI assistants',
      'Production-grade prompt design, evaluation, and cost/latency tuning',
    ],
    engagement: 'Fixed-price or hourly',
    forWho: 'Teams adding AI features to an existing product, or building an AI-native one from scratch',
  },
  {
    icon: <Cloud size={24} />,
    title: 'Cloud Architecture & Migration',
    painPoint: 'Moving to AWS or Azure, or need your existing cloud setup reviewed by someone who has done this before?',
    deliverables: [
      'Cloud architecture design for AWS or Azure',
      'Migration planning and execution',
      'Infrastructure-as-Code with Terraform or CDK',
      'Cost and security review of your current setup',
      'Documentation your team can maintain going forward',
    ],
    engagement: 'Fixed-price or hourly',
    forWho: 'Businesses moving to the cloud or outgrowing an ad-hoc setup',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Full-Stack Web & API Development',
    painPoint: 'Need a web app or API built end to end — backend, frontend, and everything in between — by one engineer who owns the whole stack?',
    deliverables: [
      '.NET Core / C# backend APIs with Entity Framework Core',
      'React or Angular front-ends wired to those APIs',
      'Database design and data access layer',
      'Clean, tested, documented code you can hand to another developer',
      'Deployment setup (CI/CD, hosting) if you need it',
    ],
    engagement: 'Fixed-price or hourly',
    forWho: 'Startups and small businesses shipping a new product or feature',
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Legacy Modernisation',
    painPoint: "Have a monolith or legacy system that's slowing the team down, but a full rewrite feels too risky?",
    deliverables: [
      'Monolith decomposition strategy using domain-driven design',
      'Incremental migration plan — no big-bang rewrite',
      'CQRS and event-driven patterns where they help',
      'Working software at every stage, not just at the end',
      'A system your team can keep extending after the engagement ends',
    ],
    engagement: 'Fixed-price or hourly',
    forWho: 'Teams with tech debt who need to keep shipping while modernising',
  },
  {
    icon: <Plug size={24} />,
    title: 'Third-Party API Integration',
    painPoint: "Need to connect your platform to a payment provider, marketing tool, or ad platform's API — and get the OAuth2 flow right the first time?",
    deliverables: [
      'OAuth2 authentication and secure token handling',
      'Integration with payment, marketing, or ad platform APIs',
      'Error handling and retry logic for production reliability',
      'Rate-limit-aware, well-tested integration code',
      'Documentation for your team to maintain the integration',
    ],
    engagement: 'Fixed-price or hourly',
    forWho: 'Products that need to talk to external platforms reliably',
  },
  {
    icon: <Users size={24} />,
    title: 'Fractional Engineering Leadership',
    painPoint: 'Growing engineering team but not ready for a full-time technical lead? Get senior oversight on a part-time basis.',
    deliverables: [
      'Team setup and process — code review, branching, deployment',
      'Agile process design that fits your team’s size',
      'Code quality standards and architecture guidance',
      'Regular mentoring and performance check-ins with engineers',
      'A sounding board for technical decisions',
    ],
    engagement: 'Fractional retainer',
    forWho: 'Small teams that need senior technical leadership without a full-time hire',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile App Development',
    painPoint: 'Need a cross-platform mobile app without maintaining two separate native codebases?',
    deliverables: [
      'Flutter app for iOS and Android from a single codebase',
      'State management with GetX or Riverpod',
      'API integration with your existing backend',
      'App store submission support',
      'Clean architecture that a future developer can extend',
    ],
    engagement: 'Fixed-price or hourly',
    forWho: 'Founders launching a first mobile app, or teams adding mobile to an existing product',
  },
]

export const PROCESS_STEPS = [
  { num: '01', title: 'Send a Message', body: 'Tell me about your project, constraints, and goal through the contact form. No commitment required.' },
  { num: '02', title: 'Quote & Scope', body: 'I put together a clear scope, timeline, and quote — fixed-price, hourly, or fractional — so you know what to expect.' },
  { num: '03', title: 'Delivery', body: 'Work begins, with regular check-ins and working software along the way, not just at the end.' },
  { num: '04', title: 'Handover', body: 'A walkthrough of what was built, documentation, and an optional support window for follow-up questions.' },
]
