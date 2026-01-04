import { HeroSection } from "@/components/sections/hero-section"
import { TrustedBySection } from "@/components/sections/trusted-by-section"
import { ServicesPreviewSection } from "@/components/sections/services-preview-section"
import { ProcessSection } from "@/components/sections/process-section"
import { FeatureSplitSections } from "@/components/sections/feature-split-sections"
import { PortfolioTeaserSection } from "@/components/sections/portfolio-teaser-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ServicesPreviewSection />
      <ProcessSection />
      <FeatureSplitSections />
      <PortfolioTeaserSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
