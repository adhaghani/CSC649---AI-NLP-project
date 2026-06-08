import { NextResponse } from "next/server"
import { analyzeResume } from "@/lib/ai/client"
import { parsePDF } from "@/lib/parsers/pdf"
import { parseDOCX } from "@/lib/parsers/docx"

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || ""

    let jobDescription = ""
    let resumeText = ""

    if (contentType.includes("multipart/form-data")) {
      // File upload mode: parse the file server-side
      const formData = await request.formData()

      jobDescription = (formData.get("jobDescription") as string) || ""
      const resumeFile = formData.get("resumeFile") as File | null
      const resumeTextRaw = formData.get("resumeText") as string | null

      if (resumeFile && resumeFile.size > 0) {
        // Parse the file server-side based on its MIME type
        try {
          if (resumeFile.type === "application/pdf") {
            resumeText = await parsePDF(resumeFile)
          } else if (
            resumeFile.type ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ) {
            resumeText = await parseDOCX(resumeFile)
          } else {
            return NextResponse.json(
              { error: "Unsupported file type. Please upload a PDF or DOCX file." },
              { status: 400 }
            )
          }
        } catch (parseErr) {
          console.error("File parsing error:", parseErr)
          return NextResponse.json(
            { error: "Failed to parse the uploaded file. Please ensure it is a valid PDF or DOCX." },
            { status: 400 }
          )
        }
      } else if (resumeTextRaw) {
        resumeText = resumeTextRaw
      } else {
        return NextResponse.json(
          { error: "No resume file or text provided." },
          { status: 400 }
        )
      }
    } else {
      // JSON mode: resume text sent directly (backward compatible)
      const body = await request.json()
      jobDescription = body.jobDescription || ""
      resumeText = body.resumeText || ""
    }

    // Validate inputs
    if (!jobDescription || jobDescription.length < 50) {
      return NextResponse.json(
        { error: "Job description must be at least 50 characters." },
        { status: 400 }
      )
    }

    if (!resumeText || resumeText.length < 10) {
      return NextResponse.json(
        { error: "Resume text is required (at least 10 characters)." },
        { status: 400 }
      )
    }

    const result = await analyzeResume(jobDescription, resumeText)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Analysis error:", error)
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
