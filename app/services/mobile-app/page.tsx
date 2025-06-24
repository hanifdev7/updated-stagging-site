import type { Metadata } from "next"
import Link from "next/link"
import { RevealText } from "../../components/reveal-text"
import { StaggeredList } from "../../components/staggered-list"
import { StaggeredItem } from "../../components/staggered-item"
import { AnimatedButton } from "../../components/animated-button"
import { ParallaxSection } from "../../components/parallax-section"
import { Smartphone, Apple, Play, Bell, Wifi, Shield } from "lucide-react"
import { Header } from "../../components/header"

export const metadata: Metadata = {
  title: "Mobile App Development | CtrlPlusTech.com",
  description: "Native iOS and Android app development. Create engaging mobile experiences that users love.",
}

export default function MobileAppPage() {
  return (
    <div className="min-h-screen bg-[#f0efe6]">
      <Header />

      <main>
        <ParallaxSection speed={0.5}>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <RevealText>
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-gray-100 rounded-full">
                    Mobile App Development
                  </div>
                </RevealText>
                <RevealText delay={0.1}>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Native Mobile Apps
                    <span className="block text-black"> That Users Love</span>
                  </h1>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Create engaging mobile experiences with our native iOS and Android app development services. We
                    build apps that perform flawlessly and delight users.
                  </p>
                </RevealText>
                <RevealText delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <AnimatedButton className="bg-black text-white px-8">Start Your App</AnimatedButton>
                    </Link>
                    <Link href="/contact">
                      <AnimatedButton variant="outline" className="border-black text-black px-8">
                        View Portfolio
                      </AnimatedButton>
                    </Link>
                  </div>
                </RevealText>
              </div>
            </div>
          </section>
        </ParallaxSection>

        <ParallaxSection speed={0.3} direction="down">
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <RevealText>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Mobile App Features</h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Cutting-edge features for modern mobile applications
                  </p>
                </RevealText>
              </div>

              <StaggeredList className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Apple className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">iOS Development</h3>
                    <p className="text-gray-600">
                      Native iOS apps built with Swift, optimized for iPhone and iPad with App Store guidelines.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Play className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Android Development</h3>
                    <p className="text-gray-600">
                      Native Android apps using Kotlin, designed for Google Play Store and various Android devices.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Bell className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Push Notifications</h3>
                    <p className="text-gray-600">
                      Real-time push notifications to keep users engaged and informed about important updates.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Wifi className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Offline Functionality</h3>
                    <p className="text-gray-600">
                      Apps that work seamlessly offline with data synchronization when connection is restored.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Cross-Platform</h3>
                    <p className="text-gray-600">
                      React Native and Flutter solutions for apps that work perfectly on both iOS and Android.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="bg-gray-50 p-8 rounded-xl h-full">
                    <div className="bg-black text-white p-3 rounded-full inline-block mb-6">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">App Security</h3>
                    <p className="text-gray-600">
                      Advanced security measures including data encryption and secure authentication systems.
                    </p>
                  </div>
                </StaggeredItem>
              </StaggeredList>
            </div>
          </section>
        </ParallaxSection>

        <ParallaxSection speed={0.4}>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <RevealText>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Launch Your App?</h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Let's create a mobile app that stands out in the app stores and delivers exceptional user
                    experiences.
                  </p>
                </RevealText>
                <RevealText delay={0.2}>
                  <Link href="/contact">
                    <AnimatedButton className="bg-black text-white px-8">Start Development</AnimatedButton>
                  </Link>
                </RevealText>
              </div>
            </div>
          </section>
        </ParallaxSection>
      </main>
    </div>
  )
}
