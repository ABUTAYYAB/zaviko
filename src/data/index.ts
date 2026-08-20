import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const AGENCY_INFO = {
  name: 'Zaviko',
  legalName: 'Zaviko Digital Studio Inc.',
  tagline: 'Designing, engineering, and automating digital experiences for ambitious businesses.',
  shortDescription:
    'We build high-performance web applications, intelligent AI systems, robust mobile apps, and scalable digital commerce for market leaders.',
  badge: 'AVAILABLE FOR Q2 / Q3 2026',
  email: 'hello@zaviko.agency',
  phone: '+1 (415) 890-5520',
  location: 'San Francisco, CA & Global',
  coordinates: '37.7749° N, 122.4194° W',
  socials: [
    { name: 'Twitter / X', href: 'https://twitter.com', handle: '@zavikostudio' },
    { name: 'LinkedIn', href: 'https://linkedin.com', handle: 'zaviko-digital' },
    { name: 'GitHub', href: 'https://github.com', handle: 'zaviko-lab' },
    { name: 'Dribbble', href: 'https://dribbble.com', handle: 'zaviko' },
  ],
};

export const NAV_ITEMS = [
  {
    title: 'Work',
    href: 'work',
    description: 'Selected case studies & client outcomes',
  },
  {
    title: 'Services',
    href: 'services',
    description: 'Design, engineering, AI & automation',
  },
  {
    title: 'Capabilities',
    href: 'capabilities',
    description: 'Technical stack & infrastructure',
  },
  {
    title: 'Process',
    href: 'approach',
    description: 'Our 5-phase delivery framework',
  },
  {
    title: 'About',
    href: 'about',
    description: 'Studio philosophy & team DNA',
  },
  {
    title: 'Testimonials',
    href: 'testimonials',
    description: 'Verified founder & client reviews',
  },
  {
    title: 'Contact',
    href: 'contact',
    description: 'Start a project or book a call',
  },
];

export const TRUST_METRICS = [
  {
    value: '$140M+',
    label: 'Client Capital Raised',
    detail: 'Across funded startups & scaleups',
  },
  {
    value: '99.4%',
    label: 'On-Time Delivery',
    detail: 'Predictable agile sprint cadence',
  },
  {
    value: '50+',
    label: 'Products Shipped',
    detail: 'Web, mobile, AI & commerce',
  },
  {
    value: '< 4.5 Wks',
    label: 'Average MVP Velocity',
    detail: 'From blueprint to production',
  },
];

export const CLIENT_LOGOS = [
  { name: 'Vesper AI', tag: 'Autonomous Agents', ticker: 'VSPR' },
  { name: 'Kroma Capital', tag: 'Quantitative Fintech', ticker: 'KRMA' },
  { name: 'Pulse Health', tag: 'BioTech Platform', ticker: 'PLSE' },
  { name: 'Nova Cloud', tag: 'Distributed Infra', ticker: 'NOVA' },
  { name: 'OrbitHQ', tag: 'SaaS Workspace', ticker: 'ORBT' },
  { name: 'Apex Labs', tag: 'DeepTech Robotics', ticker: 'APEX' },
  { name: 'Veloce EV', tag: 'Automotive Telematics', ticker: 'VELO' },
  { name: 'Synapse Flow', tag: 'Enterprise RAG', ticker: 'SYNP' },
];

