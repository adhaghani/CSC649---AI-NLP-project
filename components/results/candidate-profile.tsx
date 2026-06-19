import type { AnalysisResult } from "@/types"
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
} from "@/components/ui/glass-card"
import { Mail, Phone, GraduationCap, Briefcase } from "lucide-react"

interface CandidateProfileProps {
  candidate: Pick<
    AnalysisResult,
    | "candidateName"
    | "email"
    | "phone"
    | "education"
    | "experienceYears"
    | "previousRoles"
  >
}

export function CandidateProfile({ candidate }: CandidateProfileProps) {
  return (
    <GlassCard>
      <GlassCardHeader>
        <GlassCardTitle>Candidate Profile</GlassCardTitle>
      </GlassCardHeader>
      <GlassCardContent className="space-y-4">
        {/* Avatar & Name */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-16 rounded-full bg-lime/15 text-lime text-2xl font-bold">
            {candidate.candidateName
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              {candidate.candidateName}
            </h3>
            <p className="text-sm text-text-secondary">
              {candidate.experienceYears} years of experience
            </p>
          </div>
        </div>

        {/* Contact details */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="size-4 text-text-secondary shrink-0" />
            <span className="text-text-secondary truncate">
              {candidate.email}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="size-4 text-text-secondary shrink-0" />
            <span className="text-text-secondary">{candidate.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <GraduationCap className="size-4 text-text-secondary shrink-0" />
            <span className="text-text-secondary truncate">
              {candidate.education}
            </span>
          </div>
        </div>

        {/* Previous Roles */}
        {candidate.previousRoles.length > 0 && (
          <div className="pt-2">
            <p className="text-xs font-medium text-text-secondary mb-2 flex items-center gap-1">
              <Briefcase className="size-3" />
              Previous Roles
            </p>
            <div className="flex flex-wrap gap-1">
              {candidate.previousRoles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center rounded-full border border-glass-border bg-white/[0.05] px-2.5 py-0.5 text-xs text-text-secondary"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        )}
      </GlassCardContent>
    </GlassCard>
  )
}
