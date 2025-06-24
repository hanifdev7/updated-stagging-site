"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Calendar, AlertCircle } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  options?: string[]
}

interface ChatBotProps {
  compact?: boolean
  persistKey?: string
  initialMessages?: Message[]
}

export function ChatBot({ compact = false, persistKey, initialMessages }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>(() => {
    // Try to load from localStorage if persistKey is provided
    if (persistKey && typeof window !== "undefined") {
      const saved = localStorage.getItem(`chat_${persistKey}`)
      if (saved) {
        try {
          const parsedMessages = JSON.parse(saved)
          return parsedMessages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          }))
        } catch (e) {
          console.error("Failed to parse saved messages:", e)
        }
      }
    }

    // Use initial messages if provided, otherwise use default
    return (
      initialMessages || [
        {
          id: "1",
          type: "bot",
          content:
            "Hi! I'm your AI assistant powered by Grok. I can help you with questions about our services or schedule an appointment. How can I help you today?",
          timestamp: new Date(),
          options: ["Tell me about your services", "Schedule an appointment", "Student program details"],
        },
      ]
    )
  })
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [conversationCount, setConversationCount] = useState(() => {
    // Load conversation count from localStorage if persistKey is provided
    if (persistKey && typeof window !== "undefined") {
      const saved = localStorage.getItem(`chat_count_${persistKey}`)
      return saved ? Number.parseInt(saved, 10) : 0
    }
    return 0
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (persistKey && typeof window !== "undefined") {
      localStorage.setItem(`chat_${persistKey}`, JSON.stringify(messages))
    }
  }, [messages, persistKey])

  // Save conversation count to localStorage whenever it changes
  useEffect(() => {
    if (persistKey && typeof window !== "undefined") {
      localStorage.setItem(`chat_count_${persistKey}`, conversationCount.toString())
    }
  }, [conversationCount, persistKey])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addMessage = (content: string, type: "user" | "bot", options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      options,
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const callGrokAPI = async (userMessage: string): Promise<{ content: string; options?: string[] }> => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          context:
            "You are an AI assistant for a web development agency called Ctrl+Tech. We offer web design & development, e-commerce solutions, web applications, mobile app development (iOS & Android), and a student mentorship program. Provide helpful, professional responses about our services. Keep responses concise and offer relevant follow-up options.",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response from Grok")
      }

      const data = await response.json()
      return {
        content:
          data.message ||
          "I apologize, but I'm having trouble processing your request right now. Please try again or contact us directly.",
        options: data.options,
      }
    } catch (error) {
      console.error("Grok API error:", error)
      return getFallbackResponse(userMessage)
    }
  }

  const getFallbackResponse = (userMessage: string): { content: string; options?: string[] } => {
    const message = userMessage.toLowerCase()

    if (message.includes("service") || message.includes("what do you do")) {
      return {
        content:
          "We offer comprehensive digital solutions including:\n\n• Web Design & Development\n• E-commerce Solutions\n• Web Applications\n• Mobile App Development (iOS & Android)\n• Student Mentorship Program\n\nWhich service interests you most?",
        options: ["Web Development", "E-commerce", "Mobile Apps", "Student Program"],
      }
    }

    if (message.includes("appointment") || message.includes("schedule") || message.includes("meeting")) {
      return {
        content:
          "I'd be happy to help you schedule an appointment! You can:\n\n📅 Book online through our calendar\n📞 Call us at +91 8220123488\n✉️ Email us at support@ctrlplustech.com\n\nWhat type of appointment would you like to schedule?",
        options: ["Project Consultation", "Student Program Info", "Technical Support", "General Inquiry"],
      }
    }

    if (message.includes("student") || message.includes("program") || message.includes("mentorship")) {
      return {
        content:
          "Our Student Mentorship Program bridges the gap between college and career:\n\n✅ Real project experience\n✅ Professional mentorship\n✅ Paid opportunities\n✅ Career guidance\n\nAre you interested in applying or learning more?",
        options: ["Apply Now", "Program Details", "Success Stories", "Requirements"],
      }
    }

    if (message.includes("web development") || message.includes("website")) {
      return {
        content:
          "Our web development services include:\n\n🎨 Custom Design\n📱 Responsive Development\n⚡ Fast Loading\n🔍 SEO Optimized\n🛡️ Secure & Reliable\n\nWould you like to see examples or get a quote?",
        options: ["View Portfolio", "Get Quote", "Schedule Demo", "Technical Details"],
      }
    }

    if (message.includes("mobile") || message.includes("app")) {
      return {
        content:
          "We develop native mobile apps for:\n\n📱 iOS (Swift)\n🤖 Android (Kotlin)\n⚡ Cross-platform (React Native/Flutter)\n\nFeatures include offline functionality, push notifications, and app store optimization. What type of app are you planning?",
        options: ["iOS App", "Android App", "Cross-Platform", "App Features"],
      }
    }

    if (message.includes("ecommerce") || message.includes("online store") || message.includes("shop")) {
      return {
        content:
          "Our e-commerce solutions include:\n\n🛒 Custom online stores\n💳 Payment gateway integration\n📦 Inventory management\n📊 Analytics & reporting\n🔒 Security & compliance\n\nWhat type of products will you be selling?",
        options: ["Physical Products", "Digital Products", "Services", "Marketplace"],
      }
    }

    // Default response
    return {
      content:
        "I'd be happy to help! You can ask me about:\n\n• Our services\n• Scheduling appointments\n• Student mentorship program\n• Technical questions\n\nOr feel free to ask anything else!",
      options: ["Our Services", "Schedule Meeting", "Student Program", "Contact Info"],
    }
  }

  const getLimitReachedMessage = (): { content: string; options?: string[] } => {
    return {
      content:
        "🤖 This AI bot has reached its conversation limit of 5 exchanges.\n\nFor further assistance, please contact us directly:\n\n📧 Email: support@ctrlplustech.com\n📞 Phone: +91 8220123488\n\nOur team will be happy to help you with any questions or requirements you may have!",
      options: ["Contact Us", "Schedule Call", "Send Email"],
    }
  }

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    // Check if conversation limit is reached
    if (conversationCount >= 5) {
      addMessage(content, "user")
      setIsTyping(true)

      setTimeout(() => {
        const limitResponse = getLimitReachedMessage()
        addMessage(limitResponse.content, "bot", limitResponse.options)
        setIsTyping(false)
      }, 1000)
      return
    }

    // Add user message
    addMessage(content, "user")
    setInputValue("")
    setIsTyping(true)

    // Increment conversation count
    setConversationCount((prev) => prev + 1)

    // Simulate typing delay and get response
    setTimeout(async () => {
      let response

      // Check if this will be the 5th exchange
      if (conversationCount + 1 >= 5) {
        response = await callGrokAPI(content)
        // Add a note about reaching the limit after this response
        response.content +=
          "\n\n⚠️ Note: This is your final exchange with the AI bot. For further assistance, please contact us directly."
      } else {
        response = await callGrokAPI(content)
      }

      addMessage(response.content, "bot", response.options)
      setIsTyping(false)
    }, 1000)
  }

  const handleOptionClick = (option: string) => {
    // Handle special limit-reached options
    if (conversationCount >= 5) {
      if (option === "Contact Us" || option === "Send Email") {
        window.location.href = "mailto:support@ctrlplustech.com"
        return
      }
      if (option === "Schedule Call") {
        window.location.href = "tel:+918220123488"
        return
      }
    }

    handleSendMessage(option)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  const isLimitReached = conversationCount >= 5

  return (
    <div className={`${compact ? "h-full" : "max-w-4xl mx-auto"}`}>
      <div className={`bg-white ${compact ? "h-full" : "rounded-xl shadow-lg"} overflow-hidden flex flex-col`}>
        {/* Chat Header - only show if not compact */}
        {!compact && (
          <div className="bg-black text-white p-4 flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <Bot className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">AI Assistant (Powered by Grok)</h3>
              <p className="text-sm text-gray-300">
                Online • {isLimitReached ? "Limit Reached" : `${5 - conversationCount} exchanges remaining`}
              </p>
            </div>
            {isLimitReached && (
              <div className="flex items-center text-yellow-300">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span className="text-xs">Limit Reached</span>
              </div>
            )}
          </div>
        )}

        {/* Messages */}
        <div className={`${compact ? "flex-1" : "h-96"} overflow-y-auto p-4 space-y-4`}>
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start max-w-xs lg:max-w-md ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`flex-shrink-0 ${message.type === "user" ? "ml-2" : "mr-2"}`}>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        message.type === "user" ? "bg-black text-white" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {message.type === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                    </div>
                  </div>
                  <div
                    className={`rounded-lg p-3 ${
                      message.type === "user" ? "bg-black text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-xs whitespace-pre-line">{message.content}</p>
                    {message.options && (
                      <div className="mt-2 space-y-1">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left text-xs px-2 py-1 bg-white/20 hover:bg-white/30 rounded-md transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-2">
                  <Bot className="h-3 w-3" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t p-3">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={isLimitReached ? "Conversation limit reached..." : "Type your message..."}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={isTyping || isLimitReached}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping || isLimitReached}
              className="bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-3 w-3" />
            </button>
          </form>

          {!compact && !isLimitReached && (
            <div className="mt-2 flex flex-wrap gap-1">
              <button
                onClick={() => handleOptionClick("Schedule an appointment")}
                className="flex items-center text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <Calendar className="h-2 w-2 mr-1" />
                Schedule
              </button>
              <button
                onClick={() => handleOptionClick("Student program information")}
                className="flex items-center text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                🎓 Student Program
              </button>
            </div>
          )}

          {isLimitReached && (
            <div className="mt-2 text-center">
              <p className="text-xs text-gray-500 mb-2">
                Conversation limit reached. Contact us for further assistance:
              </p>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => (window.location.href = "mailto:support@ctrlplustech.com")}
                  className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  📧 Email Us
                </button>
                <button
                  onClick={() => (window.location.href = "tel:+918220123488")}
                  className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  📞 Call Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
