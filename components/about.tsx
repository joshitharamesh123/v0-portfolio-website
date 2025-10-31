export default function About() {
  return (
    <section className="min-h-screen px-6 py-20 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          <span className="text-accent">01.</span> About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm a software developer with a strong interest in building efficient, user-friendly applications. I enjoy
              solving complex problems through clean code and thoughtful design. I'm passionate about learning new
              technologies, improving user experiences, and contributing to projects that make a real impact.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at Vellore Institute of
              Technology, Chennai (Expected 2028). I combine technical expertise with creative problem-solving to
              deliver solutions that are both functional and aesthetically pleasing.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new AI/ML frameworks, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg p-6 border border-accent/20">
            <h3 className="text-sm font-semibold text-accent mb-4 uppercase">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-foreground">B.Tech in AI & ML</p>
                <p className="text-sm text-muted-foreground">Vellore Institute of Technology, Chennai</p>
                <p className="text-xs text-accent">Expected 2028</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
