export default function Services() {
  const services = [
    {
      title: "Software Development",
      description:
        "End-to-end web application development using modern frameworks. I specialize in building scalable, performant applications with clean, maintainable code.",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Building intelligent solutions using machine learning. From data preprocessing to model deployment, I help bring AI-powered features to your applications.",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating responsive and intuitive interfaces that enhance user experience. I focus on usability while maintaining beautiful, modern design aesthetics.",
    },
  ]

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          <span className="text-accent">04.</span> Services
        </h2>

        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          I focus on delivering clean, functional, and aesthetically pleasing digital solutions through a blend of
          technology and thoughtful design.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                <span className="text-accent font-bold">{idx + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
