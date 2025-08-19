"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { Logo } from "./logo"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#f0efe6] z-50 overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Logo variant="header" size="sm" showSlogan={false} />
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-black/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4">
                <div className="space-y-2">
                  <Link
                    href="/"
                    className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-black hover:text-white transition-colors"
                    onClick={onClose}
                  >
                    Home
                  </Link>

                  {/* Services Dropdown */}
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg hover:bg-black hover:text-white transition-colors"
                    >
                      <span>Services</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 mt-2 space-y-1">
                            <Link
                              href="/services/web-design"
                              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={onClose}
                            >
                              Web Design
                            </Link>
                            <Link
                              href="/services/mobile-app"
                              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={onClose}
                            >
                              App Development
                            </Link>
                            <Link
                              href="/services/ecommerce"
                              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={onClose}
                            >
                              E-commerce
                            </Link>
                            <Link
                              href="/services/web-app"
                              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={onClose}
                            >
                              Web Applications
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/our-story"
                    className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-black hover:text-white transition-colors"
                    onClick={onClose}
                  >
                    Our Story
                  </Link>

                  {/* Support Dropdown */}
                  <div>
                    <button
                      onClick={() => setIsSupportOpen(!isSupportOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg hover:bg-black hover:text-white transition-colors"
                    >
                      <span>Support</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isSupportOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isSupportOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 mt-2 space-y-1">
                            <Link
                              href="/help-center"
                              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={onClose}
                            >
                              Help Center
                            </Link>
                            <Link
                              href="/faq"
                              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={onClose}
                            >
                              FAQ
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-black hover:text-white transition-colors"
                    onClick={onClose}
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="/student-program"
                    className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-black hover:text-white transition-colors"
                    onClick={onClose}
                  >
                    Student Program
                  </Link>

                  <Link
                    href="/careers"
                    className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-black hover:text-white transition-colors"
                    onClick={onClose}
                  >
                    Careers
                  </Link>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-xs text-gray-500">© 2025 CtrlPlusTech.com</p>
                  <p className="text-xs text-gray-500 mt-1">All rights reserved</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
