"use client"

import { useEffect } from "react"
import { FlowButton } from "@/components/ui/flow-button"

export function HeroCarousel() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.builder.io/o/assets%2F7aa3b50cc2434a6ab4880d7d1f314d76%2F8f406bc33aa44d57afbd64d16075de66?alt=media&token=30a95b2b-4bc2-46ef-8b1b-c866b24c1185&apiKey=7aa3b50cc2434a6ab4880d7d1f314d76" type="video/mp4" />
        </video>
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40" />
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
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

    </section>
  )
}
