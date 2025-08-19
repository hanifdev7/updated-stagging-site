"use client"

import { motion } from "framer-motion"
import { Mail, Clock } from "lucide-react" // Removed MapPin icon import

export function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

  return (
    <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants} className="flex items-start space-x-4">
        <div className="bg-black text-white p-3 rounded-full">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Email Address</h3>
          <p className="text-gray-600">
            <a href="mailto:support@ctrlplustech.com" className="hover:text-black">
              support@ctrlplustech.com
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-start space-x-4">
        <div className="bg-black text-white p-3 rounded-full">
          <Clock className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
          <p className="text-gray-600">
            Monday - Friday: 9:00 AM - 6:00 PM
            <br />
            Saturday - Sunday: Closed
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
