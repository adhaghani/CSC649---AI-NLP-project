"use client"

import { useAnalysisStore } from "@/store/analysis-store"
import { EvaluationChart } from "@/components/charts/evaluation-chart"
import { SkillDistributionChart } from "@/components/charts/skill-distribution-chart"
import { ScoreGauge } from "@/components/charts/score-gauge"
import { EmptyState } from "@/components/empty-state"
import { BarChart3 } from "lucide-react"

export default function AnalyticsPage() {
  const results = useAnalysisStore((s) => s.results)

  if (!results) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            Analyze a candidate first to see analytics here.
          </p>
        </div>
        <EmptyState
          icon={BarChart3}
          title="No Analytics Available"
          description="Upload a resume and run an analysis from the Dashboard to view candidate analytics and charts."
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold tracking-tight">
          Analytics Dashboard
        </h1>
        <p className="text-muted-foreground">
          Visual analysis for {results.candidateName}
        </p>
      </div>

      {/* Score Gauges */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ScoreGauge
          score={results.matchScore}
          label="Overall Match"
          description="Weighted: 50% skills, 30% experience, 20% education"
        />
        <ScoreGauge
          score={results.resumeQualityScore}
          label="Resume Quality"
          description="Based on clarity, completeness, and professionalism"
        />
        <ScoreGauge
          score={results.atsScore}
          label="ATS Compatibility"
          description="Resume format, keyword presence, and standard sections"
        />
        <ScoreGauge
          score={Math.round(
            (results.matchedSkills.length /
              (results.matchedSkills.length + results.missingSkills.length ||
                1)) *
              100 *
              100
          ) / 100
          }
          label="Skill Coverage"
          description="Percentage of required skills the candidate has"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <EvaluationChart
          skillsScore={results.skillsScore}
          experienceScore={results.experienceScore}
          educationScore={results.educationScore}
        />
        <SkillDistributionChart
          matchedCount={results.matchedSkills.length}
          missingCount={results.missingSkills.length}
        />
      </div>
    </div>
  )
}
