import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import BitsPilani from './components/BitsPilani'
import Masai from './components/Masai'
import Speaking from './components/Speaking'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <BitsPilani />
        <Masai />
        <Speaking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
