"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

interface StaggeredItemProps {
  children: React.ReactNode
  className?: string
}

export function StaggeredItem({ children, className = "" }: StaggeredItemProps) {
  const isMobile = useMobile()

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: isMobile ? 80 : 100,
        damping: isMobile ? 10 : 8,
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
