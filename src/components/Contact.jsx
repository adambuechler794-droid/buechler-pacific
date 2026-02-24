import { useState, useRef } from 'react'
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react'
import { useInView } from './useInView'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle')
  const [ref, inView] = useInView()
  const submitInFlight = useRef(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitInFlight.current) return
    submitInFlight.current = true
    setStatus('sending')

    try {
      const form = e.target
      const formData = Object.fromEntries(new FormData(form))
      formData._replyto = formData.email

      const res = await fetch('https://formspree.io/f/xbdapwzb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setStatus('idle')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      submitInFlight.current = false
    }
  }

  const inputClasses =
    'w-full bg-white/[0.06] border border-white/[0.1] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-apple-blue/40 transition-colors duration-300'
  const isSending = status === 'sending'

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-apple-dark text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div className={`reveal ${inView ? 'in-view' : ''}`}>
            <p className="text-[13px] text-apple-dark-secondary tracking-[0.2em] uppercase mb-4 font-medium">
              Contact
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Let&apos;s build
              <br />
              something.
            </h2>
            <p className="mt-6 text-lg text-white/40 leading-relaxed max-w-md">
              Have a data challenge? Let&apos;s talk about how AI-powered systems
              can transform your operations.
            </p>

            <div className="mt-12 space-y-5">
              <a
                href="mailto:adam.buechler@buechlerpacific.com"
                className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm">adam.buechler@buechlerpacific.com</span>
              </a>
              <a
                href="tel:+18085253076"
                className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                  <Phone size={16} />
                </div>
                <span className="text-sm">+1 (808) 525-3076</span>
              </a>
              <div className="flex items-center gap-4 text-white/50">
                <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <span className="text-sm">Maui, Hawaii</span>
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-2`}>
            {submitted ? (
              <div className="h-full min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/[0.06] flex items-center justify-center mx-auto mb-6">
                    <Send size={24} className="text-white/60" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Message sent.</h3>
                  <p className="text-white/40">I&apos;ll get back to you within one business day.</p>
                  <button
                    onClick={() => { setSubmitted(false); setStatus('idle') }}
                    className="mt-6 text-sm text-apple-blue hover:underline underline-offset-4 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSending}
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      disabled={isSending}
                      className={inputClasses}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSending}
                    className={inputClasses}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    How can I help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={isSending}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your data challenge..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Try emailing me directly at{' '}
                    <a href="mailto:adam.buechler@buechlerpacific.com" className="underline">
                      adam.buechler@buechlerpacific.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="group w-full flex items-center justify-center gap-2 bg-white text-apple-text py-3.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                  {!isSending && (
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
