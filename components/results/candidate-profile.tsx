import type { AnalysisResult } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <Card>
      <CardHeader>
        <CardTitle>Candidate Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Avatar & Name */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary text-2xl font-bold">
            {candidate.candidateName
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              {candidate.candidateName}
            </h3>
            <p className="text-sm text-muted-foreground">
              {candidate.experienceYears} years of experience
            </p>
          </div>
        </div>

        {/* Contact details */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="size-4 text-muted-foreground shrink-0" />
            <span className="text-muted-foreground truncate">
              {candidate.email}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="size-4 text-muted-foreground shrink-0" />
            <span className="text-muted-foreground">{candidate.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <GraduationCap className="size-4 text-muted-foreground shrink-0" />
            <span className="text-muted-foreground truncate">
              {candidate.education}
            </span>
          </div>
        </div>

        {/* Previous Roles */}
        {candidate.previousRoles.length > 0 && (
          <div className="pt-2">
            <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <Briefcase className="size-3" />
              Previous Roles
            </p>
            <div className="flex flex-wrap gap-1">
              {candidate.previousRoles.map((role) => (
                <Badge key={role} variant="secondary" className="text-xs">
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
