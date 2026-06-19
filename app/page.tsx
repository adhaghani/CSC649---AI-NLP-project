import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { NeonButton } from "@/components/ui/neon-button"
import { SystemStatus } from "@/components/ui/system-status"
import { GlowSphere } from "@/components/ui/glow-sphere"
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/glass-card"

const features = [
  {
    title: "Resume Analysis",
    description:
      "Extract key information from resumes including skills, experience, education, and certifications using advanced NLP techniques.",
    className: "col-span-2 row-span-2",
    variant: "large" as const,
  },
  {
    title: "Skill Matching",
    description:
      "Automatically match candidate skills against job requirements. Identify matching, missing, and additional skills instantly.",
    className: "col-span-1 row-span-2",
    variant: "tall" as const,
  },
  {
    title: "Candidate Scoring",
    description:
      "Generate comprehensive compatibility scores with detailed breakdowns for skills, experience, and education fit.",
    className: "col-span-1 row-span-1",
    variant: "small" as const,
  },
  {
    title: "AI Recommendations",
    description:
      "Receive intelligent hiring recommendations powered by AI analysis. Classify candidates as Strong Hire, Hire, Consider, or Reject.",
    className: "col-span-1 row-span-1",
    variant: "accent" as const,
  },
]

const methodologySteps = [
  {
    step: "01",
    title: "Job Description Input",
    description:
      "Enter the required skills, qualifications, and experience for the position. Our system establishes the benchmark for candidate evaluation.",
  },
  {
    step: "02",
    title: "Resume Parsing & NLP",
    description:
      "Upload a resume and our NLP engine extracts entities, identifies keywords, and classifies the document structure with high precision.",
  },
  {
    step: "03",
    title: "AI-Powered Scoring",
    description:
      "The AI compares extracted data against requirements using weighted scoring across skills, experience, and education dimensions.",
  },
]

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-36 lg:pb-24">
        {/* Background glow spheres */}
        <GlowSphere
          color="lime"
          size="700px"
          className="top-0 right-0 -translate-y-1/3 translate-x-1/4"
          opacity={15}
        />
        <GlowSphere
          color="emerald"
          size="500px"
          className="bottom-0 left-0 translate-y-1/3 -translate-x-1/4"
          opacity={10}
          blur={100}
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left — Text content (7 cols) */}
            <div className="lg:col-span-7">
              <SystemStatus
                label="AI-POWERED NLP SCREENING"
                status="online"
                className="mb-6"
              />

              <h1 className="text-[4rem] sm:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-bold leading-[0.85] tracking-[-0.06em] text-text-primary">
                Screen
                <br />
                Resumes
                <br />
                <span className="italic bg-linear-to-r from-lime to-text-primary bg-clip-text text-transparent">
                  With AI
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base sm:text-lg text-text-secondary leading-relaxed">
                Analyze resumes, identify skills, and make hiring decisions
                faster using advanced NLP. Extract entities, match keywords, and
                classify candidates — all in one powerful platform.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/dashboard">
                  <NeonButton size="lg">
                    <Sparkles className="size-5" />
                    Try Demo
                  </NeonButton>
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 text-text-secondary hover:text-lime transition-colors duration-200 text-sm font-medium"
                >
                  View Features
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right — Floating glass mockup (5 cols) */}
            <div className="hidden lg:block lg:col-span-5 relative h-[500px]">
              {/* Main floating card */}
              <div className="absolute top-10 right-0 w-[320px] animate-float rounded-[2rem] bg-glass-bg backdrop-blur-[16px] border border-glass-border p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-lime/20 flex items-center justify-center">
                    <Sparkles className="size-5 text-lime" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      AI Analysis
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-disabled">
                      Processing...
                    </p>
                  </div>
                </div>
                {/* Mini bars */}
                <div className="space-y-3">
                  {[85, 72, 93, 64].map((val, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-text-disabled w-16 uppercase tracking-wider">
                        {["Skills", "Exp.", "Edu.", "Match"][i]}
                      </span>
                      <div className="flex-1 h-2 rounded-full bg-white/[0.05] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-lime transition-all duration-1000"
                          style={{ width: `${val}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-lime tabular-nums">
                        {val}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Smaller floating card */}
              <div
                className="absolute top-48 left-0 w-48 animate-float rounded-[1.5rem] bg-glass-bg backdrop-blur-[16px] border border-glass-border p-4 shadow-xl"
                style={{ animationDelay: "3s" }}
              >
                <p className="text-xs font-semibold text-text-primary mb-2">
                  Candidate Score
                </p>
                <p className="text-3xl font-bold text-lime tracking-[-0.04em]">
                  87%
                </p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-disabled mt-1">
                  Strong Hire
                </p>
              </div>

              {/* AI Cursor label */}
              <div className="absolute bottom-8 right-12 flex items-center gap-2 px-4 py-2 rounded-full bg-lime text-black text-xs font-bold shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                <span className="size-2 rounded-full bg-black animate-pulse" />
                <span className="font-mono uppercase tracking-[0.15em]">
                  AI Cursor
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BENTO GRID FEATURES
          ═══════════════════════════════════════════════════════════ */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-text-primary mb-4">
              Powerful NLP Features
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Our AI screening assistant leverages multiple NLP techniques to
              provide comprehensive candidate analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Card 1 — Large (2x2) with data viz */}
            <div className="col-span-1 md:col-span-2 row-span-2">
              <GlassCard glowOnHover className="rounded-[2.5rem] h-full">
                <GlassCardHeader>
                  <GlassCardTitle className="text-lg">
                    {features[0].title}
                  </GlassCardTitle>
                  <GlassCardDescription className="text-text-secondary">
                    {features[0].description}
                  </GlassCardDescription>
                </GlassCardHeader>
                <GlassCardContent className="flex-1 flex items-end gap-2 pb-4">
                  {/* CSS-only vertical bar chart */}
                  {[40, 65, 50, 80, 45, 70, 55, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg bg-lime transition-all duration-500 hover:bg-lime/80"
                      style={{
                        height: `${h}%`,
                        opacity: 0.3 + h / 200,
                      }}
                    />
                  ))}
                </GlassCardContent>
              </GlassCard>
            </div>

            {/* Card 2 — Tall (1x2) with color swatches */}
            <div className="col-span-1 row-span-2">
              <GlassCard glowOnHover className="rounded-[2.5rem] h-full">
                <GlassCardHeader>
                  <GlassCardTitle className="text-sm">
                    {features[1].title}
                  </GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent className="flex-1 flex flex-col gap-2">
                  {/* Token/color swatches */}
                  {[
                    ["MATCHED", "#ccff00"],
                    ["ADDITIONAL", "#10b981"],
                    ["MISSING", "#ff4444"],
                    ["LANGUAGE", "#a78bfa"],
                    ["CERT", "#fbbf24"],
                  ].map(([label, color]) => (
                    <div key={label} className="flex items-center gap-3">
                      <span
                        className="size-3 rounded-sm shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-secondary">
                        {label}
                      </span>
                    </div>
                  ))}
                  <GlassCardDescription className="mt-auto pt-2 text-xs">
                    {features[1].description}
                  </GlassCardDescription>
                </GlassCardContent>
              </GlassCard>
            </div>

            {/* Card 3 — Small */}
            <div className="col-span-1 row-span-1">
              <GlassCard glowOnHover className="rounded-[2.5rem] h-full">
                <GlassCardHeader>
                  <GlassCardTitle className="text-sm">
                    {features[2].title}
                  </GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <GlassCardDescription>
                    {features[2].description}
                  </GlassCardDescription>
                </GlassCardContent>
              </GlassCard>
            </div>

            {/* Card 4 — Accent (solid lime) */}
            <div className="col-span-1 row-span-1">
              <GlassCard
                glowOnHover
                className="rounded-[2.5rem] !bg-lime !border-lime !backdrop-blur-none h-full"
              >
                <GlassCardHeader>
                  <GlassCardTitle className="text-sm !text-black">
                    {features[3].title}
                  </GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <GlassCardDescription className="!text-black/70">
                    {features[3].description}
                  </GlassCardDescription>
                </GlassCardContent>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          METHODOLOGY — Contrast Section
          ═══════════════════════════════════════════════════════════ */}
      <section
        id="how-it-works"
        className="bg-[#e5e5e5] text-black rounded-t-[4rem] pt-20 pb-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Numbered list */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-black/40 mb-4">
                Methodology
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-black mb-10">
                How It Works
              </h2>

              <div className="space-y-8">
                {methodologySteps.map((m) => (
                  <div key={m.step} className="flex gap-5">
                    <span className="flex items-center justify-center shrink-0 size-12 rounded-full bg-lime text-black font-mono text-sm font-bold tracking-tighter">
                      {m.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-black text-lg mb-1">
                        {m.title}
                      </h3>
                      <p className="text-sm text-black/60 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Portrait + testimonial */}
            <div className="relative flex justify-center">
              {/* Greyscale circular portrait placeholder */}
              <div className="size-64 lg:size-80 rounded-full bg-black/10 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="size-20 rounded-full bg-black/20 mx-auto mb-3" />
                  <div className="w-24 h-3 rounded-full bg-black/20 mx-auto mb-2" />
                  <div className="w-16 h-3 rounded-full bg-black/20 mx-auto" />
                </div>
              </div>

              {/* Glass testimonial card overlay */}
              <div className="absolute -bottom-4 -right-4 lg:right-8 w-56 rounded-[1.5rem] bg-white/60 backdrop-blur-[16px] border border-white/40 p-4 shadow-lg">
                <p className="text-xs text-black/60 leading-relaxed mb-3">
                  &ldquo;The AI screening accuracy is remarkable. We&apos;ve
                  reduced our initial review time by 70%.&rdquo;
                </p>
                <p className="text-sm font-semibold text-black">
                  — HR Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-obsidian">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-text-primary mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Start screening candidates with AI-powered precision. Upload
              resumes, analyze skills, and make confident hiring decisions in
              seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <NeonButton size="lg">
                  Start Screening Now
                  <ArrowRight className="size-5" />
                </NeonButton>
              </Link>
            </div>

            {/* Feature highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                {
                  label: "Entity Extraction",
                  desc: "Name, email, skills & more",
                },
                {
                  label: "Keyword Analysis",
                  desc: "Match & gap identification",
                },
                {
                  label: "AI Classification",
                  desc: "Smart hiring recommendations",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-glass-bg border border-glass-border"
                >
                  <CheckCircle2 className="size-5 text-lime shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {item.label}
                    </p>
                    <p className="text-xs text-text-secondary">{item.desc}</p>
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
