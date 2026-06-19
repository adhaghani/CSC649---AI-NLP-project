import Link from "next/link"
import { ArrowRight, Globe, MessageCircle, Link2 } from "lucide-react"
import { NeonButton } from "@/components/ui/neon-button"

const socials = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Community" },
  { icon: Link2, href: "#", label: "Links" },
]

const policies = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-24 pb-8">
      {/* "SUPER" watermark */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-[10rem] sm:text-[14rem] font-bold text-white/[0.03] pointer-events-none select-none tracking-[-0.06em]"
      >
        SUPER
      </span>

      <div className="relative z-10">
        {/* CTA */}
        <div className="container mx-auto px-4 pb-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.04em] text-text-primary mb-6">
            Ready to Supercharge
            <br />
            Your Hiring?
          </h2>
          <Link href="/dashboard">
            <NeonButton size="xl" className="mt-4">
              Start Screening Now
              <ArrowRight className="size-5 ml-1" />
            </NeonButton>
          </Link>
        </div>

        {/* Bottom 3-column layout */}
        <div className="container mx-auto px-4 border-t border-glass-border pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            {/* Branding */}
            <div>
              <p className="text-sm font-semibold text-text-primary tracking-[-0.02em]">
                ResumeScreener
              </p>
              <p className="text-xs text-text-secondary mt-1">
                AI-Powered Resume Screening
              </p>
            </div>

            {/* Policy links */}
            <div className="flex items-center justify-center gap-6">
              {policies.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="text-xs text-text-secondary hover:text-lime transition-colors duration-200"
                >
                  {p.label}
                </Link>
              ))}
            </div>

            {/* Social icons + copyright */}
            <div className="flex items-center justify-end gap-4">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center size-8 rounded-full border border-glass-border text-text-secondary hover:text-lime hover:border-lime/40 transition-colors duration-200"
                >
                  <s.icon className="size-3.5" />
                </Link>
              ))}
              <span className="ml-4 text-[10px] font-mono uppercase tracking-[0.2em] text-text-disabled">
                &copy; {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
