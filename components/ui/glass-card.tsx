"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.ComponentProps<"div"> {
  float?: boolean
  glowOnHover?: boolean
  size?: "default" | "sm"
}

function GlassCard({
  className,
  float = false,
  glowOnHover = false,
  size = "default",
  ...props
}: GlassCardProps) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-[1.5rem] bg-glass-bg py-(--card-spacing) text-sm text-card-foreground backdrop-blur-[16px] border border-glass-border ring-0 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-[1.5rem] *:[img:last-child]:rounded-b-[1.5rem]",
        float && "animate-float",
        glowOnHover &&
          "hover:border-glass-border-hover transition-colors duration-300",
        "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
        className
      )}
      {...props}
    />
  )
}

function GlassCardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-[1.5rem] px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function GlassCardTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-semibold tracking-[-0.04em] group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function GlassCardDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function GlassCardAction({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function GlassCardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function GlassCardFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-[1.5rem] border-t border-glass-border bg-white/[0.02] p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  GlassCard,
  GlassCardHeader,
  GlassCardFooter,
  GlassCardTitle,
  GlassCardAction,
  GlassCardDescription,
  GlassCardContent,
}
