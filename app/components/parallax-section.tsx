"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down"
}

export function ParallaxSection({ children, speed = 0.5, className = "", direction = "up" }: ParallaxSectionProps) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const factor = direction === "up" ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * factor * speed])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
