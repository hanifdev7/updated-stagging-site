"use client"
import { RevealText } from "../components/reveal-text"
import { StaggeredList } from "../components/staggered-list"
import { StaggeredItem } from "../components/staggered-item"
import { ParallaxSection } from "../components/parallax-section"
import { AnimatedButton } from "../components/animated-button"
import { ChatBot } from "../components/chat-bot"
import { Header } from "../components/header"
import { MessageCircle, Book, Phone, Mail, Calendar, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  options?: string[]
}

export default function HelpCenterPage() {
  const [initialMessages, setInitialMessages] = useState<Message[] | undefined>(undefined)
  const [showContinuedChat, setShowContinuedChat] = useState(false)
  const [chatSource, setChatSource] = useState<string>("")

  useEffect(() => {
    // Check if user came from main page chat or floating chat
    const chatState = localStorage.getItem("chatState")
    if (chatState) {
      try {
        const parsed = JSON.parse(chatState)
        let savedMessages = null
        let source = ""

        if (parsed.fromMainPage) {
          // Load the existing conversation from main page
          savedMessages = localStorage.getItem("chat_mainPageChat")
          source = "main page"
        } else if (parsed.fromFloatingChat) {
          // Load the existing conversation from floating chat
          savedMessages = localStorage.getItem("chat_floatingChat")
          source = "floating chat"
        }

        if (savedMessages) {
          const messages = JSON.parse(savedMessages).map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          }))
          setInitialMessages(messages)
          setShowContinuedChat(true)
          setChatSource(source)
        }

        // Clear the navigation state
        localStorage.removeItem("chatState")
      } catch (e) {
        console.error("Failed to parse chat state:", e)
      }
    }
  }, [])

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
                    How Can We
                    <span className="block text-black"> Help You?</span>
                  </h1>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="text-base md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Get instant help with our AI assistant, browse our knowledge base, or schedule a personal
                    consultation with our team.
                  </p>
                </RevealText>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* AI Chat Bot Section */}
        <ParallaxSection speed={0.3} direction="down">
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <RevealText>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                      AI Assistant
                      {showContinuedChat && (
                        <span className="ml-2 text-sm font-normal text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          Conversation Continued from {chatSource}
                        </span>
                      )}
                    </h2>
                  </RevealText>
                  <RevealText delay={0.1}>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                      {showContinuedChat
                        ? `Your conversation from the ${chatSource} has been continued here. Feel free to ask more questions!`
                        : "Get instant answers to your questions or schedule an appointment with our AI-powered assistant."}
                    </p>
                  </RevealText>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                  <ChatBot persistKey="helpCenterChat" initialMessages={initialMessages} />
                </div>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Support Options */}
        <ParallaxSection speed={0.4}>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <RevealText>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">Other Ways to Get Help</h2>
                  </RevealText>
                  <RevealText delay={0.1}>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                      Choose the support option that works best for you
                    </p>
                  </RevealText>
                </div>

                <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <StaggeredItem>
                    <div className="bg-white p-8 rounded-xl shadow-lg h-full text-center">
                      <div className="bg-black text-white p-4 rounded-full inline-block mb-6">
                        <Book className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Knowledge Base</h3>
                      <p className="text-gray-600 mb-6">
                        Browse our comprehensive FAQ section for quick answers to common questions.
                      </p>
                      <Link href="/faq">
                        <AnimatedButton variant="outline" className="border-black text-black">
                          Browse FAQ
                        </AnimatedButton>
                      </Link>
                    </div>
                  </StaggeredItem>

                  <StaggeredItem>
                    <div className="bg-white p-8 rounded-xl shadow-lg h-full text-center">
                      <div className="bg-black text-white p-4 rounded-full inline-block mb-6">
                        <Mail className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Email Support</h3>
                      <p className="text-gray-600 mb-6">Send us an email and we'll get back to you within 24 hours.</p>
                      <a href="mailto:support@ctrlplustech.com">
                        <AnimatedButton variant="outline" className="border-black text-black">
                          Send Email
                        </AnimatedButton>
                      </a>
                    </div>
                  </StaggeredItem>

                  <StaggeredItem>
                    <div className="bg-white p-8 rounded-xl shadow-lg h-full text-center">
                      <div className="bg-black text-white p-4 rounded-full inline-block mb-6">
                        <Phone className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Phone Support</h3>
                      <p className="text-gray-600 mb-6">
                        Call us directly for immediate assistance with urgent matters.
                      </p>
                      <a href="tel:+918220123488">
                        <AnimatedButton variant="outline" className="border-black text-black">
                          Call Now
                        </AnimatedButton>
                      </a>
                    </div>
                  </StaggeredItem>

                  <StaggeredItem>
                    <div className="bg-white p-8 rounded-xl shadow-lg h-full text-center">
                      <div className="bg-black text-white p-4 rounded-full inline-block mb-6">
                        <Calendar className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Schedule Consultation</h3>
                      <p className="text-gray-600 mb-6">
                        Book a free consultation to discuss your project requirements in detail.
                      </p>
                      <Link href="/contact">
                        <AnimatedButton variant="outline" className="border-black text-black">
                          Book Meeting
                        </AnimatedButton>
                      </Link>
                    </div>
                  </StaggeredItem>

                  <StaggeredItem>
                    <div className="bg-white p-8 rounded-xl shadow-lg h-full text-center">
                      <div className="bg-black text-white p-4 rounded-full inline-block mb-6">
                        <Users className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Student Support</h3>
                      <p className="text-gray-600 mb-6">
                        Special support for our student mentorship program participants.
                      </p>
                      <Link href="/student-program">
                        <AnimatedButton variant="outline" className="border-black text-black">
                          Learn More
                        </AnimatedButton>
                      </Link>
                    </div>
                  </StaggeredItem>

                  <StaggeredItem>
                    <div className="bg-white p-8 rounded-xl shadow-lg h-full text-center">
                      <div className="bg-black text-white p-4 rounded-full inline-block mb-6">
                        <MessageCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Live Chat</h3>
                      <p className="text-gray-600 mb-6">
                        Chat with our support team in real-time during business hours.
                      </p>
                      <AnimatedButton variant="outline" className="border-black text-black">
                        Start Chat
                      </AnimatedButton>
                    </div>
                  </StaggeredItem>
                </StaggeredList>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Business Hours */}
        <ParallaxSection speed={0.2}>
          <section className="py-16 md:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <RevealText>
                  <h2 className="text-2xl md:text-4xl font-bold mb-8">Support Hours</h2>
                </RevealText>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">General Support</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM (PST)
                      <br />
                      Saturday: 10:00 AM - 4:00 PM (PST)
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
                    <p className="text-gray-300">
                      24/7 for critical issues
                      <br />
                      Response time: Within 2 hours
                      <br />
                      Available for premium clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxSection>
      </main>
    </div>
  )
}
