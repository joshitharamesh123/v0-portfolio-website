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

  const stats = [
    { number: "10+", label: "Projects" },
    { number: "3+", label: "Hackathon Wins" },
    { number: "3+", label: "Internships" },
    { number: "2028", label: "Graduating" },
  ]

  return (
    <section className="min-h-screen px-6 py-20 flex items-center justify-center pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="space-y-6"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <p className="text-accent text-lg font-medium">Hi, my name is</p>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Joshitha Ramesh</h1>

            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Software Developer + AI/ML Enthusiast
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
              I'm a passionate software developer specializing in building intelligent, user-friendly applications with
              a focus on AI/ML technologies. Currently pursuing B.Tech in AI & ML at VIT Chennai.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-accent font-bold text-xl">{stat.number}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="#projects"
                className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all rounded-lg font-semibold"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/80 transition-all rounded-lg font-semibold"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
          </div>

          {/* Right Image - Removed border box, added decorative accent lines */}
          <div
            className="flex justify-center md:justify-end relative"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-400/20 rounded-2xl blur-3xl"></div>

              {/* Avatar Image */}
              <img
                src="/images/design-mode/360_F_1534035806_6gn57ou4V0dVZY6l30h6nEB5gWQRAP6v-removebg-preview.png"
                alt="Joshitha Ramesh"
                className="relative w-full h-full object-contain"
              />

              {/* Decorative curved accent lines */}
              <svg
                className="absolute top-0 right-0 w-24 h-24 text-accent"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M 10 80 Q 30 20, 80 10" />
                <path d="M 20 90 Q 40 30, 90 20" />
              </svg>

              <svg
                className="absolute bottom-0 left-0 w-32 h-32 text-accent opacity-50"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="30" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
