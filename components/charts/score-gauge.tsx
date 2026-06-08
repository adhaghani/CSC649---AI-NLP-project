import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn, getScoreColor } from "@/lib/utils"

interface ScoreGaugeProps {
  score: number
  label: string
  description?: string
}

export function ScoreGauge({ score, label, description }: ScoreGaugeProps) {
  const circumference = 2 * Math.PI * 42
  const offset = circumference - (score / 100) * circumference

  return (
    <Card>
      <CardHeader>
        <CardTitle>{label}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative">
          <svg className="size-32 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-muted/20"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              stroke="currentColor"
              className={cn(
                score >= 80
                  ? "text-emerald-500"
                  : score >= 60
                    ? "text-amber-500"
                    : "text-red-500"
              )}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 0.5s ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={cn("text-2xl font-bold", getScoreColor(score))}>
              {score}%
            </span>
            <span className="text-[10px] text-muted-foreground">Score</span>
          </div>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground text-center mt-3">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
