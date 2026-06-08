import { create } from "zustand"
import type { AnalysisResult } from "@/types"

interface AnalysisStore {
  jobDescription: string
  resumeText: string
  resumeFileName: string | null
  resumeFile: File | null
  results: AnalysisResult | null
  isLoading: boolean
  error: string | null

  setJobDescription: (text: string) => void
  setResumeText: (text: string) => void
  setResumeFileName: (name: string | null) => void
  setResumeFile: (file: File | null) => void
  setResults: (results: AnalysisResult) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

const initialState = {
  jobDescription: "",
  resumeText: "",
  resumeFileName: null,
  resumeFile: null as File | null,
  results: null as AnalysisResult | null,
  isLoading: false,
  error: null as string | null,
}

export const useAnalysisStore = create<AnalysisStore>((set) => ({
  ...initialState,

  setJobDescription: (text) => set({ jobDescription: text }),
  setResumeText: (text) => set({ resumeText: text }),
  setResumeFileName: (name) => set({ resumeFileName: name }),
  setResumeFile: (file) => set({ resumeFile: file }),
  setResults: (results) => set({ results, isLoading: false, error: null }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error, isLoading: false }),
  reset: () => set(initialState),
}))
