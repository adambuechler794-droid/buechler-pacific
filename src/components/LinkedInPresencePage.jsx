import { useEffect } from 'react'
import { ArrowRight, CheckCircle2, Compass, MessageSquareText, Radar, Sparkles } from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

const HOME_META = {
  title: 'Buechler Pacific — AI Systems for Finance',
  description:
    'Buechler Pacific — AI systems for finance. Custom AI tools, intelligent automation, data architecture, and full-stack product development. Based in Maui, Hawaii.',
  ogTitle: 'Buechler Pacific — AI Systems for Finance',
  ogDescription:
    'We engineer AI systems for finance — custom AI tools, intelligent automation, data architecture, and full-stack applications.',
  ogUrl: 'https://buechlerpacific.com',
  canonical: 'https://buechlerpacific.com/',
}

const PAGE_META = {
  title: 'LinkedIn Presence OS | Buechler Pacific',
  description:
    'A high-touch LinkedIn presence system for founders, consultants, and executives who want to stay visible without sounding generic.',
  ogTitle: 'LinkedIn Presence OS | Buechler Pacific',
  ogDescription:
    'Voice calibration, relationship radar, weekly drafts, engagement guidance, and human approval in one LinkedIn operating system.',
  ogUrl: 'https://buechlerpacific.com/services/linkedin-presence-os/',
  canonical: 'https://buechlerpacific.com/services/linkedin-presence-os/',
}

const pillars = [
  {
    icon: Sparkles,
    title: 'Voice Calibration',
    description:
      'We build a working voice profile around how you actually think, write, and speak so the output sounds like you, not a ghostwriter prompt template.',
  },
  {
    icon: Radar,
    title: 'Relationship Radar',
    description:
      'We maintain a priority list of people, accounts, and conversation lanes worth paying attention to so your network growth is intentional.',
  },
  {
    icon: MessageSquareText,
    title: 'Weekly Drafting',
    description:
      'You get post drafts and response angles shaped around your real expertise, current priorities, and what is already in your posting history.',
  },
  {
    icon: Compass,
    title: 'Engagement Guidance',
    description:
      'We surface timely opportunities to comment, respond, and stay visible with the people who matter instead of posting into the void.',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Map the voice',
    description:
      'Capture your tone, point of view, subject lanes, and the phrases that sound natural when you talk shop.',
  },
  {
    step: '02',
    title: 'Build the radar',
    description:
      'Identify the people, sectors, customers, and conversation threads that should shape your LinkedIn presence.',
  },
  {
    step: '03',
    title: 'Run the weekly loop',
    description:
      'Generate drafts, engagement recommendations, and follow-up options from a repeatable system instead of waiting for inspiration.',
  },
  {
    step: '04',
    title: 'Keep human approval in the loop',
    description:
      'Nothing gets pushed live without review. The system supports judgment. It does not replace it.',
  },
]

const fitList = [
  'Founders with real operating experience but inconsistent posting',
  'Consultants and agency owners who need authority, not fluff',
  'Executives who want visibility without becoming full-time creators',
  'Niche-market operators where reputation compounds through trust',
]

const notFitList = [
  'Teams looking for cheap volume posting',
  'Anyone who wants fully automated personal branding',
  'Buyers who only care about follower count',
  'Companies needing full social media management across every channel',
]

const deliverables = [
  'Voice profile and content pillars',
  'Priority account and relationship radar',
  'Recurring post drafts and response angles',
  'Engagement suggestions tied to real people and timing',
  'Approval workflow with revision support',
  'A memory layer of what has been drafted, posted, skipped, and refined',
]

function setMeta() {
  document.title = PAGE_META.title
  const selectors = {
    'meta[name="description"]': { attr: 'content', val: PAGE_META.description },
    'meta[property="og:title"]': { attr: 'content', val: PAGE_META.ogTitle },
    'meta[property="og:description"]': { attr: 'content', val: PAGE_META.ogDescription },
    'meta[property="og:url"]': { attr: 'content', val: PAGE_META.ogUrl },
    'meta[name="twitter:title"]': { attr: 'content', val: PAGE_META.ogTitle },
    'meta[name="twitter:description"]': { attr: 'content', val: PAGE_META.ogDescription },
    'link[rel="canonical"]': { attr: 'href', val: PAGE_META.canonical },
  }

  Object.entries(selectors).forEach(([selector, { attr, val }]) => {
    document.querySelector(selector)?.setAttribute(attr, val)
  })
}

function restoreMeta() {
  document.title = HOME_META.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', HOME_META.description)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', HOME_META.ogTitle)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', HOME_META.ogDescription)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', HOME_META.ogUrl)
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', HOME_META.ogTitle)
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', HOME_META.ogDescription)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', HOME_META.canonical)
}

