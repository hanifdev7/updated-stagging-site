"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "link"
  size?: "default" | "sm" | "lg"
  onClick?: () => void
  href?: string
  type?: "button" | "submit" | "reset"
}

export function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  href,
  type = "button",
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getBaseClasses = () => {
    switch (variant) {
      case "default":
        return "bg-black text-white hover:bg-black/90 transition-all duration-300"
      case "outline":
        return "border-2 border-white bg-transparent hover:bg-white/5 transition-all duration-300"
      case "link":
        return "bg-transparent p-0 hover:underline transition-all duration-300"
      default:
        return "bg-black text-white hover:bg-black/90 transition-all duration-300"
    }
  }

  return (
    <motion.div
      className="relative inline-block"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
      )}
      <Button
        className={cn(
          getBaseClasses(),
          "relative rounded-full overflow-hidden text-white",
          isHovered ? "shadow-lg translate-y-[-2px]" : "shadow-md",
          className,
        )}
        variant={variant === "link" ? "link" : variant === "outline" ? "outline" : "default"}
        size={size}
        onClick={onClick}
        asChild={!!href}
        type={type}
      >
        {href ? <a href={href}>{children}</a> : children}
      </Button>
    </motion.div>
  )
}
