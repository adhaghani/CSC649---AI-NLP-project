# AI Resume Screening Assistant — Complete Project Instructions

## Project Overview

Build a complete university project called **AI Resume Screening Assistant**.

This project is designed to satisfy the requirements of a Design Thinking + NLP course project by solving a real-world recruitment problem using multiple NLP techniques.

---

# Problem Statement

Recruiters and hiring managers spend significant time manually reviewing resumes and matching candidates against job requirements.

The current process is:

- Time consuming
- Subjective
- Inconsistent
- Difficult to scale

### How Might We

How might we help recruiters quickly evaluate candidate suitability using AI-powered resume screening and NLP techniques?

---

# Solution

Develop an AI-powered Resume Screening Assistant that:

1. Accepts a job description
2. Accepts a candidate resume (PDF or DOCX)
3. Extracts important candidate information
4. Compares resume content against job requirements
5. Generates a compatibility score
6. Produces hiring recommendations
7. Displays results in a professional dashboard

---

# NLP Techniques Demonstrated

The project must explicitly demonstrate the following NLP capabilities.

## 1. Entity Extraction

Extract:

- Candidate Name
- Email
- Phone Number
- Skills
- Programming Languages
- Certifications
- Education
- Previous Roles
- Years of Experience

---

## 2. Keyword Extraction

Identify:

- Required skills from Job Description
- Candidate skills from Resume
- Missing skills
- Matching skills

---

## 3. Text Classification

Classify candidates into:

- Strong Hire
- Hire
- Consider
- Reject

---

## 4. Text Summarization

Generate a concise candidate evaluation summary.

Example:

"Candidate demonstrates strong React and TypeScript experience with 4 years of frontend development. Missing AWS and Docker expertise requested by the employer. Recommended for interview consideration."

---

# Technology Stack

Use:

- Next.js 15 App Router
- TypeScript
- TailwindCSS
- shadcn/ui
- DeepSeek API
- React Hook Form
- Zod
- Zustand
- Recharts
- pdf-parse
- mammoth
- Lucide React

---

# Design Requirements

The application should resemble a modern SaaS platform.

Design principles:

- Clean
- Professional
- HR-focused
- Responsive
- Modern dashboard aesthetic

---

## Color Palette

Primary:
#2563EB

Secondary:
#0F172A

Accent:
#14B8A6

Background:
#F8FAFC

---

# Application Pages

## 1. Landing Page

Create a professional SaaS landing page.

Sections:

### Navbar

- Logo
- Features
- How It Works
- Dashboard
- Get Started

### Hero Section

Headline:

"AI-Powered Resume Screening for Smarter Hiring"

Subheadline:

"Analyze resumes, identify skills, and make hiring decisions faster using AI."

CTA Buttons:

- Try Demo
- View Features

### Features Section

Cards:

- Resume Analysis
- Skill Matching
- Candidate Scoring
- AI Recommendations

### How It Works

Step 1:
Paste Job Description

Step 2:
Upload Resume

Step 3:
AI Analysis

Step 4:
Hiring Recommendation

### CTA Section

Encourage users to start screening candidates.

---

## 2. Dashboard

Main application interface.

### Layout

Left Panel:

Job Description Input

Center Panel:

Resume Upload

Right Panel:

Analysis Results

---

### Job Description Input

Provide:

- Large textarea
- Character counter
- Sample job description button

---

### Resume Upload

Support:

- PDF
- DOCX

Display:

- File name
- Upload status
- Extracted text preview

---

### Analyze Button

Button label:

"Analyze Candidate"

Display loading states while AI processing occurs.

---

## 3. Results Page

Display screening results.

---

### Candidate Profile Card

Display:

- Name
- Email
- Phone
- Education
- Experience

---

### Match Score Section

Show:

Overall Match Score

Range:

0 - 100

Use:

- Circular progress
- Gauge chart
- Progress indicator

---

### Score Breakdown

Display:

- Skills Score
- Experience Score
- Education Score

---

### Skill Analysis

Sections:

Matched Skills

