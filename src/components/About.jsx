import { Linkedin } from 'lucide-react'
import { useInView } from './useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo placeholder */}
          <div className={`reveal ${inView ? 'in-view' : ''}`}>
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-apple-bg to-[#e8e8ed] flex items-end p-8 overflow-hidden relative">
              <div className="relative z-10">
                <p className="text-apple-secondary text-sm tracking-[0.2em] uppercase">Portrait</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-2`}>
            <p className="text-[13px] text-apple-secondary tracking-[0.2em] uppercase mb-4 font-medium">
              About
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-apple-text mb-8">
              Adam Buechler
            </h2>

            <div className="space-y-4 text-apple-secondary leading-relaxed">
              <p>
                I sit at the intersection of finance and AI engineering — a background
                in FP&A combined with hands-on AI development, data engineering, and
                full-stack product builds. I build the intelligent systems that
                finance teams actually use.
              </p>
              <p>
                Previously Director of FP&A at Alpha Inc., where I built the company&apos;s
                entire data platform from scratch and led financial planning across
                multi-island construction operations in Hawaii. Before that, finance
                and analytics roles at End Group and Cutwater Spirits in consumer goods.
              </p>
              <p>
                Economics from UC Santa Barbara. Based in Maui, where I&apos;m a
                member of the Maui Chamber of Commerce and the Surfrider Foundation.
              </p>
            </div>

            {/* Credential tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['AI Engineering', 'Director of FP&A', 'Microsoft Fabric', 'Full-Stack Development', 'Maui, Hawaii'].map(tag => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm text-apple-secondary bg-apple-bg rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/adambuechler/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 text-apple-blue hover:underline underline-offset-4 transition-all"
            >
              <Linkedin size={18} />
              <span className="text-sm font-semibold">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
