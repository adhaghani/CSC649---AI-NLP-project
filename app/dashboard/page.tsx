"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, Sparkles, AlertTriangle } from "lucide-react"
import { useAnalysisStore } from "@/store/analysis-store"
import { JobDescriptionInput } from "@/components/dashboard/job-description-input"
import { ResumeUpload } from "@/components/dashboard/resume-upload"
import { ResumeGenerator } from "@/components/dashboard/resume-generator"
import { NeonButton } from "@/components/ui/neon-button"
import { SystemStatus } from "@/components/ui/system-status"
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/glass-card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SAMPLE_JOB_DESCRIPTION } from "@/lib/sample-data"

const formSchema = z.object({
  jobDescription: z
    .string()
    .min(50, "Job description must be at least 50 characters")
    .max(10000, "Job description must be under 10,000 characters"),
})

type FormValues = z.infer<typeof formSchema>

export default function DashboardPage() {
  const router = useRouter()
  const {
    jobDescription,
    resumeFileName,
    resumeFile,
    isLoading,
    error,
    setJobDescription,
    setResumeFileName,
    setResumeFile,
    setResults,
    setLoading,
    setError,
  } = useAnalysisStore()

  const {
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { jobDescription },
  })

  // eslint-disable-next-line react-hooks/incompatible-library
  const currentJD = watch("jobDescription")
  const hasResume = resumeFile !== null
  const canAnalyze =
    currentJD.length >= 50 && hasResume && !errors.jobDescription

  const handleLoadSampleJD = useCallback(() => {
    setValue("jobDescription", SAMPLE_JOB_DESCRIPTION, { shouldValidate: true })
    setJobDescription(SAMPLE_JOB_DESCRIPTION)
  }, [setValue, setJobDescription])

  const handleJDChange = useCallback(
    (text: string) => {
      setValue("jobDescription", text, { shouldValidate: true })
      setJobDescription(text)
    },
    [setValue, setJobDescription]
  )

  const handleFileSelected = useCallback(
    (file: File) => {
      setResumeFile(file)
      setResumeFileName(file.name)
      setError(null)
    },
    [setResumeFile, setResumeFileName, setError]
  )

  const handleClearFile = useCallback(() => {
    setResumeFile(null)
    setResumeFileName(null)
  }, [setResumeFile, setResumeFileName])

  const handleDemoResume = useCallback(
    (text: string, fileName: string) => {
      const blob = new Blob([text], { type: "text/plain" })
      const file = new File([blob], fileName, { type: "text/plain" })
      setResumeFile(file)
      setResumeFileName(fileName)
      setError(null)
    },
    [setResumeFile, setResumeFileName, setError]
  )

  const handleAnalyze = useCallback(async () => {
    if (!canAnalyze || !resumeFile) return

    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("jobDescription", currentJD)
      formData.append("resumeFile", resumeFile)

      const res = await fetch("/api/analyze-resume", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Analysis failed")
      }

      setResults(data)
      router.push("/dashboard/results")
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      )
    }
  }, [
    canAnalyze,
    currentJD,
    resumeFile,
    setLoading,
    setError,
    setResults,
    router,
  ])

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold tracking-[-0.04em] text-text-primary">
            Resume Screening Dashboard
          </h1>
          <SystemStatus
            label={isLoading ? "ANALYZING" : "READY"}
            status={isLoading ? "processing" : "online"}
          />
        </div>
        <p className="text-text-secondary">
          Enter a job description and upload a resume to get AI-powered analysis.
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert
          variant="destructive"
          className="mb-6 bg-red-500/10 border-red-500/30 text-red-400"
        >
          <AlertTriangle className="size-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Three Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel: Job Description */}
        <div className="lg:col-span-1">
          <JobDescriptionInput
            value={currentJD}
            onChange={handleJDChange}
            onLoadSample={handleLoadSampleJD}
            disabled={isLoading}
            error={errors.jobDescription?.message}
          />
        </div>

        {/* Center Panel: Resume Upload */}
        <div className="lg:col-span-1">
          <ResumeUpload
            resumeFileName={resumeFileName}
            resumeFile={resumeFile}
            onFileSelected={handleFileSelected}
            onClear={handleClearFile}
            disabled={isLoading}
            extraAction={
              <ResumeGenerator
                onSelect={handleDemoResume}
                disabled={isLoading}
              />
            }
          />
        </div>

        {/* Right Panel: Action & Status */}
        <div className="lg:col-span-1">
          <GlassCard>
            <GlassCardHeader>
              <GlassCardTitle>Analysis</GlassCardTitle>
              <GlassCardDescription>
                {canAnalyze
                  ? "Ready to analyze candidate"
                  : "Fill in both panels to start"}
              </GlassCardDescription>
            </GlassCardHeader>
            <GlassCardContent className="space-y-4">
              <NeonButton
                className="w-full"
                size="lg"
                onClick={handleAnalyze}
                disabled={!canAnalyze || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="size-5" />
                    Analyze Candidate
                  </>
                )}
              </NeonButton>

              {/* Status indicators */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div
                    className={`size-2 rounded-full ${
                      currentJD.length >= 50 ? "bg-lime" : "bg-text-disabled"
                    }`}
                  />
                  <span className="text-text-secondary text-xs">
                    Job Description{" "}
                    {currentJD.length >= 50 ? "✓" : "(min 50 chars)"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div
                    className={`size-2 rounded-full ${
                      hasResume ? "bg-lime" : "bg-text-disabled"
                    }`}
                  />
                  <span className="text-text-secondary text-xs">
                    Resume Uploaded {hasResume ? "✓" : "(required)"}
                  </span>
                </div>
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
