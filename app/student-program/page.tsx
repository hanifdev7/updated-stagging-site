"use client"

import { motion } from "framer-motion"
import { Header } from "../components/header"
import { StudentProgramForm } from "../components/student-program-form"
import { GraduationCap, Users, Briefcase, Award, Clock, Target } from "lucide-react"

export default function StudentProgramPage() {
  return (
    <div className="min-h-screen bg-[#f0efe6]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                Student Mentorship Program
              </div>
              <h1 className="text-3xl md:text-6xl font-bold mb-6">Launch Your Tech Career</h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Join our exclusive mentorship program designed for ambitious students ready to bridge the gap between
                academic learning and real-world tech experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Apply Now
                </motion.button>
                <motion.button
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("program-details")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Program Benefits */}
        <section id="program-details" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4">What You'll Gain</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive program is designed to accelerate your career growth and provide real-world
                experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "1-on-1 Mentorship",
                  description:
                    "Get paired with experienced professionals who will guide your career development and provide personalized advice.",
                },
                {
                  icon: Briefcase,
                  title: "Real Project Experience",
                  description:
                    "Work on actual client projects and build a portfolio that showcases your skills to future employers.",
                },
                {
                  icon: Award,
                  title: "Industry Certification",
                  description:
                    "Earn certificates and credentials that are recognized by top tech companies in the industry.",
                },
                {
                  icon: Target,
                  title: "Career Placement",
                  description:
                    "Access our network of partner companies and get assistance with job placement after graduation.",
                },
                {
                  icon: Clock,
                  title: "Flexible Schedule",
                  description:
                    "Program designed to work around your academic schedule with evening and weekend sessions.",
                },
                {
                  icon: GraduationCap,
                  title: "Skill Development",
                  description:
                    "Learn cutting-edge technologies and frameworks that are in high demand in today's job market.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl"
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

        {/* Program Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Program Requirements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Currently enrolled in a Computer Science or related program</li>
                      <li>• Minimum GPA of 3.0 (preferred but not required)</li>
                      <li>• Basic programming knowledge in at least one language</li>
                      <li>• Commitment to 10-15 hours per week</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What We Provide</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Weekly mentorship sessions</li>
                      <li>• Access to premium development tools</li>
                      <li>• Project-based learning opportunities</li>
                      <li>• Networking events and workshops</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
                  <p className="text-gray-600">
                    Fill out the application below and we'll get back to you within 3-5 business days.
                  </p>
                </div>
                <StudentProgramForm />
              </div>
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
