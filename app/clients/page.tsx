"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ClientsHero } from "@/components/clients/clients-hero"

const FeaturedClientsGrid = dynamic(() => import("@/components/clients/featured-clients-grid").then(m => ({ default: m.FeaturedClientsGrid })), {
  loading: () => <div className="h-96" />,
})

const TestimonialsSection = dynamic(() => import("@/components/clients/testimonials-section").then(m => ({ default: m.TestimonialsSection })), {
  loading: () => <div className="h-96" />,
})

const ClientLogosCarousel = dynamic(() => import("@/components/clients/client-logos-carousel").then(m => ({ default: m.ClientLogosCarousel })), {
  loading: () => <div className="h-64" />,
})

const ImpactStatement = dynamic(() => import("@/components/clients/impact-statement").then(m => ({ default: m.ImpactStatement })), {
  loading: () => <div className="h-96" />,
})

const StatsIndicators = dynamic(() => import("@/components/clients/stats-indicators").then(m => ({ default: m.StatsIndicators })), {
  loading: () => <div className="h-64" />,
})

const IndustrySectors = dynamic(() => import("@/components/clients/industry-sectors").then(m => ({ default: m.IndustrySectors })), {
  loading: () => <div className="h-96" />,
})

const ClientSuccessStories = dynamic(() => import("@/components/clients/client-success-stories").then(m => ({ default: m.ClientSuccessStories })), {
  loading: () => <div className="h-96" />,
})

const PartnershipTiers = dynamic(() => import("@/components/clients/partnership-tiers").then(m => ({ default: m.PartnershipTiers })), {
  loading: () => <div className="h-80" />,
})

const ClientsCTA = dynamic(() => import("@/components/clients/clients-cta").then(m => ({ default: m.ClientsCTA })), {
  loading: () => <div className="h-64" />,
})

export default function ClientsPage() {
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
      <ClientsHero />
      <FeaturedClientsGrid />
      <TestimonialsSection />
      <ClientLogosCarousel />
      <ImpactStatement />
      <StatsIndicators />
      <IndustrySectors />
      <ClientSuccessStories />
      <PartnershipTiers />
      <ClientsCTA />
      <Footer />
    </main>
  )
}
