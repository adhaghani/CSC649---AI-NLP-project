import { z } from "zod"

export const analysisResultSchema = z.object({
  candidateName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  skills: z.array(z.string()),
  programmingLanguages: z.array(z.string()),
  certifications: z.array(z.string()),
  education: z.string(),
  previousRoles: z.array(z.string()),
  experienceYears: z.number(),
  matchScore: z.number().min(0).max(100),
  skillsScore: z.number().min(0).max(100),
  experienceScore: z.number().min(0).max(100),
  educationScore: z.number().min(0).max(100),
  matchedSkills: z.array(z.string()),
  missingSkills: z.array(z.string()),
  additionalSkills: z.array(z.string()),
  strengths: z.array(z.string()),
  weaknesses: z.array(z.string()),
  summary: z.string(),
  recommendation: z.enum(["Strong Hire", "Hire", "Consider", "Reject"]),
  atsScore: z.number().min(0).max(100),
  resumeQualityScore: z.number().min(0).max(100),
})

export const jobDescriptionSchema = z
  .string()
  .min(50, "Job description must be at least 50 characters")
  .max(10000, "Job description must be under 10,000 characters")

export const analysisRequestSchema = z.object({
  jobDescription: jobDescriptionSchema,
  resumeText: z.string().min(10, "Resume text is required"),
})

export type AnalysisResultSchema = z.infer<typeof analysisResultSchema>
