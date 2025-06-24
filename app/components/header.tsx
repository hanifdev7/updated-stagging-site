"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f0efe6]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo variant="header" size="md" showSlogan={true} />

          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-sm font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Home
            </Link>

            <DropdownMenu open={isDiscoverOpen} onOpenChange={setIsDiscoverOpen}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-sm font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
                  <span>Services</span>
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

      {/* Header Spacer */}
      <div className="h-24"></div>
    </>
  )
}
