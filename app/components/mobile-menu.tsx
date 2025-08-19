"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown, ChevronRight } from "lucide-react"
import { Logo } from "./logo"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#f0efe6] z-50 shadow-2xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
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

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-4">
                <motion.div
                  className="space-y-2 px-4"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                    },
                  }}
                >
                  {/* Services */}
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={() => toggleSection("services")}
                      className="flex items-center justify-between w-full py-3 px-4 text-left font-medium rounded-lg hover:bg-black/5 transition-colors"
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSection === "services" ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedSection === "services" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-2">
                            <Link
                              href="/services/web-design"
                              onClick={onClose}
                              className="flex items-center py-2 px-4 text-sm text-gray-600 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
                            >
                              <ChevronRight className="h-3 w-3 mr-2" />
                              Web Design
                            </Link>
                            <Link
                              href="/services/mobile-app"
                              onClick={onClose}
                              className="flex items-center py-2 px-4 text-sm text-gray-600 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
                            >
                              <ChevronRight className="h-3 w-3 mr-2" />
                              App Development
                            </Link>
                            <Link
                              href="/services/ecommerce"
                              onClick={onClose}
                              className="flex items-center py-2 px-4 text-sm text-gray-600 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
                            >
                              <ChevronRight className="h-3 w-3 mr-2" />
                              E-commerce
                            </Link>
                            <Link
                              href="/services/web-app"
                              onClick={onClose}
                              className="flex items-center py-2 px-4 text-sm text-gray-600 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
                            >
                              <ChevronRight className="h-3 w-3 mr-2" />
                              Web Applications
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Our Story */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/our-story"
                      onClick={onClose}
                      className="block py-3 px-4 font-medium rounded-lg hover:bg-black/5 transition-colors"
                    >
                      Our Story
                    </Link>
                  </motion.div>

                  {/* Support */}
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={() => toggleSection("support")}
                      className="flex items-center justify-between w-full py-3 px-4 text-left font-medium rounded-lg hover:bg-black/5 transition-colors"
                    >
                      <span>Support</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSection === "support" ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedSection === "support" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-2">
                            <Link
                              href="/help-center"
                              onClick={onClose}
                              className="flex items-center py-2 px-4 text-sm text-gray-600 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
                            >
                              <ChevronRight className="h-3 w-3 mr-2" />
                              Help Center
                            </Link>
                            <Link
                              href="/faq"
                              onClick={onClose}
                              className="flex items-center py-2 px-4 text-sm text-gray-600 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
                            >
                              <ChevronRight className="h-3 w-3 mr-2" />
                              FAQ
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Contact Us */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/contact"
                      onClick={onClose}
                      className="block py-3 px-4 font-medium rounded-lg hover:bg-black/5 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </motion.div>

                  {/* Student Program */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/student-program"
                      onClick={onClose}
                      className="block py-3 px-4 font-medium rounded-lg hover:bg-black/5 transition-colors"
                    >
                      Student Program
                    </Link>
                  </motion.div>

                  {/* Careers */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/careers"
                      onClick={onClose}
                      className="block py-3 px-4 font-medium rounded-lg hover:bg-black/5 transition-colors"
                    >
                      Careers
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200">
                <motion.div
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: 0.5 }}
                  className="text-center text-sm text-gray-500"
                >
                  © 2025 CtrlPlusTech.com
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
