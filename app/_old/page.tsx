import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Zap, Target, TrendingUp, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import AltertecHero from "@/components/hero"
import ValueSection from "@/components/valueSection"
import FeaturedAgent from "@/components/feature-section/featuredagent"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <AltertecHero />

      {/* Value Section */}

      {/* Why Choose Altertec */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Altertec?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="card-hover text-center bg-card border-border text-foreground">
              <CardHeader>
                <Target className="h-12 w-12  mx-auto mb-4" />
                <CardTitle className="text-foreground">ROI-driven implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Every solution is designed to deliver measurable returns on your investment.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center bg-card border-border text-foreground">
              <CardHeader>
                <Zap className="h-12 w-12  mx-auto mb-4" />
                <CardTitle className="text-foreground">Simple adoption process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  We make AI implementation straightforward and accessible for your team.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center bg-card border-border text-foreground">
              <CardHeader>
                <Users className="h-12 w-12  mx-auto mb-4" />
                <CardTitle className="text-foreground">Long-term strategic partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  We're committed to your ongoing success with continuous support and optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}


      {/* Feature Section */}
      <FeaturedAgent />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto text-pretty">
              At Altertec AI, we provide end-to-end services that empower SMEs to adopt and scale AI. From automation to
              custom SaaS solutions, our team ensures every implementation is ROI-driven and strategy-first.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5  " />
                  AI Audits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Identify inefficiencies &amp; high-ROI opportunities</CardDescription>
              </CardContent>
            </Card>
            <Card className="card-hover bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 " />
                  Workflow Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Streamline operations with AI-powered workflows</CardDescription>
              </CardContent>
            </Card>
            <Card className="card-hover bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 " />
                  AI Agents &amp; Chatbots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Enhance customer experience</CardDescription>
              </CardContent>
            </Card>
            <Card className="card-hover bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 " />
                  AI SaaS Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Build scalable, AI-powered software</CardDescription>
              </CardContent>
            </Card>
            <Card className="card-hover bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 " />
                  Consulting &amp; Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Educate teams &amp; build AI roadmaps</CardDescription>
              </CardContent>
            </Card>
            <Card className="card-hover bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 " />
                  Ongoing Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Long-term optimization &amp; support</CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12 ">
            <Button asChild className="bg-foreground/5 hover:bg-foreground/5">
              <Link href="/case-studies" >Explore Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

 

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let&apos;s Find Your First AI Win</h2>
            <p className="text-lg text-foreground mb-12 text-pretty">
              Ready to explore AI transformation for your business? Contact us today to book your free audit.
            </p>
            <Card className="bg-card">
              <CardContent className="p-8 ">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground "
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground"
                      placeholder="Tell us about your business and AI goals..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Book Free AI Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-sm text-foreground mb-2">Contact us directly:</p>
                  <p className="text-sm text-foreground">team@altertec.ai</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <Link href="https://www.linkedin.com/company/altertec-ai/?originalSubdomain=nz" className="text-foreground hover: transition-colors">
                      LinkedIn
                    </Link>
                    <Link href="https://altertecai.com/" className="text-foreground hover: transition-colors">
                      Website
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity mb-4">
              <img src="/logo1.png" alt="Altertec AI" className="h-8 w-auto mx-auto" />
            </Link>
            <p className="text-foreground mb-4">AI Transformation for SMEs</p>
            <p className="text-sm text-foreground">© 2025 Altertec AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
