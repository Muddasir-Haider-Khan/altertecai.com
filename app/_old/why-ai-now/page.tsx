import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, DollarSign, Target, Clock, BarChart3, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function WhyAINowPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              The AI Advantage
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Why Now Is the Time to Adopt AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              AI adoption among SMEs is growing at 40% year over year. Early adopters gain a clear competitive
              advantage: reduced costs, smarter operations, and scalability with fewer resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Discover Your AI Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">See Real Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Reality */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Market Reality</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The AI revolution is happening now, and businesses that act quickly are seeing immediate benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">40%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Annual growth in SME AI adoption</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">25-40%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Average cost reduction from AI automation</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">60%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Time savings on repetitive tasks</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">3x</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Faster decision-making with AI insights</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground text-pretty">
              These aren't future projections—they're results being achieved by SMEs today. The question isn't whether
              AI will transform your industry, but whether you'll be leading the transformation or catching up to
              competitors who started earlier.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The AI Advantage for SMEs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              AI isn't just for tech giants. SMEs are uniquely positioned to benefit from AI's agility and efficiency
              gains.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Cut costs & increase efficiency</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  AI automation eliminates manual, repetitive tasks while reducing human error. SMEs typically see
                  immediate cost savings and productivity gains.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Automate data entry and processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Reduce manual quality control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Streamline customer service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Optimize resource allocation</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-medium text-primary">Real Example:</p>
                  <p className="text-sm text-muted-foreground">
                    A logistics SME saved $60K annually by automating invoice processing and customer onboarding.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Scale faster with fewer resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  AI enables SMEs to handle increased workload without proportional increases in staff, allowing rapid
                  scaling during growth phases.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Handle more customers simultaneously</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Process larger volumes efficiently</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Maintain quality during rapid growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Expand into new markets faster</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-medium text-primary">Real Example:</p>
                  <p className="text-sm text-muted-foreground">
                    A healthcare SME doubled their patient capacity without hiring additional administrative staff.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Stay ahead of competitors</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Early AI adoption creates sustainable competitive advantages. While competitors struggle with manual
                  processes, you'll be operating at higher efficiency levels.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Faster response times to customers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">More accurate pricing and forecasting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Better customer experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Data-driven decision making</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-medium text-primary">Market Reality:</p>
                  <p className="text-sm text-muted-foreground">
                    Companies using AI report 15% higher customer satisfaction and 20% faster market response times.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Build smarter systems, not just more tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  AI creates intelligent systems that learn and improve over time, rather than just adding more software
                  tools that require constant management.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Self-improving processes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Predictive maintenance and planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Intelligent resource optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Adaptive customer interactions</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-medium text-primary">Long-term Value:</p>
                  <p className="text-sm text-muted-foreground">
                    AI systems become more valuable over time as they learn from your data and operations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgency Factors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Waiting Costs More Than Acting</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The cost of AI adoption is decreasing while the competitive gap is widening. Every month of delay
              increases the catch-up effort required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-destructive/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-destructive">The Cost of Waiting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Competitors gain operational advantages that become harder to match
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Manual processes become more expensive as labor costs increase
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Customer expectations rise as AI-powered experiences become standard
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Larger implementation effort required to catch up to market leaders
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">The Advantage of Acting Now</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Immediate cost savings and efficiency gains from day one
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Build competitive moats while others are still planning
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Learn and iterate while AI technology is still rapidly improving
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Attract and retain talent who want to work with modern technology
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">SMEs Already Winning with AI</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real businesses achieving real results through strategic AI implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle>Manufacturing SME</CardTitle>
                  <Badge variant="secondary">6 Months ROI</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Implemented predictive maintenance AI that reduced equipment downtime by 45% and maintenance costs
                    by $80K annually.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-2xl font-bold text-primary">45%</p>
                      <p className="text-sm text-muted-foreground">Downtime Reduction</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">$80K</p>
                      <p className="text-sm text-muted-foreground">Annual Savings</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle>Professional Services</CardTitle>
                  <Badge variant="secondary">4 Months ROI</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Deployed AI-powered document processing that eliminated 200+ hours of manual work per month and
                    improved accuracy to 99.5%.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-2xl font-bold text-primary">200+</p>
                      <p className="text-sm text-muted-foreground">Hours Saved/Month</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">99.5%</p>
                      <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/case-studies">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Don't Let Your Competitors Get Ahead
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              The AI advantage is real, measurable, and available to your business today. Start with a free audit to
              discover your specific opportunities.
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
