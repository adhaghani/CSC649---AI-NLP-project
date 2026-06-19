import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
} from "@/components/ui/glass-card"
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
    <GlassCard>
      <GlassCardHeader>
        <GlassCardTitle>Skill Analysis</GlassCardTitle>
      </GlassCardHeader>
      <GlassCardContent className="space-y-6">
        {/* Matched Skills */}
        <div>
          <p className="text-sm font-medium flex items-center gap-1.5 mb-2 text-emerald-400">
            <CheckCircle2 className="size-4" />
            Matched Skills ({matchedSkills.length})
          </p>
          <div className="flex flex-wrap gap-1.5">
            {matchedSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Skills */}
        <div>
          <p className="text-sm font-medium flex items-center gap-1.5 mb-2 text-red-400">
            <XCircle className="size-4" />
            Missing Skills ({missingSkills.length})
          </p>
          <div className="flex flex-wrap gap-1.5">
            {missingSkills.length > 0 ? (
              missingSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-0.5 text-xs text-red-400"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-sm text-text-secondary">
                No missing skills — great match!
              </p>
            )}
          </div>
        </div>

        {/* Additional Skills */}
        <div>
          <p className="text-sm font-medium flex items-center gap-1.5 mb-2 text-lime">
            <PlusCircle className="size-4" />
            Additional Skills ({additionalSkills.length})
          </p>
          <div className="flex flex-wrap gap-1.5">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-lime/20 bg-lime/10 px-2.5 py-0.5 text-xs text-lime"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div>
          <p className="text-sm font-medium text-text-primary mb-2">
            Programming Languages
          </p>
          <div className="flex flex-wrap gap-1.5">
            {programmingLanguages.map((lang) => (
              <span
                key={lang}
                className="inline-flex items-center rounded-full border border-glass-border bg-white/[0.05] px-2.5 py-0.5 text-xs text-text-secondary"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <p className="text-sm font-medium text-text-primary mb-2">
              Certifications
            </p>
            <div className="flex flex-wrap gap-1.5">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center rounded-full border border-glass-border bg-white/[0.05] px-2.5 py-0.5 text-xs text-text-secondary"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}
      </GlassCardContent>
    </GlassCard>
  )
}
