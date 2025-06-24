"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useAnimation, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatedButton } from "./animated-button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
}

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const controls = useAnimation()
  const constraintsRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -100) {
      nextSlide()
    } else if (info.offset.x > 100) {
      prevSlide()
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <div className="relative overflow-hidden">
      <div ref={constraintsRef} className="relative overflow-hidden h-[500px] md:h-[600px] rounded-xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0"
          >
            <div className="relative h-full w-full bg-gray-900 rounded-xl overflow-hidden">
              <Image
                src={projects[currentIndex].image || "/placeholder.svg"}
                alt={projects[currentIndex].title}
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                  {projects[currentIndex].category}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-2">{projects[currentIndex].title}</h3>
                <p className="text-sm md:text-base text-gray-200 mb-6 max-w-2xl">
                  {projects[currentIndex].description}
                </p>
                <AnimatedButton className="bg-white text-black hover:bg-gray-200 px-6">View Project</AnimatedButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Previous project"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Next project"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-black w-8" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}
