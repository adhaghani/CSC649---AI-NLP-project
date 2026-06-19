import type { AnalysisResult } from "@/types"
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
} from "@/components/ui/glass-card"
import { cn, getRecommendationColor, getScoreColor } from "@/lib/utils"
import { Circle } from "lucide-react"

interface MatchScoreProps {
  score: number
  recommendation: AnalysisResult["recommendation"]
  skillsScore: number
  experienceScore: number
  educationScore: number
}

export function MatchScore({
  score,
  recommendation,
  skillsScore,
  experienceScore,
  educationScore,
}: MatchScoreProps) {
  return (
    <GlassCard>
      <GlassCardHeader>
        <GlassCardTitle>Match Analysis</GlassCardTitle>
      </GlassCardHeader>
      <GlassCardContent>
        <div className="mb-6 flex flex-col items-center">
          {/* Main score */}
          <div className="relative mb-4">
            <svg className="size-32 -rotate-90" viewBox="0 0 128 128">
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                className="text-white/[0.05]"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                strokeWidth="10"
                strokeLinecap="round"
                stroke="currentColor"
                className={cn(
                  score >= 80
                    ? "text-lime"
                    : score >= 60
                      ? "text-amber-400"
                      : "text-red-400"
                )}
                strokeDasharray={`${(score / 100) * 351.86} 351.86`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={cn("text-3xl font-bold", getScoreColor(score))}>
                {score}%
              </span>
              <span className="text-xs text-text-secondary">
                Overall Match
              </span>
            </div>
          </div>

          {/* Recommendation badge */}
          <div
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold border",
              getRecommendationColor(recommendation)
            )}
          >
            <Circle className="size-2 fill-current" />
            {recommendation}
          </div>
        </div>

        {/* Score breakdown */}
        <div className="space-y-3">
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-text-secondary">Skills Score</span>
              <span className={cn("font-medium", getScoreColor(skillsScore))}>
                {skillsScore}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  skillsScore >= 80
                    ? "bg-lime"
                    : skillsScore >= 60
                      ? "bg-amber-500"
                      : "bg-red-500"
                )}
                style={{ width: `${skillsScore}%` }}
              />
            </div>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-text-secondary">Experience Score</span>
              <span className={cn("font-medium", getScoreColor(experienceScore))}>
                {experienceScore}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  experienceScore >= 80
                    ? "bg-lime"
                    : experienceScore >= 60
                      ? "bg-amber-500"
                      : "bg-red-500"
                )}
                style={{ width: `${experienceScore}%` }}
              />
            </div>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-text-secondary">Education Score</span>
              <span className={cn("font-medium", getScoreColor(educationScore))}>
                {educationScore}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  educationScore >= 80
                    ? "bg-lime"
                    : educationScore >= 60
                      ? "bg-amber-500"
                      : "bg-red-500"
                )}
                style={{ width: `${educationScore}%` }}
              />
            </div>
          </div>
        </div>
      </GlassCardContent>
    </GlassCard>
  )
}
