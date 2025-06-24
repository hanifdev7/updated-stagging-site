"use server"

interface StudentProgramFormState {
  success: boolean
  message: string
  errors?: {
    firstName?: string
    lastName?: string
    email?: string
    university?: string
    graduationYear?: string
    major?: string
    experience?: string
    motivation?: string
    resume?: string
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

export async function submitStudentProgramForm(
  prevState: StudentProgramFormState | null,
  formData: FormData,
): Promise<StudentProgramFormState> {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const university = formData.get("university") as string
  const graduationYear = formData.get("graduationYear") as string
  const major = formData.get("major") as string
  const experience = formData.get("experience") as string
  const motivation = formData.get("motivation") as string
  const resume = formData.get("resume") as File
  const recaptchaToken = formData.get("recaptchaToken") as string
  const recaptchaError = formData.get("recaptchaError") as string

  const errors: StudentProgramFormState["errors"] = {}

  // Validate required fields
  if (!firstName?.trim()) {
    errors.firstName = "First name is required"
  }

  if (!lastName?.trim()) {
    errors.lastName = "Last name is required"
  }

  if (!email?.trim()) {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address"
  }

  if (!university?.trim()) {
    errors.university = "University is required"
  }

  if (!graduationYear) {
    errors.graduationYear = "Graduation year is required"
  }

  if (!major) {
    errors.major = "Major is required"
  }

  if (!experience?.trim()) {
    errors.experience = "Experience description is required"
  }

  if (!motivation?.trim()) {
    errors.motivation = "Motivation is required"
  }

  if (!resume || resume.size === 0) {
    errors.resume = "Resume is required"
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
    const recaptchaResult = await verifyRecaptchaV3(recaptchaToken, "student_application")

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
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Here you would typically save to database and handle file upload
    console.log("Student program application submitted:", {
      firstName,
      lastName,
      email,
      university,
      graduationYear,
      major,
      experience,
      motivation,
      technologies: formData.getAll("technologies"),
      resumeSize: resume.size,
      recaptchaScore: recaptchaToken ? "verified" : "manual_review",
    })

    return {
      success: true,
      message: "Application submitted successfully! We'll review it and get back to you within 3-5 business days.",
    }
  } catch (error) {
    console.error("Error submitting student program form:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
