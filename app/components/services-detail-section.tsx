"use client"

import { Laptop, ShoppingCart, Code, Smartphone } from "lucide-react"
import { ServiceDetail } from "./service-detail"

export function ServicesDetailSection() {
  const services = [
    {
      id: 1,
      title: "Professional Web Design & Development",
      description:
        "We design and develop stunning, responsive websites that captivate your audience and drive conversions. Our websites are built with the latest technologies and best practices.",
      features: [
        "Responsive design for all devices",
        "SEO optimization for better visibility",
        "Fast loading speeds for better user experience",
        "Custom animations and interactions",
      ],
      image: "/images/service-website.jpg",
      icon: <Laptop className="h-6 w-6" />,
      href: "/services/web-design",
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description:
        "Transform your business with our custom e-commerce solutions. We build secure, scalable online stores that drive sales and provide exceptional shopping experiences.",
      features: [
        "Secure payment gateway integration",
        "Inventory management systems",
        "Customer account management",
        "Order tracking and fulfillment",
      ],
      image: "/images/ecommerce-new.jpg",
      icon: <ShoppingCart className="h-6 w-6" />,
      reverse: true,
      href: "/services/ecommerce",
    },
    {
      id: 3,
      title: "Web Applications",
      description:
        "Custom web applications tailored to your specific business needs. We create powerful, scalable solutions that streamline operations and enhance productivity.",
      features: [
        "Custom dashboards and analytics",
        "User authentication and authorization",
        "Real-time data processing",
        "Integration with third-party services",
      ],
      image: "/images/service-webapp-new.jpg",
      icon: <Code className="h-6 w-6" />,
      href: "/services/web-app",
    },
    {
      id: 4,
      title: "iOS & Android App Development",
      description:
        "Native mobile applications for iOS and Android that provide seamless experiences across all devices. We focus on intuitive interfaces and performance.",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions",
        "Push notifications and real-time updates",
        "Offline functionality",
      ],
      image: "/images/mobile-image.jpg",
      icon: <Smartphone className="h-6 w-6" />,
      reverse: true,
      href: "/services/mobile-app",
    },
  ]

  return (
    <div className="py-8">
      {services.map((service) => (
        <ServiceDetail
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          features={service.features}
          image={service.image}
          icon={service.icon}
          reverse={service.reverse}
          href={service.href}
        />
      ))}
    </div>
  )
}
