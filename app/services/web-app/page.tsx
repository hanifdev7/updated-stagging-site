import type { Metadata } from "next"
import Link from "next/link"
import { RevealText } from "../../components/reveal-text"
import { StaggeredList } from "../../components/staggered-list"
import { StaggeredItem } from "../../components/staggered-item"
import { AnimatedButton } from "../../components/animated-button"
import { ParallaxSection } from "../../components/parallax-section"
import { Code, Database, Cloud, Lock, Zap, Users } from "lucide-react"
import { Header } from "../../components/header"

export const metadata: Metadata = {
  title: "Web Applications | CtrlPlusTech.com",
  description:
    "Custom web applications tailored to your business needs. Scalable solutions that streamline operations.",
}

export default function WebAppPage() {
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
                    Web Applications
                  </div>
                </RevealText>
                <RevealText delay={0.1}>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Custom Web Applications
                    <span className="block text-black"> Built for Your Business</span>
                  </h1>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Powerful, scalable web applications tailored to your specific business needs. We create solutions
                    that streamline operations and enhance productivity.
                  </p>
                </RevealText>
                <RevealText delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <AnimatedButton className="bg-black text-white px-8">Start Your Project</AnimatedButton>
                    </Link>
                    <Link href="/contact">
                      <AnimatedButton variant="outline" className="border-black text-black px-8">
                        View Case Studies
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
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Application Features</h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Enterprise-grade features for modern web applications
                  </p>
                </RevealText>
              </div>

              <StaggeredList className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Code className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Custom Development</h3>
                    <p className="text-gray-600">
                      Tailored solutions built from scratch to meet your specific business requirements.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Database className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Database Integration</h3>
                    <p className="text-gray-600">
                      Robust database solutions with real-time data processing and analytics capabilities.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">User Management</h3>
                    <p className="text-gray-600">
                      Advanced user authentication, authorization, and role-based access control systems.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Cloud className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Cloud Integration</h3>
                    <p className="text-gray-600">
                      Seamless integration with cloud services and third-party APIs for enhanced functionality.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">High Performance</h3>
                    <p className="text-gray-600">
                      Optimized for speed and scalability to handle high traffic and complex operations.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Lock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Security</h3>
                    <p className="text-gray-600">
                      Enterprise-level security with encryption, secure APIs, and compliance standards.
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
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Application?</h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Let's create a powerful web application that transforms your business operations.
                  </p>
                </RevealText>
                <RevealText delay={0.2}>
                  <Link href="/contact">
                    <AnimatedButton className="bg-black text-white px-8">Start Development</AnimatedButton>
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
