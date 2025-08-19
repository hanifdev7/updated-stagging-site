"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { AnimatedButton } from "./animated-button"

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Create stunning, responsive websites that captivate your audience and drive conversions.",
    image: "/images/service-website.jpg",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"],
    href: "/services/web-design",
    reverse: false,
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description: "Build powerful online stores with secure payment processing and inventory management.",
    image: "/images/ecommerce-new.jpg",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Mobile Optimized"],
    href: "/services/ecommerce",
    reverse: true,
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Develop native iOS and Android applications that provide exceptional user experiences.",
    image: "/images/service-mobile-new.jpg",
    features: ["Native Development", "Cross-Platform", "App Store Optimization", "Push Notifications"],
    href: "/services/mobile-app",
    reverse: false,
  },
  {
    id: 4,
    title: "Web Applications",
    description: "Custom web applications tailored to streamline your business operations and workflows.",
    image: "/images/service-webapp-new.jpg",
    features: ["Custom Development", "Database Integration", "User Management", "API Integration"],
    href: "/services/web-app",
    reverse: true,
  },
]

export function ServicesDetailSection() {
  return (
    <div className="space-y-16 md:space-y-24">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
            service.reverse ? "lg:grid-flow-col-dense" : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${service.reverse ? "lg:col-start-2" : ""}`}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className={`space-y-6 ${service.reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">{service.title}</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">{service.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={service.href} className="flex-1 sm:flex-initial">
                <AnimatedButton className="bg-black text-white hover:bg-gray-800 px-6 py-3 w-full sm:w-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
              <Link href="/contact" className="flex-1 sm:flex-initial">
                <AnimatedButton
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white px-6 py-3 w-full sm:w-auto"
                >
                  Get Quote
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
