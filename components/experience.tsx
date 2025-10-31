export default function Experience() {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "XYZ Tech Solutions",
      period: "June – August 2024",
      description: [
        "Developed REST APIs and optimized database queries",
        "Collaborated on a React + Node.js dashboard feature",
        "Improved backend efficiency and overall app performance",
        "Participated in code reviews and best practices implementation",
      ],
    },
    {
      title: "Intern",
      company: "HCL Tech",
      period: "January – June 2025",
      description: [
        "Developing full-stack web applications using modern technologies",
        "Implementing responsive UI components and backend APIs",
        "Collaborating with senior developers on real-world projects",
        "Contributing to optimization and code quality improvements",
      ],
    },
  ]

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-accent pl-6 py-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>

              <ul className="space-y-2 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
