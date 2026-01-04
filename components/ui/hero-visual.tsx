"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Cpu, Globe, ShieldCheck, Zap } from "lucide-react"
import { useEffect, useRef } from "react"

export function HeroVisual() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Mouse position state for parallax
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth spring animation for mouse movement
    const mouseX = useSpring(x, { stiffness: 50, damping: 20 })
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 })

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            x.set(event.clientX - centerX)
            y.set(event.clientY - centerY)
        }
    }

    // Calculate transforms based on mouse position
    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]) // Tilt X
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]) // Tilt Y
    const moveX = useTransform(mouseX, [-300, 300], [-20, 20])   // Parallax X
    const moveY = useTransform(mouseY, [-300, 300], [-20, 20])   // Parallax Y

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-1000 group cursor-pointer"
        >
            {/* Central Glowing Core */}
            <motion.div
                style={{ x: moveX, y: moveY }}
                className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-pulse"
            />
            <motion.div
                style={{ x: useTransform(mouseX, [-300, 300], [20, -20]), y: useTransform(mouseY, [-300, 300], [20, -20]) }}
                className="absolute w-48 h-48 bg-gradient-to-tr from-primary to-purple-600 rounded-full opacity-20 blur-[60px]"
            />

            {/* Connection Lines (Animated SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                {/* Top Left */}
                <motion.path d="M 50% 50% L 20% 20%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5 5" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                {/* Top Right */}
                <motion.path d="M 50% 50% L 80% 25%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5 5" animate={{ strokeDashoffset: [0, 20] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                {/* Bottom Left */}
                <motion.path d="M 50% 50% L 20% 75%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5 5" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} />
                {/* Bottom Right */}
                <motion.path d="M 50% 50% L 75% 80%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5 5" animate={{ strokeDashoffset: [0, 20] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }} />
            </svg>

            {/* Central Tech Circle with 3D Interaction */}
            <motion.div
                style={{ rotateX, rotateY, z: 50 }}
                className="relative z-10 w-32 h-32 rounded-full bg-black/40 backdrop-blur-xl border border-primary/20 flex items-center justify-center shadow-[0_0_50px_rgba(230,0,0,0.4)] transition-shadow duration-500 group-hover:shadow-[0_0_80px_rgba(230,0,0,0.6)]"
            >
                <svg
                    viewBox="0 0 40 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-primary fill-current drop-shadow-[0_0_10px_rgba(230,0,0,0.8)]"
                >
                    <path
                        fillRule="evenodd"
                        d="m7.839 40.783 16.03-28.054L20 6 0 40.783h7.839Zm8.214 0H40L27.99 19.894l-4.02 7.032 3.976 6.914H20.02l-3.967 6.943Z"
                        clipRule="evenodd"
                    />
                </svg>

                {/* Dynamic Rings */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-primary/40 border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute -inset-4 rounded-full border border-primary/20 border-b-transparent"
                    animate={{ rotate: -360, scale: [1, 1.05, 1] }}
                    transition={{
                        rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                />
                <motion.div
                    className="absolute -inset-8 rounded-full border border-primary/5 border-dashed"
                    animate={{ rotate: 180 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>

            {/* Interactive Floating Cards */}
            <InteractiveFloatingCard
                icon={Cpu}
                label="Neural Processing"
                className="absolute top-10 left-10 md:left-20"
                x={x} y={y} factor={15}
            />
            <InteractiveFloatingCard
                icon={ShieldCheck}
                label="Enterprise Security"
                className="absolute top-20 right-10 md:right-20"
                x={x} y={y} factor={-15}
            />
            <InteractiveFloatingCard
                icon={Zap}
                label="Real-time Speed"
                className="absolute bottom-20 left-4 md:left-10"
                x={x} y={y} factor={20}
            />
            <InteractiveFloatingCard
                icon={Globe}
                label="Global Scale"
                className="absolute bottom-10 right-10 md:right-30"
                x={x} y={y} factor={-20}
            />
        </div>
    )
}

function InteractiveFloatingCard({
    icon: Icon,
    label,
    className,
    x, y, factor
}: {
    icon: any,
    label: string,
    className?: string,
    x: any, y: any, factor: number
}) {
    // Parallax effect for cards
    const moveX = useTransform(x, [-500, 500], [factor, -factor])
    const moveY = useTransform(y, [-500, 500], [factor, -factor])

    return (
        <motion.div
            style={{ x: moveX, y: moveY }}
            className={`flex items-center gap-3 p-3 pr-4 rounded-xl bg-card/10 backdrop-blur-md border border-white/10 shadow-xl cursor-default transition-all duration-300 hover:bg-card/20 hover:border-primary/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(230,0,0,0.2)] ${className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-foreground/90 whitespace-nowrap">{label}</span>
        </motion.div>
    )
}
