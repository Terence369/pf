"use client"

import { Sparkles, Users, Zap, Clock } from "lucide-react"

const features = [
  {
    number: "01",
    title: "Unique Set Up",
    description: "Custom-designed event spaces that reflect your brand and vision",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Full Support and Guidance",
    description: "Dedicated team available throughout your event planning journey",
    icon: Users,
  },
  {
    number: "03",
    title: "High-End Products",
    description: "Premium equipment, decor, and services for exceptional quality",
    icon: Zap,
  },
  {
    number: "04",
    title: "Availability 24/7",
    description: "Round-the-clock support and design consultation for your needs",
    icon: Clock,
  },
]

export function ExpertPlanning() {
  return (
    <section className="bg-premium-gradient py-24 lg:py-32 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Features */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-16 leading-tight">
              Elevate Your Events With Our Expert Planning
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-secondary to-accent text-white shadow-lg group-hover:shadow-secondary/40 transition-all duration-300 transform group-hover:scale-110">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.number} {feature.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-fit">
            <img
              alt="DJ setup"
              loading="lazy"
              decoding="async"
              src="https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F0f18591e64d74651873c54c06db9c3d7?format=webp&width=400"
              className="rounded-2xl shadow-xl h-60 object-cover hover:shadow-2xl transition-all duration-300 hover:scale-105"
            />
            <img
              alt="Decorations"
              loading="lazy"
              decoding="async"
              src="https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F9088b880cfb84b6987b31afac6b38ba2?format=webp&width=400"
              className="rounded-2xl shadow-xl h-44 object-cover hover:shadow-2xl transition-all duration-300 hover:scale-105"
            />
            <img
              alt="Lighting"
              loading="lazy"
              decoding="async"
              src="https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F0204cca0c7114c80b24a5817adb9416b?format=webp&width=400"
              className="rounded-2xl shadow-xl h-48 object-cover hover:shadow-2xl transition-all duration-300 hover:scale-105"
            />
            <img
              alt="Atmosphere"
              loading="lazy"
              decoding="async"
              src="https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2Fec6c218f1d534cd2899d6f9dc8afeef3?format=webp&width=400"
              className="rounded-2xl shadow-xl h-56 object-cover hover:shadow-2xl transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
