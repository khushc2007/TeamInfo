"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const team = [
  {
    name: "Khush Chadha",
    role: "Founder & Software Lead",
    bio: "Full-stack systems engineering, AI pipeline architecture, and end-to-end product development.",
    mono: "BENGALURU",
  },
  {
    name: "Bhavyaman Atri",
    role: "Hardware Lead",
    bio: "Leads physical prototype development — electrocoagulation chamber design, ESP32 control systems, sensor integration, and tank fabrication.",
    mono: "PROTOTYPE ENGINEERING",
  },
  {
    name: "Rajat A.N",
    role: "Hardware Engineer",
    bio: "Supports hardware build and testing — component sourcing, circuit assembly, sensor calibration, and physical system validation.",
    mono: "SYSTEMS & TESTING",
  },
]

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        })
      }
      if (teamRef.current) {
        const cards = teamRef.current.querySelectorAll(":scope > div")
        gsap.from(cards, {
          y: 50, opacity: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: teamRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        })
      }
      if (stackRef.current) {
        const cols = stackRef.current.querySelectorAll(":scope > div")
        gsap.from(cols, {
          y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: stackRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        })
      }
      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 95%", toggleActions: "play none none reverse" },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="colophon"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">04 / Credits</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">THE TEAM</h2>
      </div>

      {/* Team cards */}
      <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/20 mb-24">
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative bg-background p-5 md:p-6 flex flex-col gap-4 hover:bg-accent/[0.03] transition-colors duration-500"
          >
            {/* Top accent line — grows on hover */}
            <div className="absolute top-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500" />

            {/* Mono tag */}
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground/50">
              {member.mono}
            </span>

            {/* Name */}
            <div>
              <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                {member.name}
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {member.role}
              </p>
            </div>

            {/* Divider */}
            <div className="w-8 h-px bg-border group-hover:w-16 group-hover:bg-accent/60 transition-all duration-500" />

            {/* Bio */}
            <p className="font-mono text-[11px] text-muted-foreground leading-relaxed flex-1">
              {member.bio}
            </p>

            {/* Bottom right index */}
            <span className="font-mono text-[9px] text-muted-foreground/30 self-end">
              {String(team.indexOf(member) + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      {/* Tech stack row */}
      <div ref={stackRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24">
        <div>
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Stack</h4>
          <ul className="space-y-2">
            {["Next.js", "Tailwind CSS", "Supabase", "Vercel"].map(t => (
              <li key={t} className="font-mono text-xs text-foreground/80">{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Hardware</h4>
          <ul className="space-y-2">
            {["ESP32", "pH Sensor", "Turbidity ×2", "TDS Sensor"].map(t => (
              <li key={t} className="font-mono text-xs text-foreground/80">{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Built With</h4>
          <ul className="space-y-2">
            {["Electrocoagulation", "Lamella Settling", "TFLite Edge AI", "12V DC EC"].map(t => (
              <li key={t} className="font-mono text-xs text-foreground/80">{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Location</h4>
          <ul className="space-y-2">
            {["Bengaluru, IN", "2025", "Hackathon Build", "Pilot Ready"].map(t => (
              <li key={t} className="font-mono text-xs text-foreground/80">{t}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div
        ref={footerRef}
        className="pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          © 2025 WATER·IQ. Built in Bengaluru.
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          Designed with intention. Built with precision.
        </p>
      </div>
    </section>
  )
}
