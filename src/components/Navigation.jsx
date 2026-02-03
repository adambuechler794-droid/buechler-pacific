import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-ocean-800 flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:scale-105">
            B
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-semibold text-sm tracking-tight transition-colors ${scrolled ? 'text-ocean-900' : 'text-white'}`}>
              Buechler Pacific
            </span>
            <span className={`text-[10px] uppercase tracking-widest transition-colors ${scrolled ? 'text-ocean-600' : 'text-ocean-200'}`}>
              Financial Intelligence
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-slate-700 hover:text-ocean-800 hover:bg-ocean-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="ml-3 px-4 py-2 bg-coral-400 hover:bg-coral-500 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-slate-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-ocean-950/95 backdrop-blur-md z-40 flex flex-col">
          <div className="flex items-center justify-between px-4 sm:px-6 py-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-ocean-800 flex items-center justify-center text-white font-bold text-lg">
                B
              </div>
              <span className="font-semibold text-sm text-white tracking-tight">
                Buechler Pacific
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-white hover:bg-white/10"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-xl text-white/90 hover:text-white font-medium py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="mt-4 px-8 py-3 bg-coral-400 hover:bg-coral-500 text-white font-semibold rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
