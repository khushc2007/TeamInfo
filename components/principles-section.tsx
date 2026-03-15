"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

  const principles = [
    {
      number: "01",
      titleParts: [
        { text: "HARDWARE", highlight: true },
        { text: " FIRST", highlight: false },
      ],
      description: "The physical system is the product. Software serves hardware, not the other way around.",
      align: "left",
    },
    {
      number: "02",
      titleParts: [
        { text: "EDGE", highlight: true },
        { text: " INTELLIGENCE", highlight: false },
      ],
      description: "All inference runs on-device. No cloud dependency. Water is routed in real time regardless of connectivity.",
      align: "right",
    },
    {
      number: "03",
      titleParts: [
        { text: "ZERO ", highlight: false },
        { text: "MANUAL INPUT", highlight: true },
      ],
      description: "From inlet to routing decision, every stage is automated. The system behaves — it does not prompt.",
      align: "left",
    },
    {
      number: "04",
      titleParts: [
        { text: "SAFETY ", highlight: false },
        { text: "DEFAULTS", highlight: true },
      ],
      description: "Flatline detection forces hard discard when any sensor fails. The system never routes water it cannot score.",
      align: "right",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !principlesRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        x: -60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      })
      const articles = principlesRef.current?.querySelectorAll("article")
      articles?.forEach((article, index) => {
        const isRight = principles[index].align === "right"
        gsap.from(article, {
          x: isRight ? 80 : -80, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: article, start: "top 85%", toggleActions: "play none none reverse" },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="principles" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / Principles</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">HOW WE BUILD</h2>
      </div>
      <div ref={principlesRef} className="space-y-24 md:space-y-32">
        {principles.map((principle, index) => (
          <article
            key={index}
            className={`flex flex-col ${principle.align === "right" ? "items-end text-right" : "items-start text-left"}`}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {principle.number} / {principle.titleParts[0].text.trim().split(" ")[0]}
            </span>
            <h3 className="font-[var(--font-bebas)] text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none">
              {principle.titleParts.map((part, i) =>
                part.highlight ? (
                  <HighlightText key={i} parallaxSpeed={0.6}>{part.text}</HighlightText>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </h3>
            <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
            <div className={`mt-8 h-[1px] bg-border w-24 md:w-48 ${principle.align === "right" ? "mr-0" : "ml-0"}`} />
          </article>
        ))}
      </div>
    </section>
  )
}
