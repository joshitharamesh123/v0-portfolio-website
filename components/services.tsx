"use client"

import { useState } from "react"

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const services = [
    {
      title: "Web Development",
      icon: "🌐",
      description:
        "End-to-end web application development using modern frameworks like React, Next.js, and Node.js. I specialize in building scalable, performant applications with clean, maintainable code and responsive design.",
      technologies: ["React", "Next.js", "Node.js", "Express", "TypeScript"],
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      description:
        "Building intelligent solutions using machine learning and deep learning. From data preprocessing to model deployment, I help bring AI-powered features to applications with expertise in NLP and computer vision.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy"],
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      description:
        "Creating responsive and intuitive interfaces that enhance user experience. I focus on usability, accessibility, and beautiful design aesthetics using Figma, Tailwind CSS, and modern design principles.",
      technologies: ["Figma", "Tailwind CSS", "HTML/CSS", "Design Systems"],
    },
  ]

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          <span className="text-accent">04.</span> My Quality Services
        </h2>

        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
          I deliver clean, functional, and aesthetically pleasing digital solutions through a blend of technology and
          thoughtful design, tailored to meet your specific needs.
        </p>

        <div className="space-y-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`border-l-4 ${
                expandedIndex === idx ? "border-accent bg-accent/5" : "border-accent/30 hover:border-accent/60"
              } rounded-lg p-6 cursor-pointer transition-all duration-300`}
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
                <svg
                  className={`w-5 h-5 text-accent transition-transform ${expandedIndex === idx ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {expandedIndex === idx && (
                <div className="mt-4 space-y-4 animate-in fade-in duration-300">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
