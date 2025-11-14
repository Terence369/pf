"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CorporateHero } from "@/components/corporate/corporate-hero"
import { IntroductionSection } from "@/components/corporate/introduction-section"

const FeatureHighlight = dynamic(() => import("@/components/corporate/feature-highlight").then(m => ({ default: m.FeatureHighlight })), {
  loading: () => <div className="h-96" />,
})

const CorporateShows = dynamic(() => import("@/components/corporate/corporate-shows").then(m => ({ default: m.CorporateShows })), {
  loading: () => <div className="h-96" />,
})

const CorporateEvents = dynamic(() => import("@/components/corporate/corporate-events").then(m => ({ default: m.CorporateEvents })), {
  loading: () => <div className="h-96" />,
})

const ServicesBreakdown = dynamic(() => import("@/components/corporate/services-breakdown").then(m => ({ default: m.ServicesBreakdown })), {
  loading: () => <div className="h-80" />,
})

const ProcessTimeline = dynamic(() => import("@/components/corporate/process-timeline").then(m => ({ default: m.ProcessTimeline })), {
  loading: () => <div className="h-96" />,
})

const CaseStudies = dynamic(() => import("@/components/corporate/case-studies").then(m => ({ default: m.CaseStudies })), {
  loading: () => <div className="h-96" />,
})

const CapabilitiesGrid = dynamic(() => import("@/components/corporate/capabilities-grid").then(m => ({ default: m.CapabilitiesGrid })), {
  loading: () => <div className="h-80" />,
})

const ClientTestimonials = dynamic(() => import("@/components/corporate/client-testimonials").then(m => ({ default: m.ClientTestimonials })), {
  loading: () => <div className="h-96" />,
})

const FAQSection = dynamic(() => import("@/components/corporate/faq-section").then(m => ({ default: m.FAQSection })), {
  loading: () => <div className="h-96" />,
})

const StatisticsSection = dynamic(() => import("@/components/corporate/statistics-section").then(m => ({ default: m.StatisticsSection })), {
  loading: () => <div className="h-80" />,
})

const RelatedServices = dynamic(() => import("@/components/corporate/related-services").then(m => ({ default: m.RelatedServices })), {
  loading: () => <div className="h-96" />,
})

const CTASection = dynamic(() => import("@/components/corporate/cta-section").then(m => ({ default: m.CTASection })), {
  loading: () => <div className="h-64" />,
})

export default function CorporateEventsPage() {
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
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <CorporateHero />
      <IntroductionSection />
      <FeatureHighlight />
      <CorporateShows />
      <CorporateEvents />
      <ServicesBreakdown />
      <ProcessTimeline />
      <CaseStudies />
      <CapabilitiesGrid />
      <ClientTestimonials />
      <FAQSection />
      <StatisticsSection />
      <RelatedServices />
      <CTASection />
      <Footer />
    </main>
  )
}
