"use client"
import { ArrowRight } from "lucide-react"
import LogoLoop from "@/components/logo-loop"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si"
import { useRouter } from "next/navigation" // Import useRouter for navigation

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
]

/**
 * Altertec AI – SalesRocket-style Hero (TypeScript + React)
 * - Client Component (required for framer-motion)
 * - TailwindCSS utility classes
 * - Accessible semantics and ARIA labels
 */

interface AltertecHeroProps {
  logoSrc?: string // defaults to "/logo1.png"
}

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.12 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const fadeUpSofter = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const chipInView = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AltertecHero({ logoSrc = "/logo1.png" }: AltertecHeroProps) {
  const router = useRouter() // Create router instance for navigation

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background text-foreground"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AltertecAI_HERO-rltyZTdBqlONT7JXqalPKGhGLCaCAd.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Global dim overlay for readability over video */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-md border border-border rounded-full px-4 py-2 mb-8 mt-12">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">AI Transformation for SMEs</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          Transform Your
          <span className="block bg-gradient-to-r from-red-900 via-red-600 to-red-500 bg-clip-text text-transparent">
            Business with AI
          </span>
        </h1>

        <p className="text-3xl mb-12 max-w-3xl mx-auto leading-relaxed">Strategy. Automation. Results</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Update CTA to navigate to /process instead of scrolling */}
          <button
            type="button"
            onClick={() => router.push("/process")}
            className="group border border-primary bg-background hover:bg-primary/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Start Free AI Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => router.push("/contact")}
            className="bg-card/50 backdrop-blur-md border border-border hover:border-primary/30 hover:bg-card px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            aria-label="See how it works"
          >
            See How It Works
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl text-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28 lg:gap-16 lg:px-8">
        {/* Copy column remains above video */}

        <div style={{ height: "150px", position: "relative", overflow: "hidden" }}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#0f0f0f"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  )
}
