import React from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative w-full min-h-screen bg-background cinematic-grid">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-white focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="relative z-10 flex flex-col items-center w-full">
          <Hero />
          <About />
          <Journey />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
