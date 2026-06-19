import type { RecommendationType } from "@/types"
import { cn, getRecommendationColor } from "@/lib/utils"
import { Circle } from "lucide-react"

interface RecommendationBadgeProps {
  recommendation: RecommendationType
  className?: string
}

export function RecommendationBadge({
  recommendation,
  className,
}: RecommendationBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold border",
        getRecommendationColor(recommendation),
        className
      )}
    >
      <Circle className="size-2 fill-current" />
      {recommendation}
    </div>
  )
}
