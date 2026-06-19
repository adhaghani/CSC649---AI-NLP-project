"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { FileSearch, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NeonButton } from "@/components/ui/neon-button"
import { SystemStatus } from "@/components/ui/system-status"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/analytics", label: "Analytics" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full border-b border-glass-border bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center size-9 rounded-xl bg-lime text-black">
            <FileSearch className="size-5" />
          </div>
          <span className="hidden sm:inline text-text-primary font-semibold text-lg tracking-[-0.04em]">
            ResumeScreener
          </span>
        </Link>

        {/* Desktop Nav — Pill container */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-0.5 rounded-full bg-glass-bg backdrop-blur-md border border-glass-border px-1.5 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200",
                  pathname === link.href ||
                    (link.href.startsWith("/#") &&
                      pathname === "/" &&
                      typeof window !== "undefined" &&
                      window.location.hash === link.href.replace("/", ""))
                    ? "bg-lime/15 text-lime"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <SystemStatus
            label="SYSTEM ONLINE"
            status="online"
            className="hidden lg:flex"
          />

          <Link href="/dashboard" className="hidden md:inline-flex">
            <NeonButton size="sm">
              Get Started
            </NeonButton>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-text-secondary hover:text-text-primary hover:bg-glass-bg"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] pt-12 border-l border-glass-border bg-obsidian"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base font-medium rounded-xl transition-colors",
                      pathname === link.href
                        ? "bg-lime/15 text-lime"
                        : "text-text-secondary hover:text-text-primary hover:bg-glass-bg"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="mt-4"
                >
                  <NeonButton className="w-full">Get Started</NeonButton>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
