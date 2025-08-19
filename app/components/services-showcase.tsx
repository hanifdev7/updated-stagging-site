"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Laptop, ShoppingCart, Code, Smartphone } from "lucide-react"
import Link from "next/link"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  delay: number
  href: string
}

export function ServicesShowcase() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const services: Service[] = [
    {
      id: 1,
      title: "Professional Web Design & Development",
      description:
        "We design and develop stunning, responsive websites that captivate your audience and drive conversions. From personal portfolios to corporate sites, we deliver pixel-perfect experiences.",
      icon: <Laptop className="h-10 w-10" />,
      delay: 0.1,
      href: "/services/web-design",
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description:
        "Transform your business with our custom e-commerce solutions. We build secure, scalable online stores with seamless checkout processes, inventory management, and payment gateway integration.",
      icon: <ShoppingCart className="h-10 w-10" />,
      delay: 0.3,
      href: "/services/ecommerce",
    },
    {
      id: 3,
      title: "Web Applications",
      description:
        "Custom web applications tailored to your specific business needs. We create powerful, scalable solutions that streamline operations, enhance productivity, and deliver exceptional user experiences.",
      icon: <Code className="h-10 w-10" />,
      delay: 0.5,
      href: "/services/web-app",
    },
    {
      id: 4,
      title: "iOS & Android App Development",
      description:
        "Native mobile applications for iOS and Android that provide seamless experiences across all devices. We focus on intuitive interfaces, performance, and functionality that keeps users engaged.",
      icon: <Smartphone className="h-10 w-10" />,
      delay: 0.7,
      href: "/services/mobile-app",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
      },
    }),
  }

  return (
    <div ref={containerRef} className="py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            custom={service.delay}
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            <div className="bg-white/10 rounded-full p-4 inline-block mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <Link
              href={service.href}
              className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white/5 transition-all duration-300 inline-block"
            >
              Learn more
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
