# AI Resume Screening Assistant

An AI-powered resume screening platform built with Next.js 16, TypeScript, and the DeepSeek API. Designed for a university Design Thinking + NLP course project.

## Overview

ResumeScreener helps recruiters quickly evaluate candidate suitability by leveraging multiple NLP techniques:
- **Entity Extraction** — Name, email, phone, skills, programming languages, certifications, education, roles, experience
- **Keyword Extraction** — Required skills from job description vs. candidate skills with match/missing identification
- **Text Classification** — Strong Hire, Hire, Consider, or Reject classification
- **Text Summarization** — Concise AI-generated candidate evaluation summaries

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | Full-stack React framework |
| TypeScript | Type safety |
| TailwindCSS v4 | Utility-first CSS |
| shadcn/ui | Component library |
| DeepSeek API | AI/NLP analysis |
| Zustand | State management |
| Zod | Schema validation |
| React Hook Form | Form handling |
| Recharts | Data visualization |
| pdf-parse | PDF resume parsing |
| mammoth | DOCX resume parsing |
| Lucide React | Icons |

## Getting Started

### Prerequisites
- [Bun](https://bun.sh) (or npm/yarn)
- DeepSeek API key (optional — demo mode available)

### Installation

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.local.example .env.local
# Add your DEEPSEEK_API_KEY to .env.local (optional)

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Mode

If no `DEEPSEEK_API_KEY` is set, the application runs in demo mode with mock analysis data, allowing full demonstration without an API key.

## Project Structure

```
├── app/
│   ├── api/analyze-resume/route.ts  # DeepSeek API integration
│   ├── dashboard/
│   │   ├── page.tsx                 # Main analysis interface
│   │   ├── analytics/page.tsx       # Charts & analytics
│   │   └── results/page.tsx         # Detailed results
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Landing page
├── components/
│   ├── charts/                      # Recharts components
│   ├── dashboard/                   # Dashboard-specific components
│   ├── results/                     # Results display components
│   ├── skeletons/                   # Loading skeletons
│   ├── ui/                          # shadcn/ui components
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── empty-state.tsx
│   └── error-boundary.tsx
├── lib/
│   ├── ai/                          # DeepSeek client & prompt
│   ├── parsers/                     # PDF & DOCX parsers
│   ├── validators/                  # Zod schemas
│   ├── sample-data.ts               # Demo data
│   ├── export-pdf.ts                # Report export
│   └── utils.ts                     # Utility functions
├── store/
│   └── analysis-store.ts            # Zustand state management
└── types/
    └── index.ts                     # TypeScript interfaces
```

## Features

- Resume upload (PDF & DOCX) with drag-and-drop
- Job description input with character counter
- AI-powered resume analysis via DeepSeek
- Entity extraction (skills, experience, education, contact info)
- Skill matching with visual breakdown
- Candidate classification (Strong Hire / Hire / Consider / Reject)
- Match score with circular gauge visualization
- Strengths & weaknesses analysis
- AI-generated evaluation summary
- Analytics dashboard with Recharts
- ATS compatibility scoring
- Resume quality scoring
- Export analysis report
- Dark mode support
- Fully responsive design
- Demo mode without API key

## NLP Techniques Demonstrated

1. **Entity Extraction** — Extracts candidate name, email, phone, skills, programming languages, certifications, education, previous roles, and years of experience from unstructured resume text.

2. **Keyword Extraction** — Identifies required skills from the job description and matches them against extracted resume skills. Reports matched, missing, and additional skills.

3. **Text Classification** — Classifies candidates into four categories (Strong Hire, Hire, Consider, Reject) based on comprehensive analysis of skills, experience, and education fit.

4. **Text Summarization** — Generates a concise, human-readable evaluation summary of the candidate's overall fit for the position.

## License

Built for educational/university project purposes.
