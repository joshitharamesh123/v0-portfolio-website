import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import SocialSidebar from "@/components/social-sidebar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <SocialSidebar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  )
}
