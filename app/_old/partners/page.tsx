import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Zap, Target, CheckCircle, Globe, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Strategic Partnerships
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Partners in Transformation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              We collaborate with industry-leading AI platforms and tool providers to deliver scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why We Partner</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Strategic partnerships allow us to leverage the best AI technologies and platforms available, ensuring our
              clients receive cutting-edge solutions that are both powerful and reliable. We carefully select partners
              who share our commitment to SME success and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Best-in-Class Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access to the most advanced AI platforms and tools in the market, ensuring optimal performance and
                  results.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Enterprise-Grade Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Partnerships with trusted providers ensure your data and operations remain secure and compliant.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Continuous Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stay ahead with the latest AI developments through our network of innovative technology partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technology Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Leading AI and cloud platforms that power our solutions and enable scalable, reliable implementations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow p-8">
              <div className="h-16 bg-muted rounded flex items-center justify-center mb-4">
                <span className="text-lg font-semibold">OpenAI</span>
              </div>
              <p className="text-sm text-muted-foreground">Advanced language models and AI capabilities</p>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow p-8">
              <div className="h-16 bg-muted rounded flex items-center justify-center mb-4">
                <span className="text-lg font-semibold">Microsoft</span>
              </div>
              <p className="text-sm text-muted-foreground">Azure AI services and enterprise solutions</p>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow p-8">
              <div className="h-16 bg-muted rounded flex items-center justify-center mb-4">
                <span className="text-lg font-semibold">Google Cloud</span>
              </div>
              <p className="text-sm text-muted-foreground">Machine learning and data analytics platforms</p>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow p-8">
              <div className="h-16 bg-muted rounded flex items-center justify-center mb-4">
                <span className="text-lg font-semibold">AWS</span>
              </div>
              <p className="text-sm text-muted-foreground">Cloud infrastructure and AI/ML services</p>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              These partnerships enable us to offer enterprise-grade AI solutions with the reliability and scalability
              that SMEs need to grow confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What This Means for You</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our strategic partnerships translate directly into better outcomes and experiences for our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Faster Implementation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Pre-built integrations and established relationships mean faster deployment times and smoother
                  implementations for your AI projects.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Reduced setup and configuration time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Pre-tested integration patterns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Streamlined deployment processes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Global Scale & Reliability</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Leverage enterprise-grade infrastructure and global networks without the enterprise complexity or
                  cost.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">99.9% uptime guarantees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Global data center coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Automatic scaling capabilities</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Enhanced Security & Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Benefit from enterprise-level security measures and compliance certifications that would be costly to
                  implement independently.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">SOC 2, GDPR, and industry compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Advanced encryption and security protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Regular security audits and updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Cost-Effective Solutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Our partner relationships enable us to offer enterprise-grade solutions at SME-friendly pricing
                  through volume agreements and optimized architectures.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Volume pricing advantages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Optimized resource utilization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Transparent, predictable pricing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Partnership Approach</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                We don't just use partner technologies—we integrate them thoughtfully to create cohesive, powerful
                solutions tailored to your specific needs.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Technology Agnostic</h3>
                <p className="text-muted-foreground">
                  We select the best tools for each specific use case rather than forcing one-size-fits-all solutions.
                  Your needs drive our technology choices, not vendor relationships.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Integration Excellence</h3>
                <p className="text-muted-foreground">
                  Our expertise lies in seamlessly integrating multiple partner technologies to create unified,
                  efficient systems that work together harmoniously.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Future-Proof Architecture</h3>
                <p className="text-muted-foreground">
                  We design solutions that can evolve with both your business needs and advancing partner technologies,
                  ensuring long-term value and adaptability.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Vendor Management</h3>
                <p className="text-muted-foreground">
                  We handle all partner relationships and technical integrations, so you can focus on your business
                  while we manage the complexity of multi-vendor AI ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Leverage Our Partner Network?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Discover how our strategic partnerships can accelerate your AI transformation with enterprise-grade
              solutions designed for SME success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book Your Free AI Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">See Partner-Powered Results</Link>
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
