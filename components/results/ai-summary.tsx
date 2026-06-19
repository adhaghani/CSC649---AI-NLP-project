import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
} from "@/components/ui/glass-card"
import { Sparkles } from "lucide-react"

interface AISummaryProps {
  summary: string
}

export function AISummary({ summary }: AISummaryProps) {
  return (
    <GlassCard>
      <GlassCardHeader>
        <GlassCardTitle className="flex items-center gap-2 !text-text-primary">
          <Sparkles className="size-5 text-lime" />
          AI Evaluation Summary
        </GlassCardTitle>
      </GlassCardHeader>
      <GlassCardContent>
        <p className="text-sm leading-relaxed text-text-secondary">
          {summary}
        </p>
      </GlassCardContent>
    </GlassCard>
  )
}
