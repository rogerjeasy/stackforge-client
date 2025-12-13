import { Clock, Atom, Activity, FileCode, Boxes, Zap } from "lucide-react";

export type GeneratorVariant = "fastapi" | "react" | "nextjs" | "angular" | "nodejs" | "django";

export interface GeneratorFeature {
  text: string;
}

export interface GeneratorStats {
  generated: string;
  rating: string;
}

export interface GeneratorTheme {
  borderColor: string;
  bgGradient: string;
  iconBgGradient: string;
  iconColor: string;
  badgeGradient: string;
  badgeTextColor: string;
  buttonGradient: string;
  buttonHoverGradient: string;
  buttonTextColor: string;
  buttonShadow: string;
  buttonHoverShadow: string;
}

export interface Generator {
  id: string;
  title: string;
  badge: string;
  variant: GeneratorVariant;
  icon: React.ReactNode;
  description: string;
  features: GeneratorFeature[];
  stats: GeneratorStats;
  buttonText: string;
  href: string;
}

// Theme configurations for each generator type
export const generatorThemes: Record<GeneratorVariant, GeneratorTheme> = {
  fastapi: {
    borderColor: "border-[#FF6B35]",
    bgGradient: "from-[#FF6B35]/[0.02] to-[#F7931E]/[0.02]",
    iconBgGradient: "from-[#FF6B35]/10 to-[#F7931E]/10",
    iconColor: "text-[#FF6B35]",
    badgeGradient: "from-[#FF6B35] to-[#F7931E]",
    badgeTextColor: "text-white",
    buttonGradient: "from-[#FF6B35] to-[#F7931E]",
    buttonHoverGradient: "hover:from-[#FF7B45] hover:to-[#F8A32E]",
    buttonTextColor: "text-white",
    buttonShadow: "shadow-[0_4px_12px_rgba(255,107,53,0.3)]",
    buttonHoverShadow: "hover:shadow-[0_8px_20px_rgba(255,107,53,0.4)]",
  },
  react: {
    borderColor: "border-[#61DAFB]",
    bgGradient: "from-[#61DAFB]/[0.02] to-[#00D8FF]/[0.02]",
    iconBgGradient: "from-[#61DAFB]/10 to-[#00D8FF]/10",
    iconColor: "text-[#00D8FF]",
    badgeGradient: "from-[#61DAFB] to-[#00D8FF]",
    badgeTextColor: "text-gray-900",
    buttonGradient: "from-[#61DAFB] to-[#00D8FF]",
    buttonHoverGradient: "hover:from-[#71EAFB] hover:to-[#10E8FF]",
    buttonTextColor: "text-gray-900",
    buttonShadow: "shadow-[0_4px_12px_rgba(97,218,251,0.3)]",
    buttonHoverShadow: "hover:shadow-[0_8px_20px_rgba(97,218,251,0.4)]",
  },
  nextjs: {
    borderColor: "border-[#000000]",
    bgGradient: "from-[#000000]/[0.02] to-[#404040]/[0.02]",
    iconBgGradient: "from-[#000000]/10 to-[#404040]/10",
    iconColor: "text-[#000000]",
    badgeGradient: "from-[#000000] to-[#404040]",
    badgeTextColor: "text-white",
    buttonGradient: "from-[#000000] to-[#404040]",
    buttonHoverGradient: "hover:from-[#1a1a1a] hover:to-[#505050]",
    buttonTextColor: "text-white",
    buttonShadow: "shadow-[0_4px_12px_rgba(0,0,0,0.3)]",
    buttonHoverShadow: "hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]",
  },
  angular: {
    borderColor: "border-[#DD0031]",
    bgGradient: "from-[#DD0031]/[0.02] to-[#C3002F]/[0.02]",
    iconBgGradient: "from-[#DD0031]/10 to-[#C3002F]/10",
    iconColor: "text-[#DD0031]",
    badgeGradient: "from-[#DD0031] to-[#C3002F]",
    badgeTextColor: "text-white",
    buttonGradient: "from-[#DD0031] to-[#C3002F]",
    buttonHoverGradient: "hover:from-[#ED1041] hover:to-[#D3103F]",
    buttonTextColor: "text-white",
    buttonShadow: "shadow-[0_4px_12px_rgba(221,0,49,0.3)]",
    buttonHoverShadow: "hover:shadow-[0_8px_20px_rgba(221,0,49,0.4)]",
  },
  nodejs: {
    borderColor: "border-[#339933]",
    bgGradient: "from-[#339933]/[0.02] to-[#68A063]/[0.02]",
    iconBgGradient: "from-[#339933]/10 to-[#68A063]/10",
    iconColor: "text-[#339933]",
    badgeGradient: "from-[#339933] to-[#68A063]",
    badgeTextColor: "text-white",
    buttonGradient: "from-[#339933] to-[#68A063]",
    buttonHoverGradient: "hover:from-[#43A943] hover:to-[#78B073]",
    buttonTextColor: "text-white",
    buttonShadow: "shadow-[0_4px_12px_rgba(51,153,51,0.3)]",
    buttonHoverShadow: "hover:shadow-[0_8px_20px_rgba(51,153,51,0.4)]",
  },
  django: {
    borderColor: "border-[#092E20]",
    bgGradient: "from-[#092E20]/[0.02] to-[#0A3E30]/[0.02]",
    iconBgGradient: "from-[#092E20]/10 to-[#0A3E30]/10",
    iconColor: "text-[#092E20]",
    badgeGradient: "from-[#092E20] to-[#0A3E30]",
    badgeTextColor: "text-white",
    buttonGradient: "from-[#092E20] to-[#0A3E30]",
    buttonHoverGradient: "hover:from-[#193E30] hover:to-[#1A4E40]",
    buttonTextColor: "text-white",
    buttonShadow: "shadow-[0_4px_12px_rgba(9,46,32,0.3)]",
    buttonHoverShadow: "hover:shadow-[0_8px_20px_rgba(9,46,32,0.4)]",
  },
};

