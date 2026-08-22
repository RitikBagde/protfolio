export const siteConfig = {
  name: "Ritik Bagde",
  title: "Ritik Bagde— AI & Full-Stack Developer",
  description:
    "AI & Full-Stack Developer building AI-powered applications, data solutions, and automation for clients worldwide.",
  tagline: "Building AI-powered applications, data solutions & automation.",
  role: "AI & Full-Stack Developer",
  email: "ritikvbagde@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/ritik-bagde-b76396248/",
      github: "https://github.com/ritikbagde",
      freelancer: "https://www.freelancer.com/u/ritik872",
      upwork: "https://www.upwork.com/freelancers/~01f84a4dcf958e3670",
      flexotools: "https://flexotools.com",
      wherewatch: "https://wherewatch.in",
  },
  about: {
    headline: "I build AI products and data systems that solve real business problems.",
    paragraphs: [
      "I'm a freelance AI and full-stack developer focused on shipping working software — not slide decks. Clients hire me to integrate LLMs, automate workflows, analyze data, and build production-ready web applications.",
      "From voice-powered AI interview platforms to Power BI dashboards and n8n automation pipelines, I deliver end-to-end: architecture, development, deployment, and documentation.",
    ],
    highlights: [
      "Available for freelance & contract work",
      "AI integrations, data analytics & automation",
      "React, Next.js, Python, Node.js stack",
    ],
  },
} as const;

