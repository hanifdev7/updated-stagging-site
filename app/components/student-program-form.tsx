"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useActionState } from "react"
import { submitStudentProgramForm } from "../actions/student-program-form"
import { AnimatedButton } from "./animated-button"
import { Check, Loader2, Upload } from "lucide-react"

// Declare global grecaptcha
declare global {
  interface Window {
    grecaptcha: any
  }
}

export function StudentProgramForm() {
  const [state, formAction] = useActionState(submitStudentProgramForm, null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  useEffect(() => {
    // Load reCAPTCHA v3 script
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        setRecaptchaLoaded(true)
        return
      }

      const script = document.createElement("script")
      script.src = "https://www.google.com/recaptcha/api.js?render=6Lc7F2srAAAAAD6JlWrqK-EN-HuZte_6FG2Z58VS"
      script.async = true
      script.defer = true
      script.onload = () => {
        window.grecaptcha.ready(() => {
          setRecaptchaLoaded(true)
        })
      }
      document.head.appendChild(script)
    }

    loadRecaptcha()
  }, [])

  const executeRecaptcha = async (action: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha || !recaptchaLoaded) {
        reject(new Error("reCAPTCHA not loaded"))
        return
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute("6Lc7F2srAAAAAD6JlWrqK-EN-HuZte_6FG2Z58VS", { action })
          .then((token: string) => {
            resolve(token)
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    })
  }

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)

    try {
      // Execute reCAPTCHA v3
      const recaptchaToken = await executeRecaptcha("student_application")
      formData.append("recaptchaToken", recaptchaToken)

      await formAction(formData)

      if (state && state.success) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("reCAPTCHA error:", error)
      // Still submit form but with error flag
      formData.append("recaptchaError", "true")
      await formAction(formData)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  if (submitted) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in our Student Mentorship Program. We'll review your application and get back to
          you within 3-5 business days.
        </p>
        <AnimatedButton onClick={() => setSubmitted(false)} className="bg-black text-white">
          Submit Another Application
        </AnimatedButton>
      </motion.div>
    )
  }

  return (
    <motion.form action={handleSubmit} className="space-y-6" variants={formVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-6">Application Form</h2>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-medium">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="Your First Name"
          />
          {state?.errors?.firstName && <p className="text-red-500 text-sm mt-1">{state.errors.firstName}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="Your Last Name"
          />
          {state?.errors?.lastName && <p className="text-red-500 text-sm mt-1">{state.errors.lastName}</p>}
        </div>
      </motion.div>

      <motion.div className="space-y-2" variants={itemVariants}>
        <label htmlFor="email" className="block text-sm font-medium">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          placeholder="your.student@university.edu"
        />
        {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
        <div className="space-y-2">
          <label htmlFor="university" className="block text-sm font-medium">
            University/College <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="university"
            name="university"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="e.g., Stanford University, MIT, Harvard"
          />
          {state?.errors?.university && <p className="text-red-500 text-sm mt-1">{state.errors.university}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="graduationYear" className="block text-sm font-medium">
            Graduation Year <span className="text-red-500">*</span>
          </label>
          <select
            id="graduationYear"
            name="graduationYear"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          >
            <option value="">Select Year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
          </select>
          {state?.errors?.graduationYear && <p className="text-red-500 text-sm mt-1">{state.errors.graduationYear}</p>}
        </div>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
        <div className="space-y-2">
          <label htmlFor="major" className="block text-sm font-medium">
            Major/Field of Study <span className="text-red-500">*</span>
          </label>
          <select
            id="major"
            name="major"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          >
            <option value="">Select Major</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Web Development">Web Development</option>
            <option value="Other">Other</option>
          </select>
          {state?.errors?.major && <p className="text-red-500 text-sm mt-1">{state.errors.major}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="gpa" className="block text-sm font-medium">
            GPA (Optional)
          </label>
          <input
            type="number"
            id="gpa"
            name="gpa"
            step="0.01"
            min="0"
            max="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="e.g., 3.75 (optional)"
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <label className="block text-sm font-medium mb-2">
          Programming Languages/Technologies <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "JavaScript",
            "Python",
            "Java",
            "C++",
            "React",
            "Node.js",
            "HTML/CSS",
            "SQL",
            "Git",
            "MongoDB",
            "PHP",
            "Other",
          ].map((tech) => (
            <div key={tech} className="flex items-center">
              <input
                type="checkbox"
                id={tech}
                name="technologies"
                value={tech}
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label htmlFor={tech} className="ml-2 text-sm text-gray-700">
                {tech}
              </label>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="space-y-2" variants={itemVariants}>
        <label htmlFor="experience" className="block text-sm font-medium">
          Previous Experience/Projects <span className="text-red-500">*</span>
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={4}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          placeholder="Share your coding projects, internships, hackathons, or any relevant technical experience. Include GitHub links if available..."
        ></textarea>
        {state?.errors?.experience && <p className="text-red-500 text-sm mt-1">{state.errors.experience}</p>}
      </motion.div>

      <motion.div className="space-y-2" variants={itemVariants}>
        <label htmlFor="motivation" className="block text-sm font-medium">
          Why do you want to join our program? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="motivation"
          name="motivation"
          rows={4}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          placeholder="Explain your career aspirations in tech, what you hope to learn, and how this mentorship program aligns with your goals..."
        ></textarea>
        {state?.errors?.motivation && <p className="text-red-500 text-sm mt-1">{state.errors.motivation}</p>}
      </motion.div>

      <motion.div className="space-y-2" variants={itemVariants}>
        <label htmlFor="resume" className="block text-sm font-medium">
          Resume/CV <span className="text-red-500">*</span>
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required className="hidden" />
          <label
            htmlFor="resume"
            className="cursor-pointer text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Click to upload your resume (PDF, DOC, DOCX)
          </label>
        </div>
        {state?.errors?.resume && <p className="text-red-500 text-sm mt-1">{state.errors.resume}</p>}
      </motion.div>

      {/* reCAPTCHA v3 Badge Info */}
      <motion.div variants={itemVariants} className="text-xs text-gray-500">
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="https://policies.google.com/terms" className="text-blue-600 hover:underline">
          Terms of Service
        </a>{" "}
        apply.
      </motion.div>

      <motion.div variants={itemVariants}>
        {state && !state.success && state.message && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">{state.message}</div>
        )}

        <AnimatedButton
          type="submit"
          className="bg-black text-white w-full sm:w-auto px-8 py-3"
          disabled={isSubmitting || !recaptchaLoaded}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting Application...
            </>
          ) : (
            "Submit Application"
          )}
        </AnimatedButton>
      </motion.div>
    </motion.form>
  )
}
