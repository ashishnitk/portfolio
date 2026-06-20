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
import StreamDivider from './components/ui/StreamDivider'
import Achievement from './components/Achievement'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />

        <StreamDivider
          id="work"
          index="01"
          variant="work"
          label="Stream One · The Day Job"
          title="Full-Time Work Experience"
          description="My core career as an AI/ML engineering leader — building enterprise-grade systems at Microsoft Turing and beyond."
        />
        <Achievement />
        <Experience />
        <Education />

        <StreamDivider
          id="beyond"
          index="02"
          variant="beyond"
          label="Stream Two · Beyond the Day Job"
          title="Consulting, Teaching & Community"
          description="What I do outside my full-time role — consulting, mentoring, freelancing, speaking, and building with the wider community."
          image="/taking-session.png"
          imageAlt="Ashish Prasad taking a live session"
        />
        <Services />
        <Projects />
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
