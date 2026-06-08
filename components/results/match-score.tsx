import type { AnalysisResult } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <Card>
      <CardHeader>
        <CardTitle>Match Analysis</CardTitle>
      </CardHeader>
      <CardContent>
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
                className="text-muted/15"
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
                    ? "text-emerald-500"
                    : score >= 60
                      ? "text-amber-500"
                      : "text-red-500"
                )}
                strokeDasharray={`${(score / 100) * 351.86} 351.86`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={cn("text-3xl font-bold", getScoreColor(score))}>
                {score}%
              </span>
              <span className="text-xs text-muted-foreground">
                Overall Match
              </span>
            </div>
          </div>

          {/* Recommendation badge */}
          <Badge
            className={cn(
              "border px-4 py-1.5 text-sm font-semibold",
              getRecommendationColor(recommendation)
            )}
          >
            <Circle className="mr-1.5 size-2 fill-current" />
            {recommendation}
          </Badge>
        </div>

        {/* Score breakdown */}
        <div className="space-y-3">
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-muted-foreground">Skills Score</span>
              <span className={cn("font-medium", getScoreColor(skillsScore))}>
                {skillsScore}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  skillsScore >= 80
                    ? "bg-emerald-500"
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
              <span className="text-muted-foreground">Experience Score</span>
              <span
                className={cn("font-medium", getScoreColor(experienceScore))}
              >
                {experienceScore}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  experienceScore >= 80
                    ? "bg-emerald-500"
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
              <span className="text-muted-foreground">Education Score</span>
              <span
                className={cn("font-medium", getScoreColor(educationScore))}
              >
                {educationScore}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  educationScore >= 80
                    ? "bg-emerald-500"
                    : educationScore >= 60
                      ? "bg-amber-500"
                      : "bg-red-500"
                )}
                style={{ width: `${educationScore}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
