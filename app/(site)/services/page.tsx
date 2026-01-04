"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SERVICES } from "@/lib/constants"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { Lightbulb, Code, Zap, BarChart3, Cloud, GraduationCap, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"
import { staggerContainer, cardHover, fadeInUp } from "@/lib/animations"
import { TechCard } from "@/components/ui/tech-card"
import { ParticleBackground } from "@/components/ui/particle-background"
import { TextReveal } from "@/components/ui/text-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"

const iconMap = {
  Lightbulb,
  Code,
  Zap,
  BarChart3,
  Cloud,
  GraduationCap,
}

export default function ServicesPage() {
  const packages = [
    {
      name: "Starter",
      price: "Custom",
      description: "Perfect for businesses exploring AI for the first time",
      features: [
        "AI readiness assessment",
        "Strategic roadmap development",
        "Proof of concept (1 use case)",
        "Team training workshop",
        "30-day support",
      ],
    },
    {
      name: "Growth",
      price: "Custom",
      description: "Ideal for scaling AI across your organization",
      features: [
        "Everything in Starter",
        "Full implementation (3-5 use cases)",
        "Custom model development",
        "System integration",
        "90-day support & optimization",
        "Dedicated project manager",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Comprehensive AI transformation for large organizations",
      features: [
        "Everything in Growth",
        "Unlimited use cases",
        "Enterprise architecture design",
        "Multi-team deployment",
        "Advanced security & compliance",
        "12-month support & training",
        "Executive advisory services",
      ],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden hero-gradient pt-20">
        <div className="absolute inset-0 aurora-gradient pointer-events-none" />
        <ParticleBackground />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 backdrop-blur-md px-4 py-1 text-base">
              <Sparkles className="h-4 w-4 mr-2" />
              Our Services
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance tracking-tight">
              AI Solutions For
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary animate-pulse">
                Every Business Need
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              From strategy to implementation, we deliver comprehensive AI services that transform how you work.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="bg-background relative section-glow">
        <SectionHeader
          eyebrow="What We Offer"
          title="Comprehensive AI Services"
          description="End-to-end solutions tailored to your business goals and technical requirements."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <TechCard key={service.id} delay={index * 0.1} className="h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.1)] group-hover:shadow-[0_0_30px_rgba(230,0,0,0.4)]">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-5xl font-black text-muted-foreground/5 group-hover:text-primary/10 transition-colors select-none">
                    0{index + 1}
                  </div>
                </div>

                <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground/80 mb-8">{service.description}</CardDescription>

                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-[1px] bg-primary/50 mr-3" />
                    Key Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TechCard>
            )
          })}
        </motion.div>
      </SectionWrapper>

      {/* Packages */}
      <SectionWrapper className="bg-background/50 relative">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left -z-10" />

        <SectionHeader
          eyebrow="Packages"
          title="Flexible Engagement Models"
          description="Choose the package that fits your needs, timeline, and budget."
        />

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative ${pkg.featured ? 'md:-mt-8 md:-mb-8 z-10' : 'z-0'}`}
            >
              <div
                className={`
                    relative h-full overflow-hidden rounded-2xl border bg-card/40 backdrop-blur-xl transition-all duration-300
                    ${pkg.featured
                    ? 'border-primary/50 shadow-[0_0_50px_rgba(230,0,0,0.15)] scale-105'
                    : 'border-white/10 hover:border-primary/30 hover:shadow-lg'}
                `}
              >
                {pkg.featured && (
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                )}

                <div className="p-8">
                  {pkg.featured && (
                    <Badge className="w-fit mb-4 bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                      Most Popular
                    </Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    {pkg.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                  </div>
                  <p className="text-muted-foreground mb-8 text-sm">{pkg.description}</p>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 p-0.5 rounded-full bg-primary/20 text-primary">
                          <CheckCircle2 className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full font-bold shadow-lg ${pkg.featured ? "bg-primary hover:bg-primary/90 shadow-primary/25" : "bg-card hover:bg-primary hover:text-white border border-primary/20"}`}
                    size="lg"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 rounded-full bg-primary/5 border border-primary/10 mb-8"
          >
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Schedule a free consultation and we'll help you identify the right solution for your business.
          </p>

          <div className="flex justify-center">
            <MagneticButton>
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 font-bold shadow-[0_0_30px_rgba(230,0,0,0.3)]">
                <Link href="/contact">
                  Let's Talk Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  )
}

