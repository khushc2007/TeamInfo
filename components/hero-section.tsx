"use client"

import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const team = [
  { name: "Khush Chadha", role: "Founder & Software Lead" },
  { name: "Bhavyaman Atri", role: "Hardware Lead" },
  { name: "Rajat A.N", role: "Hardware Engineer" },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
      <AnimatedNoise opacity={0.03} />

      {/* Left vertical label */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          WATER·IQ
        </span>
      </div>

      {/* Team names — top left corner */}
      <div className="absolute bottom-20 md:bottom-24 right-6 md:right-12 flex flex-col gap-1.5 items-end">
        {team.map((member) => (
          <div key={member.name} className="flex items-baseline gap-3">
            <span className="font-mono text-[10px] text-foreground/70 uppercase tracking-widest">{member.name}</span>
            <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-wider">{member.role}</span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full mt-20 md:mt-0">
        <SplitFlapAudioProvider>
          <div className="relative">
            <SplitFlapText text="WATER-IQ" speed={80} />
            <div className="mt-4">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider>

        <h2 className="font-[var(--font-bebas)] text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] mt-4 tracking-wide">
          AI-Driven Greywater Treatment System
        </h2>

        <p className="mt-12 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          Six-layer intelligence stack. Electrocoagulation, lamella settling, real-time sensor scoring.
          Built in Bengaluru for modern residential apartment buildings.
        </p>

        <div className="mt-16 flex items-center gap-8">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="View System" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="#signals"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Latest Updates
          </a>
        </div>
      </div>

      {/* Floating info tag */}
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-28">
        <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          v.01 / Bengaluru 2025
        </div>
      </div>
    </section>
  )
}
