"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
}

export function AIConsultant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "👋 Hi! I'm your AI consultant powered by Grok. I can help you with web development strategy, project planning, technology recommendations, and more. What would you like to discuss?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai-consultant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          context: `Previous conversation: ${messages
            .slice(-3)
            .map((m) => `${m.type}: ${m.content}`)
            .join("\n")}`,
        }),
      })

      const data = await response.json()

      if (data.response) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "ai",
          content: data.response,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, aiMessage])
      }
    } catch (error) {
      console.error("Failed to send message:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          <div className="relative">
            <Sparkles className="h-6 w-6 text-white" />
            <motion.div
              className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            />
          </div>
        </Button>
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

            {/* Chat Window */}
            <motion.div
              className="relative w-full max-w-md h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Consultant</h3>
                      <p className="text-sm opacity-90">Powered by Grok</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px]">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                    >
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          message.type === "user" ? "bg-gray-200" : "bg-gradient-to-r from-purple-600 to-blue-600"
                        }`}
                      >
                        {message.type === "user" ? (
                          <User className="h-4 w-4 text-gray-600" />
                        ) : (
                          <Bot className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <Card
                        className={`p-3 ${
                          message.type === "user"
                            ? "bg-gray-100 text-gray-900"
                            : "bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </Card>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <Card className="p-3 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                        <div className="flex space-x-1">
                          <motion.div
                            className="h-2 w-2 bg-purple-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, delay: 0 }}
                          />
                          <motion.div
                            className="h-2 w-2 bg-purple-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, delay: 0.2 }}
                          />
                          <motion.div
                            className="h-2 w-2 bg-purple-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, delay: 0.4 }}
                          />
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t bg-gray-50">
                <div className="flex space-x-2">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about web development, project planning, or any tech question..."
                    className="flex-1 min-h-[44px] max-h-32 resize-none"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!input.trim() || isLoading}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by Grok AI - No restrictions, unlimited insights
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
