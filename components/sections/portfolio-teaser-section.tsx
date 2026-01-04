"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PORTFOLIO_ITEMS } from "@/lib/constants"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { ArrowRight, ExternalLink } from "lucide-react"
import { staggerContainer, cardHover } from "@/lib/animations"

export function PortfolioTeaserSection() {
  const featuredProjects = PORTFOLIO_ITEMS.slice(0, 6)

  return (
    <SectionWrapper className="bg-background relative section-glow">
      <SectionHeader
        eyebrow="Our Work"
        title="Real Solutions, Real Results"
        description="Explore how we've helped businesses transform with AI-powered solutions."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {featuredProjects.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardHover}
              className="relative group h-full"
            >
              <Card className="h-full relative overflow-hidden transition-all duration-300 border-primary/10 bg-gradient-to-br from-card/50 to-background/80 hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(230,0,0,0.1)]">
                {/* Background glow or pattern */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative h-full flex flex-col z-10">
                  <div className="flex justify-between items-start mb-6">
                    <Badge variant="secondary" className="bg-background/80 text-foreground border-border backdrop-blur-sm shadow-sm">
                      {project.category}
                    </Badge>
                    <div className="p-2 rounded-full bg-background/50 border border-border/50 group-hover:bg-primary group-hover:border-primary transition-all">
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-base">
                      {project.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs text-muted-foreground bg-primary/5 px-2 py-1 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>

                {/* Metrics Overlay on Hover */}
                <div className="absolute inset-0 bg-background/95 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-center p-6 z-20">
                  <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-4">Key Outcomes</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="bg-card p-3 rounded-lg border border-border/50">
                        <div className="text-xl font-bold text-foreground">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-semibold group">
          <Link href="/portfolio">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </SectionWrapper>
  )
}
