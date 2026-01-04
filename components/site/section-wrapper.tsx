"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeInUp } from "@/lib/animations"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  innerClassName?: string
}

export function SectionWrapper({ children, className, id, innerClassName }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("py-20 md:py-32 relative overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className={cn("container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </motion.section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ eyebrow, title, description, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {eyebrow && (
        <motion.p
          className="text-sm font-semibold uppercase tracking-wider text-primary mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
