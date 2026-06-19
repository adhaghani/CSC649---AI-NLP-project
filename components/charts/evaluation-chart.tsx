"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
} from "@/components/ui/glass-card"

interface EvaluationChartProps {
  skillsScore: number
  experienceScore: number
  educationScore: number
}

const SCORE_COLORS = {
  skills: "#ccff00",
  experience: "#10b981",
  education: "#a78bfa",
}

export function EvaluationChart({
  skillsScore,
  experienceScore,
  educationScore,
}: EvaluationChartProps) {
  const data = [
    { name: "Skills", score: skillsScore, fill: SCORE_COLORS.skills },
    { name: "Experience", score: experienceScore, fill: SCORE_COLORS.experience },
    { name: "Education", score: educationScore, fill: SCORE_COLORS.education },
  ]

  return (
    <GlassCard>
      <GlassCardHeader>
        <GlassCardTitle>Candidate Evaluation Breakdown</GlassCardTitle>
      </GlassCardHeader>
      <GlassCardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.06)"
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "rgba(235,235,235,0.6)" }}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 12, fill: "rgba(235,235,235,0.6)" }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "#0c0c0c",
                color: "#ebebeb",
              }}
              formatter={(value) => [`${value}%`, "Score"]}
            />
            <Bar dataKey="score" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </GlassCardContent>
    </GlassCard>
  )
}
