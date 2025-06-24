"use server"

interface ContactFormState {
  success: boolean
  message: string
  errors?: {
    name?: string
    email?: string
    subject?: string
    message?: string
    recaptcha?: string
  }
}

async function verifyRecaptchaV3(token: string, expectedAction: string): Promise<{ success: boolean; score: number }> {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=6Lc7F2srAAAAAMaKnSvURsTL7vhgQ3dsQE7QAuTV&response=${token}`,
    })

    const data = await response.json()

    // Check if the action matches and score is above threshold
    const isValidAction = data.action === expectedAction
    const isValidScore = data.score >= 0.5 // Adjust threshold as needed (0.0 to 1.0)

    return {
      success: data.success && isValidAction && isValidScore,
      score: data.score || 0,
    }
  } catch (error) {
    console.error("reCAPTCHA v3 verification error:", error)
    return { success: false, score: 0 }
  }
}

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string
  const recaptchaToken = formData.get("recaptchaToken") as string
  const recaptchaError = formData.get("recaptchaError") as string

  const errors: ContactFormState["errors"] = {}

  // Validate required fields
  if (!name?.trim()) {
    errors.name = "Name is required"
  }

  if (!email?.trim()) {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address"
  }

  if (!subject?.trim()) {
    errors.subject = "Subject is required"
  }

  if (!message?.trim()) {
    errors.message = "Message is required"
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors,
    }
  }

  // Verify reCAPTCHA v3 if token is present
  if (recaptchaToken && !recaptchaError) {
    const recaptchaResult = await verifyRecaptchaV3(recaptchaToken, "contact_form")

    if (!recaptchaResult.success) {
      console.log(`reCAPTCHA failed with score: ${recaptchaResult.score}`)
      return {
        success: false,
        message: "Security verification failed. Please try again.",
        errors: { recaptcha: "reCAPTCHA verification failed" },
      }
    }

    console.log(`reCAPTCHA passed with score: ${recaptchaResult.score}`)
  } else if (recaptchaError) {
    console.log("reCAPTCHA error occurred, proceeding with manual review flag")
  }

  try {
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically send the email or save to database
    console.log("Contact form submitted:", {
      name,
      email,
      subject,
      message,
      services: formData.getAll("services"),
      recaptchaScore: recaptchaToken ? "verified" : "manual_review",
    })

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
