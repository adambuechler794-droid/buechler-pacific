import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Impact from './components/Impact'
import HowItWorks from './components/HowIWork'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudyPage from './components/CaseStudyPage'

const DemoPage = lazy(() => import('./demo/DemoPage'))

function HomePage() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="/demo" element={<Suspense fallback={<div className="min-h-screen bg-[#0d1117]" />}><DemoPage /></Suspense>} />
      </Routes>
    </BrowserRouter>
  )
}
