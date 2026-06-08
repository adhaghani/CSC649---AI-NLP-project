export interface CandidateInfo {
  candidateName: string
  email: string
  phone: string
  skills: string[]
  programmingLanguages: string[]
  certifications: string[]
  education: string
  previousRoles: string[]
  experienceYears: number
}

export interface AnalysisResult {
  candidateName: string
  email: string
  phone: string
  skills: string[]
  programmingLanguages: string[]
  certifications: string[]
  education: string
  previousRoles: string[]
  experienceYears: number
  matchScore: number
  skillsScore: number
  experienceScore: number
  educationScore: number
  matchedSkills: string[]
  missingSkills: string[]
  additionalSkills: string[]
  strengths: string[]
  weaknesses: string[]
  summary: string
  recommendation: "Strong Hire" | "Hire" | "Consider" | "Reject"
  atsScore: number
  resumeQualityScore: number
}

export type RecommendationType = AnalysisResult["recommendation"]

export interface AnalysisRequest {
  jobDescription: string
  resumeText: string
}

export interface DashboardState {
  jobDescription: string
  resumeText: string
  resumeFileName: string | null
  results: AnalysisResult | null
  isLoading: boolean
  error: string | null
}
