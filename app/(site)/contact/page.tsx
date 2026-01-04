"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { COMPANY_INFO } from "@/lib/constants"
import { Mail, MapPin, Clock, Send, MessageSquare, Phone, Sparkles } from "lucide-react"
import { toast } from "sonner"
import { fadeInUp, cardHover, staggerContainer } from "@/lib/animations"
import { ParticleBackground } from "@/components/ui/particle-background"
import { TechCard } from "@/components/ui/tech-card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    toast.success("Thanks for reaching out! We'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", company: "", budget: "", message: "" })
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden hero-gradient pt-20">
        <div className="absolute inset-0 aurora-gradient pointer-events-none" />
        <ParticleBackground />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 backdrop-blur-md px-4 py-1 text-base">
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact Us
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance tracking-tight">
              Let's Start A
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary animate-pulse">
                New Conversation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              Ready to transform your business with AI? Get in touch for a free consultation and let's build something extraordinary.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <SectionWrapper className="bg-background relative section-glow">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent">
              <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10" />
              <Card className="glass-card border-none bg-black/40 backdrop-blur-xl">
                <CardHeader className="pb-8 border-b border-white/5">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Sparkles className="text-primary h-5 w-5" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mt-1">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Doe"
                          required
                          className="h-10 bg-white/5 border-white/10 focus:border-primary/50 text-sm transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@company.com"
                          required
                          className="h-10 bg-white/5 border-white/10 focus:border-primary/50 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Your Company Inc."
                          className="h-10 bg-white/5 border-white/10 focus:border-primary/50 text-sm transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-sm">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                          <SelectTrigger id="budget" className="h-10 bg-white/5 border-white/10 focus:border-primary/50 text-sm transition-all">
                            <SelectValue placeholder="Select a range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                            <SelectItem value="250k+">$250K+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your project..."
                        rows={4}
                        required
                        className="bg-white/5 border-white/10 focus:border-primary/50 text-sm transition-all resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-sm h-11 font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all duration-300">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="space-y-4 flex flex-col"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Mail, title: "Email Us", content: COMPANY_INFO.email, action: `mailto:${COMPANY_INFO.email}` },
              { icon: MapPin, title: "Location", content: COMPANY_INFO.location, action: "#" },
              { icon: Clock, title: "Response Time", content: COMPANY_INFO.responseTime, sub: "We typically respond to all inquiries within one business day." },
            ].map((item, index) => (
              <TechCard key={index} delay={index * 0.2} className="w-full bg-background/40 hover:bg-background/60">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 text-primary shadow-lg">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1 text-foreground">{item.title}</h3>
                    {item.action && item.action !== '#' ? (
                      <a href={item.action} className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    )}
                    {item.sub && <p className="text-xs text-muted-foreground/60 mt-1.5">{item.sub}</p>}
                  </div>
                </div>
              </TechCard>
            ))}

            {/* Schedule Call CTA */}
            <div className="mt-auto pt-6">
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-primary/20 to-purple-500/10 border border-primary/20 overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 blur-[60px] rounded-full" />

                <h3 className="text-xl font-bold mb-2">Ready to setup a meeting?</h3>
                <p className="text-muted-foreground text-sm mb-4">Skip the email tag and book a direct consultation with our experts.</p>

                <Button asChild size="lg" variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 h-10 text-sm">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </SectionWrapper>
    </>
  )
}
