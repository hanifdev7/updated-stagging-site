"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { AnimatedButton } from "./animated-button"

interface ServiceDetailProps {
  id: number
  title: string
  description: string
  features: string[]
  image: string
  icon: React.ReactNode
  reverse?: boolean
  href?: string
}

export function ServiceDetail({
  id,
  title,
  description,
  features,
  image,
  icon,
  reverse = false,
  href,
}: ServiceDetailProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 py-16 border-t border-gray-100`}
    >
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="bg-gray-100 rounded-full p-4 inline-block mb-6">{icon}</div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-start"
            >
              <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {href ? (
          <Link href={href}>
            <AnimatedButton className="bg-black text-white">Learn more</AnimatedButton>
          </Link>
        ) : (
          <Link href="/contact">
            <AnimatedButton className="bg-black text-white">Learn more</AnimatedButton>
          </Link>
        )}
      </motion.div>

      <motion.div
        className="flex-1 relative h-[300px] md:h-auto rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, x: reverse ? -50 : 50 }}
        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: reverse ? -50 : 50 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </motion.div>
    </motion.div>
  )
}