// Generator configurations - ADD NEW GENERATORS HERE
export const generators: Generator[] = [
  {
    id: "fastapi",
    title: "FastAPI Generator",
    badge: "Backend",
    variant: "fastapi",
    icon: <Clock className="w-12 h-12" />,
    description:
      "Create production-ready FastAPI applications with Poetry, complete API structure, authentication, database integration, and more.",
    features: [
      { text: "Poetry dependency management" },
      { text: "SQLAlchemy ORM & Alembic" },
      { text: "JWT Authentication" },
      { text: "Docker & Testing setup" },
    ],
    stats: {
      generated: "28K+",
      rating: "4.9/5",
    },
    buttonText: "Create FastAPI Project",
    href: "/generators/fastapi",
  },
  {
    id: "react",
    title: "React Generator",
    badge: "Frontend",
    variant: "react",
    icon: <Atom className="w-12 h-12" />,
    description:
      "Build modern React applications with TypeScript, Tailwind CSS, shadcn/ui, and all the tools you need for professional development.",
    features: [
      { text: "TypeScript configuration" },
      { text: "Tailwind CSS & SASS" },
      { text: "shadcn/ui components" },
      { text: "Vite & React Router" },
    ],
    stats: {
      generated: "35K+",
      rating: "4.8/5",
    },
    buttonText: "Create React Project",
    href: "/generators/react",
  },
  {
    id: "nextjs",
    title: "Next.js Generator",
    badge: "Fullstack",
    variant: "nextjs",
    icon: <Zap className="w-12 h-12" />,
    description:
      "Create full-stack Next.js applications with TypeScript, App Router, Server Components, and optimized for production deployment.",
    features: [
      { text: "App Router & Server Components" },
      { text: "TypeScript & Tailwind CSS" },
      { text: "API Routes & Middleware" },
      { text: "SEO & Performance optimized" },
    ],
    stats: {
      generated: "20K+",
      rating: "4.9/5",
    },
    buttonText: "Create Next.js Project",
    href: "/generators/nextjs",
  },
  {
    id: "angular",
    title: "Angular Generator",
    badge: "Frontend",
    variant: "angular",
    icon: <Activity className="w-12 h-12" />,
    description:
      "Build enterprise-grade Angular applications with TypeScript, RxJS, NgRx state management, and comprehensive testing setup.",
    features: [
      { text: "Angular CLI & Modules" },
      { text: "TypeScript & RxJS" },
      { text: "NgRx state management" },
      { text: "Karma & Jasmine testing" },
    ],
    stats: {
      generated: "15K+",
      rating: "4.7/5",
    },
    buttonText: "Create Angular Project",
    href: "/generators/angular",
  },
  // EXAMPLE: Uncomment to add Node.js generator
  // {
  //   id: "nodejs",
  //   title: "Node.js Generator",
  //   badge: "Backend",
  //   variant: "nodejs",
  //   icon: <FileCode className="w-12 h-12" />,
  //   description:
  //     "Create Node.js backend services with Express, TypeScript, MongoDB/PostgreSQL, authentication, and production-ready configuration.",
  //   features: [
  //     { text: "Express.js & TypeScript" },
  //     { text: "MongoDB or PostgreSQL" },
  //     { text: "JWT Authentication" },
  //     { text: "Docker & Testing ready" },
  //   ],
  //   stats: {
  //     generated: "22K+",
  //     rating: "4.8/5",
  //   },
  //   buttonText: "Create Node.js Project",
  //   href: "/generators/nodejs",
  // },
  // EXAMPLE: Uncomment to add Django generator
  // {
  //   id: "django",
  //   title: "Django Generator",
  //   badge: "Backend",
  //   variant: "django",
  //   icon: <Boxes className="w-12 h-12" />,
  //   description:
  //     "Create Django applications with Python 3.11+, PostgreSQL, Django REST Framework, Celery for background tasks, and comprehensive testing.",
  //   features: [
  //     { text: "Django & DRF" },
  //     { text: "PostgreSQL & Redis" },
  //     { text: "Celery task queue" },
  //     { text: "pytest & Coverage" },
  //   ],
  //   stats: {
  //     generated: "18K+",
  //     rating: "4.8/5",
  //   },
  //   buttonText: "Create Django Project",
  //   href: "/generators/django",
  // },
];