export const FEATURED_PROJECTS = [
  {
    id: 'aura-health',
    title: 'Aura Health',
    subtitle: 'Clinical AI Diagnostic Engine & Mobile Companion',
    client: 'Aura Health Inc.',
    industry: 'Healthcare & AI',
    year: '2025',
    category: 'AI Platform / Mobile',
    badge: 'AI + Mobile',
    description:
      'Engineered an FDA-compliant diagnostic engine powered by multimodal LLMs, featuring sub-second audio analysis, offline-first mobile sync, and a HIPAA-secure clinical dashboard.',
    impact: [
      { label: 'Diagnostic Speed', value: '+340%' },
      { label: 'Patient Engagement', value: '4.9/5' },
      { label: 'HIPAA Audits', value: '100% Pass' },
    ],
    technologies: ['Next.js 14', 'React Native', 'Python', 'FastAPI', 'Custom RAG', 'PostgreSQL'],
    deliverables: ['Cross-Platform Mobile App', 'Physician Portal', 'Real-Time Voice AI Pipeline'],
    themeColor: '#8B5CF6',
    accentGradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    mockupType: 'health',
  },
  {
    id: 'kroma-capital',
    title: 'Kroma Terminal',
    subtitle: 'Institutional Algorithmic Trading & Real-Time Analytics',
    client: 'Kroma Capital Ltd.',
    industry: 'Quantitative Fintech',
    year: '2025',
    category: 'Fintech / Web Application',
    badge: 'High-Frequency SaaS',
    description:
      'Designed and engineered a sub-millisecond execution trading terminal streaming live market depth, order book heatmaps, and automated algorithmic risk hedging.',
    impact: [
      { label: 'Data Latency', value: '< 12ms' },
      { label: 'Daily Trading Volume', value: '$85M+' },
      { label: 'UI Frame Rate', value: '120 FPS' },
    ],
    technologies: ['React 18', 'TypeScript', 'WebSockets', 'Rust WebAssembly', 'Tailwind CSS', 'Docker'],
    deliverables: ['Modular Terminal Canvas', 'Risk Engine Visualization', 'Real-Time WebSockets Client'],
    themeColor: '#38BDF8',
    accentGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    mockupType: 'fintech',
  },
  {
    id: 'verve-studio',
    title: 'Verve Studio',
    subtitle: 'Luxury Spatial E-Commerce & 3D Configurator',
    client: 'Verve Maison',
    industry: 'Luxury Fashion & Commerce',
    year: '2024',
    category: 'Headless Shopify / 3D',
    badge: 'E-Commerce',
    description:
      'A bespoke headless Shopify Plus storefront with dynamic WebGL spatial product configurators, instant sub-50ms page transitions, and international multi-currency checkout.',
    impact: [
      { label: 'Mobile AOV', value: '+84%' },
      { label: 'Page Load Speed', value: '0.4s' },
      { label: 'Conversion Lift', value: '+62%' },
    ],
    technologies: ['Next.js App Router', 'Shopify Plus API', 'Three.js / WebGL', 'Tailwind', 'Stripe'],
    deliverables: ['Headless Storefront', 'Interactive 3D Stage', 'Custom Shopify App Extensions'],
    themeColor: '#F59E0B',
    accentGradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    mockupType: 'ecommerce',
  },
  {
    id: 'synapse-flow',
    title: 'Synapse Flow',
    subtitle: 'Autonomous Enterprise Multi-Agent Orchestration Platform',
    client: 'Synapse Systems',
    industry: 'Enterprise Automation & AI',
    year: '2025',
    category: 'AI Workflow Platform',
    badge: 'AI Agents',
    description:
      'Created a visual node-based workspace where enterprise teams deploy autonomous AI agents that read documents, trigger APIs, automate customer flows, and sync CRM pipelines.',
    impact: [
      { label: 'Manual Ops Reduced', value: '-78%' },
      { label: 'Lead Response Time', value: '25 Sec' },
      { label: 'API Integrations', value: '120+' },
    ],
    technologies: ['Next.js', 'Python', 'LangChain', 'OpenAI / Anthropic', 'Redis', 'Tailwind'],
    deliverables: ['Visual Workflow Builder', 'Autonomous Agent Runtime', 'CRM Connectors'],
    themeColor: '#10B981',
    accentGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    mockupType: 'ai-agents',
  },
  {
    id: 'veloce-ev',
    title: 'Veloce Connected',
    subtitle: 'Fleet Telematics & Real-Time In-Vehicle OS Interface',
    client: 'Veloce Mobility',
    industry: 'Automotive & IoT',
    year: '2024',
    category: 'IoT / Automotive OS',
    badge: 'Hardware & IoT',
    description:
      'Architected cloud fleet management dashboards alongside custom touch interfaces for commercial EV fleets, tracking battery degradation, route thermals, and driver telemetry.',
    impact: [
      { label: 'Fleet Efficiency', value: '+32%' },
      { label: 'Live Data Uptime', value: '99.99%' },
      { label: 'Connected Vehicles', value: '14,000+' },
    ],
    technologies: ['TypeScript', 'GraphQL', 'AWS IoT Core', 'Mapbox GL', 'Go Backend', 'PostgreSQL'],
    deliverables: ['Live Telematics Dashboard', 'Driver Tablet Companion', 'Battery Health Predictive Model'],
    themeColor: '#EC4899',
    accentGradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    mockupType: 'telematics',
  },
  {
    id: 'lumina-workspace',
    title: 'Lumina SaaS',
    subtitle: 'Real-Time Collaborative Documentation & Knowledge Canvas',
    client: 'Lumina Cloud',
    industry: 'Productivity SaaS',
    year: '2024',
    category: 'SaaS Platform',
    badge: 'Productivity',
    description:
      'Engineered an ultra-fast collaborative document editor supporting conflict-free real-time sync (CRDT), embedded live data charts, and semantic vector search.',
    impact: [
      { label: 'Active Daily Users', value: '180K+' },
      { label: 'Sync Latency', value: '< 8ms' },
      { label: 'Search Accuracy', value: '96.4%' },
    ],
    technologies: ['Next.js', 'Yjs / CRDT', 'TypeScript', 'Node.js', 'Vector DB', 'Tailwind'],
    deliverables: ['Collaborative Rich-Text Canvas', 'Vector Knowledge Graph', 'Enterprise Permissions Engine'],
    themeColor: '#6366F1',
    accentGradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    mockupType: 'saas',
  },
];

