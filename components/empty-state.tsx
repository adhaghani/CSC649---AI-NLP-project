import type { LucideIcon } from "lucide-react"
import { NeonButton } from "@/components/ui/neon-button"
import { cn } from "@/lib/utils"

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-[300px] p-8 text-center",
        className
      )}
    >
      <div className="flex items-center justify-center size-16 rounded-full bg-white/[0.05] mb-4">
        <Icon className="size-8 text-text-secondary" />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary mb-6 max-w-sm">{description}</p>
      {action && <NeonButton onClick={action.onClick}>{action.label}</NeonButton>}
    </div>
  )
}
