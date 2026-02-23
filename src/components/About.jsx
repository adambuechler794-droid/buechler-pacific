import { Linkedin } from 'lucide-react'
import { useInView } from './useInView'

const experience = [
  { role: 'Director of FP&A', org: 'Alpha Inc.', detail: 'Construction & operations, Hawaii' },
  { role: 'Finance & Analytics', org: 'End Group, Cutwater Spirits', detail: 'CPG and consumer brands' },
  { role: 'Economics', org: 'UC Santa Barbara', detail: '' },
]

const interests = [
  'Maui Chamber of Commerce member',
  'Surfrider Foundation supporter',
  'Former Trilogy sailing crew',
  'Building surf forecast apps for fun',
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 sm:py-32 bg-stone-100" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className={`mb-16 ${inView ? 'anim-reveal' : 'opacity-0'}`}>
          <p className="text-[12px] font-semibold text-copper-500 uppercase tracking-[0.2em] mb-4">
            04 — About
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy-900">
            The Person Behind the Systems
          </h2>
        </div>

        <div className={`grid gap-12 lg:grid-cols-5 ${inView ? 'anim-reveal del-2' : 'opacity-0'}`}>
          {/* Left — Pull quote + CTA */}
          <div className="lg:col-span-2 space-y-8">
            <blockquote className="font-serif text-2xl sm:text-3xl text-navy-800 leading-snug">
              "Someone had to actually fix the problem.
              <span className="text-copper-500"> Turns out, having both the finance context and the technical skills is a pretty rare combination.</span>"
            </blockquote>

            <a
              href="https://www.linkedin.com/in/adambuechler/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-[13px] font-semibold rounded-lg transition-colors"
            >
              <Linkedin size={15} />
              Connect on LinkedIn
            </a>
          </div>

          {/* Right — Bio */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4 text-[15px] text-slate-500 leading-relaxed">
              <p>
                I'm Adam Buechler. I started in traditional finance — FP&A, forecasting,
                variance analysis, board reporting. But I kept running into the same problem:
                the data systems we were supposed to rely on were either broken, manual, or nonexistent.
              </p>
              <p>
                So I learned to build them myself. SQL, Python, Power BI, Microsoft Fabric,
                automation tools. Not because I wanted to become a developer, but because
                someone had to fix the problem.
              </p>
              <p>
                I'm not building a big consulting firm. I work with a small number of clients
                at a time and go deep. You get me — not a junior analyst learning on your project.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-[12px] font-semibold text-copper-500 uppercase tracking-[0.2em] mb-4">
                Background
              </h3>
              <div className="space-y-3">
                {experience.map((exp) => (
                  <div key={exp.role} className="flex items-baseline gap-3">
                    <span className="w-1 h-1 rounded-full bg-navy-300 shrink-0 mt-2" />
                    <div>
                      <span className="text-[14px] font-semibold text-navy-900">{exp.role}</span>
                      <span className="text-[14px] text-slate-400"> — {exp.org}</span>
                      {exp.detail && <span className="text-[13px] text-slate-400">, {exp.detail}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-[12px] font-semibold text-copper-500 uppercase tracking-[0.2em] mb-4">
                Beyond the Resume
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-white border border-stone-200/80 text-slate-500 text-[13px] rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
