import { generateText } from "ai"
import { xai } from "@ai-sdk/xai"

export async function POST(request: Request) {
  try {
    const { message, context } = await request.json()

    const { text } = await generateText({
      model: xai("grok-beta"),
      messages: [
        {
          role: "system",
          content:
            context ||
            "You are an AI assistant for a web development agency called Ctrl+Tech. We offer web design & development, e-commerce solutions, web applications, mobile app development (iOS & Android), and a student mentorship program. Provide helpful, professional responses about our services. Keep responses concise and offer relevant follow-up options.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      maxTokens: 500,
      temperature: 0.7,
    })

    // Generate relevant options based on the response
    const options = generateOptions(text, message)

    return Response.json({
      message: text,
      options: options,
    })
  } catch (error) {
    console.error("Grok API error:", error)
    return Response.json({ error: "Failed to generate response" }, { status: 500 })
  }
}

function generateOptions(response: string, userMessage: string): string[] {
  const message = userMessage.toLowerCase()
  const responseText = response.toLowerCase()

  // Generate contextual options based on the conversation
  if (message.includes("service") || responseText.includes("service")) {
    return ["Web Development", "E-commerce", "Mobile Apps", "Get Quote"]
  }

  if (message.includes("appointment") || message.includes("schedule")) {
    return ["Project Consultation", "Student Program Info", "Technical Support", "Call Now"]
  }

  if (message.includes("student") || message.includes("program")) {
    return ["Apply Now", "Program Details", "Requirements", "Success Stories"]
  }

  if (message.includes("price") || message.includes("cost")) {
    return ["Get Quote", "View Packages", "Schedule Consultation", "Compare Options"]
  }

  if (message.includes("portfolio") || message.includes("example")) {
    return ["View Portfolio", "Case Studies", "Client Reviews", "Schedule Demo"]
  }

  // Default options
  return ["Our Services", "Schedule Meeting", "Get Quote", "Contact Info"]
}
