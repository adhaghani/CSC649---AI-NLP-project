import type { AnalysisResult } from "@/types"

export const SAMPLE_JOB_DESCRIPTION = `Senior Frontend Developer

About the Role:
We are looking for a Senior Frontend Developer to join our engineering team. You will be responsible for building and maintaining high-quality web applications using modern frontend technologies.

Requirements:
- 5+ years of professional frontend development experience
- Expert knowledge of React, TypeScript, and Next.js
- Strong understanding of CSS, TailwindCSS, and responsive design
- Experience with state management (Redux, Zustand, or similar)
- Familiarity with REST APIs and GraphQL
- Experience with testing frameworks (Jest, React Testing Library)
- Knowledge of AWS services (S3, CloudFront, Lambda)
- Experience with Docker and CI/CD pipelines
- Strong communication and collaboration skills
- Bachelor's degree in Computer Science or related field

Nice to Have:
- Experience with Node.js backend development
- Knowledge of WebSocket and real-time applications
- Open source contributions
- Experience with design systems and component libraries`

export const SAMPLE_RESUME = `John Doe
Email: john.doe@email.com
Phone: (555) 123-4567

Professional Summary:
Senior Frontend Developer with 4 years of experience building scalable web applications using React and TypeScript. Passionate about creating intuitive user interfaces and mentoring junior developers.

Technical Skills:
- Languages: JavaScript, TypeScript, HTML, CSS, Python
- Frameworks: React, Next.js, Node.js
- Styling: TailwindCSS, CSS-in-JS, SASS
- State Management: Redux, Zustand
- Testing: Jest, React Testing Library
- Tools: Git, Webpack, Docker
- Databases: PostgreSQL, MongoDB

Professional Experience:

Senior Frontend Developer | TechCorp Inc. | 2022 - Present
- Led development of a customer-facing dashboard using React and TypeScript
- Implemented state management with Zustand, reducing boilerplate by 40%
- Built reusable component library used across 3 product teams
- Mentored 3 junior developers on React best practices

Frontend Developer | StartupXYZ | 2020 - 2022
- Developed responsive web applications using React and Next.js
- Integrated REST APIs and implemented real-time features
- Improved application performance by 30% through code optimization

Education:
Bachelor of Science in Computer Science
University of California, Berkeley | 2016 - 2020

Certifications:
- AWS Cloud Practitioner
- Meta Frontend Developer Professional Certificate`

export function getMockAnalysisResult(): AnalysisResult {
  return {
    candidateName: "John Doe",
    email: "john.doe@email.com",
    phone: "(555) 123-4567",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Redux",
      "Zustand",
      "Node.js",
      "JavaScript",
      "CSS",
      "HTML",
      "Docker",
      "Git",
      "PostgreSQL",
      "MongoDB",
    ],
    programmingLanguages: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"],
    certifications: [
      "AWS Cloud Practitioner",
      "Meta Frontend Developer Professional Certificate",
    ],
    education: "Bachelor of Science in Computer Science, UC Berkeley",
    previousRoles: ["Senior Frontend Developer", "Frontend Developer"],
    experienceYears: 4,
    matchScore: 72,
    skillsScore: 78,
    experienceScore: 65,
    educationScore: 75,
    matchedSkills: [
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Zustand",
      "Docker",
    ],
    missingSkills: ["AWS (S3, CloudFront, Lambda)", "GraphQL", "CI/CD pipelines"],
    additionalSkills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    strengths: [
      "Strong React and TypeScript expertise with production experience",
      "Experience mentoring junior developers and leading teams",
      "Built reusable component libraries demonstrating design systems knowledge",
      "Holds AWS Cloud Practitioner certification showing cloud awareness",
    ],
    weaknesses: [
      "4 years of experience vs. 5+ required — slightly below target",
      "Missing hands-on AWS services experience (S3, CloudFront, Lambda)",
      "No GraphQL experience mentioned",
      "Limited CI/CD pipeline experience",
    ],
    summary:
      "John Doe demonstrates strong React and TypeScript experience with 4 years of frontend development, including team leadership and mentoring. His resume shows excellent alignment with core frontend requirements but lacks the full 5 years of experience, AWS expertise, and GraphQL knowledge requested by the employer. Recommended for interview consideration — strong technical fit with minor experience gaps.",
    recommendation: "Consider",
    atsScore: 82,
    resumeQualityScore: 78,
  }
}
