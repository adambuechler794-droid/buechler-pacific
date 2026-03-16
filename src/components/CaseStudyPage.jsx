import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getCaseStudy } from '../data/caseStudies'
import Navigation from './Navigation'
import Footer from './Footer'

const HOME_META = {
  title: 'Buechler Pacific — AI Systems for Finance',
  description: 'Buechler Pacific — AI systems for finance. Custom AI tools, intelligent automation, data architecture, and full-stack product development. Based in Maui, Hawaii.',
  ogTitle: 'Buechler Pacific — AI Systems for Finance',
  ogDescription: 'We engineer AI systems for finance — custom AI tools, intelligent automation, data architecture, and full-stack applications.',
  ogUrl: 'https://buechlerpacific.com',
  canonical: 'https://buechlerpacific.com/',
}

function setMeta(cs) {
  document.title = cs.metaTitle
  const url = `https://buechlerpacific.com/case-studies/${cs.slug}`
  const selectors = {
    'meta[name="description"]': { attr: 'content', val: cs.metaDescription },
    'meta[property="og:title"]': { attr: 'content', val: cs.metaTitle },
    'meta[property="og:description"]': { attr: 'content', val: cs.metaDescription },
    'meta[property="og:url"]': { attr: 'content', val: url },
    'link[rel="canonical"]': { attr: 'href', val: url },
  }
  Object.entries(selectors).forEach(([sel, { attr, val }]) => {
    document.querySelector(sel)?.setAttribute(attr, val)
  })
}

function restoreMeta() {
  document.title = HOME_META.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', HOME_META.description)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', HOME_META.ogTitle)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', HOME_META.ogDescription)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', HOME_META.ogUrl)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', HOME_META.canonical)
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const cs = getCaseStudy(slug)

  useEffect(() => {
    if (!cs) return
    setMeta(cs)
    return restoreMeta
  }, [slug])

  if (!cs) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen bg-apple-dark text-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">

        {/* Back link */}
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-300 mb-12"
        >
          ← Back to Work
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block text-[11px] font-semibold text-apple-dark-secondary uppercase tracking-[0.15em] mb-4">
            {cs.category}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            {cs.title}
          </h1>
          {/* Result callout */}
          <div className="border-l-2 border-apple-blue pl-6 py-2">
            <p className="text-apple-blue font-semibold text-lg">{cs.resultLine}</p>
          </div>
          {cs.liveUrl && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-apple-blue text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-blue-500 transition-colors duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              View Live
            </a>
          )}
        </div>

        {/* Summary */}
        <p className="text-white/60 text-lg leading-relaxed mb-16">
          {cs.summary}
        </p>

        {/* Challenge */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-white/60 leading-relaxed">{cs.challenge}</p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-4">The Solution</h2>
          <p className="text-white/60 leading-relaxed">{cs.solution}</p>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6">Results</h2>
          <ul className="space-y-3">
            {cs.results.map((result, i) => (
              <li key={i} className="flex items-start gap-3 text-white/70">
                <span className="text-apple-blue mt-1 shrink-0">→</span>
                {result}
              </li>
            ))}
          </ul>
        </section>

        {/* Tech stack */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {cs.tech.map(t => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.06] text-white/60 border border-white/[0.08]"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-white/[0.06] pt-16 text-center">
          <p className="text-white/40 text-sm mb-6">Ready to build something like this?</p>
          <Link
            to="/#contact"
            className="inline-block bg-apple-blue text-white px-8 py-3 rounded-full font-medium hover:bg-blue-500 transition-colors duration-300"
          >
            Start a Project
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  )
}
