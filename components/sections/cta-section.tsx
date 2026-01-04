"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { fadeInUp, buttonHover } from "@/lib/animations"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { TextReveal } from "@/components/ui/text-reveal"

export function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 aurora-gradient-bottom pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Ready to Transform?</span>
          </motion.div>


          <div className="mb-6">
            <TextReveal text="Let's Build Something" className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground justify-center" />
            <div className="flex justify-center">
              <TextReveal text="Extraordinary Together" className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary justify-center" />
            </div>
          </div>

          <motion.p
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schedule a free consultation to discover how AI can drive measurable results for your business.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MagneticButton>
              <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary group">
                  <Link href="/contact">
                    Let's Talk Business
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </MagneticButton>

            <MagneticButton>
              <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </motion.div>
            </MagneticButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16 pt-12 border-t border-border/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Response Time</div>
              <div className="text-lg font-semibold text-foreground">Within 24 Hours</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Free Consultation</div>
              <div className="text-lg font-semibold text-foreground">No Commitment</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Expert Team</div>
              <div className="text-lg font-semibold text-foreground">15+ Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
