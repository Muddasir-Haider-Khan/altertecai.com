"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MockTable, MockProgressBars } from "@/components/ui/mock-dashboard"
import { SectionWrapper } from "@/components/site/section-wrapper"
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react"
import { slideInFromLeft, slideInFromRight } from "@/lib/animations"

export function FeatureSplitSections() {
  return (
    <>
      {/* Feature 1: Intelligence at Scale */}
      <SectionWrapper className="bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 -z-10 blur-3xl" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 md:p-12 rounded-3xl border border-primary/10 bg-card/30 backdrop-blur-sm relative overflow-hidden group">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-3xl" />

          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 backdrop-blur-md px-4 py-1 text-sm">
              <Sparkles className="h-3 w-3 mr-2" />
              Intelligent Systems
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Intelligence That Scales With Your Business
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Our AI solutions adapt and grow with your needs, from pilot projects to enterprise-wide deployments.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Real-time processing",
                "Automated workflows",
                "Predictive insights",
                "Seamless integration",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-primary hover:bg-primary/90 group shadow-lg shadow-primary/20">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl rounded-full opacity-20" />
            <MockTable />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Feature 2: Data-Driven Results */}
      <SectionWrapper className="bg-background/50">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 md:p-12">
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-30" />
            <MockProgressBars />
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 pl-0 lg:pl-8"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1 text-sm">
              Performance Metrics
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Measurable Impact on Your Bottom Line
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just build AI—we build solutions that deliver quantifiable ROI and drive sustainable growth.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Average 127% ROI within first year",
                "85% reduction in manual processing time",
                "94% improvement in accuracy and precision",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border/40 hover:border-primary/30 transition-colors bg-card/20">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="text-muted-foreground pt-1">{item}</span>
                </div>
              ))}
            </div>
            <Button size="lg" variant="outline" className="font-semibold text-foreground border-primary/20 hover:bg-primary/5">
              View Case Studies
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  )
}
