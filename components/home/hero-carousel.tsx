"use client"

import { useEffect, useState } from "react"
import { FlowButton } from "@/components/ui/flow-button"

const heroImages = ["/luxury-event-party-celebration.jpg", "/elegant-event-venue-decoration.jpg", "/premium-party-atmosphere.jpg"]

export function HeroCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Preload images for better performance
    heroImages.forEach((image) => {
      const img = new Image()
      img.src = image
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight animate-fade-in-up tracking-tight">
          Creating Unforgettable Parties with Style & Spark!
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/85 mb-12 animate-fade-in-up font-light tracking-wide" style={{ animationDelay: "0.2s" }}>
          Premium event management services crafted for your unforgettable moments
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Learn More */}
          <button
            onClick={() => document.querySelector('[href="/about"]')?.click()}
            className="px-8 py-3.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white font-medium hover:bg-white/30 hover:border-white/60 transition-all duration-300 hover:shadow-lg"
          >
            Learn More
          </button>

          {/* Get Started */}
          <button
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-secondary/40 hover:-translate-y-1 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

    </section>
  )
}