export const CARDS = [
  {
    id: 'product-design',
    number: '01.',
    title: 'Digital Product Design',
    subtitle: 'UI/UX Architecture, Interactive Systems & Brand Expression',
    description:
      'We craft digital product experiences that captivate users and establish market dominance. From initial research and design system architecture to micro-interaction choreography and polished high-fidelity prototypes.',
    services: [
      ['Design Systems & Tokens', 'Interactive Prototyping'],
      ['Web & Mobile UI/UX', 'Motion & Interaction Design'],
      ['User Journey & Wireframing', 'Conversion Rate Optimization (CRO)'],
    ],
    technologies: ['Figma', 'Framer', 'Design Tokens', 'Tailwind', 'Storybook', 'UserTesting'],
    highlight: 'Zero-friction interfaces designed to turn complex workflows into intuitive user joy.',
    classes: '',
  },
  {
    id: 'fullstack-web',
    number: '02.',
    title: 'Full-Stack Web Engineering',
    subtitle: 'High-Performance Next.js, Cloud Scale & SaaS Architecture',
    description:
      'We engineer production-grade web applications built for speed, resilience, and scale. Leveraging the modern React ecosystem, serverless edge architecture, and clean, type-safe API infrastructure.',
    services: [
      ['Next.js App Router Platforms', 'Enterprise SaaS Applications'],
      ['High-Throughput REST & GraphQL APIs', 'Headless CMS Architecture'],
      ['Real-Time WebSockets & Data Streams', 'Edge Caching & Performance Tuning'],
    ],
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'Docker'],
    highlight: 'Lighthouse 95+ score standard with sub-100ms API response latency.',
    classes: 'border-t border-stroke',
  },
  {
    id: 'mobile-apps',
    number: '03.',
    title: 'Mobile App Development',
    subtitle: 'Native iOS & Android, React Native & Cross-Platform Engines',
    description:
      'From consumer mobile platforms to mission-critical field operations apps. We engineer smooth, 120 FPS mobile experiences with robust offline-first synchronization and native device integrations.',
    services: [
      ['Cross-Platform React Native', 'iOS & Android Native Modules'],
      ['Offline-First Local Storage & Sync', 'Push Notifications & Deep Linking'],
      ['Biometrics, Camera & Hardware APIs', 'App Store & Play Store Deployment'],
    ],
    technologies: ['React Native', 'Expo', 'Swift', 'Kotlin', 'SQLite', 'Firebase', 'RevenueCat'],
    highlight: 'Flawless performance across iOS and Android with single codebase efficiency.',
    classes: 'border-t border-stroke',
  },
  {
    id: 'ai-systems',
    number: '04.',
    title: 'AI & Intelligent Systems',
    subtitle: 'Autonomous AI Agents, RAG Pipelines & LLM Engineering',
    description:
      'We integrate practical, high-value artificial intelligence into business workflows. Building custom retrieval-augmented generation (RAG) engines, conversational autonomous agents, and multimodal reasoning systems.',
    services: [
      ['Autonomous Multi-Agent Systems', 'Custom RAG Knowledge Engines'],
      ['LLM API Integration & Fine-Tuning', 'Voice, Vision & Multimodal Pipelines'],
      ['Automated Data Enrichment', 'Internal AI Co-Pilots & Assistants'],
    ],
    technologies: ['OpenAI', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'Pinecone / Qdrant', 'FastAPI', 'Python'],
    highlight: 'Transform your proprietary data into high-accuracy automated intelligence.',
    classes: 'border-t border-stroke',
  },
  {
    id: 'automation-ops',
    number: '05.',
    title: 'Workflow & Business Automation',
    subtitle: 'CRM Integration, Lead Pipelines & Zero-Manual Systems',
    description:
      'Eliminate repetitive operational friction. We connect your entire tech stack with custom event-driven automation, omnichannel WhatsApp/email lead nurturing, and internal tools that scale effortlessly.',
    services: [
      ['Omnichannel Lead & WhatsApp Flows', 'HubSpot / Salesforce / CRM Sync'],
      ['Bespoke Internal Admin Portals', 'Automated Invoicing & Stripe Flows'],
      ['Webhooks & Event-Driven Triggers', 'Legacy System API Modernization'],
    ],
    technologies: ['Node.js', 'Zapier / Make', 'WhatsApp Business API', 'Stripe', 'HubSpot API', 'Retool'],
    highlight: 'Free your team from manual tasks with resilient 24/7 background automation.',
    classes: 'border-t border-stroke',
  },
  {
    id: 'ecommerce',
    number: '06.',
    title: 'High-Performance E-Commerce',
    subtitle: 'Shopify Plus, Headless Commerce & Custom Checkout Engines',
    description:
      'We build high-converting digital storefronts for ambitious direct-to-consumer and B2B brands. Combining bespoke headless architecture with blistering load speeds and tailored checkout experiences.',
    services: [
      ['Headless Shopify Plus Development', 'Custom Shopify Theme & App Builds'],
      ['Interactive 3D Product Viewers', 'High-Converting Checkout Optimization'],
      ['Subscriptions, B2B & Wholesale Logic', 'Global Multi-Currency Localization'],
    ],
    technologies: ['Shopify Plus', 'Hydrogen / Oxygen', 'Liquid', 'Sanity CMS', 'Stripe', 'Klaviyo'],
    highlight: 'Engineered for exceptional conversion, high average order values, and global scale.',
    classes: 'border-t border-stroke',
  },
];

