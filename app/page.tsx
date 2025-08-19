"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Logo } from "./components/logo"
import { MobileMenu } from "./components/mobile-menu"
import { AnimatedButton } from "./components/animated-button"
import { ServicesShowcase } from "./components/services-showcase"
import { ServicesDetailSection } from "./components/services-detail-section"
import { MainPageChatBot } from "./components/main-page-chat-bot"
import { CookieConsent } from "./components/cookie-consent"
import { AIConsultant } from "./components/ai-consultant"

export default function Home() {
  const heroRef = useRef(null)
  const servicesRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [isMobileMenuOpen])

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#f0efe6] overflow-x-hidden">
      {/* Cookie Consent Banner */}
      <CookieConsent />

      <header className="fixed top-0 left-0 right-0 z-40 bg-[#f0efe6]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo variant="header" size="md" showSlogan={true} />

          <nav className="hidden md:flex items-center space-x-4">
            <DropdownMenu open={isDiscoverOpen} onOpenChange={setIsDiscoverOpen}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-sm font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
                  <span>Discover</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", isDiscoverOpen ? "rotate-180" : "")} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[#f0efe6] border-gray-200">
                <DropdownMenuItem>
                  <Link href="/services/web-design" className="w-full">
                    Web Design
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/mobile-app" className="w-full">
                    App Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/ecommerce" className="w-full">
                    E-commerce
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/web-app" className="w-full">
                    Web Applications
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/our-story"
              className="text-sm font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Our Story
            </Link>

            <DropdownMenu open={isSupportOpen} onOpenChange={setIsSupportOpen}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-sm font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
                  <span>Support</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", isSupportOpen ? "rotate-180" : "")} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[#f0efe6] border-gray-200">
                <DropdownMenuItem>
                  <Link href="/help-center" className="w-full">
                    Help Center
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/faq" className="w-full">
                    FAQ
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contact"
              className="text-sm font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Main Page Chat Bot */}
      <MainPageChatBot />

      {/* AI Consultant Component */}
      <AIConsultant />

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center pt-12 md:pt-16">
          <motion.div style={{ opacity, scale, y }} className="container mx-auto px-4 py-4 md:py-8">
            <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-r from-black to-gray-700">
              <div className="grid md:grid-cols-2 items-center">
                <div className="relative h-[250px] md:h-[500px]">
                  <Image
                    src="/images/hero-designers.jpeg"
                    alt="Designers collaborating on wireframes"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent mix-blend-multiply"></div>
                </div>
                <div className="p-4 md:p-12 text-white">
                  <motion.h1
                    className="text-2xl md:text-6xl font-bold leading-tight mb-4 md:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Creating digital magic, one click at a time.
                  </motion.h1>
                  <motion.p
                    className="text-sm md:text-lg mb-6 md:mb-8 text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Dive into our realm of apps, sites, and shopping bliss.
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-3 md:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <AnimatedButton
                      className="bg-[#333] hover:bg-[#444] text-white px-4 md:px-8 py-2 md:py-3 text-sm md:text-base"
                      onClick={scrollToServices}
                    >
                      Explore
                    </AnimatedButton>
                    <Link href="/student-program">
                      <AnimatedButton
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 hover:border-white hover:text-white px-4 md:px-8 py-2 md:py-3 text-sm md:text-base w-full sm:w-auto"
                      >
                        Join us
                      </AnimatedButton>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* What We Do Section */}
        <motion.section
          className="py-8 md:py-16 bg-black text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-8 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full">
                Our Expertise
              </div>
              <h2 className="text-2xl md:text-6xl font-bold">What We Do</h2>
              <p className="mt-4 text-sm md:text-lg text-gray-300 max-w-3xl">
                We specialize in creating digital experiences that transform businesses and delight users. Our services
                are tailored to meet your unique needs and goals.
              </p>
            </motion.div>

            <ServicesShowcase />
          </div>
        </motion.section>

        {/* Detailed Services Section */}
        <motion.section
          ref={servicesRef}
          className="py-8 md:py-16 bg-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-gray-100 rounded-full">
                Our Services
              </div>
              <h2 className="text-2xl md:text-5xl font-bold">How We Can Help You</h2>
              <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of services designed to help your business thrive in the digital
                landscape.
              </p>
            </motion.div>

            <ServicesDetailSection />
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-8 md:py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="text-xl md:text-5xl font-bold mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Crafting digital experiences that matter
              </motion.h2>
              <motion.p
                className="text-sm md:text-lg mb-6 md:mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                We blend creativity with technology to build solutions that drive results for our clients.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link href="/our-story">
                  <AnimatedButton className="bg-black hover:bg-gray-800 text-white px-4 md:px-8 py-2 md:py-3 text-sm md:text-base">
                    Learn more about us
                  </AnimatedButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        className="bg-black text-white py-12 md:py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
              <Logo variant="footer" size="sm" showSlogan={false} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/web-design" className="text-gray-400 hover:text-white transition-colors">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-app" className="text-gray-400 hover:text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services/ecommerce" className="text-gray-400 hover:text-white transition-colors">
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link href="/services/web-app" className="text-gray-400 hover:text-white transition-colors">
                    Web Applications
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/our-story" className="text-gray-400 hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/student-program" className="text-gray-400 hover:text-white transition-colors">
                    Student Program
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/help-center" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 CtrlPlusTech.com. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
