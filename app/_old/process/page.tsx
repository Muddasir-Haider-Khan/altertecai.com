import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Search, MapPin, Rocket, CheckCircle, Clock, Users, Target } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Proven Methodology
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our 4-Step Process to AI Success
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              A systematic approach that transforms your business operations through strategic AI implementation. Every
              step is designed to maximize ROI and minimize risk.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        Step 1
                      </Badge>
                      <h2 className="text-3xl font-bold text-foreground">Discovery Call</h2>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 text-pretty">Understand your goals</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Business challenge assessment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Current process evaluation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>AI readiness analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Goal alignment & expectations</span>
                    </div>
                  </div>
                </div>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Duration: 60 minutes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">What We Cover:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Your business model and key processes</li>
                          <li>• Current pain points and inefficiencies</li>
                          <li>• Technology stack and existing tools</li>
                          <li>• Budget considerations and timeline</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Outcome:</h4>
                        <p className="text-sm text-muted-foreground">
                          Clear understanding of your needs and preliminary AI opportunity assessment.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <Card className="hover:shadow-lg transition-shadow lg:order-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Duration: 1-2 weeks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Deep Dive Analysis:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Workflow documentation and mapping</li>
                          <li>• Data audit and quality assessment</li>
                          <li>• Cost-benefit analysis for each opportunity</li>
                          <li>• Risk assessment and mitigation strategies</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Deliverable:</h4>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive AI Audit Report with prioritized recommendations and ROI projections.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Search className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        Step 2
                      </Badge>
                      <h2 className="text-3xl font-bold text-foreground">AI Audit & Mapping</h2>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 text-pretty">Identify automation opportunities</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Process documentation & analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>AI opportunity identification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>ROI calculations & projections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Priority ranking & recommendations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        Step 3
                      </Badge>
                      <h2 className="text-3xl font-bold text-foreground">Implementation Roadmap</h2>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 text-pretty">Design a prioritized ROI-first plan</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Phased implementation strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Resource allocation planning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Success metrics definition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Risk mitigation strategies</span>
                    </div>
                  </div>
                </div>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Duration: 3-5 days
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Strategic Planning:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Phase-by-phase implementation timeline</li>
                          <li>• Budget allocation and resource requirements</li>
                          <li>• Team training and change management plan</li>
                          <li>• Success metrics and KPI definitions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Deliverable:</h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed Implementation Roadmap with timelines, milestones, and success criteria.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <Card className="hover:shadow-lg transition-shadow lg:order-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Duration: 4-12 weeks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Implementation Phases:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Development and testing of AI solutions</li>
                          <li>• Pilot deployment with selected processes</li>
                          <li>• Team training and knowledge transfer</li>
                          <li>• Full deployment and optimization</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Ongoing Support:</h4>
                        <p className="text-sm text-muted-foreground">
                          Continuous monitoring, optimization, and support to ensure maximum ROI and system performance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Rocket className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        Step 4
                      </Badge>
                      <h2 className="text-3xl font-bold text-foreground">Build, Deploy, Optimize</h2>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 text-pretty">
                    Deliver solutions and improve continuously
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Solution development & testing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Phased deployment & integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Team training & knowledge transfer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Continuous optimization & support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Our Process Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our methodology is designed specifically for SMEs, focusing on practical implementation and measurable
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>ROI-Focused Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every recommendation is backed by clear ROI projections and measurable business impact.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Risk-Managed Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Phased approach minimizes disruption while ensuring successful adoption and integration.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Proven Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Successfully implemented across diverse industries with consistent positive outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Typical Project Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From initial consultation to full deployment, here's what you can expect.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">W1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Week 1: Discovery & Initial Assessment</h3>
                    <p className="text-muted-foreground">Discovery call and preliminary opportunity identification.</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">W2-3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Weeks 2-3: Comprehensive AI Audit</h3>
                    <p className="text-muted-foreground">
                      Deep analysis and detailed audit report with recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">W4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Week 4: Strategy & Planning</h3>
                    <p className="text-muted-foreground">Implementation roadmap creation and project planning.</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">W5+</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Week 5+: Implementation & Optimization</h3>
                    <p className="text-muted-foreground">Solution development, deployment, and ongoing optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Start Your AI Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Begin with a free discovery call to explore how our proven process can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book Your Free Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">See Success Stories</Link>
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
            <p className="text-muted-foreground mb-4">AI Transformation for SMEs</p>
            <p className="text-sm text-muted-foreground">© 2024 Altertec AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
