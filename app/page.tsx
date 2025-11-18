"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/home/hero-carousel"

const MissionStatement = dynamic(() => import("@/components/home/mission-statement").then(m => ({ default: m.MissionStatement })), {
  loading: () => <div className="h-96" />,
})

const TeamStatement = dynamic(() => import("@/components/home/team-statement").then(m => ({ default: m.TeamStatement })), {
  loading: () => <div className="h-80" />,
})

const StatsSection = dynamic(() => import("@/components/home/stats-section").then(m => ({ default: m.StatsSection })), {
  loading: () => <div className="h-96" />,
})

const ClientLogos = dynamic(() => import("@/components/home/client-logos").then(m => ({ default: m.ClientLogos })), {
  loading: () => <div className="h-40" />,
})

const ProcessSection = dynamic(() => import("@/components/home/process-section").then(m => ({ default: m.ProcessSection })), {
  loading: () => <div className="h-96" />,
})

const CTASection = dynamic(() => import("@/components/home/cta-section").then(m => ({ default: m.CTASection })), {
  loading: () => <div className="h-64" />,
})

const ExpertPlanning = dynamic(() => import("@/components/home/expert-planning").then(m => ({ default: m.ExpertPlanning })), {
  loading: () => <div className="h-96" />,
})

export default function Home() {
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
    <main className="min-h-screen bg-premium-gradient">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-300 bg-gradient-to-r from-secondary to-accent"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <HeroCarousel />
      <MissionStatement />
      <TeamStatement />
      <StatsSection />
      <ClientLogos />
      <ProcessSection />
      <CTASection />
      <ExpertPlanning />
      <Footer />
    </main>
  )
}
