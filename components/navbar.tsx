"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"
import { HoverButton } from "@/components/ui/hover-button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { name: "All Services", href: "/services" },
    { name: "Corporate Events", href: "/services/corporate" },
    { name: "Promotions", href: "/services/promotions" },
    { name: "Exhibitions", href: "/services/exhibitions" },
    { name: "Private Parties", href: "/services/private-parties" },
  ]

  const isActive = (href: string) => pathname === href
  const isServicesActive = pathname?.startsWith("/services")

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-400 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-orange-100/50 shadow-lg"
          : "bg-white/85 backdrop-blur-xl border-orange-100/40 shadow-md"
      }`}
      style={{
        background: isScrolled
          ? "rgba(255, 255, 255, 0.92)"
          : "rgba(255, 255, 255, 0.88)",
        backdropFilter: "blur(25px) saturate(180%)",
        WebkitBackdropFilter: "blur(25px) saturate(180%)",
        borderColor: "rgba(192, 88, 0, 0.15)"
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-primary hover:opacity-85 transition-opacity duration-300 font-serif">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F6241002a28724d6b8f1149d981f5257e%2F4220e3e82a1f46b3b96e9daf8656a8a6?format=webp&width=800"
              alt="Pride Eventz Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="hidden sm:inline text-[17px] font-serif font-bold tracking-tight text-primary">Pride Eventz</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center" aria-label="Primary">
            <ul className="flex items-center gap-8 text-[14px] font-semibold text-primary/70">
              <li>
                <Link
                  href="/"
                  prefetch={false}
                  className={`transition-all duration-300 relative pb-2 ${
                    isActive("/")
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full"
                      : "hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  prefetch={false}
                  className={`transition-all duration-300 relative pb-2 ${
                    isActive("/about")
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full"
                      : "text-primary/70 hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  About
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative group">
                <div
                  className={`flex items-center gap-1.5 transition-all duration-300 relative pb-2 ${
                    isServicesActive
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full"
                      : "text-primary/70 hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <div className="absolute left-0 mt-4 w-56 rounded-2xl glass-morphism opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 shadow-2xl">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      prefetch={false}
                      className="block px-5 py-2.5 text-primary/70 hover:text-primary hover:bg-secondary/10 transition-all duration-200 text-sm font-semibold"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <Link
                  href="/gallery"
                  prefetch={false}
                  className={`transition-all duration-300 relative pb-2 ${
                    isActive("/gallery")
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full"
                      : "text-primary/70 hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  prefetch={false}
                  className={`transition-all duration-300 relative pb-2 ${
                    isActive("/clients")
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full"
                      : "text-primary/70 hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  prefetch={false}
                  className={`transition-all duration-300 relative pb-2 ${
                    isActive("/contact")
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full"
                      : "text-primary/70 hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-secondary after:to-accent after:rounded-full hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:inline-block">
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-6 py-2.5 rounded-full font-bold text-sm text-white transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1"
            >
              Let&apos;s work together
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary transition-opacity duration-300 hover:opacity-70"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-foreground/10 bg-white/70 backdrop-blur-lg">
            <Link href="/" prefetch={false} className="block px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-secondary/10 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/about" prefetch={false} className="block px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-secondary/10 transition-colors text-sm font-medium">
              About
            </Link>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-secondary/10 flex items-center justify-between font-medium text-sm transition-colors"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {isServicesOpen && (
              <div className="pl-4 bg-secondary/5">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2.5 text-sm text-foreground/60 hover:text-foreground hover:bg-secondary/10 transition-colors font-medium"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/gallery" prefetch={false} className="block px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-secondary/10 transition-colors text-sm font-medium">
              Portfolio
            </Link>
            <Link href="/clients" prefetch={false} className="block px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-secondary/10 transition-colors text-sm font-medium">
              Our Clients
            </Link>
            <Link href="/contact" prefetch={false} className="block px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-secondary/10 transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
