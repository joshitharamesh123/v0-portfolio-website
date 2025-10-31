export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: "💻",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java"],
      proficiency: 90,
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
      proficiency: 85,
    },
    {
      title: "AI & ML",
      icon: "🤖",
      skills: ["TensorFlow", "scikit-learn", "Pandas", "NumPy", "NLTK"],
      proficiency: 75,
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      proficiency: 80,
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Docker"],
      proficiency: 85,
    },
    {
      title: "Soft Skills",
      icon: "🎯",
      skills: ["Problem-solving", "Teamwork", "Communication", "Leadership", "Adaptability"],
      proficiency: 90,
    },
  ]

  return (
    <section className="min-h-screen px-6 py-20 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">My Skills</h2>

        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
          A comprehensive skill set built through continuous learning and hands-on experience in software development,
          AI/ML, and design.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3 mb-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{skill}</span>
                    <div className="w-20 h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-blue-400"
                        style={{ width: `${80 + Math.random() * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-accent font-semibold uppercase">Proficiency</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: `${category.proficiency}%` }}></div>
                  </div>
                  <span className="text-sm font-bold text-accent">{category.proficiency}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
