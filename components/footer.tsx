"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, ArrowUp } from "lucide-react"
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer"
import { useEffect, useState } from "react"

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="relative h-fit rounded-3xl overflow-hidden m-6 lg:m-8 glass-morphism">
      <div className="max-w-7xl mx-auto p-12 lg:p-16 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Column 1 - Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F6241002a28724d6b8f1149d981f5257e%2F4220e3e82a1f46b3b96e9daf8656a8a6?format=webp&width=800"
                alt="Pride Eventz Logo"
                className="h-10 w-10 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="font-serif text-lg font-semibold text-foreground">Pride Eventz</span>
            </div>
            <p className="text-foreground/70 mt-4 max-w-[280px] text-[14px] leading-relaxed">
              We specialize in creating customized solutions that align with your vision and budget
            </p>
            <div className="mt-6 space-y-3 text-[14px]">
              <a href="tel:+919846596349" className="inline-flex items-center gap-2 text-foreground/70 hover:text-secondary transition-colors duration-300 group">
                <Phone className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /> Tel no.: +91 9846596349
              </a>
              <a href="mailto:info@prideeventz.in" className="inline-flex items-center gap-2 text-foreground/70 hover:text-secondary transition-colors duration-300 group">
                <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /> Email: info@prideeventz.in
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-[16px] tracking-tight">Company</h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-secondary transition-all duration-300 relative inline-block group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/services/corporate" className="text-foreground/70 hover:text-secondary transition-all duration-300 relative inline-block group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-foreground/70 hover:text-secondary transition-all duration-300 relative inline-block group">
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-foreground/70 hover:text-secondary transition-all duration-300 relative inline-block group">
                  Our Clients
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-secondary transition-all duration-300 relative inline-block group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-[16px] tracking-tight">Social Media</h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-foreground/70 hover:text-secondary transition-all duration-300 group">
                  <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-foreground/70 hover:text-secondary transition-all duration-300 group">
                  <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" /> Youtube
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-foreground/70 hover:text-secondary transition-all duration-300 group">
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" /> Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal & Press */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-[16px] tracking-tight">Legal &amp; Press</h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-secondary transition-all duration-300 relative inline-block group">
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-secondary transition-all duration-300 relative inline-block group">
                  Terms &amp; Conditions
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 my-8 lg:my-12"></div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-foreground/70">
            <a href="#" aria-label="Facebook" className="hover:text-secondary hover:scale-110 transition-all duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Youtube" className="hover:text-secondary hover:scale-110 transition-all duration-300">
              <Youtube size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-secondary hover:scale-110 transition-all duration-300">
              <Instagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-foreground/70">
            &copy; {year} Pride Eventz. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36 pointer-events-none footer-text-hover">
        <TextHoverEffect text="Pride" className="" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  )
}
