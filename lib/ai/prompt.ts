export function buildAnalysisPrompt(
  jobDescription: string,
  resumeText: string
): string {
  return `You are an expert AI recruiting assistant. Analyze the provided resume against the job description using NLP techniques.

## Job Description:
${jobDescription}

## Resume Text:
${resumeText}

## Instructions:
1. **Entity Extraction**: Extract the candidate's name, email, phone, skills, programming languages, certifications, education, previous roles, and years of experience from the resume.
2. **Keyword Extraction**: Identify required skills from the job description, skills present in the resume, missing skills, and additional skills the candidate has that weren't requested.
3. **Text Classification**: Classify the candidate into one of: "Strong Hire", "Hire", "Consider", or "Reject" based on overall fit.
4. **Text Summarization**: Generate a concise 2-3 sentence evaluation summary of the candidate.
5. Score the candidate on skills match (0-100), experience relevance (0-100), and education fit (0-100).
6. Calculate an overall match score (0-100) weighted: 50% skills, 30% experience, 20% education.
7. Provide an ATS compatibility score (0-100) based on resume format, keyword presence, and standard sections.
8. Provide a resume quality score (0-100) based on clarity, completeness, and professionalism.
9. List 3-5 strengths and 2-4 weaknesses of the candidate relative to the job.

## CRITICAL: Return ONLY valid JSON. No markdown, no code blocks, no explanations. Use this exact structure:

{
  "candidateName": "Full Name",
  "email": "email@example.com",
  "phone": "phone number",
  "skills": ["skill1", "skill2"],
  "programmingLanguages": ["language1", "language2"],
  "certifications": ["cert1", "cert2"],
  "education": "Degree description",
  "previousRoles": ["Role 1", "Role 2"],
  "experienceYears": 0,
  "matchScore": 0,
  "skillsScore": 0,
  "experienceScore": 0,
  "educationScore": 0,
  "matchedSkills": ["matched skill 1"],
  "missingSkills": ["missing skill 1"],
  "additionalSkills": ["extra skill 1"],
  "strengths": ["strength 1"],
  "weaknesses": ["weakness 1"],
  "summary": "concise evaluation summary",
  "recommendation": "Strong Hire",
  "atsScore": 0,
  "resumeQualityScore": 0
}`
}
