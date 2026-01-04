"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { Target, Lightbulb, Users, TrendingUp, Award, Globe, Sparkles, Trophy, Rocket, Heart } from "lucide-react"
import { staggerContainer, cardHover, fadeInUp } from "@/lib/animations"
import { MockProgressBars } from "@/components/ui/mock-dashboard"
import { ParticleBackground } from "@/components/ui/particle-background"
import { TechCard } from "@/components/ui/tech-card"
import React, { useRef } from "react"

export default function AboutPage() {
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
              <Users className="h-4 w-4 mr-2" />
              About Us
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance tracking-tight">
              We're Building The Future
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary animate-pulse">
                With AI Innovation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              A team of AI experts, engineers, and strategists dedicated to transforming businesses through intelligent automation and data-driven solutions.
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

      {/* Mission & Values */}
      <SectionWrapper className="bg-background relative section-glow">
        <SectionHeader
          eyebrow="Our Mission"
          title="Driving Innovation, Delivering Results"
          description="We believe AI should be accessible, practical, and transformative for businesses of all sizes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Target,
              title: "Purpose-Driven",
              description: "Every solution we build is designed to solve real business problems and deliver measurable ROI.",
            },
            {
              icon: Lightbulb,
              title: "Innovation First",
              description: "We stay at the cutting edge of AI technology to bring you the most advanced solutions available.",
            },
            {
              icon: Heart,
              title: "Client Partnership",
              description: "Your success is our success. We work alongside you as a true strategic partner, not just a vendor.",
            },
          ].map((value, index) => (
            <MissionCard key={index} {...value} index={index} />
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper className="bg-background/50 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 blur-3xl -z-10" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 backdrop-blur-md">
              <Sparkles className="h-3 w-3 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Experience Meets <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              With over 15 years of combined experience and 150+ successful projects, we've built a reputation for delivering AI solutions that actually work.
            </p>

            <div className="space-y-6">
              {[
                { icon: Trophy, title: "Award-Winning Team", text: "Recognized industry leaders in AI development" },
                { icon: TrendingUp, title: "Proven Results", text: "Consistent 127% average ROI for our clients" },
                { icon: Globe, title: "Global Reach", text: "Trusted by enterprises across 20+ industries" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card/30 border border-white/5 hover:border-primary/20 hover:bg-white/5 transition-all duration-300 group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-[50px] rounded-full opacity-30 animate-pulse" />
            <div className="relative z-10 p-6 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-xl shadow-2xl">
              <MockProgressBars />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper className="bg-background relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {[
            { value: "150+", label: "Projects Completed", icon: Rocket },
            { value: "94%", label: "Client Satisfaction", icon: Heart },
            { value: "15+", label: "Years Experience", icon: Award },
            { value: "50+", label: "Industry Awards", icon: Trophy },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative group text-center p-6 border border-white/5 rounded-2xl bg-white/5 hover:bg-primary/5 hover:border-primary/20 transition-all duration-500"
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  )
}

function MissionCard({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 })
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 })

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      const width = rect.width
      const height = rect.height
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top
      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5
      x.set(xPct)
      y.set(yPct)
    }
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative min-h-[300px] rounded-3xl bg-card border border-white/5 p-8 perspective-1000 overflow-hidden group hover:border-primary/50 transition-colors duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Decoration Number */}
      <div
        className="absolute -top-6 -right-6 text-9xl font-black text-white/5 select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/10"
        style={{ transform: "translateZ(20px)" }}
      >
        0{index + 1}
      </div>

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-tr from-background to-card border border-white/10 flex items-center justify-center shadow-lg group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(230,0,0,0.3)] transition-all duration-500">
          <Icon className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-shine pointer-events-none" />
    </motion.div>
  )
}
