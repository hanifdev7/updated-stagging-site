"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useActionState } from "react"
import { submitContactForm } from "../actions/contact-form"
import { AnimatedButton } from "./animated-button"
import { Check, Loader2 } from "lucide-react"

// Declare global grecaptcha
declare global {
  interface Window {
    grecaptcha: any
  }
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  useEffect(() => {
    // Load reCAPTCHA v3 script
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        setRecaptchaLoaded(true)
        return
      }

      const script = document.createElement("script")
      script.src = "https://www.google.com/recaptcha/api.js?render=6Lc7F2srAAAAAD6JlWrqK-EN-HuZte_6FG2Z58VS"
      script.async = true
      script.defer = true
      script.onload = () => {
        window.grecaptcha.ready(() => {
          setRecaptchaLoaded(true)
        })
      }
      document.head.appendChild(script)
    }

    loadRecaptcha()
  }, [])

  const executeRecaptcha = async (action: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha || !recaptchaLoaded) {
        reject(new Error("reCAPTCHA not loaded"))
        return
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute("6Lc7F2srAAAAAD6JlWrqK-EN-HuZte_6FG2Z58VS", { action })
          .then((token: string) => {
            resolve(token)
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    })
  }

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)

    try {
      // Execute reCAPTCHA v3
      const recaptchaToken = await executeRecaptcha("contact_form")
      formData.append("recaptchaToken", recaptchaToken)

      await formAction(formData)

      if (state && state.success) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("reCAPTCHA error:", error)
      // Still submit form but with error flag
      formData.append("recaptchaError", "true")
      await formAction(formData)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  if (submitted) {
    return (
      <motion.div
        className="bg-white p-8 rounded-xl shadow-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you as soon as possible.</p>
        <AnimatedButton onClick={() => setSubmitted(false)} className="bg-black text-white">
          Send Another Message
        </AnimatedButton>
      </motion.div>
    )
  }

  return (
    <motion.form action={handleSubmit} className="space-y-6" variants={formVariants} initial="hidden" animate="visible">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="Your Full Name"
          />
          {state?.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="your.email@company.com"
          />
          {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
        </div>
      </motion.div>

      <motion.div className="space-y-2" variants={itemVariants}>
        <label htmlFor="subject" className="block text-sm font-medium">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          placeholder="Tell us about your project needs"
        />
        {state?.errors?.subject && <p className="text-red-500 text-sm mt-1">{state.errors.subject}</p>}
      </motion.div>

      <motion.div variants={itemVariants}>
        <label className="block text-sm font-medium mb-2">Services You're Interested In</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="web-design"
              name="services"
              value="Web Design & Development"
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
            <label htmlFor="web-design" className="ml-2 text-sm text-gray-700">
              Web Design & Development
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="ecommerce"
              name="services"
              value="E-commerce Solutions"
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
            <label htmlFor="ecommerce" className="ml-2 text-sm text-gray-700">
              E-commerce Solutions
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="web-app"
              name="services"
              value="Web Applications"
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
            <label htmlFor="web-app" className="ml-2 text-sm text-gray-700">
              Web Applications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="mobile-app"
              name="services"
              value="iOS & Android App Development"
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
            <label htmlFor="mobile-app" className="ml-2 text-sm text-gray-700">
              iOS & Android App Development
            </label>
          </div>
        </div>
      </motion.div>

      <motion.div className="space-y-2" variants={itemVariants}>
        <label htmlFor="message" className="block text-sm font-medium">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          placeholder="Describe your project requirements, timeline, and budget expectations..."
        ></textarea>
        {state?.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>}
      </motion.div>

      {/* reCAPTCHA v3 Badge Info */}
      <motion.div variants={itemVariants} className="text-xs text-gray-500">
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="https://policies.google.com/terms" className="text-blue-600 hover:underline">
          Terms of Service
        </a>{" "}
        apply.
      </motion.div>

      <motion.div variants={itemVariants}>
        {state && !state.success && state.message && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">{state.message}</div>
        )}

        <AnimatedButton
          type="submit"
          className="bg-black text-white w-full sm:w-auto px-8 py-3"
          disabled={isSubmitting || !recaptchaLoaded}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </AnimatedButton>
      </motion.div>
    </motion.form>
  )
}
