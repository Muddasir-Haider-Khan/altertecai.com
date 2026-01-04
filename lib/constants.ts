export const NAVIGATION = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  cta: {
    name: "Let's Talk Business",
    href: "/contact",
  },
}

export const SERVICES = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Consulting",
    description: "Transform your business with tailored AI strategies that align with your goals and drive measurable outcomes.",
    icon: "Lightbulb",
    features: ["AI Readiness Assessment", "Custom AI Roadmap", "ROI Analysis", "Change Management"],
  },
  {
    id: "custom-ai",
    title: "Custom AI Development",
    description: "Build intelligent systems powered by cutting-edge machine learning and large language models.",
    icon: "Code",
    features: ["LLM Integration", "Computer Vision", "Predictive Analytics", "NLP Solutions"],
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    description: "Streamline operations with AI-powered workflows that reduce costs and increase efficiency.",
    icon: "Zap",
    features: ["Process Automation", "Document Processing", "Smart Routing", "Workflow Optimization"],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description: "Unlock insights from your data with advanced analytics and real-time dashboards.",
    icon: "BarChart3",
    features: ["Data Pipeline Design", "Real-time Analytics", "Predictive Modeling", "BI Dashboards"],
  },
  {
    id: "cloud-ai",
    title: "Cloud AI Solutions",
    description: "Deploy scalable AI infrastructure on AWS, Azure, or GCP with enterprise-grade security.",
    icon: "Cloud",
    features: ["Cloud Architecture", "MLOps Setup", "Auto-scaling", "Cost Optimization"],
  },
  {
    id: "ai-training",
    title: "AI Training & Enablement",
    description: "Empower your team with hands-on AI training and best practices for sustainable innovation.",
    icon: "GraduationCap",
    features: ["Workshops", "Custom Curriculum", "Hands-on Labs", "Ongoing Support"],
  },
]

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep into your business challenges, goals, and existing infrastructure to identify high-impact AI opportunities.",
    features: ["Stakeholder Interviews", "Technical Assessment", "Opportunity Mapping", "Success Criteria"],
  },
  {
    number: "02",
    title: "Build",
    description: "Our team designs and develops custom AI solutions using industry best practices and cutting-edge technology.",
    features: ["Architecture Design", "Agile Development", "Continuous Testing", "Iterative Feedback"],
  },
  {
    number: "03",
    title: "Launch",
    description: "We ensure smooth deployment, team training, and ongoing optimization to maximize your AI investment.",
    features: ["Deployment Strategy", "User Training", "Performance Monitoring", "Continuous Improvement"],
  },
]

export const FAQ_ITEMS = [
  {
    question: "How long does a typical AI project take?",
    answer: "Project timelines vary based on complexity. A proof-of-concept typically takes 4-6 weeks, while full-scale implementations range from 3-6 months. We work in agile sprints to deliver value incrementally.",
  },
  {
    question: "Do I need a large dataset to get started with AI?",
    answer: "Not necessarily. While more data can improve model performance, we can leverage pre-trained models, transfer learning, and synthetic data techniques. We'll assess your specific situation during discovery.",
  },
  {
    question: "What industries do you serve?",
    answer: "We work across industries including healthcare, finance, retail, manufacturing, and professional services. Our approach is industry-agnostic, focusing on solving business problems with AI.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: "We follow industry best practices including encryption, access controls, and compliance frameworks (GDPR, HIPAA, SOC 2). All solutions are built with security-first architecture.",
  },
  {
    question: "What's the difference between AI consulting and development?",
    answer: "Consulting helps you define your AI strategy and roadmap. Development brings those plans to life with custom-built solutions. Most clients benefit from both, starting with strategy then moving to implementation.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. We offer flexible support packages including monitoring, optimization, feature enhancements, and team training to ensure long-term success of your AI initiatives.",
  },
]

