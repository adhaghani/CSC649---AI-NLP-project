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
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-300 dark:border-emerald-700"
    case "Hire":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-300 dark:border-blue-700"
    case "Consider":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-300 dark:border-amber-700"
    case "Reject":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-300 dark:border-red-700"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
  }
}

export function getScoreColor(score: number): string {
  if (score >= 80) return "text-emerald-500"
  if (score >= 60) return "text-amber-500"
  return "text-red-500"
}

export function getScoreBgColor(score: number): string {
  if (score >= 80) return "bg-emerald-500"
  if (score >= 60) return "bg-amber-500"
  return "bg-red-500"
}

export function getProgressColor(score: number): string {
  if (score >= 80) return "[&>div]:bg-emerald-500"
  if (score >= 60) return "[&>div]:bg-amber-500"
  return "[&>div]:bg-red-500"
}

export function formatScore(score: number): string {
  return `${Math.round(score)}%`
}