export const CAPABILITY_STACKS = [
  {
    category: 'Frontend & UI',
    description: 'Ultra-fast, accessible, and reactive user interfaces',
    skills: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js / WebGL', 'PWA'],
  },
  {
    category: 'Backend & APIs',
    description: 'Type-safe, distributed, and resilient server architecture',
    skills: ['Node.js', 'Python / FastAPI', 'Go', 'PostgreSQL', 'Redis', 'GraphQL', 'Prisma', 'RESTful'],
  },
  {
    category: 'AI & Data Intelligence',
    description: 'State-of-the-art machine learning & agentic workflows',
    skills: ['Autonomous Agents', 'LangChain', 'LlamaIndex', 'Vector Databases', 'RAG Pipelines', 'Fine-Tuning', 'OpenAI / Claude API'],
  },
  {
    category: 'Cloud, DevOps & Commerce',
    description: 'Rock-solid deployment, security & commerce infrastructure',
    skills: ['Vercel', 'AWS Cloud', 'Docker', 'CI/CD Pipelines', 'Shopify Plus', 'Stripe Payments', 'Datadog'],
  },
];

export const APPROACH_CARDS = [
  {
    number: '01',
    icon: First,
    title: 'Discovery & Strategic Alignment',
    timeframe: 'Days 1 – 5',
    description:
      'We conduct deep-dive technical and product discovery. We audit your market, user journeys, data model, and architecture to build an ironclad roadmap and technical specification.',
    deliverable: 'Product Blueprint, Architecture Diagram & Sprint Scope',
  },
  {
    number: '02',
    icon: Second,
    title: 'Architecture & Interactive Design',
    timeframe: 'Week 2',
    description:
      'We build scalable design systems and click-through prototypes in Figma. Every micro-interaction, breakpoint, and user flow is mapped and validated before engineering begins.',
    deliverable: 'Complete High-Fidelity UI System & Clickable Prototype',
  },
  {
    number: '03',
    icon: Third,
    title: 'High-Velocity Agile Engineering',
    timeframe: 'Weeks 3 – 5',
    description:
      'Our senior engineers write clean, type-safe TypeScript code in 1-week sprints. You receive live staging previews, daily CI/CD deployments, and transparent async updates.',
    deliverable: 'Staging Environment, Clean Codebase & Active Sprint Reviews',
  },
  {
    number: '04',
    icon: Fourth,
    title: 'QA, Security & Performance Tuning',
    timeframe: 'Week 6',
    description:
      'We put every component through extreme testing: automated unit tests, cross-browser audits, penetration checks, Lighthouse 95+ performance optimization, and user acceptance testing.',
    deliverable: 'QA Sign-Off, 95+ Performance Audit & Security Report',
  },
  {
    number: '05',
    icon: Fifth,
    title: 'Production Launch & Autonomous Scale',
    timeframe: 'Launch & Beyond',
    description:
      'Zero-downtime production deployment with live telemetry, error monitoring, and dedicated post-launch support to help your team iterate and scale seamlessly.',
    deliverable: 'Production Deployment, CI/CD Pipelines & Handover Documentation',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Elena Rostova',
    role: 'VP of Product',
    company: 'Aura Health',
    avatar: 'ER',
    industry: 'Digital Health & AI',
    metrics: '+340% User Growth in Q1',
    quote:
      'Zaviko transformed our AI diagnostic platform from a clunky internal proof-of-concept into a breathtaking, FDA-compliant clinical application. Their engineering velocity and attention to interaction design are unmatched.',
  },
  {
    id: '2',
    author: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Kroma Capital',
    avatar: 'MV',
    industry: 'Quantitative Fintech',
    metrics: '< 12ms WebSocket Latency',
    quote:
      'Finding an agency that truly understands real-time data visualization, WebSocket feeds, and financial-grade security is near impossible. Zaviko delivered our terminal on time, and our traders rave about the interface speed.',
  },
  {
    id: '3',
    author: 'Sophie Chen',
    role: 'Founder & CEO',
    company: 'Verve Studio',
    avatar: 'SC',
    industry: 'Luxury E-Commerce',
    metrics: '+84% Mobile Order Value',
    quote:
      'Our headless Shopify Plus experience went live before our peak holiday season without a single glitch. The 3D product customizer they engineered created an 84% lift in mobile average order value. Exceptional craft.',
  },
  {
    id: '4',
    author: 'David Thorne',
    role: 'Head of Operations',
    company: 'Synapse Flow',
    avatar: 'DT',
    industry: 'Enterprise SaaS',
    metrics: '-78% Manual Workflow Ops',
    quote:
      'Zaviko’s team built our autonomous agent orchestration engine in record time. They did not just write code; they challenged our product thinking and engineered a far better system than we originally envisioned.',
  },
  {
    id: '5',
    author: 'Clara Lindqvist',
    role: 'Chief Technology Officer',
    company: 'Veloce Mobility',
    avatar: 'CL',
    industry: 'Connected IoT & Automotive',
    metrics: '14,000+ Active Vehicles',
    quote:
      'True senior engineers who care about every line of code. They designed our fleet telematics platform to handle millions of real-time telemetry events effortlessly. I cannot recommend Zaviko highly enough.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How quickly can Zaviko kick off a new project?',
    answer:
      'We typically begin within 5 to 7 business days following discovery and scope sign-off. We only take on a strictly limited number of projects per quarter to guarantee senior-level attention to every build.',
  },
  {
    question: 'What is your typical project timeline and pricing model?',
    answer:
      'Most MVP and core agency builds range from 3 to 8 weeks, with budgets starting from $5,000 for targeted modules to $25,000+ for full-scale custom platforms. We provide transparent fixed-price milestone agreements or dedicated monthly engineering retainers.',
  },
  {
    question: 'Do you work with startups, established enterprises, or both?',
    answer:
      'Both. We help venture-backed startups launch high-velocity MVPs that win funding, and we help established enterprises modernize legacy workflows with AI, Next.js, and custom automation.',
  },
  {
    question: 'Who owns the intellectual property and source code?',
    answer:
      'You do. Upon project completion and milestone fulfillment, 100% of the source code, design systems, Figma files, and intellectual property belong entirely to you with zero licensing lock-in.',
  },
  {
    question: 'What happens after launch? Do you provide ongoing maintenance?',
    answer:
      'Yes. Every project includes a 30-day post-launch warranty period with bug fixes and telemetry monitoring. We also offer ongoing engineering retainers for continuous feature iterations, AI model tuning, and cloud scaling.',
  },
];

