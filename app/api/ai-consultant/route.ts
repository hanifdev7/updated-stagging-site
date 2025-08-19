import { generateText } from "ai"
import { xai } from "@ai-sdk/xai"

export async function POST(request: Request) {
  try {
    const { message, context } = await request.json()

    const systemPrompt = `You are an expert digital consultant for CtrlPlusTech, a premium web development agency. You have unlimited knowledge and capabilities to help clients with:

- Web development strategy and architecture
- E-commerce solutions and optimization
- Mobile app development planning
- Digital transformation consulting
- Technology stack recommendations
- Project timeline and budget estimation
- UX/UI design principles
- SEO and digital marketing integration

Be conversational, insightful, and provide actionable advice. Draw from the latest industry trends and best practices. Don't hold back - provide comprehensive, detailed responses that demonstrate deep expertise.

Context about CtrlPlusTech:
- Premium web development agency
- Services: Web design, mobile apps, e-commerce, web applications
- Focus on creating "digital magic"
- Student mentorship programs available
- Modern, innovative approach to digital solutions`

    const { text } = await generateText({
      model: xai("grok-beta"),
      system: systemPrompt,
      prompt: `Client message: ${message}${context ? `\n\nAdditional context: ${context}` : ""}`,
      maxTokens: 1000,
      temperature: 0.7,
    })

    return Response.json({ response: text })
  } catch (error) {
    console.error("AI Consultant error:", error)
    return Response.json({ error: "Failed to get AI consultation" }, { status: 500 })
  }
}
