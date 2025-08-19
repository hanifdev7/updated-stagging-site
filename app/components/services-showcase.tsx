"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Smartphone, ShoppingCart, Globe, Code } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Beautiful, responsive websites that convert visitors into customers",
    image: "/images/service-website.jpg",
    icon: Globe,
    href: "/services/web-design",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description: "Powerful online stores that drive sales and grow your business",
    image: "/images/ecommerce-new.jpg",
    icon: ShoppingCart,
    href: "/services/ecommerce",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Native iOS and Android apps that users love to use",
    image: "/images/service-mobile-new.jpg",
    icon: Smartphone,
    href: "/services/mobile-app",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "Web Applications",
    description: "Custom web applications tailored to your business needs",
    image: "/images/service-webapp-new.jpg",
    icon: Code,
    href: "/services/web-app",
    color: "from-purple-500 to-pink-600",
  },
]

export function ServicesShowcase() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {services.map((service, index) => {
        const IconComponent = service.icon
        return (
          <motion.div
            key={service.id}
            className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed line-clamp-2">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200 transition-colors group/link"
              >
                Learn More
                <ArrowRight
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                    hoveredService === service.id ? "translate-x-1" : ""
                  }`}
                />
              </Link>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
