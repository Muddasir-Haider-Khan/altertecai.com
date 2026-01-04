"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ReactNode } from "react"

interface FadeInUpProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
}

export function FadeInUp({
    children,
    className = "",
    delay = 0,
    duration = 0.5
}: FadeInUpProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
