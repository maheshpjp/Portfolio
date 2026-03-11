import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/about'
import Experience from './sections/experience'
import Projects from './sections/projects'
import Testimonials from './sections/BeyondCoding'
import Contacts from './sections/contacts'
import { Footer } from './layout/Footer'

function App() {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-px bg-primary/40 animate-pulse-line" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
