"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  delay?: number
  formatter?: (value: number) => string
  className?: string
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2000,
  delay = 0,
  formatter = (value: number) => Math.round(value).toString(),
  className = "",
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView || hasAnimated) return

    let startTime: number
    let animationFrame: number

    // Wait for the delay before starting the animation
    const delayTimeout = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const currentCount = from + (to - from) * easeOutQuart(progress)

        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        } else {
          setCount(to)
          setHasAnimated(true)
        }
      }

      animationFrame = requestAnimationFrame(step)
    }, delay)

    return () => {
      clearTimeout(delayTimeout)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [from, to, duration, delay, isInView, hasAnimated])

  // Easing function for smoother animation
  function easeOutQuart(x: number): number {
    return 1 - Math.pow(1 - x, 4)
  }

  return (
    <span ref={nodeRef} className={`tabular-nums ${className}`}>
      {prefix}
      {formatter(count)}
      {suffix}
    </span>
  )
}
