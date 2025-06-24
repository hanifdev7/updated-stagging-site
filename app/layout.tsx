import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "./components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CtrlPlusTech - Premium Web Development & Digital Solutions",
  description:
    "Transform your digital presence with CtrlPlusTech. We specialize in web development, e-commerce solutions, mobile apps, and student mentorship programs. Creating digital magic since day one.",
  keywords:
    "web development, e-commerce, mobile apps, digital solutions, web design, student program, mentorship, CtrlPlusTech",
  authors: [{ name: "CtrlPlusTech Team" }],
  creator: "CtrlPlusTech",
  publisher: "CtrlPlusTech",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ctrlplustech.com",
    title: "CtrlPlusTech - Premium Web Development & Digital Solutions",
    description:
      "Transform your digital presence with CtrlPlusTech. We specialize in web development, e-commerce solutions, mobile apps, and student mentorship programs.",
    siteName: "CtrlPlusTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "CtrlPlusTech - Premium Web Development & Digital Solutions",
    description:
      "Transform your digital presence with CtrlPlusTech. We specialize in web development, e-commerce solutions, mobile apps, and student mentorship programs.",
    creator: "@ctrlplustech",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
