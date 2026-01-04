import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seed...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const user = await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: hashedPassword,
    },
  });

  console.log("Created user:", user.username);

  // Seed portfolio items from constants
  const portfolioItems = [
    {
      title: "AI-Powered Medical Diagnosis Platform",
      category: "AI",
      tags: ["Healthcare", "Computer Vision", "NLP"],
      description:
        "Developed a diagnostic assistant that analyzes medical images and patient records to support clinical decision-making, reducing diagnosis time by 40%.",
      metrics: { accuracy: "94%", time: "40% faster", satisfaction: "4.8/5" },
    },
    {
      title: "Intelligent Product Recommendation Engine",
      category: "AI",
      tags: ["Retail", "ML", "Personalization"],
      description:
        "Built a real-time recommendation system using collaborative filtering and deep learning, increasing conversion rates by 28% and average order value by 18%.",
      metrics: { conversion: "+28%", aov: "+18%", engagement: "+45%" },
    },
    {
      title: "Enterprise Document Processing System",
      category: "Automation",
      tags: ["Finance", "OCR", "NLP"],
      description:
        "Automated invoice processing workflow using intelligent OCR and classification, reducing manual processing time by 85% and errors by 92%.",
      metrics: { time: "-85%", errors: "-92%", roi: "320%" },
    },
    {
      title: "Multi-Channel AI Support Assistant",
      category: "AI",
      tags: ["Customer Service", "LLM", "Integration"],
      description:
        "Deployed an AI chatbot handling 10,000+ daily conversations across web, mobile, and messaging platforms with 89% resolution rate.",
      metrics: { resolution: "89%", satisfaction: "4.6/5", volume: "10K/day" },
    },
    {
      title: "AI Analytics SaaS Platform",
      category: "Web",
      tags: ["SaaS", "Analytics", "Dashboard"],
      description:
        "Built a full-stack analytics platform with real-time data processing, custom ML models, and interactive dashboards serving 50K+ users.",
      metrics: { users: "50K+", uptime: "99.9%", nps: "72" },
    },
    {
      title: "Predictive Supply Chain Optimizer",
      category: "AI",
      tags: ["Logistics", "Forecasting", "Optimization"],
      description:
        "Created a demand forecasting system using time-series analysis and ML, reducing inventory costs by 23% and stockouts by 67%.",
      metrics: { costs: "-23%", stockouts: "-67%", accuracy: "91%" },
    },
  ];

  for (const item of portfolioItems) {
    await prisma.portfolio.create({
      data: item,
    });
  }

  console.log("Seeded portfolio items");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