export const PORTFOLIO_ITEMS = [
  {
    id: "medical-diagnosis",
    title: "AI-Powered Medical Diagnosis Platform",
    category: "AI",
    tags: ["Healthcare", "Computer Vision", "NLP"],
    description: "Developed a diagnostic assistant that analyzes medical images and patient records to support clinical decision-making, reducing diagnosis time by 40%.",
    metrics: { accuracy: "94%", time: "40% faster", satisfaction: "4.8/5" },
  },
  {
    id: "retail-personalization",
    title: "Intelligent Product Recommendation Engine",
    category: "AI",
    tags: ["Retail", "ML", "Personalization"],
    description: "Built a real-time recommendation system using collaborative filtering and deep learning, increasing conversion rates by 28% and average order value by 18%.",
    metrics: { conversion: "+28%", aov: "+18%", engagement: "+45%" },
  },
  {
    id: "document-automation",
    title: "Enterprise Document Processing System",
    category: "Automation",
    tags: ["Finance", "OCR", "NLP"],
    description: "Automated invoice processing workflow using intelligent OCR and classification, reducing manual processing time by 85% and errors by 92%.",
    metrics: { time: "-85%", errors: "-92%", roi: "320%" },
  },
  {
    id: "customer-support-bot",
    title: "Multi-Channel AI Support Assistant",
    category: "AI",
    tags: ["Customer Service", "LLM", "Integration"],
    description: "Deployed an AI chatbot handling 10,000+ daily conversations across web, mobile, and messaging platforms with 89% resolution rate.",
    metrics: { resolution: "89%", satisfaction: "4.6/5", volume: "10K/day" },
  },
  {
    id: "saas-platform",
    title: "AI Analytics SaaS Platform",
    category: "Web",
    tags: ["SaaS", "Analytics", "Dashboard"],
    description: "Built a full-stack analytics platform with real-time data processing, custom ML models, and interactive dashboards serving 50K+ users.",
    metrics: { users: "50K+", uptime: "99.9%", nps: "72" },
  },
  {
    id: "supply-chain",
    title: "Predictive Supply Chain Optimizer",
    category: "AI",
    tags: ["Logistics", "Forecasting", "Optimization"],
    description: "Created a demand forecasting system using time-series analysis and ML, reducing inventory costs by 23% and stockouts by 67%.",
    metrics: { costs: "-23%", stockouts: "-67%", accuracy: "91%" },
  },
]

export const PORTFOLIO_CATEGORIES = ["All", "Web", "AI", "Automation", "Branding"]

export const TESTIMONIALS = [
  {
    quote: "The AI solution they built transformed our operations. We're processing documents 10x faster with near-perfect accuracy.",
    author: "Sarah Chen",
    role: "CTO, FinanceFlow",
    company: "FinanceFlow",
  },
  {
    quote: "From strategy to deployment, the team was exceptional. They didn't just build software—they became our AI innovation partner.",
    author: "Marcus Johnson",
    role: "VP of Innovation, RetailCo",
    company: "RetailCo",
  },
  {
    quote: "The ROI exceeded our expectations. Within 6 months, we saw a 5x return on investment and our customers love the new experience.",
    author: "Priya Patel",
    role: "Head of Product, HealthTech",
    company: "HealthTech",
  },
]

export const COMPANY_INFO = {
  name: "Altertec AI",
  tagline: "AI Solutions That Drive Real Business Impact",
  description: "We build intelligent systems that solve complex business problems using cutting-edge AI technology.",
  email: "hello@altertec.ai",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  responseTime: "Within 24 hours",
  social: {
    linkedin: "https://linkedin.com/company/altertec-ai",
    twitter: "https://twitter.com/altertecai",
    github: "https://github.com/altertec-ai",
  },
}

export const FOOTER_SECTIONS = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "AI Strategy", href: "/services#ai-strategy" },
      { name: "Custom AI Development", href: "/services#custom-ai" },
      { name: "Automation", href: "/services#automation" },
      { name: "Data Analytics", href: "/services#data-analytics" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "/portfolio" },
      { name: "FAQ", href: "/#faq" },
    ],
  },
]
