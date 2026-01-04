"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PROCESS_STEPS } from "@/lib/constants"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { CheckCircle2 } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"

export function ProcessSection() {
  return (
    <SectionWrapper className="bg-background/50 relative section-glow">
      <SectionHeader
        eyebrow="How We Work"
        title="Our Proven Process"
        description="A systematic approach that delivers results, from discovery to deployment and beyond."
      />

      <div className="relative z-10">
        {/* Connecting Line (Desktop) */}
        {/* Connecting Line (Desktop) - Animated */}
        <div className="hidden md:block absolute top-[16%] left-0 w-full h-20 -z-10 overflow-hidden">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="processLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="15%" stopColor="var(--primary)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
                <stop offset="85%" stopColor="var(--primary)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0 10 L 10000 10"
              stroke="url(#processLineGrad)"
              strokeWidth="2"
              strokeDasharray="20 20"
              initial={{ x: 0 }}
              animate={{ x: -100 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
              className="w-full"
            />
            {/* Moving data packet */}
            <motion.circle
              r="4"
              fill="var(--primary)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              style={{ offsetPath: "path('M 0 10 L 2000 10')" }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </svg>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Step indicator dot */}
              <div className="hidden md:flex absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary items-center justify-center z-10 shadow-[0_0_15px_rgba(230,0,0,0.5)]">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              </div>

              <Card className="glass-card h-full relative overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_30px_rgba(230,0,0,0.15)] border-primary/10">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <span className="text-8xl font-black font-outline-2">0{step.number}</span>
                </div>

                <CardHeader className="pb-2">
                  <Badge className="w-fit mb-3 bg-primary/10 text-primary border-primary/20 backdrop-blur-md">
                    Step 0{step.number}
                  </Badge>
                  <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{step.description}</p>

                  <div className="space-y-3 bg-background/30 p-4 rounded-lg border border-white/5">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
