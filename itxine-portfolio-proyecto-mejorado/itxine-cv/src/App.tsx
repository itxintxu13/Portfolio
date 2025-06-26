import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";
import { ProjectGallery } from "./components/ProjectGallery";
import { Timeline } from "./components/Timeline";

import { Header } from "./components/Header";

import { Preloader } from "./components/Preloader";

function App() {
  return (
    <Preloader>
  <main className="bg-gradient-to-tr from-sky-50 to-violet-100 dark:from-zinc-900 dark:to-zinc-800 text-gray-900 dark:text-white font-sans">
      <Header />
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-96 h-96 bg-purple-300 opacity-30 rounded-full blur-3xl top-[20%] left-[10%] animate-pulse" />
          <div className="absolute w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl top-[50%] left-[60%] animate-ping" />
        </div>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Timeline />
        <Testimonials />
        <ProjectGallery />
        <Contact />
      </div>
    </main>
</Preloader>
  );
}

export default App;
