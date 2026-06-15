import type { AnalysisResult } from "@/types"
import { analysisResultSchema } from "@/lib/validators/resume"
import { buildAnalysisPrompt } from "./prompt"
import { getMockAnalysisResult } from "@/lib/sample-data"

const DEEPSEEK_BASE_URL = "https://api.deepseek.com"
const DEEPSEEK_MODEL = "deepseek-v4-flash"

export async function analyzeResume(
  jobDescription: string,
  resumeText: string
): Promise<AnalysisResult> {
  const apiKey = process.env.DEEPSEEK_API_KEY

  if (!apiKey) {
    // Demo mode: return mock data after simulated delay
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return getMockAnalysisResult()
  }

  const prompt = buildAnalysisPrompt(jobDescription, resumeText)

  const response = await fetch(`${DEEPSEEK_BASE_URL}/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: DEEPSEEK_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an AI resume screening assistant. You return ONLY valid JSON, never markdown or explanations.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.1,
      max_tokens: 4096,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`DeepSeek API error (${response.status}): ${errorText}`)
  }

  const data = await response.json()
  const content = data.choices?.[0]?.message?.content

  if (!content) {
    throw new Error("No content returned from DeepSeek API")
  }

  // Clean the response: remove markdown code blocks if present
  let jsonStr = content.trim()
  if (jsonStr.startsWith("```json")) {
    jsonStr = jsonStr.slice(7)
  } else if (jsonStr.startsWith("```")) {
    jsonStr = jsonStr.slice(3)
  }
  if (jsonStr.endsWith("```")) {
    jsonStr = jsonStr.slice(0, -3)
  }
  jsonStr = jsonStr.trim()

  let parsed: unknown
  try {
    parsed = JSON.parse(jsonStr)
  } catch {
    throw new Error("Failed to parse DeepSeek response as JSON")
  }

  const result = analysisResultSchema.parse(parsed)
  return result as AnalysisResult
}
