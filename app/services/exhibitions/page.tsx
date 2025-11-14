"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExhibitionsHero } from "@/components/exhibitions/exhibitions-hero"
import { IntroductionSection } from "@/components/exhibitions/introduction-section"

const FeatureSpotlight = dynamic(() => import("@/components/exhibitions/feature-spotlight").then(m => ({ default: m.FeatureSpotlight })), {
  loading: () => <div className="h-96" />,
})

const EducationalExhibition = dynamic(() => import("@/components/exhibitions/educational-exhibition").then(m => ({ default: m.EducationalExhibition })), {
  loading: () => <div className="h-96" />,
})

const TechExhibition = dynamic(() => import("@/components/exhibitions/tech-exhibition").then(m => ({ default: m.TechExhibition })), {
  loading: () => <div className="h-96" />,
})

const ExhibitionTypesGrid = dynamic(() => import("@/components/exhibitions/exhibition-types-grid").then(m => ({ default: m.ExhibitionTypesGrid })), {
  loading: () => <div className="h-96" />,
})

const ProcessSection = dynamic(() => import("@/components/exhibitions/process-section").then(m => ({ default: m.ProcessSection })), {
  loading: () => <div className="h-96" />,
})

const FeaturesCapabilities = dynamic(() => import("@/components/exhibitions/features-capabilities").then(m => ({ default: m.FeaturesCapabilities })), {
  loading: () => <div className="h-80" />,
})

const GalleryShowcase = dynamic(() => import("@/components/exhibitions/gallery-showcase").then(m => ({ default: m.GalleryShowcase })), {
  loading: () => <div className="h-96" />,
})

const TechnicalSpecifications = dynamic(() => import("@/components/exhibitions/technical-specifications").then(m => ({ default: m.TechnicalSpecifications })), {
  loading: () => <div className="h-96" />,
})

const IndustriesServed = dynamic(() => import("@/components/exhibitions/industries-served").then(m => ({ default: m.IndustriesServed })), {
  loading: () => <div className="h-96" />,
})

const CaseStudies = dynamic(() => import("@/components/exhibitions/case-studies").then(m => ({ default: m.CaseStudies })), {
  loading: () => <div className="h-96" />,
})

const TestimonialsSection = dynamic(() => import("@/components/exhibitions/testimonials-section").then(m => ({ default: m.TestimonialsSection })), {
  loading: () => <div className="h-80" />,
})

const StatsCounter = dynamic(() => import("@/components/exhibitions/stats-counter").then(m => ({ default: m.StatsCounter })), {
  loading: () => <div className="h-64" />,
})

const TechnologyInnovation = dynamic(() => import("@/components/exhibitions/technology-innovation").then(m => ({ default: m.TechnologyInnovation })), {
  loading: () => <div className="h-96" />,
})

const FAQSection = dynamic(() => import("@/components/exhibitions/faq-section").then(m => ({ default: m.FAQSection })), {
  loading: () => <div className="h-96" />,
})

const PricingInformation = dynamic(() => import("@/components/exhibitions/pricing-information").then(m => ({ default: m.PricingInformation })), {
  loading: () => <div className="h-96" />,
})

const CTASection = dynamic(() => import("@/components/exhibitions/cta-section").then(m => ({ default: m.CTASection })), {
  loading: () => <div className="h-64" />,
})

const RelatedServices = dynamic(() => import("@/components/exhibitions/related-services").then(m => ({ default: m.RelatedServices })), {
  loading: () => <div className="h-96" />,
})

export default function ExhibitionsPage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let lastUpdate = 0
    const updateInterval = 16

    const handleScroll = () => {
      const now = Date.now()
      if (now - lastUpdate >= updateInterval) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = window.scrollY
        setScrollProgress((scrolled / windowHeight) * 100)
        lastUpdate = now
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <ExhibitionsHero />
      <IntroductionSection />
      <FeatureSpotlight />
      <EducationalExhibition />
      <TechExhibition />
      <ExhibitionTypesGrid />
      <ProcessSection />
      <FeaturesCapabilities />
      <GalleryShowcase />
      <TechnicalSpecifications />
      <IndustriesServed />
      <CaseStudies />
      <TestimonialsSection />
      <StatsCounter />
      <TechnologyInnovation />
      <FAQSection />
      <PricingInformation />
      <CTASection />
      <RelatedServices />
      <Footer />
    </main>
  )
}
