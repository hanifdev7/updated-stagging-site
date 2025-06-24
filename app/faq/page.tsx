import type { Metadata } from "next"
import { RevealText } from "../components/reveal-text"
import { StaggeredList } from "../components/staggered-list"
import { StaggeredItem } from "../components/staggered-item"
import { ParallaxSection } from "../components/parallax-section"
import { AnimatedButton } from "../components/animated-button"
import { FAQAccordion } from "../components/faq-accordion"
import { Header } from "../components/header"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ | CtrlPlusTech.com",
  description: "Frequently asked questions about our services, processes, and student mentorship program.",
}

export default function FAQPage() {
  const faqData = [
    {
      category: "General Services",
      questions: [
        {
          question: "What services do you offer?",
          answer:
            "We offer comprehensive digital solutions including web design & development, e-commerce solutions, web applications, and mobile app development for both iOS and Android platforms.",
        },
        {
          question: "How long does a typical project take?",
          answer:
            "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications or e-commerce platforms can take 8-16 weeks. We provide detailed timelines during our initial consultation.",
        },
        {
          question: "Do you provide ongoing support after project completion?",
          answer:
            "Yes, we offer various support packages including maintenance, updates, security monitoring, and technical support. We believe in long-term partnerships with our clients.",
        },
        {
          question: "What is your pricing structure?",
          answer:
            "Our pricing is project-based and depends on the scope, complexity, and specific requirements. We provide detailed quotes after understanding your needs during our free consultation.",
        },
      ],
    },
    {
      category: "Web Development",
      questions: [
        {
          question: "What technologies do you use for web development?",
          answer:
            "We use modern technologies including React, Next.js, Node.js, TypeScript, and various databases. We choose the best technology stack based on your project requirements and scalability needs.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices including smartphones, tablets, and desktops.",
        },
        {
          question: "Do you provide SEO optimization?",
          answer:
            "Yes, we implement SEO best practices in all our web projects including proper meta tags, structured data, fast loading speeds, and mobile optimization to help improve your search engine rankings.",
        },
        {
          question: "Can you redesign my existing website?",
          answer:
            "Yes, we offer website redesign services. We can modernize your existing site while preserving your brand identity and improving user experience and functionality.",
        },
      ],
    },
    {
      category: "E-commerce",
      questions: [
        {
          question: "Which e-commerce platforms do you work with?",
          answer:
            "We work with various platforms including Shopify, WooCommerce, and custom-built solutions. We recommend the best platform based on your business needs, budget, and scalability requirements.",
        },
        {
          question: "Do you integrate payment gateways?",
          answer:
            "Yes, we integrate secure payment gateways including PayPal, Stripe, Square, and other popular payment processors. We ensure PCI compliance and secure transaction processing.",
        },
        {
          question: "Can you help with inventory management?",
          answer:
            "We implement comprehensive inventory management systems that track stock levels, automate reorder alerts, and integrate with your fulfillment processes.",
        },
        {
          question: "Do you provide e-commerce analytics?",
          answer:
            "Yes, we set up detailed analytics including sales tracking, customer behavior analysis, conversion rate monitoring, and custom reporting dashboards to help you make data-driven decisions.",
        },
      ],
    },
    {
      category: "Mobile Apps",
      questions: [
        {
          question: "Do you develop both iOS and Android apps?",
          answer:
            "Yes, we develop native apps for both iOS and Android platforms, as well as cross-platform solutions using React Native and Flutter when appropriate.",
        },
        {
          question: "How much does mobile app development cost?",
          answer:
            "Mobile app costs vary significantly based on features, complexity, and platform requirements. Simple apps start around $10,000, while complex apps can range from $50,000+. We provide detailed estimates after understanding your requirements.",
        },
        {
          question: "Do you help with app store submissions?",
          answer:
            "Yes, we handle the entire app store submission process for both Apple App Store and Google Play Store, including preparing all required assets and managing the review process.",
        },
        {
          question: "Can you add features to my existing app?",
          answer:
            "Yes, we can enhance existing mobile applications by adding new features, improving performance, updating designs, and ensuring compatibility with the latest OS versions.",
        },
      ],
    },
    {
      category: "Student Program",
      questions: [
        {
          question: "What is your student mentorship program?",
          answer:
            "Our program bridges the gap between college education and enterprise-level experience. We provide hands-on training, real project experience, professional mentorship, and career guidance to help students transition into successful tech careers.",
        },
        {
          question: "Who can apply for the student program?",
          answer:
            "We welcome recent graduates and final-year students from computer science, engineering, and related fields. We look for candidates with basic programming knowledge and a strong desire to learn enterprise-level development.",
        },
        {
          question: "Is the student program paid?",
          answer:
            "Yes, our program includes stipends for participants. As students progress and contribute to real projects, they receive compensation based on their contributions and skill development.",
        },
        {
          question: "What kind of projects do students work on?",
          answer:
            "Students work on real client projects under supervision, including web applications, mobile apps, e-commerce platforms, and enterprise solutions. This provides authentic experience with actual business requirements and deadlines.",
        },
        {
          question: "Do you provide job placement assistance?",
          answer:
            "Yes, we provide comprehensive job placement assistance. We offer career counseling, resume building, interview preparation, and connect students with our network of partner companies for job opportunities.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#f0efe6] overflow-x-hidden">
      <Header />

      <main>
        <ParallaxSection speed={0.5}>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <RevealText>
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-gray-100 rounded-full">
                    Help & Support
                  </div>
                </RevealText>
                <RevealText delay={0.1}>
                  <h1 className="text-3xl md:text-6xl font-bold mb-6">
                    Frequently Asked
                    <span className="block text-black"> Questions</span>
                  </h1>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="text-base md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Find answers to common questions about our services, processes, and student mentorship program.
                    Can't find what you're looking for? Contact us directly.
                  </p>
                </RevealText>
              </div>
            </div>
          </section>
        </ParallaxSection>

        <ParallaxSection speed={0.3} direction="down">
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <StaggeredList className="space-y-12">
                  {faqData.map((category, categoryIndex) => (
                    <StaggeredItem key={categoryIndex}>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{category.category}</h2>
                        <FAQAccordion questions={category.questions} />
                      </div>
                    </StaggeredItem>
                  ))}
                </StaggeredList>
              </div>
            </div>
          </section>
        </ParallaxSection>

        <ParallaxSection speed={0.4}>
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <RevealText>
                  <h2 className="text-2xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Can't find the answer you're looking for? Our team is here to help. Get in touch with us for
                    personalized assistance.
                  </p>
                </RevealText>
                <RevealText delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <AnimatedButton className="bg-black text-white px-8">Contact Support</AnimatedButton>
                    </Link>
                    <Link href="/help-center">
                      <AnimatedButton variant="outline" className="border-black text-black px-8">
                        Schedule a Call
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
