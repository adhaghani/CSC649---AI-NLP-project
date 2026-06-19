"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts"
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
} from "@/components/ui/glass-card"

interface SkillDistributionChartProps {
  matchedCount: number
  missingCount: number
}

const COLORS = {
  matched: "#10b981",
  missing: "#ff4444",
}

export function SkillDistributionChart({
  matchedCount,
  missingCount,
}: SkillDistributionChartProps) {
  const data = [
    { name: "Matched Skills", value: matchedCount, color: COLORS.matched },
    { name: "Missing Skills", value: missingCount, color: COLORS.missing },
  ]

  const total = matchedCount + missingCount
  const matchPercent =
    total > 0 ? Math.round((matchedCount / total) * 100) : 0

  return (
    <GlassCard>
      <GlassCardHeader>
        <GlassCardTitle>Skill Match Distribution</GlassCardTitle>
      </GlassCardHeader>
      <GlassCardContent>
        <div className="flex flex-col items-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backgroundColor: "#0c0c0c",
                  color: "#ebebeb",
                }}
              />
              <Legend
                formatter={(value) => (
                  <span style={{ color: "rgba(235,235,235,0.6)" }}>
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-text-secondary text-center mt-2">
            <span className="text-emerald-400 font-semibold">
              {matchPercent}%
            </span>{" "}
            of required skills matched
          </p>
        </div>
      </GlassCardContent>
    </GlassCard>
  )
}
