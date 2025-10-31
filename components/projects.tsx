import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "AI Chatbot for Student Queries",
      description:
        "An intelligent chatbot capable of answering student queries using natural language processing. Designed conversation flow and implemented backend logic.",
      technologies: ["Python", "scikit-learn", "NLTK", "React"],
      role: "Full Stack Developer",
      image: "/ai-chatbot-interface-with-chat-bubbles.jpg",
      links: { github: "#", demo: "#" },
    },
    {
      title: "Tuberculosis Detection using AI/ML",
      description:
        "Developed an AI model to assist in early TB detection through machine learning analysis. Handled data preprocessing, feature engineering, and model optimization.",
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy"],
      role: "ML Engineer",
      image: "/medical-ai-analysis-with-x-ray-and-data-visualizat.jpg",
      links: { github: "#", demo: "#" },
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, minimalist portfolio website showcasing projects and skills. Built with Next.js and Tailwind CSS with smooth animations and responsive design.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      role: "Full Stack Developer",
      image: "/modern-portfolio-website-interface.jpg",
      links: { github: "#", demo: "#" },
    },
  ]

  return (
    <section className="min-h-screen px-6 py-20 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Projects</h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-accent text-sm font-medium mb-4">{project.role}</p>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.links.github}
                    className="text-accent hover:text-accent/70 font-medium text-sm flex items-center gap-2"
                  >
                    GitHub <span>→</span>
                  </Link>
                  <Link
                    href={project.links.demo}
                    className="text-accent hover:text-accent/70 font-medium text-sm flex items-center gap-2"
                  >
                    Live Demo <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
