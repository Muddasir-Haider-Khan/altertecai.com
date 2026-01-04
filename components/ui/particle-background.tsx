"use client"

import React, { useEffect, useRef } from 'react'

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []

        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            opacity: number
            color: string

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.size = Math.random() * 2
                this.speedX = (Math.random() - 0.5) * 0.5
                this.speedY = (Math.random() - 0.5) * 0.5
                this.opacity = Math.random() * 0.5
                const colors = ['rgba(230, 0, 0, ', 'rgba(255, 255, 255, ']
                this.color = colors[Math.floor(Math.random() * colors.length)]
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                // Wrap around screen
                if (this.x > canvas!.width) this.x = 0
                if (this.x < 0) this.x = canvas!.width
                if (this.y > canvas!.height) this.y = 0
                if (this.y < 0) this.y = canvas!.height
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = this.color + this.opacity + ')'
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const initParticles = () => {
            particles = []
            // Reduced count: 3% of width or max 80 for performance buffer
            const particleCount = Math.min(window.innerWidth * 0.03, 80)
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle())
            }
        }

        const connectParticles = () => {
            const maxDistance = 150
            const maxDistanceSq = maxDistance * maxDistance

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;

                    // Quick check before sqrt
                    if (dx > maxDistance || dx < -maxDistance || dy > maxDistance || dy < -maxDistance) continue;

                    const distanceSq = dx * dx + dy * dy;

                    if (distanceSq < maxDistanceSq) {
                        ctx.beginPath();
                        const distance = Math.sqrt(distanceSq);
                        // Reduce alpha for less painting cost
                        ctx.strokeStyle = `rgba(230, 0, 0, ${0.1 * (1 - distance / maxDistance)})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        const animate = () => {
            if (!ctx || !canvas) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            connectParticles()
            animationFrameId = requestAnimationFrame(animate)
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        window.addEventListener('resize', resizeCanvas)
        resizeCanvas()
        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-40"
        />
    )
}
