"use server"

import { analyzeResume } from "@/lib/ai/client"
import { parsePDF } from "@/lib/parsers/pdf"
import { parseDOCX } from "@/lib/parsers/docx"
import type { AnalysisResult } from "@/types"

interface AnalyzeActionInput {
  jobDescription: string
  resumeFile?: File | null
  resumeText?: string | null
}

interface AnalyzeActionOutput {
  success: boolean
  data?: AnalysisResult
  error?: string
}

export async function analyzeCandidate(
  input: AnalyzeActionInput
): Promise<AnalyzeActionOutput> {
  try {
    let resumeText = input.resumeText || ""

    // If a file is provided, parse it server-side
    if (input.resumeFile && input.resumeFile.size > 0) {
      const file = input.resumeFile

      if (file.type === "application/pdf") {
        resumeText = await parsePDF(file)
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        resumeText = await parseDOCX(file)
      } else {
        return { success: false, error: "Unsupported file type." }
      }
    }

    if (!input.jobDescription || input.jobDescription.length < 50) {
      return {
        success: false,
        error: "Job description must be at least 50 characters.",
      }
    }

    if (!resumeText || resumeText.length < 10) {
      return {
        success: false,
        error: "Resume text is required (at least 10 characters).",
      }
    }

    const result = await analyzeResume(input.jobDescription, resumeText)
    return { success: true, data: result }
  } catch (error) {
    console.error("Server action analysis error:", error)
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred during analysis.",
    }
  }
}
