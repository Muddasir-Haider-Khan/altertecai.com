"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ReactNode } from "react"

interface ScaleInProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
}

export function ScaleIn({
    children,
    className = "",
    delay = 0,
    duration = 0.5
}: ScaleInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
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
