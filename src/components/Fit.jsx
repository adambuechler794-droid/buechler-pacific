import { Check } from 'lucide-react'
import { useInView } from './useInView'

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

export default function Fit() {
  const [ref, inView] = useInView()

  return (
    <section className="py-20 sm:py-24 bg-stone-50" ref={ref}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className={`grid gap-6 sm:grid-cols-2 ${inView ? 'anim-reveal' : 'opacity-0'}`}>
          {/* Best For */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200/80">
            <p className="text-[12px] font-semibold text-copper-500 uppercase tracking-[0.2em] mb-2">
              Ideal Clients
            </p>
            <h3 className="font-serif text-2xl text-navy-900 mb-6">Best for</h3>
            <ul className="space-y-4">
              {bestFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-emerald-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not a Fit */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200/80">
            <p className="text-[12px] font-semibold text-stone-200 uppercase tracking-[0.2em] mb-2">
              Transparency
            </p>
            <h3 className="font-serif text-2xl text-navy-900 mb-6">Probably not a fit if</h3>
            <ul className="space-y-4">
              {notFit.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] text-slate-400 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-200 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
