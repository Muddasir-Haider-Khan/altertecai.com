import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Your AI Transformation Partner
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Altertec AI bridges the gap between AI's potential and SMEs' real needs. We combine consulting,
              implementation, and training into one partnership. Our mission: make AI adoption simple, profitable, and
              scalable for growing businesses worldwide.
            </p>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/process">Meet Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
              To make AI adoption simple, profitable, and scalable for growing businesses worldwide. We believe every
              SME deserves access to the transformative power of AI, regardless of their technical expertise or budget
              constraints.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>ROI-Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every solution we implement is designed to deliver measurable returns and tangible business value.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Partnership Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work alongside your team as long-term partners, not just consultants, ensuring sustainable
                    success.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Innovation Simplified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We make cutting-edge AI technology accessible and practical for businesses of all sizes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Founded by a team of AI experts and business strategists, Altertec AI was born from a simple
                observation: while large enterprises were rapidly adopting AI, SMEs were being left behind due to
                complexity, cost, and lack of specialized knowledge.
              </p>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                We recognized that SMEs needed a different approach—one that prioritized practical implementation over
                theoretical possibilities, measurable ROI over impressive technology, and long-term partnerships over
                one-time projects.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                Today, we've helped dozens of SMEs transform their operations, reduce costs, and accelerate growth
                through strategic AI implementation. Our success is measured not just in the technology we deploy, but
                in the tangible business outcomes we deliver for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in clear communication, honest assessments, and transparent pricing. No hidden costs, no
                  overselling.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                <p className="text-muted-foreground">
                  Every project begins with clear success metrics and ends with measurable improvements to your
                  business.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  We stay at the forefront of AI innovation to bring you the latest, most effective solutions.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Ethical AI</h3>
                <p className="text-muted-foreground">
                  We implement AI solutions that are responsible, secure, and aligned with your business values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Let's discuss how AI can drive measurable results for your SME. Book your free consultation today.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Book Your Free AI Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
