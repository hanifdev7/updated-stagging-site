"use client"

import { motion } from "framer-motion"
import { Header } from "../components/header"
import { ContactForm } from "../components/contact-form"
import { ContactInfo } from "../components/contact-info"
import { Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f0efe6]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-gray-100 rounded-full">
                Get In Touch
              </div>
              <h1 className="text-3xl md:text-6xl font-bold mb-6">Let's Start Your Project</h1>
              <p className="text-lg md:text-xl text-gray-600">
                Ready to transform your digital presence? We'd love to hear about your project and discuss how we can
                help bring your vision to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                  <ContactInfo />
                </div>

                <div className="bg-black text-white p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
                  <p className="text-gray-300 mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    Mon - Fri, 9:00 AM - 6:00 PM EST
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 CtrlPlusTech.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
