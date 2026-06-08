"use client"

import { useCallback, type ReactNode } from "react"
import { Upload, FileText, X } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
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
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Upload className="size-5" />
              Resume Upload
            </CardTitle>
            <CardDescription>Upload a PDF or DOCX resume file</CardDescription>
          </div>
          {extraAction}
        </div>
      </CardHeader>
      <CardContent>
        {resumeFileName && resumeFile ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border bg-muted/30 p-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">
                    {resumeFileName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(resumeFile.size)}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClear}
                disabled={disabled}
                className="shrink-0"
              >
                <X className="size-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              File will be parsed on the server when you click &quot;Analyze
              Candidate&quot;.
            </p>
          </div>
        ) : (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-colors",
              "border-muted-foreground/25 hover:border-primary/50 hover:bg-primary/5"
            )}
          >
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
              <Upload className="size-8 text-muted-foreground" />
            </div>
            <p className="mb-1 text-sm font-medium">
              Drag & drop your resume here
            </p>
            <p className="mb-4 text-xs text-muted-foreground">
              PDF or DOCX — up to 10MB
            </p>
            <label>
              <Button variant="outline" size="sm" disabled={disabled} asChild>
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
      </CardContent>
    </Card>
  )
}
