"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { FilterTabs } from "@/components/portfolio/filter-tabs"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"

const LoadMoreSection = dynamic(() => import("@/components/portfolio/load-more-section").then(m => ({ default: m.LoadMoreSection })), {
  loading: () => <div className="h-40" />,
})

const CTABanner = dynamic(() => import("@/components/portfolio/cta-banner").then(m => ({ default: m.CTABanner })), {
  loading: () => <div className="h-64" />,
})

const RelatedServices = dynamic(() => import("@/components/portfolio/related-services").then(m => ({ default: m.RelatedServices })), {
  loading: () => <div className="h-80" />,
})

const TestimonialSlider = dynamic(() => import("@/components/portfolio/testimonial-slider").then(m => ({ default: m.TestimonialSlider })), {
  loading: () => <div className="h-96" />,
})

const StatsCounter = dynamic(() => import("@/components/portfolio/stats-counter").then(m => ({ default: m.StatsCounter })), {
  loading: () => <div className="h-64" />,
})

export default function PortfolioPage() {
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
      <PortfolioHero />
      <FilterTabs />
      <PortfolioGrid />
      <LoadMoreSection />
      <CTABanner />
      <RelatedServices />
      <TestimonialSlider />
      <StatsCounter />
      <Footer />
    </main>
  )
}
