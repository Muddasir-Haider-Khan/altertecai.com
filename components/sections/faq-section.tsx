"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/lib/constants"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { fadeInUp } from "@/lib/animations"

export function FAQSection() {
  return (
    <SectionWrapper id="faq" className="bg-background/50">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Sticky Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about working with us."
            centered={false}
            className="mb-8"
          />
          <div className="hidden lg:block p-6 bg-primary/5 rounded-2xl border border-primary/10 backdrop-blur-sm">
            <h4 className="font-semibold text-lg mb-2">Still have questions?</h4>
            <p className="text-sm text-muted-foreground mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20 transition-all">
              Contact Support
            </Button>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <motion.div
          className="lg:col-span-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group border border-white/5 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-2 overflow-hidden transition-all duration-300 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5 data-[state=open]:shadow-[0_0_20px_rgba(230,0,0,0.1)] hover:border-primary/30"
              >
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <AccordionTrigger className="text-left hover:text-primary transition-colors text-lg font-semibold py-4 group-data-[state=open]:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
