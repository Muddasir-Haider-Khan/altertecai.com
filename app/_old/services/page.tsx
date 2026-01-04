import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, ArrowRight, Search, Bot, Code, BookOpen, Headphones } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              End-to-End AI Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              AI Services That Drive Results
            </h1>
            <p className="text-xl text-foreground mb-8 text-pretty">
              At Altertec AI, we provide end-to-end services that empower SMEs to adopt and scale AI. From automation to
              custom SaaS solutions, our team ensures every implementation is ROI-driven and strategy-first.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive AI solutions tailored to your business needs and growth objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Search className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">AI Audits</CardTitle>
                    <Badge variant="outline" className="mt-1">
                      Most Popular
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Identify inefficiencies & high-ROI opportunities
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Business process analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">ROI opportunity identification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Implementation roadmap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Cost-benefit analysis</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-foreground mb-2">Typical outcomes:</p>
                  <p className="text-sm font-medium">$50K+ in identified savings opportunities</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Workflow Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">Streamline operations with AI-powered workflows</CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Process mapping & optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Custom automation development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Integration with existing systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Performance monitoring</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-foreground mb-2">Typical outcomes:</p>
                  <p className="text-sm font-medium">200+ hours saved per quarter</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">AI Agents & Chatbots</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">Enhance customer experience</CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Customer service chatbots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Lead qualification agents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Internal knowledge assistants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Multi-channel deployment</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-foreground mb-2">Typical outcomes:</p>
                  <p className="text-sm font-medium">60% reduction in support tickets</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">AI SaaS Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">Build scalable, AI-powered software</CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Custom AI application development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Cloud-native architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">API integrations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Scalable infrastructure</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-foreground mb-2">Typical outcomes:</p>
                  <p className="text-sm font-medium">Custom solutions that scale with growth</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Consulting & Training</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">Educate teams & build AI roadmaps</CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Team training programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">AI adoption workshops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Strategic consulting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">AI roadmap development</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-foreground mb-2">Typical outcomes:</p>
                  <p className="text-sm font-medium">Empowered teams with AI capabilities</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Headphones className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Ongoing Partnerships</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">Long-term optimization & support</CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">24/7 system monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Performance optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Regular updates & improvements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Strategic guidance</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-foreground mb-2">Typical outcomes:</p>
                  <p className="text-sm font-medium">Continuous ROI improvement</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild>
              <Link href="/case-studies">Explore Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Deliver Results</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto text-pretty">
              Our proven methodology ensures successful AI implementation with measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery & Analysis</h3>
              <p className="text-foreground text-sm">
                Deep dive into your business processes and identify AI opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategy & Planning</h3>
              <p className="text-foreground text-sm">
                Create detailed implementation roadmap with clear milestones and ROI projections.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-foreground text-sm">
                Build and deploy AI solutions with minimal disruption to your operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimize & Scale</h3>
              <p className="text-foreground text-sm">
                Continuous monitoring, optimization, and scaling for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-foreground mb-8 text-pretty">
              Let's identify the AI opportunities in your business. Book your free audit to discover potential savings
              and growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book Your Free AI Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
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
            <p className="text-sm text-foreground">© 2024 Altertec AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
