"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Minimize2, Maximize2 } from "lucide-react"
import { ChatBot } from "./chat-bot"

export function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)

  const toggleChat = () => {
    if (isOpen && !isMinimized) {
      setIsMinimized(true)
    } else {
      setIsOpen(!isOpen)
      setIsMinimized(false)
      if (!isOpen) {
        setIsMaximized(false) // Reset maximize state when opening
      }
    }
  }

  const closeChat = () => {
    setIsOpen(false)
    setIsMinimized(false)
    setIsMaximized(false)
  }

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized)
    if (isMinimized) {
      setIsMinimized(false) // Unminimize when maximizing
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Backdrop for maximized state */}
      <AnimatePresence>
        {isOpen && isMaximized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMaximized(false)}
          />
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: 1,
              scale: isMinimized ? 0.3 : 1,
              y: isMinimized ? 300 : 0,
              x: isMinimized ? 200 : 0,
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed z-50 ${
              isMaximized
                ? "inset-4 md:inset-8 lg:inset-16"
                : isMinimized
                  ? "bottom-20 right-6 w-80 h-60 pointer-events-none"
                  : "bottom-24 right-6 w-96 h-[500px] md:w-[400px] md:h-[600px]"
            }`}
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden h-full flex flex-col">
              {/* Header */}
              <div className="bg-black text-white p-4 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">AI Assistant</h3>
                    <p className="text-xs text-gray-300">Online • Ready to help</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleMaximize}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    title={isMaximized ? "Restore" : "Maximize"}
                  >
                    {isMaximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    title="Minimize"
                  >
                    <Minimize2 className="h-4 w-4" />
                  </button>
                  <button onClick={closeChat} className="p-1 hover:bg-white/20 rounded transition-colors" title="Close">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Chat Content */}
              {!isMinimized && (
                <div className="flex-1 overflow-hidden">
                  <ChatBot compact={true} persistKey="floatingChat" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
