import type { RecommendationType } from "@/types"
import { Badge } from "@/components/ui/badge"
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
    <Badge
      className={cn(
        "px-4 py-1.5 text-sm font-semibold border",
        getRecommendationColor(recommendation),
        className
      )}
    >
      <Circle className="size-2 fill-current mr-1.5" />
      {recommendation}
    </Badge>
  )
}
