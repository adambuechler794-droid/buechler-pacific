import { Briefcase, GraduationCap, Heart, Anchor } from 'lucide-react'
import { useInView } from './useInView'

const experience = [
  {
    role: 'Director of FP&A',
    company: 'Alpha Inc.',
    detail: 'Construction & operations, Hawaii',
  },
  {
    role: 'Finance & Analytics Roles',
    company: 'End Group, Cutwater Spirits',
    detail: 'CPG, spirits, and consumer brands',
  },
  {
    role: 'Education',
    company: 'UC Santa Barbara',
    detail: 'Economics',
  },
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
    <section id="about" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold text-coral-400 uppercase tracking-widest mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-4">
            The Person Behind the Systems
          </h2>
        </div>

        <div className={`grid gap-12 lg:grid-cols-5 items-start ${inView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
          {/* Photo Column */}
          <div className="lg:col-span-2">
            {/* Placeholder headshot - replace with real photo */}
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center overflow-hidden">
              <div className="text-center text-ocean-400">
                <Anchor size={48} className="mx-auto mb-2 opacity-50" />
                <span className="text-sm font-medium">Headshot Photo</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-ocean-900 mb-3">
                The Short Version
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm Adam Buechler, and I build financial intelligence systems for
                growing companies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-ocean-900 mb-3">
                The Longer Version
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I started in traditional finance: FP&A, forecasting, variance
                  analysis, board reporting. The usual. But I kept running into the
                  same problem: the data systems we were supposed to rely on were
                  either broken, manual, or nonexistent.
                </p>
                <p>
                  So I learned to build them myself. SQL, Python, Power BI,
                  Microsoft Fabric, automation tools. Not because I wanted to become
                  a developer, but because someone had to actually fix the problem.
                  Turns out, having both the finance context and the technical
                  skills is a pretty rare combination. And it's exactly what most
                  mid-market companies need.
                </p>
                <p>
                  I'm not building a big consulting firm. I work with a small
                  number of clients at a time and go deep. You get me, not a junior
                  analyst learning on your project.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-ocean-900 mb-4">
                <Briefcase size={18} />
                Background
              </h3>
              <div className="space-y-3">
                {experience.map((exp) => (
                  <div
                    key={exp.role}
                    className="flex items-start gap-3 p-3 rounded-xl bg-sand-50"
                  >
                    <div className="w-2 h-2 rounded-full bg-ocean-400 mt-2 shrink-0" />
                    <div>
                      <p className="font-semibold text-ocean-900 text-sm">
                        {exp.role}
                      </p>
                      <p className="text-sm text-slate-500">
                        {exp.company}, {exp.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Beyond the Resume */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-ocean-900 mb-4">
                <Heart size={18} />
                Beyond the Resume
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-ocean-50 text-ocean-700 text-sm font-medium rounded-lg"
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
