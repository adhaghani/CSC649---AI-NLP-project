import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { RecommendationType } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRecommendationColor(
  recommendation: RecommendationType
): string {
  switch (recommendation) {
    case "Strong Hire":
      return "bg-lime/15 text-lime border-lime/30"
    case "Hire":
      return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
    case "Consider":
      return "bg-amber-500/15 text-amber-400 border-amber-500/30"
    case "Reject":
      return "bg-red-500/15 text-red-400 border-red-500/30"
    default:
      return "bg-white/5 text-text-secondary border-white/10"
  }
}

export function getScoreColor(score: number): string {
  if (score >= 80) return "text-lime"
  if (score >= 60) return "text-amber-400"
  return "text-red-400"
}

export function getScoreBgColor(score: number): string {
  if (score >= 80) return "bg-lime"
  if (score >= 60) return "bg-amber-500"
  return "bg-red-500"
}

export function getProgressColor(score: number): string {
  if (score >= 80) return "[&>div]:bg-lime"
  if (score >= 60) return "[&>div]:bg-amber-500"
  return "[&>div]:bg-red-500"
}

export function formatScore(score: number): string {
  return `${Math.round(score)}%`
}
