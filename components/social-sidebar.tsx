"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function SocialSidebar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const socials = [
    { icon: "github", url: "https://github.com/joshitharamesh", label: "GitHub" },
    { icon: "linkedin", url: "https://linkedin.com/in/joshitharamesh", label: "LinkedIn" },
    { icon: "twitter", url: "https://twitter.com/joshitharamesh", label: "Twitter" },
  ]

  return (
    <div className="fixed left-6 bottom-0 z-40 hidden md:flex items-end justify-center flex-col gap-4">
      {isVisible && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {socials.map((social) => (
            <Link
              key={social.icon}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              aria-label={social.label}
            >
              <SocialIcon icon={social.icon} />
            </Link>
          ))}
          <div className="w-0.5 h-16 bg-accent mx-auto mt-4"></div>
        </div>
      )}
    </div>
  )
}

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "github":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    case "linkedin":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.249-.129.597-.129.946v5.446h-3.554s.047-8.842 0-9.765h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.74 1.396 3.74 4.393v5.599zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.756 1.932 1.71 0 .951-.745 1.71-1.975 1.71zm1.946 11.597H3.392V9.687h3.891v10.765zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      )
    case "twitter":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 002.856-3.51 10.019 10.019 0 01-2.836.771 4.96 4.96 0 002.164-2.723c-.951.555-2.005.959-3.127 1.184a4.93 4.93 0 00-8.506 4.482c-4.08-.204-7.7-2.164-10.149-5.144a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63a9.935 9.935 0 002.457-2.548l-.047-.02z" />
        </svg>
      )
    default:
      return null
  }
}