export type Project = {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  description: string;
  longDescription: string;
  features: string[];
  tags: string[];
  image?: string;
  featured?: boolean;
  link?: string;
  category?: "AI & Automation" | "Web Dev" | "3D & Game Dev";
  metrics?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: "flexotools",
    slug: "flexotools",
    title: "FlexoTools",
    emoji: "🛠️",
    description:
      "Micro-SaaS suite of productivity and AI tools — multiple utilities under one Next.js platform with API and LLM integrations.",
    longDescription:
      "FlexoTools is a micro-SaaS platform bundling multiple productivity and AI-powered utilities under a single Next.js application. Built with API-first architecture and LLM integrations, it delivers a cohesive suite of tools for everyday workflows — from text processing to AI-assisted content generation.",
    features: [
      "Multi-utility SaaS architecture under one platform",
      "LLM-powered AI tools for content and productivity",
      "RESTful API layer for third-party integrations",
      "Next.js with server-side rendering and API routes",
      "Subscription-based access control",
      "Real-time tool execution with streaming responses",
    ],
    tags: ["Next.js", "Micro-SaaS", "AI APIs", "Productivity"],
    featured: true,
    link: "https://flexotools.com",
  },
  {
    id: "wherewatch",
    slug: "wherewatch",
    title: "Wherewatch",
    emoji: "📍",
    description:
      "Find where to watch or read your favorite movies, TV shows, anime, manga, and more — all in one place",
    longDescription:
      "Wherewatch is a cross-platform app that aggregates streaming availability data so users can instantly find where to watch movies, TV shows, or read manga. It uses location-aware APIs to surface region-specific streaming providers and pricing, saving users the hassle of checking each platform manually.",
    features: [
      "Cross-platform availability (web + mobile)",
      "Location-aware streaming provider lookup",
      "Real-time availability data across platforms",
      "Support for movies, TV, anime, and manga",
      "Clean search with instant results",
      "Favorites and watchlist management",
    ],
    tags: ["React Native", "Location APIs", "Real-time", "Mobile"],
    featured: true,
    link: "https://wherewatch.in",
  },
  {
    id: "ai-mock-interview",
    slug: "ai-mock-interview",
    title: "AI Mock Interview Platform",
    emoji: "🤖",
    description:
      "Voice-enabled AI interview simulator with Gemini-powered feedback, structured interview workflows, and real-time conversation via Vapi.",
    longDescription:
      "An AI-powered mock interview platform that simulates real technical interviews using voice interaction. Powered by Google Gemini for intelligent question generation and feedback, with Vapi handling real-time voice conversation. The platform supports structured interview workflows with role-specific question banks and detailed performance analysis.",
    features: [
      "Real-time voice conversation via Vapi",
      "Google Gemini-powered question generation and feedback",
      "Structured interview workflows by role and difficulty",
      "Performance scoring and detailed feedback reports",
      "Support for behavioral and technical question types",
      "Session history and progress tracking",
    ],
    tags: ["React", "Google Gemini", "Vapi", "AI Workflow"],
  },
  {
    id: "travel-advisor",
    slug: "travel-advisor",
    title: "Travel Advisor",
    emoji: "✈️",
    description:
      "Location-aware travel recommendation app using Google Maps APIs for discovery, routing, and personalized trip suggestions.",
    longDescription:
      "A travel recommendation engine that uses Google Maps APIs to provide location-aware suggestions for destinations, restaurants, and activities. It combines Places API for discovery, Directions API for routing, and a personalized scoring algorithm to build custom trip itineraries based on user preferences.",
    features: [
      "Google Places API for destination discovery",
      "Optimized routing with Directions API",
      "Personalized trip itinerary generation",
      "Interactive map with custom markers",
      "Filter by category, rating, and distance",
      "Save and share trip plans",
    ],
    tags: ["Google Maps", "Location APIs", "React", "Modern Web"],
  },
  {
    id: "realtime-chat",
    slug: "realtime-chat",
    title: "WaveLength — Real-Time Chat App",
    emoji: "💬",
    description:
      "Full-stack messaging platform with authentication, persistent chat history, and real-time delivery using React and Node.js.",
    longDescription:
      "A full-stack real-time chat application supporting one-on-one and group messaging. Built with React on the frontend and Node.js with WebSockets on the backend, it features user authentication, message persistence with MongoDB, typing indicators, and read receipts.",
    features: [
      "Real-time messaging via WebSockets",
      "User authentication and session management",
      "Persistent chat history with MongoDB",
      "Typing indicators and online status",
      "Group chat and direct messages",
      "Responsive design for desktop and mobile",
    ],
    tags: ["React", "Node.js", "WebSockets", "MongoDB"],
  },
  {
    id: "medicare-fraud",
    slug: "medicare-fraud",
    title: "Medicare Fraud Detection",
    emoji: "📊",
    description:
      "IEEE research project using Python, SQL, and machine learning to detect anomalous billing patterns in healthcare claims data.",
    longDescription:
      "An IEEE research project focused on detecting fraudulent Medicare billing patterns using machine learning. The system analyzes large-scale healthcare claims data with Python and SQL, applying anomaly detection algorithms to flag suspicious claims for manual review.",
    features: [
      "Machine learning anomaly detection on claims data",
      "Large-scale SQL data processing and cleaning",
      "Statistical analysis of billing patterns",
      "Visualization of fraud indicators and trends",
      "Published as IEEE research paper",
      "Reproducible pipeline with documented methodology",
    ],
    tags: ["Python", "SQL", "Machine Learning", "IEEE Research"],
  },
  {
    id: "power-bi",
    slug: "power-bi",
    title: "Power BI Dashboard",
    emoji: "📈",
    description:
      "End-to-end analytics deliverable: data cleaning, KPI modeling, and interactive Power BI dashboards for business decision-making.",
    longDescription:
      "An end-to-end business analytics project delivering interactive Power BI dashboards. The workflow covers data extraction, cleaning, KPI modeling, and visualization — transforming raw business data into actionable insights for stakeholders.",
    features: [
      "End-to-end data pipeline from source to dashboard",
      "Automated data cleaning and transformation",
      "Custom KPI modeling for business metrics",
      "Interactive Power BI dashboards with drill-through",
      "Scheduled data refresh and deployment",
      "Stakeholder training and documentation",
    ],
    tags: ["Power BI", "Data Cleaning", "KPIs", "Visualization"],
  },
  {
    id: "email-draft-automation",
    slug: "email-draft-automation",
    title: "AI-Powered Email Draft Automation",
    emoji: "✉️",
    description:
      "Automated workflow that reads unread emails, analyzes content with OpenAI, drafts contextual responses, and logs records in Airtable.",
    longDescription:
      "An end-to-end email automation pipeline that fetches unread Gmail threads, uses OpenAI to analyze content and generate contextual draft replies, and logs all metadata and AI outputs in Airtable. Designed with human-in-the-loop safety — drafts are created for review, never auto-sent.",
    features: [
      "Scheduled daily triggers to fetch unread Gmail threads",
      "Generates draft replies without auto-sending for review",
      "Logs sender metadata and AI outputs in Airtable",
      "OpenAI-powered content analysis and response generation",
      "Human-in-the-loop safety — no auto-sending",
    ],
    tags: ["n8n", "OpenAI", "Gmail API", "Airtable", "Automation"],
    category: "AI & Automation",
    metrics: "100% human-in-the-loop safety",
    highlights: [
      "Scheduled daily triggers to fetch unread Gmail threads",
      "Generates draft replies without auto-sending for review",
      "Logs sender metadata and AI outputs in Airtable",
    ],
  },
  {
    id: "feedback-routing",
    slug: "feedback-routing",
    title: "Automated Customer Feedback Routing",
    emoji: "🎯",
    description:
      "End-to-end feedback classification system that categorizes submissions and alerts support teams instantly.",
    longDescription:
      "A complete feedback processing pipeline that classifies incoming form submissions into Complaints, Compliments, or Feature Requests using AI, then routes urgent items to targeted Slack channels and sends automated confirmation emails to users.",
    features: [
      "Classifies submissions into Complaints, Compliments, or Feature Requests",
      "Routes urgent complaints to targeted Slack channels",
      "Sends automated confirmation emails to users",
      "Zero manual sorting required",
    ],
    tags: ["n8n", "OpenAI", "Slack API", "Airtable", "Workflows"],
    category: "AI & Automation",
    metrics: "Zero manual sorting",
    highlights: [
      "Classifies incoming form submissions into Complaints, Compliments, or Feature Requests",
      "Routes urgent complaints and requests directly to targeted Slack channels",
      "Sends automated confirmation emails to users",
    ],
  },
  {
    id: "data-segmentation",
    slug: "data-segmentation",
    title: "Dynamic Data Segmentation Engine",
    emoji: "📊",
    description:
      "Scalable data processing pipeline capable of handling thousands of records for targeted outreach campaigns.",
    longDescription:
      "A scalable data pipeline that cleans, structures, and segments thousands of records from Google Sheets using conditional logic. Automatically groups customers by region and prepares filtered, actionable lists for sales and marketing outreach.",
    features: [
      "Cleans, structures, and filters incoming sheet data",
      "Segments customer groups by region automatically",
      "Prepares filtered lists for sales and marketing outreach",
      "Handles 5,000+ records in a single run",
    ],
    tags: ["n8n", "Google Sheets", "Data Pipelines", "Conditional Logic"],
    category: "AI & Automation",
    metrics: "5,000+ records processed automatically",
    highlights: [
      "Cleans, structures, and filters incoming sheet data using conditional logic",
      "Segments customer groups automatically based on region",
      "Prepares actionable, filtered lists for sales and marketing outreach",
    ],
  },
  {
    id: "job-application-scorer",
    slug: "job-application-scorer",
    title: "Automated Job Application Scorer",
    emoji: "⚡",
    description:
      "Conditional candidate evaluation pipeline that parses applications, assigns custom ratings, and updates tracking databases.",
    longDescription:
      "An automation pipeline that captures applicant entries from web forms, applies profession-specific criteria logic to generate automated ratings, syncs results to Airtable, and triggers confirmation emails — all without manual intervention.",
    features: [
      "Captures applicant entries from web forms",
      "Applies profession and criteria logic for automated ratings",
      "Syncs results to Airtable and triggers confirmation emails",
      "Instant candidate scoring",
    ],
    tags: ["n8n", "Airtable", "Automation", "Switch Logic"],
    category: "AI & Automation",
    metrics: "Instant candidate scoring",
    highlights: [
      "Captures applicant entries from web forms",
      "Applies profession and criteria logic to determine automated ratings",
      "Syncs results to Airtable and triggers confirmation emails",
    ],
  },
  {
    id: "ue5-environment",
    slug: "ue5-environment",
    title: "Realistic UE5 Environment Experiment",
    emoji: "🎮",
    description:
      "Unreal Engine 5 environment focus study optimizing immersion, natural foliage scattering, and multi-angle dynamic lighting.",
    longDescription:
      "An Unreal Engine 5 environment design experiment focused on creating immersive, photorealistic scenes with custom foliage distribution, dynamic lighting, and optimized real-time rendering. Prioritizes visual fidelity across multiple camera angles and motion stability.",
    features: [
      "Custom foliage distribution for organic environments",
      "Dynamic lighting from any camera angle",
      "Optimized real-time motion rendering",
      "Focused on scale balance and motion stability",
    ],
    tags: ["Unreal Engine 5", "Environment Design", "Tech Art", "3D Rendering"],
    category: "3D & Game Dev",
    metrics: "Optimized real-time motion rendering",
    highlights: [
      "Custom foliage distribution created for organic, non-uniform environments",
      "Dynamic lighting setup built to hold visual fidelity from any camera angle",
      "Focused on scale balance and motion stability rather than static renders",
    ],
  },
];

export type Service = {
  id: string;
  title: string;
  icon: "brain" | "chart" | "workflow" | "code";
  outcomes: string[];
};

export const services: Service[] = [
  {
    id: "ai",
    title: "AI Development",
    icon: "brain",
    outcomes: [
      "AI integrations",
      "LLM applications",
      "AI chatbots",
      "AI automation",
    ],
  },
  {
    id: "data",
    title: "Data Analytics",
    icon: "chart",
    outcomes: [
      "Python/SQL analysis",
      "Power BI dashboards",
      "Data cleaning",
      "Business reports",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    icon: "workflow",
    outcomes: [
      "n8n workflows",
      "API integrations",
      "Email/CRM automation",
      "Data pipelines",
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    icon: "code",
    outcomes: [
      "React/Next.js",
      "Node.js",
      "REST APIs",
      "MongoDB",
    ],
  },
];

export const skillGroups = [
  {
    category: "AI & Automation",
    skills: ["Google Gemini", "OpenAI APIs", "LLM Integration", "Vapi", "n8n"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "Python", "MongoDB", "SQL", "REST APIs"],
  },
  {
    category: "Analytics",
    skills: ["Power BI", "Data Cleaning", "Pandas", "Visualization", "KPI Design"],
  },
] as const;

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
