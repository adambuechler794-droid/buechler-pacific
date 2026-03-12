import { motion } from 'framer-motion'

export default function AgentNode({ agent, radius, angleDeg, delay }) {
  const angleRad = (angleDeg * Math.PI) / 180
  const x = radius * Math.sin(angleRad)
  const y = -radius * Math.cos(angleRad)

  return (
    <div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        zIndex: 10,
      }}
    >
      <motion.div
        className="w-[140px] bg-dark-surface border border-amber-warm/30 rounded-lg px-3 py-2 text-white shadow-lg"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{
          scale: 1.08,
          boxShadow: '0 0 18px rgba(212,145,42,0.3)',
          borderColor: 'rgba(212,145,42,0.5)',
        }}
      >
        <div className="flex items-center gap-1.5 mb-0.5">
          <motion.div
            className="w-2 h-2 rounded-full bg-amber-warm shrink-0"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay * 2 }}
          />
          <h3 className="text-[11px] font-bold leading-tight text-amber-warm">{agent.label}</h3>
        </div>
        <p className="text-[9px] text-white/50 leading-snug">{agent.subtitle}</p>
      </motion.div>
    </div>
  )
}
