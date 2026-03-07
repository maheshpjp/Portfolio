import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './sections/hero'
import About from './sections/about'
import Experience from './sections/experience'
import Projects from './sections/projects'
import Testimonials from './sections/BeyondCoding'
import Contacts from './sections/contacts'
import { Footer } from './layout/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
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
