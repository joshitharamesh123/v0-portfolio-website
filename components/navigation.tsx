"use client"

import Link from "next/link"
import { useState } from "react"

const navItems = [
  { number: "01", label: "About", id: "about" },
  { number: "02", label: "Experience", id: "experience" },
  { number: "03", label: "Skills", id: "skills" },
  { number: "04", label: "Projects", id: "projects" },
  { number: "05", label: "Contact", id: "contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="#" className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors">
          JR
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              <span className="text-accent">{item.number}</span> {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden md:inline-block px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors rounded"
        >
          Resume
        </Link>

        <button className="md:hidden text-accent" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="block text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-accent">{item.number}</span> {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
