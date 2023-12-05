"use client";
import { Hero, Introduction } from "@/app/src/components";
import Skills from "./src/components/organisms/Skills";

const Home = () => {

  return (
    <main className="flex flex-col min-h-screen max-w-screen overflow-hidden">
      <Hero />
      <Introduction />
      <Skills />
    </main>
  )
}

export default Home;
