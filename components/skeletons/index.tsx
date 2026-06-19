import { Skeleton } from "@/components/ui/skeleton"
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
} from "@/components/ui/glass-card"

export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <GlassCard>
        <GlassCardHeader>
          <Skeleton className="h-6 w-48 bg-white/[0.08]" />
          <Skeleton className="h-4 w-64 bg-white/[0.05]" />
        </GlassCardHeader>
        <GlassCardContent>
          <Skeleton className="h-48 w-full bg-white/[0.08]" />
        </GlassCardContent>
      </GlassCard>

      <GlassCard>
        <GlassCardHeader>
          <Skeleton className="h-6 w-40 bg-white/[0.08]" />
          <Skeleton className="h-4 w-56 bg-white/[0.05]" />
        </GlassCardHeader>
        <GlassCardContent>
          <Skeleton className="h-48 w-full bg-white/[0.08]" />
        </GlassCardContent>
      </GlassCard>

      <GlassCard>
        <GlassCardHeader>
          <Skeleton className="h-6 w-36 bg-white/[0.08]" />
          <Skeleton className="h-4 w-52 bg-white/[0.05]" />
        </GlassCardHeader>
        <GlassCardContent className="space-y-4">
          <Skeleton className="h-32 w-full bg-white/[0.08]" />
          <Skeleton className="h-8 w-full bg-white/[0.08]" />
          <Skeleton className="h-8 w-3/4 bg-white/[0.08]" />
        </GlassCardContent>
      </GlassCard>
    </div>
  )
}

export function ResultsSkeleton() {
  return (
    <div className="space-y-6">
      <GlassCard>
        <GlassCardHeader>
          <Skeleton className="h-6 w-48 bg-white/[0.08]" />
        </GlassCardHeader>
        <GlassCardContent className="space-y-3">
          <Skeleton className="h-4 w-full bg-white/[0.05]" />
          <Skeleton className="h-4 w-3/4 bg-white/[0.05]" />
          <Skeleton className="h-4 w-1/2 bg-white/[0.05]" />
        </GlassCardContent>
      </GlassCard>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard>
          <GlassCardHeader>
            <Skeleton className="h-6 w-32 bg-white/[0.08]" />
          </GlassCardHeader>
          <GlassCardContent>
            <Skeleton className="h-40 w-full bg-white/[0.08]" />
          </GlassCardContent>
        </GlassCard>
        <GlassCard>
          <GlassCardHeader>
            <Skeleton className="h-6 w-32 bg-white/[0.08]" />
          </GlassCardHeader>
          <GlassCardContent>
            <Skeleton className="h-40 w-full bg-white/[0.08]" />
          </GlassCardContent>
        </GlassCard>
      </div>
    </div>
  )
}

export function AnalyticsSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <GlassCard key={i}>
            <GlassCardHeader>
              <Skeleton className="h-4 w-24 bg-white/[0.08]" />
            </GlassCardHeader>
            <GlassCardContent>
              <Skeleton className="h-8 w-16 bg-white/[0.08]" />
            </GlassCardContent>
          </GlassCard>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard>
          <GlassCardHeader>
            <Skeleton className="h-6 w-40 bg-white/[0.08]" />
          </GlassCardHeader>
          <GlassCardContent>
            <Skeleton className="h-64 w-full bg-white/[0.08]" />
          </GlassCardContent>
        </GlassCard>
        <GlassCard>
          <GlassCardHeader>
            <Skeleton className="h-6 w-40 bg-white/[0.08]" />
          </GlassCardHeader>
          <GlassCardContent>
            <Skeleton className="h-64 w-full bg-white/[0.08]" />
          </GlassCardContent>
        </GlassCard>
      </div>
    </div>
  )
}
