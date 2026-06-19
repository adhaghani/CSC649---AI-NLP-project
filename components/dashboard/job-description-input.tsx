"use client"

import { FileText, Copy } from "lucide-react"
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface JobDescriptionInputProps {
  value: string
  onChange: (text: string) => void
  onLoadSample: () => void
  disabled?: boolean
  error?: string
}

const MAX_CHARS = 10000

export function JobDescriptionInput({
  value,
  onChange,
  onLoadSample,
  disabled,
  error,
}: JobDescriptionInputProps) {
  const charCount = value.length

  return (
    <GlassCard>
      <GlassCardHeader>
        <div className="flex items-center justify-between">
          <div>
            <GlassCardTitle className="flex items-center gap-2">
              <FileText className="size-5 text-lime" />
              Job Description
            </GlassCardTitle>
            <GlassCardDescription>
              Paste the job description for analysis
            </GlassCardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onLoadSample}
            disabled={disabled}
            className="text-text-secondary border-glass-border hover:bg-glass-bg hover:text-text-primary"
          >
            <Copy className="size-4 mr-2" />
            Load Sample
          </Button>
        </div>
      </GlassCardHeader>
      <GlassCardContent className="space-y-3">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder="Paste the full job description here including required skills, qualifications, and experience..."
          className={cn(
            "w-full min-h-[240px] rounded-xl border border-glass-border bg-white/[0.04] px-3 py-2 text-sm text-text-primary",
            "placeholder:text-text-disabled",
            "focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime/30",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "resize-y",
            error &&
              "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
          )}
          maxLength={MAX_CHARS}
        />
        {error && (
          <p className="text-xs font-medium text-red-400">{error}</p>
        )}
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <span>
            {charCount > 0 ? (
              <>
                {charCount.toLocaleString()} / {MAX_CHARS.toLocaleString()}{" "}
                characters
              </>
            ) : (
              "Enter at least 50 characters"
            )}
          </span>
          {charCount >= MAX_CHARS && (
            <span className="text-amber-400 font-medium">
              Character limit reached
            </span>
          )}
        </div>
      </GlassCardContent>
    </GlassCard>
  )
}
