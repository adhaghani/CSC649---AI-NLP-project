"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SkillDistributionChartProps {
  matchedCount: number
  missingCount: number
}

const COLORS = {
  matched: "#14B8A6",
  missing: "#EF4444",
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
  const matchPercent = total > 0 ? Math.round((matchedCount / total) * 100) : 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skill Match Distribution</CardTitle>
      </CardHeader>
      <CardContent>
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
                  borderRadius: "8px",
                  border: "1px solid hsl(var(--border))",
                  backgroundColor: "hsl(var(--background))",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-muted-foreground text-center mt-2">
            <span className="text-emerald-500 font-semibold">{matchPercent}%</span>{" "}
            of required skills matched
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
