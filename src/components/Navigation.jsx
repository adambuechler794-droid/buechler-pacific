import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Impact', href: '#impact' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl border-b border-black/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false) }}
            className="font-display text-lg font-bold tracking-tight text-apple-text"
          >
            Buechler Pacific
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-apple-secondary hover:text-apple-text transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[13px] bg-apple-text text-white px-5 py-2 rounded-full font-medium hover:bg-apple-dark-secondary transition-colors duration-300"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-apple-secondary hover:text-apple-text transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-apple-bg/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => { document.body.style.overflow = ''; setMenuOpen(false) }}
            className="font-display text-3xl font-bold text-apple-text/70 hover:text-apple-text transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => { document.body.style.overflow = ''; setMenuOpen(false) }}
          className="mt-4 text-lg bg-apple-text text-white px-8 py-3 rounded-full font-medium"
        >
          Start a Project
        </a>
      </div>
    </>
  )
}
