import type { Metadata } from "next"
import Link from "next/link"
import { RevealText } from "../../components/reveal-text"
import { StaggeredList } from "../../components/staggered-list"
import { StaggeredItem } from "../../components/staggered-item"
import { AnimatedButton } from "../../components/animated-button"
import { ParallaxSection } from "../../components/parallax-section"
import { ShoppingCart, CreditCard, Shield, BarChart, Users, Package } from "lucide-react"
import { Header } from "../../components/header"

export const metadata: Metadata = {
  title: "E-commerce Solutions | CtrlPlusTech.com",
  description:
    "Custom e-commerce solutions that drive sales. Secure, scalable online stores with seamless checkout processes.",
}

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-[#f0efe6]">
      <Header />

      <main>
        <ParallaxSection speed={0.5}>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <RevealText>
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-gray-100 rounded-full">
                    E-commerce Solutions
                  </div>
                </RevealText>
                <RevealText delay={0.1}>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Powerful E-commerce
                    <span className="block text-black"> That Drives Sales</span>
                  </h1>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Transform your business with our custom e-commerce solutions. We build secure, scalable online
                    stores that provide exceptional shopping experiences and drive conversions.
                  </p>
                </RevealText>
                <RevealText delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <AnimatedButton className="bg-black text-white px-8">Start Selling Online</AnimatedButton>
                    </Link>
                    <Link href="/contact">
                      <AnimatedButton variant="outline" className="border-black text-black px-8">
                        View Examples
                      </AnimatedButton>
                    </Link>
                  </div>
                </RevealText>
              </div>
            </div>
          </section>
        </ParallaxSection>

        <ParallaxSection speed={0.3} direction="down">
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <RevealText>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">E-commerce Features</h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Everything you need to run a successful online store
                  </p>
                </RevealText>
              </div>

              <StaggeredList className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <ShoppingCart className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Shopping Cart</h3>
                    <p className="text-gray-600">
                      Intuitive shopping cart with save for later, wishlist, and quick checkout options.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Payment Gateway</h3>
                    <p className="text-gray-600">
                      Secure payment processing with support for multiple payment methods and currencies.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Package className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Inventory Management</h3>
                    <p className="text-gray-600">
                      Real-time inventory tracking with automated stock alerts and product management.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Customer Accounts</h3>
                    <p className="text-gray-600">
                      User registration, login, order history, and personalized shopping experiences.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <BarChart className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Analytics & Reports</h3>
                    <p className="text-gray-600">
                      Comprehensive analytics dashboard with sales reports and customer insights.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Security</h3>
                    <p className="text-gray-600">
                      SSL encryption, PCI compliance, and advanced security measures to protect customer data.
                    </p>
                  </div>
                </StaggeredItem>
              </StaggeredList>
            </div>
          </section>
        </ParallaxSection>

        <ParallaxSection speed={0.4}>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <RevealText>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Launch Your Store?</h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Let's build an e-commerce solution that grows with your business. Get started today.
                  </p>
                </RevealText>
                <RevealText delay={0.2}>
                  <Link href="/contact">
                    <AnimatedButton className="bg-black text-white px-8">Get Started Now</AnimatedButton>
                  </Link>
                </RevealText>
              </div>
            </div>
          </section>
        </ParallaxSection>
      </main>
    </div>
  )
}
