"use client"

import { FileText, Copy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="size-5" />
              Job Description
            </CardTitle>
            <CardDescription>
              Paste the job description for analysis
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onLoadSample}
            disabled={disabled}
          >
            <Copy className="size-4 mr-2" />
            Load Sample
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder="Paste the full job description here including required skills, qualifications, and experience..."
          className={cn(
            "w-full min-h-[240px] rounded-lg border bg-background px-3 py-2 text-sm",
            "placeholder:text-muted-foreground/60",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "resize-y",
            error && "border-destructive focus:border-destructive focus:ring-destructive/20"
          )}
          maxLength={MAX_CHARS}
        />
        {error && (
          <p className="text-xs font-medium text-destructive">{error}</p>
        )}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
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
            <span className="text-amber-500 font-medium">
              Character limit reached
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
