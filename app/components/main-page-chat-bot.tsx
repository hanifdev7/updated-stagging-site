"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Maximize2, Minimize2 } from "lucide-react"
import { ChatBot } from "./chat-bot"

export function MainPageChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setIsMaximized(false) // Reset maximize state when opening
    }
  }

  const closeChat = () => {
    setIsOpen(false)
    setIsMaximized(false)
  }

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-black text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
      >
        <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring" }}
            className={`fixed z-50 ${
              isMaximized
                ? "inset-2 sm:inset-4 md:inset-8 lg:inset-16"
                : "bottom-20 right-2 left-2 h-80 sm:bottom-20 sm:right-4 sm:left-auto sm:w-80 sm:h-96 md:right-6 md:w-96 md:h-[500px]"
            }`}
            style={{ transformOrigin: "bottom right" }}
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden h-full flex flex-col">
              {/* Header */}
              <div className="bg-black text-white p-3 md:p-4 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center min-w-0">
                  <div className="bg-white/20 p-1.5 md:p-2 rounded-full mr-2 md:mr-3 flex-shrink-0">
                    <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-xs md:text-sm truncate">AI Assistant</h3>
                    <p className="text-xs text-gray-300 truncate">Online • Ready to help</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
                  <button
                    onClick={toggleMaximize}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    title={isMaximized ? "Restore" : "Maximize"}
                  >
                    {isMaximized ? (
                      <Minimize2 className="h-3 w-3 md:h-4 md:w-4" />
                    ) : (
                      <Maximize2 className="h-3 w-3 md:h-4 md:w-4" />
                    )}
                  </button>
                  <button onClick={closeChat} className="p-1 hover:bg-white/20 rounded transition-colors" title="Close">
                    <X className="h-3 w-3 md:h-4 md:w-4" />
                  </button>
                </div>
              </div>

              {/* Chat Content */}
              <div className="flex-1 overflow-hidden">
                <ChatBot compact={true} persistKey="mainPageChat" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
