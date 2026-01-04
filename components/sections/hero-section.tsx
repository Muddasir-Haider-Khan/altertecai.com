"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { HeroVisual } from "@/components/ui/hero-visual"
import { buttonHover } from "@/lib/animations"
import { ParticleBackground } from "@/components/ui/particle-background"
import { GradientText } from "@/components/ui/gradient-text"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-gradient pt-12">
      {/* Background glow */}
      <div className="absolute inset-0 aurora-gradient pointer-events-none z-0" />
      <ParticleBackground />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center -mt-12">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 backdrop-blur-sm">
                <Sparkles className="h-3 w-3 mr-1" />
                AI-Powered Business Solutions
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Build The Future
              <br />
              <div className="mt-1">
                <GradientText>With AI</GradientText>
              </div>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg text-balance leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              We transform businesses with intelligent AI solutions that drive measurable results. From strategy to deployment, we're your innovation partner.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group shadow-lg shadow-primary/25">
                  <Link href="/contact">
                    Let's Talk Business
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                <Button asChild size="lg" variant="outline" className="font-semibold backdrop-blur-sm bg-background/50 border-border/50 hover:bg-background/80">
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </motion.div>
            </motion.div>


          </motion.div>

          {/* Dashboard Container with 3D Tilt and Reflection */}
          {/* Right: Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
