import Link from "next/link"

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-20 flex items-center">
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          <span className="text-accent">06.</span> Get In Touch
        </h2>

        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
          want to say hi, feel free to reach out!
        </p>

        <div className="space-y-4 mb-12">
          <div>
            <p className="text-muted-foreground mb-2">Email</p>
            <Link
              href="mailto:joshitha.ramesh2024@vitstudent.ac.in"
              className="text-accent hover:text-accent/70 font-medium text-lg transition-colors"
            >
              joshitha.ramesh2024@vitstudent.ac.in
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors rounded font-medium"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors rounded font-medium"
          >
            LinkedIn
          </Link>
        </div>

        <p className="text-muted-foreground text-sm">Designed & Built by Joshitha Ramesh</p>
      </div>
    </section>
  )
}
