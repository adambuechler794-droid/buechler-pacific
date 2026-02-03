import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Check,
} from 'lucide-react'
import { useInView } from './useInView'

const companySizes = ['<$1M', '$1–5M', '$5–25M', '$25–100M', '$100M+']
const timelines = ['Urgent', '1–3 months', 'Exploring', 'Just learning']
const sources = ['Referral', 'Search', 'LinkedIn', 'Chamber', 'Other']
const systemOptions = [
  'NetSuite',
  'QuickBooks',
  'Excel',
  'Power BI',
  'Fabric',
  'Azure',
  'SAP',
  'Other',
]

const bestFor = [
  'Hawaii-based companies with $5M–$100M in revenue',
  'Companies that have outgrown Excel but can\'t justify a full BI team',
  'Leadership teams drowning in manual reporting',
  'Finance teams spending more time pulling data than analyzing it',
]

const notFit = [
  'You\'re looking for staff augmentation or warm bodies',
  'You want traditional "strategy consulting" with no implementation',
  'You need someone on-site full-time on the mainland',
  'You\'re not ready to actually change how your team works',
]

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  companySize: '',
  challenge: '',
  systems: [],
  timeline: '',
  source: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [ref, inView] = useInView()

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const toggleSystem = (sys) =>
    setForm((prev) => ({
      ...prev,
      systems: prev.systems.includes(sys)
        ? prev.systems.filter((s) => s !== sys)
        : [...prev.systems, sys],
    }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // POST to n8n webhook endpoint — update URL when webhook is configured
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Network error')
      setStatus('sent')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-sand-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold text-coral-400 uppercase tracking-widest mb-3">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-4">
            Ready to turn your data into systems?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tell me about your situation and I&apos;ll get back to you within one
            business day.
          </p>
        </div>

        <div className={`grid gap-12 lg:grid-cols-5 ${inView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:adam.buechler@buechlerpacific.com"
                className="flex items-center gap-3 text-slate-700 hover:text-ocean-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-ocean-50 text-ocean-600 flex items-center justify-center group-hover:bg-ocean-100 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm">adam.buechler@buechlerpacific.com</span>
              </a>
              <a
                href="tel:+18085253076"
                className="flex items-center gap-3 text-slate-700 hover:text-ocean-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-ocean-50 text-ocean-600 flex items-center justify-center group-hover:bg-ocean-100 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-sm">+1 808 525 3076</span>
              </a>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-10 h-10 rounded-lg bg-ocean-50 text-ocean-600 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">Maui, Hawaii</span>
              </div>
            </div>

            {/* Best For */}
            <div>
              <h3 className="font-bold text-ocean-900 mb-3">Best for:</h3>
              <ul className="space-y-2">
                {bestFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <Check
                      size={16}
                      className="text-green-500 mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div>
              <h3 className="font-bold text-ocean-900 mb-3">
                Probably not a fit if:
              </h3>
              <ul className="space-y-2">
                {notFit.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-500"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-2xl border border-gray-100">
                <CheckCircle2
                  size={48}
                  className="text-green-500 mb-4"
                />
                <h3 className="text-xl font-bold text-ocean-900 mb-2">
                  Message Sent
                </h3>
                <p className="text-slate-600 mb-6">
                  Thanks for reaching out. I&apos;ll get back to you within one
                  business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm font-semibold text-ocean-600 hover:text-ocean-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-5"
              >
                {/* Name & Company */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Name <span className="text-coral-400">*</span>
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Company <span className="text-coral-400">*</span>
                    </label>
                    <input
                      id="company"
                      required
                      type="text"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Email <span className="text-coral-400">*</span>
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Company Size & Timeline */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Company Size (Revenue)
                    </label>
                    <select
                      id="companySize"
                      value={form.companySize}
                      onChange={(e) => update('companySize', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select...</option>
                      {companySizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      value={form.timeline}
                      onChange={(e) => update('timeline', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select...</option>
                      {timelines.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Systems */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Systems Currently Using
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {systemOptions.map((sys) => (
                      <button
                        key={sys}
                        type="button"
                        onClick={() => toggleSystem(sys)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                          form.systems.includes(sys)
                            ? 'bg-ocean-800 text-white border-ocean-800'
                            : 'bg-white text-slate-600 border-gray-200 hover:border-ocean-300'
                        }`}
                      >
                        {sys}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <label
                    htmlFor="challenge"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Current Challenge
                  </label>
                  <textarea
                    id="challenge"
                    rows={4}
                    value={form.challenge}
                    onChange={(e) => update('challenge', e.target.value)}
                    placeholder="Tell me about what's not working with your current data/reporting setup..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition resize-y"
                  />
                </div>

                {/* How did you find me */}
                <div>
                  <label
                    htmlFor="source"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    How did you find me?
                  </label>
                  <select
                    id="source"
                    value={form.source}
                    onChange={(e) => update('source', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">Select...</option>
                    {sources.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle size={16} />
                    Something went wrong. Please email me directly at{' '}
                    <a
                      href="mailto:adam.buechler@buechlerpacific.com"
                      className="underline font-medium"
                    >
                      adam.buechler@buechlerpacific.com
                    </a>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-coral-400 hover:bg-coral-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-coral-400/25"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
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
