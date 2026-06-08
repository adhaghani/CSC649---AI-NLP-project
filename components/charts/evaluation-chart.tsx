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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EvaluationChartProps {
  skillsScore: number
  experienceScore: number
  educationScore: number
}

const SCORE_COLORS = {
  skills: "#2563EB",
  experience: "#14B8A6",
  education: "#8B5CF6",
}

export function EvaluationChart({
  skillsScore,
  experienceScore,
  educationScore,
}: EvaluationChartProps) {
  const data = [
    { name: "Skills", score: skillsScore, fill: SCORE_COLORS.skills },
    {
      name: "Experience",
      score: experienceScore,
      fill: SCORE_COLORS.experience,
    },
    { name: "Education", score: educationScore, fill: SCORE_COLORS.education },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Candidate Evaluation Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              className="text-muted-foreground text-xs"
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 12 }}
              className="text-muted-foreground text-xs"
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid hsl(var(--border))",
                backgroundColor: "hsl(var(--background))",
              }}
              formatter={(value) => [`${value}%`, "Score"]}
            />
            <Bar dataKey="score" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
