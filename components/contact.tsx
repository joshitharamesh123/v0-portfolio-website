import Link from "next/link"

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-20 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">Let's Work Together!</h2>

        <p className="text-muted-foreground text-lg mb-12 leading-relaxed text-center max-w-2xl mx-auto">
          I'm always interested in hearing about new projects, opportunities, and collaborations. Whether you have a question, want to discuss potential projects, or just want to say hi – kindly reach out!
        </p>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase mb-2">Email</h3>
              <Link
                href="mailto:joshitha.ramesh2024@vitstudent.ac.in"
                className="text-lg font-medium text-foreground hover:text-accent transition-colors flex items-center gap-2"
              >
                joshitha.ramesh2024@vitstudent.ac.in
              </Link>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent uppercase mb-2">Location</h3>
              <p className="text-lg font-medium text-foreground">Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-sm font-semibold text-accent uppercase mb-6">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://github.com/joshitharamesh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all rounded-lg font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Link>

              <Link
                href="https://linkedin.com/in/joshitharamesh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/80 transition-all rounded-lg font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.249-.129.597-.129.946v5.446h-3.554s.047-8.842 0-9.765h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.74 1.396 3.74 4.393v5.599zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.756 1.932 1.71 0 .951-.745 1.71-1.975 1.71zm1.946 11.597H3.392V9.687h3.891v10.765zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
