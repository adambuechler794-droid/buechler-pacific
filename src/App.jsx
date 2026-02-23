import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Fit from './components/Fit'
import HowIWork from './components/HowIWork'
import Projects from './components/Projects'
import About from './components/About'
import Insights from './components/Insights'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Fit />
        <HowIWork />
        <Projects />
        <About />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
