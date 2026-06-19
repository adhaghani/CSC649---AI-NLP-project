"use client"

import { cn } from "@/lib/utils"

interface GlowSphereProps {
  color?: "lime" | "emerald"
  size?: string
  className?: string
  blur?: number
  opacity?: number
}

function GlowSphere({
  color = "lime",
  size = "600px",
  className,
  blur = 120,
  opacity = 20,
}: GlowSphereProps) {
  const colorMap = {
    lime: "rgba(204, 255, 0, 1)",
    emerald: "rgba(16, 185, 129, 1)",
  }

  return (
    <div
      aria-hidden="true"
      className={cn("absolute rounded-full pointer-events-none", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at center, ${colorMap[color]}, transparent 70%)`,
        filter: `blur(${blur}px)`,
        opacity: opacity / 100,
      }}
    />
  )
}

export { GlowSphere }