export const RADIO_FIELDS = [
  {
    title: 'What core service are you looking for?',
    classes: 'mr-[2.25vw] md:mr-0',
    radioArray: [
      { name: 'Full-Stack Web App', value: 'web-app' },
      { name: 'AI & Agent Automation', value: 'ai-agents' },
      { name: 'Mobile App (iOS/Android)', value: 'mobile-app' },
      { name: 'Product Design & UI/UX', value: 'design-system' },
      { name: 'E-Commerce / Shopify Plus', value: 'ecommerce' },
      { name: 'Complete End-to-End Build', value: 'all-inclusive' },
    ],
    formKey: '_service',
  },
  {
    title: 'What is your approximate budget tier?',
    classes: '',
    radioArray: [
      { name: '$5,000 – $10,000', value: '5-10k' },
      { name: '$10,000 – $25,000', value: '10-25k' },
      { name: '$25,000 – $50,000', value: '25-50k' },
      { name: '$50,000+', value: '50k+' },
    ],
    formKey: '_budget',
  },
  {
    title: 'What is your expected project timeline?',
    classes: 'mr-[2.25vw] md:mr-0',
    radioArray: [
      { name: 'Urgent (< 3 weeks)', value: 'urgent' },
      { name: 'Standard (4 – 8 weeks)', value: 'standard' },
      { name: 'Flexible (2 – 4 months)', value: 'flexible' },
      { name: 'Ongoing Dedicated Retainer', value: 'retainer' },
    ],
    formKey: '_quickness',
  },
  {
    title: 'What stage is your project currently in?',
    classes: '',
    radioArray: [
      { name: 'Concept / Idea stage', value: 'idea' },
      { name: 'Have Figma / Wireframes', value: 'designs-ready' },
      { name: 'Existing Product needing redesign/rebuild', value: 'rebuild' },
      { name: 'Scaling active production platform', value: 'scaling' },
    ],
    formKey: '_pages',
  },
];

export const INPUT_FIELDS = [
  { label: 'Your Name', name: 'first', classes: 'inline-block !w-[calc(50%-1.5vw)] mr-[3vw] md:!w-full md:mr-0', required: true, placeholder: 'Alex Mercer' },
  { label: 'Work Email', name: 'email', classes: 'inline-block !w-[calc(50%-1.5vw)] md:!w-full', type: 'email', required: true, placeholder: 'alex@company.com' },
  { label: 'Company / Project Name', name: 'company', classes: 'inline-block !w-[calc(50%-1.5vw)] mr-[3vw] md:!w-full md:mr-0', required: true, placeholder: 'Acme Technologies' },
  { label: 'Phone or WhatsApp (Optional)', name: 'phone', classes: 'inline-block !w-[calc(50%-1.5vw)] md:!w-full', type: 'tel', placeholder: '+1 (555) 019-2834' },
  { label: 'Company Website or Deck URL', name: 'websiteUrl', classes: 'w-full', placeholder: 'https://company.com' },
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: 'web-app',
  _budget: '10-25k',
  _pages: 'designs-ready',
  _quickness: 'standard',

  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};

