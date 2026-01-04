"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TechCardProps {
    children: React.ReactNode
    className?: string
    delay?: number
    onClick?: () => void
}

export function TechCard({ children, className, delay = 0, onClick }: TechCardProps) {
    return (
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5 }}
            className={cn(
                "relative group h-full overflow-hidden rounded-2xl border border-primary/10 bg-card/30 backdrop-blur-sm",
                "hover:border-primary/30 hover:shadow-[0_0_30px_rgba(230,0,0,0.15)] transition-all duration-300",
                className
            )}
        >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-xl group-hover:border-primary/50 transition-colors" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl group-hover:border-primary/50 transition-colors" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-xl group-hover:border-primary/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-xl group-hover:border-primary/50 transition-colors" />

            {/* Inner Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    )
}
