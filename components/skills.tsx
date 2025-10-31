export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express", "Next.js"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["NumPy", "Pandas", "scikit-learn", "TensorFlow", "NLTK"],
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code", "Jupyter Notebook"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem-solving", "Teamwork", "Adaptability", "Communication", "Leadership"],
    },
  ]

  return (
    <section className="min-h-screen px-6 py-20 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          <span className="text-accent">03.</span> Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-accent mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent border border-accent/30 rounded text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
