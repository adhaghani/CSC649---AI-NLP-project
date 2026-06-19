"use client"

import { Component, type ReactNode } from "react"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { NeonButton } from "@/components/ui/neon-button"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
          <div className="flex items-center justify-center size-16 rounded-full bg-red-500/10 mb-4">
            <AlertTriangle className="size-8 text-red-400" />
          </div>
          <h2 className="text-xl font-semibold text-text-primary mb-2">
            Something went wrong
          </h2>
          <p className="text-text-secondary mb-6 max-w-md">
            {this.state.error?.message ??
              "An unexpected error occurred. Please try again."}
          </p>
          <NeonButton
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            <RefreshCw className="size-4 mr-2" />
            Try Again
          </NeonButton>
        </div>
      )
    }

    return this.props.children
  }
}
