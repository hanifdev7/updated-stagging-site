import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "light" | "dark" | "light-icon" | "dark-icon" | "footer" | "header"
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
  showSlogan?: boolean
}

export function Logo({
  variant = "light",
  className = "",
  size = "md",
  showText = true,
  showSlogan = false,
}: LogoProps) {
  const getSize = () => {
    switch (size) {
      case "sm":
        return { width: variant.includes("icon") ? 24 : 120, height: variant.includes("icon") ? 24 : 40 }
      case "md":
        return { width: variant.includes("icon") ? 32 : 160, height: variant.includes("icon") ? 32 : 50 }
      case "lg":
        return { width: variant.includes("icon") ? 48 : 200, height: variant.includes("icon") ? 48 : 60 }
    }
  }

  const { width, height } = getSize()

  const logoSrc = {
    light: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-cZuFtoG78BAfkVJDibl9XNc56MBIGb.jpeg", // Black background logo
    dark: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-PscpEvyV0lGbVbMTQLwvlhkPA9utru.jpeg", // White background logo
    "light-icon": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-xFFcVXmdgv6rMmFJb2HzbUgHTrC8K1.jpeg", // Icon on black background
    "dark-icon": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-F6AMQVdyxuxvfsCWojm6v8eOp2Cki6.jpeg", // Icon on white background
    footer:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-removebg-preview-O9iqo61YkHdY47v2CUJ3PK0YrAQNzs.png", // Footer logo (white with gray text)
    header:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-removebg-preview-MwyAeaven3Kd739l07KAIo1TcAMfPy.png", // Header icon-only logo
  }

  return (
    <Link href="/" className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center">
        <Image
          src={logoSrc[variant] || "/placeholder.svg"}
          alt="CtrlPlusTech.com Logo"
          width={variant === "header" ? 40 : width}
          height={variant === "header" ? 40 : height}
          className="object-contain"
          priority
        />
        {variant === "header" && showText ? (
          <span className="ml-2 font-medium text-black">CtrlPlusTech.com</span>
        ) : (
          variant.includes("icon") && <span className="sr-only">CtrlPlusTech.com</span>
        )}
      </div>
    </Link>
  )
}
