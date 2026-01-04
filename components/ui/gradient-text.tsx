"use client"

import { motion } from "framer-motion"

interface GradientTextProps {
    children: React.ReactNode
    className?: string
    from?: string
    to?: string
}

export function GradientText({ children, className = "", from = "from-primary", to = "to-red-500" }: GradientTextProps) {
    return (
        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${from} ${to} ${className}`}>
            {children}
        </span>
    )
}
