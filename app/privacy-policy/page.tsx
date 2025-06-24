import type { Metadata } from "next"
import { RevealText } from "../components/reveal-text"
import { ParallaxSection } from "../components/parallax-section"
import { Header } from "../components/header"

export const metadata: Metadata = {
  title: "Privacy Policy | CtrlPlusTech.com",
  description: "Our privacy policy outlines how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f0efe6] overflow-x-hidden">
      <Header />

      <main>
        <ParallaxSection speed={0.5}>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <RevealText>
                  <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Privacy Policy</h1>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-lg text-gray-600 mb-8 text-center">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </RevealText>

                <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
                  <div className="prose prose-lg max-w-none">
                    <RevealText delay={0.2}>
                      <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                      <p className="mb-6">
                        At CtrlPlusTech.com, we are committed to protecting your privacy and ensuring the security of
                        your personal information. This Privacy Policy explains how we collect, use, disclose, and
                        safeguard your information when you visit our website or use our services.
                      </p>
                    </RevealText>

                    <RevealText delay={0.3}>
                      <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                      <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                      <p className="mb-4">
                        We may collect personal information that you voluntarily provide to us, including:
                      </p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>Name and contact information (email address, phone number)</li>
                        <li>Company information and job title</li>
                        <li>Project requirements and specifications</li>
                        <li>Communication preferences</li>
                      </ul>
                    </RevealText>

                    <RevealText delay={0.4}>
                      <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
                      <p className="mb-4">When you visit our website, we may automatically collect:</p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>IP address and browser information</li>
                        <li>Device information and operating system</li>
                        <li>Pages visited and time spent on our website</li>
                        <li>Referring website information</li>
                      </ul>
                    </RevealText>

                    <RevealText delay={0.5}>
                      <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                      <p className="mb-4">We use the collected information for the following purposes:</p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>Providing and improving our services</li>
                        <li>Communicating with you about projects and services</li>
                        <li>Sending marketing communications (with your consent)</li>
                        <li>Analyzing website usage and improving user experience</li>
                        <li>Complying with legal obligations</li>
                      </ul>
                    </RevealText>

                    <RevealText delay={0.6}>
                      <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                      <p className="mb-4">
                        We do not sell, trade, or rent your personal information to third parties. We may share your
                        information in the following circumstances:
                      </p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>With your explicit consent</li>
                        <li>To comply with legal requirements</li>
                        <li>To protect our rights and safety</li>
                        <li>With trusted service providers who assist in our operations</li>
                      </ul>
                    </RevealText>

                    <RevealText delay={0.7}>
                      <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                      <p className="mb-6">
                        We implement appropriate technical and organizational security measures to protect your personal
                        information against unauthorized access, alteration, disclosure, or destruction. However, no
                        method of transmission over the internet or electronic storage is 100% secure.
                      </p>
                    </RevealText>

                    <RevealText delay={0.8}>
                      <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                      <p className="mb-4">We use cookies and similar tracking technologies to:</p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>Remember your preferences and settings</li>
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Provide personalized content and advertisements</li>
                        <li>Improve website functionality and user experience</li>
                      </ul>
                      <p className="mb-6">
                        You can control cookie settings through your browser preferences, but disabling cookies may
                        affect website functionality.
                      </p>
                    </RevealText>

                    <RevealText delay={0.9}>
                      <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                      <p className="mb-4">You have the right to:</p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>Access and review your personal information</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Data portability where applicable</li>
                      </ul>
                    </RevealText>

                    <RevealText delay={1.0}>
                      <h2 className="text-2xl font-bold mb-4">Student Program Privacy</h2>
                      <p className="mb-6">
                        For participants in our student mentorship program, we collect additional information including
                        educational background, project work, and progress tracking. This information is used solely for
                        program administration and career development purposes and is kept confidential.
                      </p>
                    </RevealText>

                    <RevealText delay={1.1}>
                      <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
                      <p className="mb-6">
                        Our website may contain links to third-party websites. We are not responsible for the privacy
                        practices of these external sites. We encourage you to review their privacy policies before
                        providing any personal information.
                      </p>
                    </RevealText>

                    <RevealText delay={1.2}>
                      <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                      <p className="mb-6">
                        We may update this Privacy Policy from time to time. We will notify you of any material changes
                        by posting the new policy on our website and updating the "Last updated" date.
                      </p>
                    </RevealText>

                    <RevealText delay={1.3}>
                      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                      <p className="mb-4">
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                      </p>
                      <ul className="list-none mb-6">
                        <li className="mb-2">
                          <strong>Email:</strong> support@ctrlplustech.com
                        </li>
                        <li className="mb-2">
                          <strong>Phone:</strong> +91 8220123488
                        </li>
                        <li className="mb-2">
                          <strong>Address:</strong> 123 Tech Avenue, Suite 400, San Francisco, CA 94107
                        </li>
                      </ul>
                    </RevealText>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxSection>
      </main>
    </div>
  )
}
