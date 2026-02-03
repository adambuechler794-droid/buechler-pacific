import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ocean-950 text-ocean-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-ocean-800 flex items-center justify-center text-white font-bold text-sm">
              B
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-white text-sm">
                Buechler Pacific LLC
              </span>
              <span className="text-xs text-ocean-400">
                Maui, Hawaii
              </span>
            </div>
          </div>

          {/* Social / Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:adam.buechler@buechlerpacific.com"
              className="w-9 h-9 rounded-lg bg-ocean-900 hover:bg-ocean-800 flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-ocean-900 hover:bg-ocean-800 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-ocean-900 hover:bg-ocean-800 flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ocean-900 text-center text-xs text-ocean-500">
          &copy; {year} Buechler Pacific LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
