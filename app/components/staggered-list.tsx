"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StaggeredListProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  threshold?: number
}

export function StaggeredList({ children, className = "", staggerDelay = 0.1, threshold = 0.2 }: StaggeredListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}
