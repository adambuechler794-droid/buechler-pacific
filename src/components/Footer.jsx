import { useLocation } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Impact', href: '#impact' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'LinkedIn OS', href: '/services/linkedin-presence-os/' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Mail, href: 'mailto:adam.buechler@buechlerpacific.com', label: 'Email' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/adambuechler/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/adambuechler794-droid', label: 'GitHub' },
]

export default function Footer() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const href = (anchor) => (isHome ? anchor : `/${anchor}`)

  return (
    <footer className="bg-apple-dark text-white/40 py-16 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-lg font-bold text-white">Buechler Pacific</p>
            <p className="text-xs text-white/60 mt-1 tracking-wide">Maui, Hawaii</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href.startsWith('#') ? href(link.href) : link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-white/60 text-center">
            &copy; {new Date().getFullYear()} Buechler Pacific LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
