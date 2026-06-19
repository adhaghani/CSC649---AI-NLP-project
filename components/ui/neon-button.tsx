"use client"

import * as React from "react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const neonButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-[#ccff00] text-black shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(204,255,0,0.5)] active:scale-95",
  {
    variants: {
      size: {
        default: "h-10 px-8 py-4",
        sm: "h-8 px-6 py-3 text-xs",
        lg: "h-12 px-10 py-5 text-base",
        xl: "h-14 px-12 py-6 text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

interface NeonButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof neonButtonVariants> {
  asChild?: boolean
}

function NeonButton({
  className,
  size,
  asChild = false,
  ...props
}: NeonButtonProps) {
  const Comp = asChild ? Slot.Root : "button"
  return (
    <Comp
      data-slot="neon-button"
      className={cn(neonButtonVariants({ size, className }))}
      {...props}
    />
  )
}

export { NeonButton, neonButtonVariants }
