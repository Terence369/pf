"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PromotionsHero } from "@/components/promotions/promotions-hero"
import { IntroductionSection } from "@/components/promotions/introduction-section"

const FeatureSpotlight = dynamic(() => import("@/components/promotions/feature-spotlight").then(m => ({ default: m.FeatureSpotlight })), {
  loading: () => <div className="h-96" />,
})

const ProductLaunches = dynamic(() => import("@/components/promotions/product-launches").then(m => ({ default: m.ProductLaunches })), {
  loading: () => <div className="h-96" />,
})

const BrandPromotions = dynamic(() => import("@/components/promotions/brand-promotions").then(m => ({ default: m.BrandPromotions })), {
  loading: () => <div className="h-96" />,
})

const ServicesBreakdown = dynamic(() => import("@/components/promotions/services-breakdown").then(m => ({ default: m.ServicesBreakdown })), {
  loading: () => <div className="h-80" />,
})

const CaseStudies = dynamic(() => import("@/components/promotions/case-studies").then(m => ({ default: m.CaseStudies })), {
  loading: () => <div className="h-96" />,
})

const ProcessTimeline = dynamic(() => import("@/components/promotions/process-timeline").then(m => ({ default: m.ProcessTimeline })), {
  loading: () => <div className="h-96" />,
})

const CampaignTypes = dynamic(() => import("@/components/promotions/campaign-types").then(m => ({ default: m.CampaignTypes })), {
  loading: () => <div className="h-96" />,
})

const WhyChooseUs = dynamic(() => import("@/components/promotions/why-choose-us").then(m => ({ default: m.WhyChooseUs })), {
  loading: () => <div className="h-80" />,
})

const TestimonialsSlider = dynamic(() => import("@/components/promotions/testimonials-slider").then(m => ({ default: m.TestimonialsSlider })), {
  loading: () => <div className="h-96" />,
})

const IndustriesServed = dynamic(() => import("@/components/promotions/industries-served").then(m => ({ default: m.IndustriesServed })), {
  loading: () => <div className="h-96" />,
})

const StatsCounter = dynamic(() => import("@/components/promotions/stats-counter").then(m => ({ default: m.StatsCounter })), {
  loading: () => <div className="h-64" />,
})

const GallerySection = dynamic(() => import("@/components/promotions/gallery-section").then(m => ({ default: m.GallerySection })), {
  loading: () => <div className="h-96" />,
})

const FAQAccordion = dynamic(() => import("@/components/promotions/faq-accordion").then(m => ({ default: m.FAQAccordion })), {
  loading: () => <div className="h-96" />,
})

const CTASection = dynamic(() => import("@/components/promotions/cta-section").then(m => ({ default: m.CTASection })), {
  loading: () => <div className="h-64" />,
})

const RelatedServices = dynamic(() => import("@/components/promotions/related-services").then(m => ({ default: m.RelatedServices })), {
  loading: () => <div className="h-96" />,
})

export default function PromotionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PromotionsHero />
      <IntroductionSection />
      <FeatureSpotlight />
      <ProductLaunches />
      <BrandPromotions />
      <ServicesBreakdown />
      <CaseStudies />
      <ProcessTimeline />
      <CampaignTypes />
      <WhyChooseUs />
      <TestimonialsSlider />
      <IndustriesServed />
      <StatsCounter />
      <GallerySection />
      <FAQAccordion />
      <CTASection />
      <RelatedServices />
      <Footer />
    </main>
  )
}
