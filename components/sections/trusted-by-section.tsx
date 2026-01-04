"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { TrendingUp, Award, Clock } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { LogoLoop } from "@/components/logo-loop"

export function TrustedBySection() {
  const logos = [
    "OpenAI Partner",
    "AWS Certified",
    "Google Cloud",
    "Microsoft Azure",
    "Anthropic",
    "Meta AI"
  ]

  const metrics = [
    { icon: TrendingUp, label: "127% Avg. ROI", value: "First Year" },
    { icon: Clock, label: "< 24 Hours", value: "Response Time" },
    { icon: Award, label: "50+ Awards", value: "Industry Recognition" },
  ]

  return (
    <section className="py-16 border-y border-border/40 bg-background/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider"
          >
            Trusted by Industry Leaders
          </motion.p>

          {/* Logo badges */}
          <motion.div
            variants={fadeInUp}
            className="mb-12"
          >
            <LogoLoop
              logos={logos.map(logo => ({
                node: (
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-card/50 border border-border/50 hover:border-primary/30 transition-colors whitespace-nowrap"
                  >
                    {logo}
                  </Badge>
                )
              }))}
              speed={50}
              gap={32}
              pauseOnHover={true}
              logoHeight={40}
            />
          </motion.div>

          {/* Metrics */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {metrics.map((metric, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="glass-card p-6 text-center">
                  <metric.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.value}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
