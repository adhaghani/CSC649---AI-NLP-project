import Link from "next/link"
import {
  FileSearch,
  Target,
  BarChart3,
  Sparkles,
  ArrowRight,
  FileText,
  Upload,
  Brain,
  Award,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: FileSearch,
    title: "Resume Analysis",
    description:
      "Extract key information from resumes including skills, experience, education, and certifications using advanced NLP techniques.",
  },
  {
    icon: Target,
    title: "Skill Matching",
    description:
      "Automatically match candidate skills against job requirements. Identify matching, missing, and additional skills instantly.",
  },
  {
    icon: BarChart3,
    title: "Candidate Scoring",
    description:
      "Generate comprehensive compatibility scores with detailed breakdowns for skills, experience, and education fit.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description:
      "Receive intelligent hiring recommendations powered by AI analysis. Classify candidates as Strong Hire, Hire, Consider, or Reject.",
  },
]

const steps = [
  {
    step: 1,
    icon: FileText,
    title: "Paste Job Description",
    description:
      "Enter or paste the job description with required skills, qualifications, and experience.",
  },
  {
    step: 2,
    icon: Upload,
    title: "Upload Resume",
    description:
      "Upload candidate resumes in PDF or DOCX format. Our parser extracts all relevant text automatically.",
  },
  {
    step: 3,
    icon: Brain,
    title: "AI Analysis",
    description:
      "Our NLP engine analyzes the resume against the job description using entity extraction, keyword matching, and classification.",
  },
  {
    step: 4,
    icon: Award,
    title: "Hiring Recommendation",
    description:
      "Receive a detailed report with match scores, skill analysis, strengths & weaknesses, and a final hiring recommendation.",
  },
]

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 size-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 size-[500px] rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative mx-auto px-4 pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Sparkles className="size-3 mr-1" />
              AI-Powered NLP Screening
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              AI-Powered Resume Screening for{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Smarter Hiring
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Analyze resumes, identify skills, and make hiring decisions faster
              using AI. Extract entities, match keywords, classify candidates,
              and generate smart recommendations — all in one platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="text-base px-8">
                  <Sparkles className="size-5 mr-2" />
                  Try Demo
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="text-base px-8">
                  View Features
                  <ArrowRight className="size-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Powerful NLP Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our AI screening assistant leverages multiple NLP techniques to
              provide comprehensive candidate analysis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border border-border/50 hover:border-primary/30 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="size-6" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four simple steps to screen candidates with AI-powered precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative text-center">
                {/* Connector line (desktop only) */}
                {s.step < 4 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
                )}
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center size-16 rounded-2xl bg-primary/10 text-primary mb-4">
                    <s.icon className="size-7" />
                    <span className="absolute -top-2 -right-2 flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Start screening candidates with AI-powered precision. Upload
              resumes, analyze skills, and make confident hiring decisions in
              seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="text-base px-8">
                  Start Screening Now
                  <ArrowRight className="size-5 ml-2" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="text-base px-8">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "Entity Extraction", desc: "Name, email, skills & more" },
                { label: "Keyword Analysis", desc: "Match & gap identification" },
                { label: "AI Classification", desc: "Smart hiring recommendations" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-accent shrink-0" />
                  <div className="text-left">
                    <p className="font-medium text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
