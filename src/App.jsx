import React from 'react';
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
    <div className="relative w-full min-h-screen bg-background cinematic-grid">
      <Navbar />
      <main className="relative z-10 flex flex-col items-center w-full">
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
  );
}

export default App;
