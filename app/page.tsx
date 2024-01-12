import { Contact, HeroHome, Introduction, Projects, Skills } from "@/app/src/components";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen max-w-screen overflow-hidden">
      <HeroHome />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default Home;
