import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"

const AboutIntroduction = dynamic(() => import("@/components/about/about-introduction").then(m => ({ default: m.AboutIntroduction })), {
  loading: () => <div className="h-96" />,
})

const ServicesCarouselSection = dynamic(() => import("@/components/about/services-carousel-section").then(m => ({ default: m.ServicesCarouselSection })), {
  loading: () => <div className="h-80" />,
})

const ProcessSection = dynamic(() => import("@/components/about/process-section").then(m => ({ default: m.ProcessSection })), {
  loading: () => <div className="h-96" />,
})

const TailoredExperience = dynamic(() => import("@/components/about/tailored-experience").then(m => ({ default: m.TailoredExperience })), {
  loading: () => <div className="h-96" />,
})

const ExpertiseSection = dynamic(() => import("@/components/about/expertise-section").then(m => ({ default: m.ExpertiseSection })), {
  loading: () => <div className="h-80" />,
})

const TeamSection = dynamic(() => import("@/components/about/team-section").then(m => ({ default: m.TeamSection })), {
  loading: () => <div className="h-96" />,
})

const ValuesSection = dynamic(() => import("@/components/about/values-section").then(m => ({ default: m.ValuesSection })), {
  loading: () => <div className="h-80" />,
})

const TimelineSection = dynamic(() => import("@/components/about/timeline-section").then(m => ({ default: m.TimelineSection })), {
  loading: () => <div className="h-96" />,
})

const TestimonialQuote = dynamic(() => import("@/components/about/testimonial-quote").then(m => ({ default: m.TestimonialQuote })), {
  loading: () => <div className="h-64" />,
})

const CTASection = dynamic(() => import("@/components/about/cta-section").then(m => ({ default: m.CTASection })), {
  loading: () => <div className="h-64" />,
})

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <AboutIntroduction />
      <ServicesCarouselSection />
      <ProcessSection />
      <TailoredExperience />
      <ExpertiseSection />
      <TeamSection />
      <ValuesSection />
      <TimelineSection />
      <TestimonialQuote />
      <CTASection />
      <Footer />
    </main>
  )
}
