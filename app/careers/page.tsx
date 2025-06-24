"use client"

import { motion } from "framer-motion"
import { Header } from "../components/header"
import { AnimatedButton } from "../components/animated-button"
import { Briefcase, Users, MapPin, Clock } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#f0efe6]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-gray-100 rounded-full">
                Join Our Team
              </div>
              <h1 className="text-3xl md:text-6xl font-bold mb-6">Build Your Career With Us</h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                We're always looking for talented individuals who share our passion for creating exceptional digital
                experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Current Status */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Currently Hiring</h2>
                <p className="text-gray-600 mb-6">
                  We're not actively hiring at the moment, but we're always interested in connecting with talented
                  professionals. Feel free to reach out and introduce yourself!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AnimatedButton
                    className="bg-black text-white px-6 py-3"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Get In Touch
                  </AnimatedButton>
                  <AnimatedButton
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3"
                    onClick={() => (window.location.href = "/student-program")}
                  >
                    Student Program
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Why Choose CtrlPlusTech?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                When opportunities arise, here's what makes us a great place to work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Collaborative Culture",
                  description: "Work with a passionate team that values creativity, innovation, and mutual support.",
                },
                {
                  icon: MapPin,
                  title: "Flexible Work",
                  description: "Enjoy the flexibility of remote work with opportunities for in-person collaboration.",
                },
                {
                  icon: Clock,
                  title: "Work-Life Balance",
                  description:
                    "We believe in maintaining a healthy balance between professional growth and personal well-being.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <benefit.icon className="w-12 h-12 text-black mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stay Connected */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Stay Connected</h2>
              <p className="text-gray-300 mb-8">
                Follow us on social media and check back regularly for future opportunities. We'll post new positions as
                they become available.
              </p>
              <AnimatedButton
                className="bg-white text-black hover:bg-gray-100 px-6 py-3"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </AnimatedButton>
            </motion.div>
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
