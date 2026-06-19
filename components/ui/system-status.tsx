"use client"

import { cn } from "@/lib/utils"

interface SystemStatusProps {
  label: string
  status?: "online" | "processing" | "offline"
  className?: string
}

function SystemStatus({
  label,
  status = "online",
  className,
}: SystemStatusProps) {
  const dotColors = {
    online: "bg-lime animate-pulse-lime",
    processing: "bg-amber-400 animate-pulse",
    offline: "bg-red-400",
  }

  return (
    <div
      data-slot="system-status"
      className={cn(
        "flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary select-none",
        className
      )}
    >
      <span
        className={cn(
          "inline-block size-[6px] rounded-full",
          dotColors[status]
        )}
      />
      <span>{label}</span>
    </div>
  )
}

export { SystemStatus }
