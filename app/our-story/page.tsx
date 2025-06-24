import type { Metadata } from "next"
import Image from "next/image"
import { RevealText } from "../components/reveal-text"
import { StaggeredList } from "../components/staggered-list"
import { StaggeredItem } from "../components/staggered-item"
import { AnimatedButton } from "../components/animated-button"
import { ParallaxSection } from "../components/parallax-section"
import { Header } from "../components/header"
import { Users, BookOpen, Briefcase, Award, Target, Heart } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Story | CtrlPlusTech.com",
  description:
    "Empowering college graduates with enterprise-level experience through hands-on projects and professional mentorship.",
}

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-[#f0efe6] overflow-x-hidden">
      <Header />

      <main>
        {/* Hero Section */}
        <ParallaxSection speed={0.5}>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <RevealText>
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-gray-100 rounded-full">
                    Our Mission
                  </div>
                </RevealText>
                <RevealText delay={0.1}>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Bridging the Gap Between
                    <span className="block text-black"> College and Career</span>
                  </h1>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    We believe in empowering fresh graduates with real-world enterprise experience. Our story is about
                    transforming potential into expertise through hands-on learning and professional mentorship.
                  </p>
                </RevealText>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Story Section */}
        <ParallaxSection speed={0.3} direction="down">
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <RevealText>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We Started</h2>
                  </RevealText>
                  <RevealText delay={0.1}>
                    <p className="text-gray-600 mb-6">
                      We noticed a significant gap between what students learn in college and what the enterprise world
                      demands. Fresh graduates often struggle to adapt to real-world business environments, complex
                      systems, and professional workflows.
                    </p>
                  </RevealText>
                  <RevealText delay={0.2}>
                    <p className="text-gray-600 mb-8">
                      That's when we decided to create a bridge. CtrlPlusTech.com isn't just a development company –
                      we're educators, mentors, and career catalysts for the next generation of tech professionals.
                    </p>
                  </RevealText>
                  <RevealText delay={0.3}>
                    <Link href="/student-program">
                      <AnimatedButton className="bg-black text-white">Join Our Program</AnimatedButton>
                    </Link>
                  </RevealText>
                </div>
                <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/hero-designers.jpeg"
                    alt="Students learning with mentors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* What We Offer Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <RevealText>
                <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-white rounded-full">
                  Our Approach
                </div>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Guide Students</h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive program combines theoretical knowledge with practical enterprise experience
                </p>
              </RevealText>
            </div>

            <StaggeredList className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StaggeredItem>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Enterprise Learning</h3>
                  <p className="text-gray-600">
                    Learn how real enterprises operate, from project management methodologies to enterprise architecture
                    and business processes.
                  </p>
                </div>
              </StaggeredItem>

              <StaggeredItem>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Professional Mentorship</h3>
                  <p className="text-gray-600">
                    Work directly with our experienced senior professionals who guide you through complex projects and
                    career decisions.
                  </p>
                </div>
              </StaggeredItem>

              <StaggeredItem>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Live Projects</h3>
                  <p className="text-gray-600">
                    Get hands-on experience with real client projects, learning to handle deadlines, requirements, and
                    professional communication.
                  </p>
                </div>
              </StaggeredItem>

              <StaggeredItem>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Skill Development</h3>
                  <p className="text-gray-600">
                    Develop both technical and soft skills essential for enterprise success, including communication,
                    teamwork, and problem-solving.
                  </p>
                </div>
              </StaggeredItem>

              <StaggeredItem>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Career Guidance</h3>
                  <p className="text-gray-600">
                    Receive personalized career advice, resume building, interview preparation, and job placement
                    assistance.
                  </p>
                </div>
              </StaggeredItem>

              <StaggeredItem>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Our relationship doesn't end with the program. We provide ongoing support and networking
                    opportunities throughout your career.
                  </p>
                </div>
              </StaggeredItem>
            </StaggeredList>
          </div>
        </section>

        {/* Success Stories Section */}
        <ParallaxSection speed={0.4}>
          <section className="py-16 md:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <RevealText>
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full">
                    Success Stories
                  </div>
                </RevealText>
                <RevealText delay={0.1}>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Student Success</h2>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    See how our students have transformed their careers through our program
                  </p>
                </RevealText>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="text-4xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-300">Students Mentored</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300">Partner Companies</div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <RevealText>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
              </RevealText>
              <RevealText delay={0.1}>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join our program and transform your potential into professional expertise with hands-on experience and
                  expert mentorship.
                </p>
              </RevealText>
              <RevealText delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/student-program">
                    <AnimatedButton className="bg-black text-white px-8">Apply Now</AnimatedButton>
                  </Link>
                  <Link href="/contact">
                    <AnimatedButton variant="outline" className="border-black text-black px-8">
                      Learn More
                    </AnimatedButton>
                  </Link>
                </div>
              </RevealText>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
