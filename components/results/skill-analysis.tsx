import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, PlusCircle } from "lucide-react"

interface SkillAnalysisProps {
  matchedSkills: string[]
  missingSkills: string[]
  additionalSkills: string[]
  programmingLanguages: string[]
  certifications: string[]
}

export function SkillAnalysis({
  matchedSkills,
  missingSkills,
  additionalSkills,
  programmingLanguages,
  certifications,
}: SkillAnalysisProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skill Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Matched Skills */}
        <div>
          <p className="text-sm font-medium flex items-center gap-1.5 mb-2 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="size-4" />
            Matched Skills ({matchedSkills.length})
          </p>
          <div className="flex flex-wrap gap-1.5">
            {matchedSkills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Missing Skills */}
        <div>
          <p className="text-sm font-medium flex items-center gap-1.5 mb-2 text-red-600 dark:text-red-400">
            <XCircle className="size-4" />
            Missing Skills ({missingSkills.length})
          </p>
          <div className="flex flex-wrap gap-1.5">
            {missingSkills.length > 0 ? (
              missingSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-800"
                >
                  {skill}
                </Badge>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">
                No missing skills — great match!
              </p>
            )}
          </div>
        </div>

        {/* Additional Skills */}
        <div>
          <p className="text-sm font-medium flex items-center gap-1.5 mb-2 text-blue-600 dark:text-blue-400">
            <PlusCircle className="size-4" />
            Additional Skills ({additionalSkills.length})
          </p>
          <div className="flex flex-wrap gap-1.5">
            {additionalSkills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div>
          <p className="text-sm font-medium mb-2">Programming Languages</p>
          <div className="flex flex-wrap gap-1.5">
            {programmingLanguages.map((lang) => (
              <Badge key={lang} variant="secondary">
                {lang}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Certifications</p>
            <div className="flex flex-wrap gap-1.5">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
