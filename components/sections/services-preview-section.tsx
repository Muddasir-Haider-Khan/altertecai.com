"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SERVICES } from "@/lib/constants"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { Lightbulb, Code, Zap, BarChart3, Cloud, GraduationCap, ArrowRight } from "lucide-react"
import { staggerContainer, cardHover } from "@/lib/animations"
import { TechCard } from "@/components/ui/tech-card"

const iconMap = {
  Lightbulb,
  Code,
  Zap,
  BarChart3,
  Cloud,
  GraduationCap,
}

export function ServicesPreviewSection() {
  return (
    <SectionWrapper className="bg-background">
      <SectionHeader
        eyebrow="What We Do"
        title="AI Solutions for Every Business Challenge"
        description="From strategy to implementation, we deliver end-to-end AI solutions that drive real business impact."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap]
          return (
            <TechCard key={service.id} delay={index * 0.1}>
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-4xl font-black text-muted-foreground/10 group-hover:text-primary/10 transition-colors">
                  0{index + 1}
                </div>
              </div>

              <div className="flex-grow">
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground/80 mb-6">{service.description}</CardDescription>
              </div>

              <div className="pt-4 border-t border-border/30">
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2 group-hover:bg-primary transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </TechCard>
          )
        })}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button asChild size="lg" variant="outline" className="font-semibold group">
          <Link href="/services">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </SectionWrapper>
  )
}