export default function LinkedInPresencePage() {
  useEffect(() => {
    setMeta()
    window.scrollTo(0, 0)
    return restoreMeta
  }, [])

  return (
    <div className="min-h-screen bg-apple-bg text-apple-text">
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(41,151,255,0.15),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(29,29,31,0.08),_transparent_32%)]" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_420px] gap-10 items-start">
              <div>
                <p className="text-[13px] text-apple-secondary tracking-[0.2em] uppercase mb-5 font-medium">
                  High-Touch Service
                </p>
                <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] font-bold tracking-tight max-w-4xl">
                  LinkedIn Presence OS for people with real expertise and no time to play full-time creator.
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-apple-secondary leading-relaxed max-w-3xl">
                  Most smart operators do not need help having ideas. They need a repeatable system for
                  turning expertise into visibility. This is that system: voice calibration, relationship
                  radar, weekly drafting, engagement guidance, and a human approval loop.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {['Voice calibration', 'Relationship radar', 'Weekly drafts', 'Engagement guidance'].map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-apple-bg text-sm text-apple-secondary border border-black/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 bg-apple-text text-white px-7 py-3.5 rounded-full font-medium hover:bg-black transition-colors duration-300"
                  >
                    Book a 30-Minute Fit Call
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="mailto:adam.buechler@buechlerpacific.com?subject=LinkedIn%20Presence%20OS%20—%20Pilot%20Inquiry"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium border border-black/[0.08] text-apple-text hover:bg-apple-bg transition-colors duration-300"
                  >
                    Email Adam
                  </a>
                </div>
              </div>

              <div className="card-light p-8 sm:p-9 border border-black/[0.04]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-apple-secondary mb-4">
                  What You Actually Buy
                </p>
                <div className="space-y-4">
                  {deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-apple-blue mt-0.5 shrink-0" />
                      <p className="text-[15px] leading-relaxed text-apple-secondary">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl bg-apple-bg p-5">
                  <p className="text-sm font-medium text-apple-text mb-1">Pilot pricing</p>
                  <p className="text-sm text-apple-secondary leading-relaxed">
                    Engagements start at $1,500/month with a one-time $500 setup for voice calibration and radar build. Three-month minimum.
                  </p>
                </div>
                <div className="mt-4 rounded-2xl bg-apple-bg p-5">
                  <p className="text-sm font-medium text-apple-text mb-1">Built on a live system</p>
                  <p className="text-sm text-apple-secondary leading-relaxed">
                    This is the same proprietary platform that runs{' '}
                    <a href="https://www.linkedin.com/in/adam-buechler/" target="_blank" rel="noopener noreferrer" className="text-apple-blue hover:underline">my own LinkedIn presence</a>.
                    Not a demo. Not a mockup. A working system, patent pending.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <p className="text-[13px] text-apple-secondary tracking-[0.2em] uppercase mb-4 font-medium">
                The System
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
                A system for visibility, not a content treadmill.
              </h2>
              <p className="mt-5 text-lg text-apple-secondary leading-relaxed">
                The problem is rarely a lack of insight. The problem is that LinkedIn rewards consistency,
                timing, and relevance. You need to know what to write, who to engage, what has already been
                said, and how to stay visible without sounding manufactured.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="card-light p-8 sm:p-10 border border-black/[0.04]">
                  <div className="w-12 h-12 rounded-2xl bg-apple-bg flex items-center justify-center mb-6">
                    <Icon size={22} className="text-apple-text" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-apple-text mb-3">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-apple-secondary">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-apple-dark text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <p className="text-[13px] text-apple-dark-secondary tracking-[0.2em] uppercase mb-4 font-medium">
                Workflow
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
                A weekly loop, not random bursts.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {workflow.map((item) => (
                <div key={item.step} className="card-dark p-8">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-apple-blue mb-4">
                    {item.step}
                  </p>
                  <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-apple-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card-light p-8 sm:p-10">
                <p className="text-[13px] text-apple-secondary tracking-[0.2em] uppercase mb-4 font-medium">
                  Best Fit
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  Who this is for.
                </h2>
                <div className="space-y-4">
                  {fitList.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-apple-blue mt-0.5 shrink-0" />
                      <p className="text-[15px] leading-relaxed text-apple-secondary">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-light p-8 sm:p-10">
                <p className="text-[13px] text-apple-secondary tracking-[0.2em] uppercase mb-4 font-medium">
                  Not The Play
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  Who this is not for.
                </h2>
                <div className="space-y-4">
                  {notFitList.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-apple-text/30 shrink-0" />
                      <p className="text-[15px] leading-relaxed text-apple-secondary">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-[13px] text-apple-secondary tracking-[0.2em] uppercase mb-4 font-medium">
              Pilot Engagements
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Built for a small number of serious clients.
            </h2>
            <p className="mt-6 text-lg text-apple-secondary leading-relaxed max-w-3xl mx-auto">
              Right now this is a limited, high-touch service. That is intentional. The value is not just
              in drafted posts. It is in having a system that keeps your voice sharp, your relationships
              warm, and your visibility consistent.
            </p>
            <p className="mt-4 text-base text-apple-secondary/70 leading-relaxed max-w-3xl mx-auto">
              We start with a 30-minute call to see if there is fit. If there is, onboarding takes about a
              week and the weekly loop starts running immediately after.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-apple-text text-white px-7 py-3.5 rounded-full font-medium hover:bg-black transition-colors duration-300"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium border border-black/[0.08] text-apple-text hover:bg-apple-bg transition-colors duration-300"
              >
                Back to Buechler Pacific
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
