import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 40%, #fff 0%, #f5f5f7 70%)' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Overline */}
        <p className="text-[13px] text-apple-secondary tracking-[0.2em] uppercase font-medium mb-8">
          Buechler Pacific
        </p>

        {/* Headline */}
        <h1 className="font-display font-bold tracking-tight leading-[0.9] text-apple-text">
          <span className="block text-[clamp(3rem,11vw,8rem)]">
            Financial
          </span>
          <span className="block text-[clamp(3rem,11vw,8rem)]">
            Intelligence.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-xl sm:text-2xl text-apple-secondary max-w-xl mx-auto leading-relaxed font-light">
          AI-powered systems that turn your data into decisions.
          Built for adoption. Based in Maui.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-apple-text text-white px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-apple-dark-secondary transition-colors duration-300"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#work"
            className="text-apple-blue text-[15px] font-semibold hover:underline underline-offset-4 transition-all"
          >
            View our work &rsaquo;
          </a>
        </div>
      </div>
    </section>
  )
}
