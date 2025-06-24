"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface RevealTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export function RevealText({ children, className = "", delay = 0, threshold = 0.5 }: RevealTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}
