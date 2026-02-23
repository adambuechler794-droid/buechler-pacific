import { useState, useEffect, useRef } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { useInView } from './useInView'

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  companySize: '',
  challenge: '',
}

const companySizes = ['<$1M', '$1–5M', '$5–25M', '$25–100M', '$100M+']

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [ref, inView] = useInView()
  const dismissTimer = useRef(null)
  const submitInFlight = useRef(false)

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    if (status === 'sent') {
      dismissTimer.current = setTimeout(() => setStatus('idle'), 5000)
    }
    return () => clearTimeout(dismissTimer.current)
  }, [status])

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const postForm = async () => {
    const res = await fetch('https://formspree.io/f/xbdapwzb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        _replyto: form.email,
        email: form.email,
        company: form.company,
        phone: form.phone,
        companySize: form.companySize,
        challenge: form.challenge,
      }),
    })
    if (!res.ok) throw new Error('Network error')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitInFlight.current) return

    submitInFlight.current = true
    setStatus('sending')

    try {
      await postForm()
      setStatus('sent')
      setForm(initialForm)
    } catch {
      setStatus('error')
    } finally {
      submitInFlight.current = false
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-[14px] text-navy-900 placeholder:text-slate-300 focus:outline-none focus:border-navy-400 focus:bg-white transition-all duration-300'
  const isSending = status === 'sending'

  return (
    <section id="contact" className="py-24 sm:py-32 bg-stone-100" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className={`mb-16 ${inView ? 'anim-reveal' : 'opacity-0'}`}>
          <p className="text-[12px] font-semibold text-copper-500 uppercase tracking-[0.2em] mb-4">
            Get Started
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy-900 mb-5">
            Ready to turn your data
            <br className="hidden sm:block" />
            into systems?
          </h2>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            Tell me about your situation. I&apos;ll get back to you within one business day.
          </p>
        </div>

        <div className={`grid gap-12 lg:grid-cols-5 ${inView ? 'anim-reveal del-2' : 'opacity-0'}`}>
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'adam.buechler@buechlerpacific.com', href: 'mailto:adam.buechler@buechlerpacific.com' },
                { icon: Phone, label: '+1 808 525 3076', href: 'tel:+18085253076' },
                { icon: MapPin, label: 'Maui, Hawaii' },
              ].map((item) => {
                const Wrapper = item.href ? 'a' : 'div'
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="flex items-center gap-3 text-slate-500 hover:text-navy-700 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-stone-200/80 flex items-center justify-center group-hover:border-navy-200 transition-colors">
                      <item.icon size={16} className="text-navy-600" />
                    </div>
                    <span className="text-[14px]">{item.label}</span>
                  </Wrapper>
                )
              })}
            </div>

            <div className="pt-4">
              <p className="text-[13px] text-slate-400 leading-relaxed">
                Prefer email? Reach me directly at{' '}
                <a
                  href="mailto:adam.buechler@buechlerpacific.com"
                  className="text-navy-600 hover:text-navy-800 font-medium transition-colors"
                >
                  adam.buechler@buechlerpacific.com
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-2xl border border-stone-200/80">
                <CheckCircle2 size={40} className="text-emerald-500 mb-4" />
                <h3 className="font-serif text-2xl text-navy-900 mb-2">Message Sent</h3>
                <p className="text-[14px] text-slate-500 mb-6">
                  Thanks for reaching out. I&apos;ll get back to you within one business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-[13px] font-semibold text-navy-600 hover:text-navy-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                aria-busy={isSending}
                className="bg-white rounded-2xl border border-stone-200/80 p-7 sm:p-8 space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-medium text-navy-800 mb-1.5">
                      Name <span className="text-copper-500">*</span>
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      disabled={isSending}
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[13px] font-medium text-navy-800 mb-1.5">
                      Company <span className="text-copper-500">*</span>
                    </label>
                    <input
                      id="company"
                      required
                      type="text"
                      disabled={isSending}
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-medium text-navy-800 mb-1.5">
                      Email <span className="text-copper-500">*</span>
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      disabled={isSending}
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-medium text-navy-800 mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      disabled={isSending}
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="companySize" className="block text-[13px] font-medium text-navy-800 mb-1.5">
                    Company Size (Revenue)
                  </label>
                  <select
                    id="companySize"
                    disabled={isSending}
                    value={form.companySize}
                    onChange={(e) => update('companySize', e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select...</option>
                    {companySizes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-[13px] font-medium text-navy-800 mb-1.5">
                    What&apos;s not working? <span className="text-copper-500">*</span>
                  </label>
                  <textarea
                    id="challenge"
                    required
                    rows={4}
                    disabled={isSending}
                    value={form.challenge}
                    onChange={(e) => update('challenge', e.target.value)}
                    placeholder="Tell me about what's broken with your current data or reporting setup..."
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-[13px] text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle size={15} />
                    Something went wrong. Email me directly at{' '}
                    <a href="mailto:adam.buechler@buechlerpacific.com" className="underline font-medium">
                      adam.buechler@buechlerpacific.com
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-copper-500 hover:bg-copper-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[14px] rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-copper-500/20"
                >
                  {isSending ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </>
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
