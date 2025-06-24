"use client"

import type React from "react"

import type { ReactNode } from "react"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function SmoothScrollLink({ href, children, className = "" }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const targetId = href.replace(/.*#/, "")
    const element = document.getElementById(targetId)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for header
        behavior: "smooth",
      })
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
