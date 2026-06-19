"use client"

import { useState } from "react"
import { Sparkles, Code, BarChart3, Briefcase } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

const TEMPLATES = {
  "software-engineer": {
    icon: Code,
    title: "Software Engineer",
    description: "Senior full-stack engineer with React & TypeScript",
    text: `Alex Chen
Email: alex.chen@email.com | Phone: (415) 555-0187

Professional Summary
Senior Software Engineer with 6 years of experience building scalable web applications. Expert in React, TypeScript, and Node.js with a proven track record of leading engineering teams and delivering high-impact products.

Technical Skills
Languages: TypeScript, JavaScript, Python, Go, SQL
Frameworks: React, Next.js, Node.js, Express, FastAPI
Infrastructure: AWS (S3, Lambda, CloudFront, ECS), Docker, Kubernetes, Terraform
Databases: PostgreSQL, MongoDB, Redis, Elasticsearch
Tools: Git, GitHub Actions, CircleCI, Datadog, Sentry

Professional Experience
Staff Software Engineer | TechCo | 2021-Present
- Architected and led migration of monolith to microservices, reducing deployment time by 70%
- Built design system used by 40+ engineers across 5 product teams
- Mentored 8 engineers through promotion to senior level
- Implemented real-time collaboration features serving 2M+ users

Senior Software Engineer | StartupLabs | 2018-2021
- Developed React/Next.js dashboard handling 50M+ daily events
- Built CI/CD pipeline reducing release cycle from 2 weeks to daily
- Led migration from REST to GraphQL, improving API response times by 40%
- Established engineering best practices adopted across the organization

Education
M.S. Computer Science | Stanford University | 2016-2018
B.S. Computer Science | UC Berkeley | 2012-2016

Certifications
- AWS Solutions Architect Professional
- Google Cloud Professional Developer
- Kubernetes Application Developer (CKAD)`,
  },
  "data-scientist": {
    icon: BarChart3,
    title: "Data Scientist",
    description: "ML engineer with Python and NLP expertise",
    text: `Priya Patel
Email: priya.patel@email.com | Phone: (212) 555-0342

Professional Summary
Data Scientist with 5 years of experience in machine learning, NLP, and statistical modeling. Passionate about turning complex data into actionable insights and building production ML systems.

Technical Skills
Languages: Python, R, SQL, Julia
ML/AI: PyTorch, TensorFlow, scikit-learn, Hugging Face, LangChain
Data: pandas, NumPy, Spark, Dask, Airflow
Visualization: Tableau, Plotly, Matplotlib, D3.js
Cloud: AWS (SageMaker, EMR, Lambda), GCP (Vertex AI, BigQuery)

Professional Experience
Senior Data Scientist | DataCorp AI | 2022-Present
- Built NLP pipeline processing 10M+ documents with 95% classification accuracy
- Deployed real-time recommendation engine increasing user engagement by 35%
- Led team of 4 data scientists building fraud detection models saving $5M/year
- Developed LLM-powered document analysis system using GPT and BERT

Data Scientist | FinTech Solutions | 2019-2022
- Built customer churn prediction model with 92% accuracy
- Automated reporting pipeline reducing manual analysis time by 60%
- Conducted A/B testing framework used across 15 product teams
- Presented findings to C-suite, influencing $10M+ product investment

Education
Ph.D. Statistics | MIT | 2015-2019
B.S. Mathematics & Computer Science | Carnegie Mellon | 2011-2015

Certifications
- TensorFlow Developer Certificate
- AWS Machine Learning Specialty
- Deep Learning Specialization (deeplearning.ai)`,
  },
  "product-manager": {
    icon: Briefcase,
    title: "Product Manager",
    description: "Technical PM with data-driven decision making",
    text: `Jordan Williams
Email: jordan.williams@email.com | Phone: (206) 555-0912

Professional Summary
Technical Product Manager with 7 years of experience leading cross-functional teams to deliver data-driven products. Background in software engineering with strong analytical and stakeholder management skills.

Technical Skills
Languages: SQL, Python, JavaScript (working knowledge)
Tools: Jira, Linear, Figma, Notion, Mixpanel, Amplitude
Analytics: Looker, Tableau, Google Analytics, Heap
Methodologies: Agile, Scrum, Kanban, OKRs, Design Thinking

Professional Experience
Senior Product Manager | CloudPlatform Inc. | 2021-Present
- Led development of analytics dashboard used by 500+ enterprise customers
- Drove 40% increase in user retention through data-informed feature prioritization
- Managed product roadmap across 3 engineering teams (25 engineers)
- Defined and tracked 15+ KPIs aligned with company OKRs

Product Manager | SaaS Startup | 2018-2021
- Launched 3 new product features generating $2M+ ARR
- Conducted 50+ user research interviews shaping product strategy
- Reduced customer churn by 25% through improved onboarding flow
- Collaborated with design and engineering to ship weekly releases

Software Engineer (prior) | Various Companies | 2015-2018
- Built full-stack features using React, Node.js, and PostgreSQL
- Experience shipping production code gives technical credibility with engineering teams

Education
MBA | University of Washington | 2016-2018
B.S. Computer Science | Georgia Tech | 2011-2015

Certifications
- Certified Scrum Product Owner (CSPO)
- Reforge Product Management Program
- Pragmatic Institute Product Management Certified`,
  },
} as const

type TemplateKey = keyof typeof TEMPLATES

interface ResumeGeneratorProps {
  onSelect: (text: string, fileName: string) => void
  disabled?: boolean
}

export function ResumeGenerator({
  onSelect,
  disabled,
}: ResumeGeneratorProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={disabled}
          className="text-text-secondary border-glass-border hover:bg-glass-bg hover:text-text-primary"
        >
          <Sparkles className="size-4 mr-2 text-lime" />
          Generate Demo Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg border-glass-border bg-obsidian">
        <DialogHeader>
          <DialogTitle className="text-text-primary">
            Demo Resume Generator
          </DialogTitle>
          <DialogDescription className="text-text-secondary">
            Select a sample resume to quickly test the screening assistant.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 pt-4">
          {(Object.keys(TEMPLATES) as TemplateKey[]).map((key) => {
            const template = TEMPLATES[key]
            return (
              <GlassCard
                key={key}
                glowOnHover
                className="p-4 cursor-pointer"
                onClick={() => {
                  onSelect(
                    template.text,
                    `demo-resume-${template.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}.txt`
                  )
                  setOpen(false)
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center size-10 rounded-xl bg-lime/15 text-lime shrink-0 mt-0.5">
                    <template.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-text-primary">
                      {template.title}
                    </h4>
                    <p className="text-xs text-text-secondary">
                      {template.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
