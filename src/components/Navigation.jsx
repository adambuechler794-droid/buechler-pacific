import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const go = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-50/90 backdrop-blur-xl border-b border-stone-200/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => go(e, '#home')} className="group flex items-center gap-3">
          <span className={`font-serif text-xl tracking-tight transition-colors duration-500 ${
            scrolled ? 'text-navy-900' : 'text-white'
          }`}>
            Buechler Pacific
          </span>
          <span className={`hidden sm:inline text-[11px] transition-colors duration-500 ${
            scrolled ? 'text-stone-200' : 'text-white/20'
          }`}>|</span>
          <span className={`hidden sm:inline text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${
            scrolled ? 'text-navy-600' : 'text-white/50'
          }`}>
            Financial Intelligence
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => go(e, link.href)}
              className={`px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? 'text-navy-800/70 hover:text-navy-900'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => go(e, '#contact')}
            className={`ml-4 px-5 py-2 text-[13px] font-semibold tracking-wide rounded-lg transition-all duration-300 ${
              scrolled
                ? 'bg-navy-900 text-white hover:bg-navy-800'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-navy-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-ink/98 backdrop-blur-xl z-40 flex flex-col" onClick={() => setMobileOpen(false)}>
          <div className="flex items-center justify-between px-5 sm:px-8 py-5" onClick={(e) => e.stopPropagation()}>
            <span className="font-serif text-xl text-white tracking-tight">
              Buechler Pacific
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-1" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => go(e, link.href)}
                className="font-serif text-3xl text-white/70 hover:text-white py-3 px-8 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => go(e, '#contact')}
              className="mt-8 px-8 py-3 bg-copper-500 hover:bg-copper-600 text-white font-semibold rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
