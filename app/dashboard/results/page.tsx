"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  Download,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"
import { useAnalysisStore } from "@/store/analysis-store"
import { CandidateProfile } from "@/components/results/candidate-profile"
import { MatchScore } from "@/components/results/match-score"
import { SkillAnalysis } from "@/components/results/skill-analysis"
import { AISummary } from "@/components/results/ai-summary"
import { RecommendationBadge } from "@/components/results/recommendation-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResultsSkeleton } from "@/components/skeletons"

export default function ResultsPage() {
  const router = useRouter()
  const results = useAnalysisStore((s) => s.results)

  useEffect(() => {
    if (!results) {
      router.replace("/dashboard")
    }
  }, [results, router])

  const handleExportPDF = () => {
    window.print()
  }

  if (!results) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ResultsSkeleton />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => router.push("/dashboard")}
      >
        <ArrowLeft className="size-4 mr-2" />
        Back to Dashboard
      </Button>

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Analysis Results
          </h1>
          <p className="text-muted-foreground">
            AI-powered candidate evaluation for {results.candidateName}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <RecommendationBadge recommendation={results.recommendation} />
          <Button variant="outline" size="sm" onClick={handleExportPDF}>
            <Download className="size-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Full Results — single scrolling page */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          <CandidateProfile candidate={results} />

          <MatchScore
            score={results.matchScore}
            recommendation={results.recommendation}
            skillsScore={results.skillsScore}
            experienceScore={results.experienceScore}
            educationScore={results.educationScore}
          />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          <SkillAnalysis
            matchedSkills={results.matchedSkills}
            missingSkills={results.missingSkills}
            additionalSkills={results.additionalSkills}
            programmingLanguages={results.programmingLanguages}
            certifications={results.certifications}
          />

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strengths */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <ThumbsUp className="size-5" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {results.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="size-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span className="text-muted-foreground">{s}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Weaknesses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <ThumbsDown className="size-5" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {results.weaknesses.map((w, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="size-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      <span className="text-muted-foreground">{w}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <AISummary summary={results.summary} />
        </div>
      </div>
    </div>
  )
}
