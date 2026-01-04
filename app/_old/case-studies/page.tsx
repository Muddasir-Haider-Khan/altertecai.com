import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Clock, DollarSign, Users, CheckCircle, BarChart3, Target } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Proven Results
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Proven Results. Real Impact.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              See how SMEs across different industries have transformed their operations and achieved significant ROI
              through strategic AI implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Track Record</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Consistent results across diverse industries and business models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">$2.3M+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Total savings generated for clients</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">5,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Hours saved through automation</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">320%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Average ROI in first year</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">50+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">SMEs successfully transformed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Detailed case studies showing the transformation journey and measurable outcomes.
            </p>
          </div>

          <div className="space-y-16">
            {/* Case Study 1 - Logistics */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Logistics & Supply Chain
                    </Badge>
                    <CardTitle className="text-2xl">Logistics SME</CardTitle>
                    <CardDescription className="text-lg">
                      Mid-sized logistics company with 150+ employees and $25M annual revenue
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    340% ROI
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">The Challenge</h4>
                    <p className="text-muted-foreground mb-6">
                      Manual customer onboarding processes were taking 3-4 hours per new client, creating bottlenecks
                      during growth periods. Invoice processing required 2 full-time employees and was prone to errors,
                      leading to delayed payments and customer complaints.
                    </p>

                    <h4 className="font-semibold mb-4 text-lg">Our Solution</h4>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Automated customer onboarding workflow</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">AI-powered invoice processing system</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Intelligent document classification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Automated compliance checking</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Results Achieved</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">250+</p>
                        <p className="text-sm text-muted-foreground">Hours Saved/Quarter</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">85%</p>
                        <p className="text-sm text-muted-foreground">Error Reduction</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">$120K</p>
                        <p className="text-sm text-muted-foreground">Annual Savings</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">6 Months</p>
                        <p className="text-sm text-muted-foreground">Payback Period</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <p className="text-sm font-medium mb-2">Client Testimonial:</p>
                      <p className="text-sm text-muted-foreground italic">
                        "The AI automation has transformed our operations. We can now handle 3x more customers with the
                        same team, and our error rates have dropped to almost zero. The ROI exceeded our expectations."
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">— Operations Director</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 - Healthcare */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Healthcare Services
                    </Badge>
                    <CardTitle className="text-2xl">Healthcare SME</CardTitle>
                    <CardDescription className="text-lg">
                      Healthcare services company managing patient data and insurance processing
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    280% ROI
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">The Challenge</h4>
                    <p className="text-muted-foreground mb-6">
                      Patient management workflows were entirely manual, requiring extensive paperwork and data entry.
                      Insurance claim processing was slow and error-prone, leading to delayed reimbursements and
                      administrative overhead consuming 40% of staff time.
                    </p>

                    <h4 className="font-semibold mb-4 text-lg">Our Solution</h4>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Intelligent patient data management system</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Automated insurance claim processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">AI-powered appointment scheduling</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Compliance monitoring and reporting</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Results Achieved</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">$60K</p>
                        <p className="text-sm text-muted-foreground">Hidden Savings Found</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">60%</p>
                        <p className="text-sm text-muted-foreground">Admin Time Reduction</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">95%</p>
                        <p className="text-sm text-muted-foreground">Claim Accuracy</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">4 Months</p>
                        <p className="text-sm text-muted-foreground">Payback Period</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <p className="text-sm font-medium mb-2">Client Testimonial:</p>
                      <p className="text-sm text-muted-foreground italic">
                        "We discovered savings opportunities we never knew existed. The AI audit revealed inefficiencies
                        that were costing us thousands monthly. Now our staff can focus on patient care instead of
                        paperwork."
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">— Practice Manager</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3 - Manufacturing */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Manufacturing
                    </Badge>
                    <CardTitle className="text-2xl">Precision Manufacturing SME</CardTitle>
                    <CardDescription className="text-lg">
                      Specialized manufacturing company producing custom components for automotive industry
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    420% ROI
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">The Challenge</h4>
                    <p className="text-muted-foreground mb-6">
                      Equipment maintenance was reactive, leading to unexpected downtime and costly emergency repairs.
                      Quality control relied on manual inspection, causing inconsistent results and occasional defects
                      reaching customers.
                    </p>

                    <h4 className="font-semibold mb-4 text-lg">Our Solution</h4>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Predictive maintenance AI system</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Computer vision quality control</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Production optimization algorithms</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Real-time performance monitoring</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Results Achieved</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">45%</p>
                        <p className="text-sm text-muted-foreground">Downtime Reduction</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">$80K</p>
                        <p className="text-sm text-muted-foreground">Annual Savings</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">99.8%</p>
                        <p className="text-sm text-muted-foreground">Quality Accuracy</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-2xl font-bold text-primary">5 Months</p>
                        <p className="text-sm text-muted-foreground">Payback Period</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <p className="text-sm font-medium mb-2">Client Testimonial:</p>
                      <p className="text-sm text-muted-foreground italic">
                        "The predictive maintenance system has been a game-changer. We've eliminated surprise breakdowns
                        and our quality consistency has improved dramatically. Our customers have noticed the
                        difference."
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">— Production Manager</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Across Industries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              AI transformation opportunities exist in every industry. Here's how we've helped SMEs across different
              sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Professional Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Document Processing</span>
                    <span className="text-sm font-medium">80% faster</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Client Onboarding</span>
                    <span className="text-sm font-medium">60% reduction</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Average ROI</span>
                    <span className="text-sm font-medium">290%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  E-commerce & Retail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Inventory Management</span>
                    <span className="text-sm font-medium">40% optimization</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Customer Service</span>
                    <span className="text-sm font-medium">70% automation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Average ROI</span>
                    <span className="text-sm font-medium">350%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Financial Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Risk Assessment</span>
                    <span className="text-sm font-medium">90% accuracy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Compliance Monitoring</span>
                    <span className="text-sm font-medium">95% automated</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Average ROI</span>
                    <span className="text-sm font-medium">380%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Book Your Audit to Find Similar Opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book Your Free AI Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/process">See Our Process</Link>
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
