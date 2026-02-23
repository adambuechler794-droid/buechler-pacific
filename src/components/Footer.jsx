import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-navy-400 py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-serif text-lg text-white tracking-tight">
              Buechler Pacific
            </span>
            <span className="text-[12px] text-navy-500 tracking-wide">
              Maui, Hawaii
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Mail, href: 'mailto:adam.buechler@buechlerpacific.com', label: 'Email' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/adambuechler/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/adambuechler794-droid', label: 'GitHub' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="w-9 h-9 rounded-lg bg-navy-900/50 hover:bg-navy-800 flex items-center justify-center transition-colors duration-300"
                aria-label={item.label}
              >
                <item.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-900/50 text-center text-[12px] text-navy-600">
          &copy; {year} Buechler Pacific LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
