"use client"

import { useCallback, type ReactNode } from "react"
import { Upload, FileText, X } from "lucide-react"
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ResumeUploadProps {
  resumeFileName: string | null
  resumeFile: File | null
  onFileSelected: (file: File) => void
  onClear: () => void
  disabled?: boolean
  extraAction?: ReactNode
}

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function ResumeUpload({
  resumeFileName,
  resumeFile,
  onFileSelected,
  onClear,
  disabled,
  extraAction,
}: ResumeUploadProps) {
  const handleFile = useCallback(
    (file: File) => {
      if (!ACCEPTED_TYPES.includes(file.type)) {
        alert("Please upload a PDF or DOCX file.")
        return
      }
      if (file.size > MAX_FILE_SIZE) {
        alert("File must be under 10MB.")
        return
      }
      onFileSelected(file)
    },
    [onFileSelected]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [handleFile]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  return (
    <GlassCard>
      <GlassCardHeader>
        <div className="flex items-center justify-between">
          <div>
            <GlassCardTitle className="flex items-center gap-2">
              <Upload className="size-5 text-lime" />
              Resume Upload
            </GlassCardTitle>
            <GlassCardDescription>
              Upload a PDF or DOCX resume file
            </GlassCardDescription>
          </div>
          {extraAction}
        </div>
      </GlassCardHeader>
      <GlassCardContent>
        {resumeFileName && resumeFile ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-glass-border bg-white/[0.03] p-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-lime/15 text-lime">
                  <FileText className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-text-primary">
                    {resumeFileName}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {formatFileSize(resumeFile.size)}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClear}
                disabled={disabled}
                className="shrink-0 text-text-secondary hover:text-text-primary hover:bg-glass-bg"
              >
                <X className="size-4" />
              </Button>
            </div>
            <p className="text-xs text-text-secondary">
              File will be parsed on the server when you click &quot;Analyze
              Candidate&quot;.
            </p>
          </div>
        ) : (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-12 transition-colors",
              "border-glass-border hover:border-lime/40 hover:bg-lime/[0.03]"
            )}
          >
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-white/[0.05]">
              <Upload className="size-8 text-text-secondary" />
            </div>
            <p className="mb-1 text-sm font-medium text-text-primary">
              Drag & drop your resume here
            </p>
            <p className="mb-4 text-xs text-text-secondary">
              PDF or DOCX — up to 10MB
            </p>
            <label>
              <Button
                variant="outline"
                size="sm"
                disabled={disabled}
                asChild
                className="text-text-secondary border-glass-border hover:bg-glass-bg hover:text-text-primary"
              >
                <span>
                  <FileText className="mr-2 size-4" />
                  Browse Files
                </span>
              </Button>
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) handleFile(file)
                }}
                className="hidden"
              />
            </label>
          </div>
        )}
      </GlassCardContent>
    </GlassCard>
  )
}
