import type { Metadata } from "next"
import Link from "next/link"
import { RevealText } from "../../components/reveal-text"
import { StaggeredList } from "../../components/staggered-list"
import { StaggeredItem } from "../../components/staggered-item"
import { AnimatedButton } from "../../components/animated-button"
import { ParallaxSection } from "../../components/parallax-section"
import { Laptop, Code, Palette, Zap, Search, Smartphone } from "lucide-react"
import { Header } from "../../components/header"

export const metadata: Metadata = {
  title: "Web Design & Development | CtrlPlusTech.com",
  description:
    "Professional web design and development services. We create stunning, responsive websites that drive results.",
}

export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-[#f0efe6]">
      <Header />
      <main>
        {/* Hero Section */}
        <ParallaxSection speed={0.5}>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <RevealText>
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-gray-100 rounded-full">
                    Web Design & Development
                  </div>
                </RevealText>
                <RevealText delay={0.1}>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Beautiful Websites That
                    <span className="block text-black"> Drive Results</span>
                  </h1>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    We design and develop stunning, responsive websites that captivate your audience and drive
                    conversions. From concept to launch, we deliver pixel-perfect experiences.
                  </p>
                </RevealText>
                <RevealText delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <AnimatedButton className="bg-black text-white px-8">Get Started</AnimatedButton>
                    </Link>
                    <Link href="/contact">
                      <AnimatedButton variant="outline" className="border-black text-black px-8">
                        View Portfolio
                      </AnimatedButton>
                    </Link>
                  </div>
                </RevealText>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Features Section */}
        <ParallaxSection speed={0.3} direction="down">
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <RevealText>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Offer</h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Comprehensive web design and development services tailored to your business needs
                  </p>
                </RevealText>
              </div>

              <StaggeredList className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Palette className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Custom Design</h3>
                    <p className="text-gray-600">
                      Unique, brand-focused designs that reflect your business identity and engage your target audience.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Responsive Design</h3>
                    <p className="text-gray-600">
                      Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Code className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Clean Code</h3>
                    <p className="text-gray-600">
                      Well-structured, maintainable code following industry best practices and standards.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Search className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">SEO Optimized</h3>
                    <p className="text-gray-600">
                      Built-in SEO optimization to help your website rank higher in search engine results.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Fast Loading</h3>
                    <p className="text-gray-600">
                      Optimized for speed with fast loading times to improve user experience and SEO rankings.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Laptop className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">CMS Integration</h3>
                    <p className="text-gray-600">
                      Easy-to-use content management systems that allow you to update your website effortlessly.
                    </p>
                  </div>
                </StaggeredItem>
              </StaggeredList>
            </div>
          </section>
        </ParallaxSection>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <RevealText>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
              </RevealText>
              <RevealText delay={0.1}>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A streamlined approach to deliver exceptional web solutions
                </p>
              </RevealText>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your business goals and requirements" },
                { step: "02", title: "Design", description: "Creating wireframes and visual designs" },
                { step: "03", title: "Development", description: "Building your website with clean, efficient code" },
                { step: "04", title: "Launch", description: "Testing, optimization, and going live" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ParallaxSection speed={0.4}>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <RevealText>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Let's create a stunning website that drives results for your business. Contact us today for a free
                    consultation.
                  </p>
                </RevealText>
                <RevealText delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <AnimatedButton className="bg-black text-white px-8">Start Your Project</AnimatedButton>
                    </Link>
                    <Link href="/contact">
                      <AnimatedButton variant="outline" className="border-black text-black px-8">
                        Contact Us
                      </AnimatedButton>
                    </Link>
                  </div>
                </RevealText>
              </div>
            </div>
          </section>
        </ParallaxSection>
      </main>
    </div>
  )
}
