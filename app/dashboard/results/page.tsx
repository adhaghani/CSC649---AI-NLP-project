"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, ThumbsUp, ThumbsDown } from "lucide-react"
import { useAnalysisStore } from "@/store/analysis-store"
import { CandidateProfile } from "@/components/results/candidate-profile"
import { MatchScore } from "@/components/results/match-score"
import { SkillAnalysis } from "@/components/results/skill-analysis"
import { AISummary } from "@/components/results/ai-summary"
import { RecommendationBadge } from "@/components/results/recommendation-badge"
import { ResultsChat } from "@/components/assistant-ui/results-chat"
import { Button } from "@/components/ui/button"
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
} from "@/components/ui/glass-card"
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
      <div>
        <ResultsSkeleton />
      </div>
    )
  }

  return (
    <div>
      {/* Back button */}
      <Button
        variant="ghost"
        className="mb-6 text-text-secondary hover:text-text-primary hover:bg-glass-bg"
        onClick={() => router.push("/dashboard")}
      >
        <ArrowLeft className="size-4 mr-2" />
        Back to Dashboard
      </Button>

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-[-0.04em] text-text-primary">
            Analysis Results
          </h1>
          <p className="text-text-secondary">
            AI-powered candidate evaluation for {results.candidateName}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <RecommendationBadge recommendation={results.recommendation} />
          <Button
            variant="outline"
            size="sm"
            className="text-text-secondary border-glass-border hover:bg-glass-bg hover:text-text-primary"
            onClick={handleExportPDF}
          >
            <Download className="size-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Full Results */}
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
            <GlassCard>
              <GlassCardHeader>
                <GlassCardTitle className="flex items-center gap-2 text-emerald-400">
                  <ThumbsUp className="size-5" />
                  Strengths
                </GlassCardTitle>
              </GlassCardHeader>
              <GlassCardContent>
                <ul className="space-y-2">
                  {results.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="size-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span className="text-text-secondary">{s}</span>
                    </li>
                  ))}
                </ul>
              </GlassCardContent>
            </GlassCard>

            {/* Weaknesses */}
            <GlassCard>
              <GlassCardHeader>
                <GlassCardTitle className="flex items-center gap-2 text-red-400">
                  <ThumbsDown className="size-5" />
                  Areas for Improvement
                </GlassCardTitle>
              </GlassCardHeader>
              <GlassCardContent>
                <ul className="space-y-2">
                  {results.weaknesses.map((w, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="size-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      <span className="text-text-secondary">{w}</span>
                    </li>
                  ))}
                </ul>
              </GlassCardContent>
            </GlassCard>
          </div>

          <AISummary summary={results.summary} />
        </div>
      </div>

      {/* AI Chatbot */}
      <ResultsChat results={results} />
    </div>
  )
}
