import { NavBar } from "../components/NavBar"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { HomeSection } from "../components/HomeSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProyectsSection } from "../components/ProyectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-backgroud text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
        <NavBar/>

        <main>
          <HomeSection/>
          <AboutSection/>
          <SkillsSection/>
          <ProyectsSection/>
          <ContactSection/>
        </main>

        <Footer/>
        </div>
      
    </>
  )
}