Missing Skills

Additional Skills

Use badges/tags.

---

### Strengths

Display AI-generated strengths.

---

### Weaknesses

Display AI-generated weaknesses.

---

### AI Summary

Display summarized candidate evaluation.

---

### Hiring Recommendation

Possible values:

- Strong Hire
- Hire
- Consider
- Reject

Use color-coded indicators.

---

## 4. Analytics Page

Create recruiter analytics dashboard.

Use Recharts.

Display:

### Candidate Evaluation Breakdown

Chart showing:

- Skills
- Experience
- Education

---

### Skill Match Distribution

Chart showing:

- Matched Skills
- Missing Skills

---

### Resume Quality Score

Score from:

0 - 100

---

### ATS Compatibility Score

Score from:

0 - 100

---

# DeepSeek Integration

Create:

app/api/analyze-resume/route.ts

Use:

Base URL:

https://api.deepseek.com

Model:

deepseek-chat

Environment Variable:

DEEPSEEK_API_KEY

---

# AI Processing Flow

Step 1:

Receive:

- Job Description
- Resume Text

Step 2:

Construct AI Prompt

Step 3:

Send to DeepSeek

Step 4:

Receive structured JSON

Step 5:

Validate with Zod

Step 6:

Display results

---

# Required AI Prompt

The API route should instruct DeepSeek to return ONLY JSON.

Expected format:

{
"candidateName": "",
"email": "",
"phone": "",
"skills": [],
"education": "",
"experienceYears": 0,
"matchScore": 0,
"skillsScore": 0,
"experienceScore": 0,
"educationScore": 0,
"strengths": [],
"weaknesses": [],
"missingSkills": [],
"summary": "",
"recommendation": ""
}

No markdown.

No explanations.

JSON only.

---

# File Processing

## PDF

Use:

pdf-parse

Extract all text before analysis.

---

## DOCX

Use:

mammoth

Extract all text before analysis.

---

# State Management

Use Zustand.

Store:

- Job Description
- Uploaded Resume
- Analysis Results
- Loading State
- Error State

---

# Validation

Use Zod for:

- Resume schema
- API responses
- Form validation

---

# shadcn Components

Use:

- Card
- Tabs
- Button
- Badge
- Progress
- Separator
- Dialog
- Alert
- Sheet
- Skeleton
- Tooltip

Create reusable UI components.

---

# Project Structure

/app

/components

/components/dashboard

/components/charts

/components/upload

/components/results

/lib

/lib/ai

/lib/parsers

/lib/validators

/hooks

/store

/types

/actions

/public

---

# Features

Implement:

### Core Features

- Resume Upload
- Job Description Input
- AI Resume Analysis
- Skill Matching
- Candidate Ranking
- Hiring Recommendation

---

### Additional Features

- Export Analysis Report PDF
- Demo Resume Generator
- Dark Mode
- Analytics Dashboard
- ATS Compatibility Score
- Resume Quality Score
- Loading Skeletons
- Empty States
- Error Boundaries
- Mobile Responsive Layout

---

# System Architecture

Frontend:

Next.js + shadcn/ui

↓

API Route

↓

DeepSeek API

↓

Structured JSON Response

↓

Dashboard Results

---

# Demo Data

Provide:

1 sample Job Description

1 sample Resume

1 mocked AI response

Allow project demonstration even without an API key.

---

# Performance Requirements

- Fully responsive
- Type-safe
- Production-ready structure
- Reusable components
- No TypeScript errors
- No ESLint errors

---

# Deliverables

Generate:

1. Complete Next.js project
2. Tailwind configuration
3. shadcn setup
4. TypeScript types
5. Zustand store
6. API route
7. DeepSeek integration
8. File upload system
9. Charts and analytics
10. PDF export functionality
11. README.md
12. Sample data
13. Mock fallback mode

The final system should clearly demonstrate:

- Entity Extraction
- Keyword Extraction
- Text Classification
- Text Summarization

while maintaining a professional HR SaaS user experience suitable for a university NLP project presentation.
