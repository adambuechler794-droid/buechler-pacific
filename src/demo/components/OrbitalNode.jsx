import { motion } from 'framer-motion'
import AutomationBadge from './AutomationBadge'

export default function OrbitalNode({ phase, radius, angleDeg, onClick, index = 0 }) {
  const angleRad = (angleDeg * Math.PI) / 180
  const x = radius * Math.sin(angleRad)
  const y = -radius * Math.cos(angleRad)

  return (
    <div
      className="absolute cursor-pointer"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
      onClick={() => onClick(phase)}
    >
      <motion.div
        className="w-[200px] bg-dark-card border border-steel/20 rounded-xl px-4 py-3 text-white shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 * index, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 20px rgba(26,111,160,0.3)',
          borderColor: 'rgba(26,111,160,0.4)',
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold text-steel/60 bg-steel/10 rounded-full w-6 h-6 flex items-center justify-center shrink-0">
            {phase.number}
          </span>
          <h3 className="text-sm font-semibold leading-tight">{phase.title}</h3>
        </div>
        <div className="mb-2">
          <AutomationBadge level={phase.automationLevel} />
        </div>
        <p className="text-[10px] text-white/30 italic">Click to explore</p>
      </motion.div>
    </div>
  )
}
