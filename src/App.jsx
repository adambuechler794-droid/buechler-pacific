import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Impact from './components/Impact'
import HowItWorks from './components/HowIWork'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-apple-bg">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Impact />
        <HowItWorks />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
