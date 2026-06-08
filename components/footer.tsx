export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              ResumeScreener
            </span>
            <span>— AI-Powered Resume Screening</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ResumeScreener. Built for
            university NLP project demonstration.
          </p>
        </div>
      </div>
    </footer>
  )
}
