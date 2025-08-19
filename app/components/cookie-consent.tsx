"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Cookie, Shield, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

// Add at the top of the component
let isInitialized = false

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Prevent multiple instances
    if (isInitialized) return
    isInitialized = true

    // Check if user has already made a choice
    const hasConsented = localStorage.getItem("cookie-consent")
    const hasRejected = localStorage.getItem("cookie-rejected")

    // Only show if no previous choice was made
    if (!hasConsented && !hasRejected) {
      // Add a small delay to ensure page is loaded
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)

      return () => {
        clearTimeout(timer)
        isInitialized = false
      }
    }

    return () => {
      isInitialized = false
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true")
    localStorage.removeItem("cookie-rejected") // Remove any previous rejection
    setIsVisible(false)

    // Initialize Google Analytics or other tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      })
    }
  }

  const handleReject = () => {
    localStorage.setItem("cookie-rejected", "true")
    localStorage.removeItem("cookie-consent") // Remove any previous consent
    setIsVisible(false)

    // Disable tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      })
    }
  }

  const handleCustomize = () => {
    setShowDetails(!showDetails)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed top-4 left-4 right-4 z-[9999] max-w-md mx-auto"
        data-cookie-banner="true"
      >
        <div className="bg-white border border-gray-200 rounded-xl shadow-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <Cookie className="h-6 w-6 text-amber-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Cookie Preferences</h3>
            </div>
            <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic.
            Choose your preferences below.
          </p>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 p-3 bg-gray-50 rounded-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium">Essential Cookies</span>
                    </div>
                    <span className="text-xs text-gray-500">Always Active</span>
                  </div>
                  <p className="text-xs text-gray-600 ml-6">Required for basic website functionality and security.</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Settings className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium">Analytics Cookies</span>
                    </div>
                    <span className="text-xs text-gray-500">Optional</span>
                  </div>
                  <p className="text-xs text-gray-600 ml-6">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={handleReject} variant="outline" size="sm" className="flex-1 text-xs">
              Reject All
            </Button>
            <Button onClick={handleCustomize} variant="outline" size="sm" className="flex-1 text-xs">
              {showDetails ? "Hide Details" : "Customize"}
            </Button>
            <Button onClick={handleAccept} size="sm" className="flex-1 bg-black hover:bg-gray-800 text-white text-xs">
              Accept All
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-3 text-center">
            By continuing to use our site, you agree to our{" "}
            <a href="/privacy-policy" className="text-black hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
