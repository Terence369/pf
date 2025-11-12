"use client"

import dynamic from "next/dynamic"

const DynamicScroller = dynamic(() => import("./infinite-image-scroller").then((mod) => mod.InfiniteImageScroller), { ssr: false })

export function TeamStatement() {
  return (
    <section className="py-24 lg:py-32 bg-premium-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <div className="mb-12">
              <span className="text-7xl lg:text-8xl font-light text-secondary/30">01</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
              We are a dynamic team turning innovative ideas into reality.
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
              Our team of experienced professionals brings creativity, expertise, and passion to every project. We work
              collaboratively to ensure your vision becomes an unforgettable reality.
            </p>
            <a href="/about" className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-accent transition-all duration-300 group">
              <span>Learn More</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Right Column - Images */}
          <div className="flex items-center justify-center">
            {/* Infinite horizontal image scroller with arrows */}
            <div className="w-full max-w-2xl">
              <DynamicScroller />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
