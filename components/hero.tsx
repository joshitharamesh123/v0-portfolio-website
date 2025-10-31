"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="min-h-screen pt-20 px-6 flex items-center justify-center">
      <div
        className="max-w-3xl mx-auto text-center space-y-6 opacity-100 transition-opacity"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <p className="text-accent text-sm font-medium">Hi, my name is</p>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground">Joshitha Ramesh</h1>

        <h2 className="text-3xl md:text-5xl font-semibold text-muted-foreground">
          I build intelligent solutions for the web.
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          I'm a software developer with a strong interest in building efficient, user-friendly applications. I enjoy
          solving complex problems through clean code and thoughtful design, with a passion for AI/ML technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="#projects"
            className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors rounded font-medium"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors rounded font-medium"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
