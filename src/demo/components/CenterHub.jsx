import { motion } from 'framer-motion'

const pingVariants = {
  animate: (i) => ({
    scale: [1, 2.5],
    opacity: [0.4, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: i * 1,
      ease: 'easeOut',
    },
  }),
}

export default function CenterHub() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Radar ping rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-48 h-48 rounded-full border border-steel/20"
          custom={i}
          variants={pingVariants}
          animate="animate"
        />
      ))}
      <motion.div
        className="relative flex flex-col items-center justify-center w-48 h-48 rounded-full bg-dark-card border border-steel/30 pointer-events-auto"
        style={{
          boxShadow: '0 0 30px rgba(26,111,160,0.15)',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Subtle inner gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-steel/5 to-transparent" />
        <span className="text-2xl font-bold text-white tracking-wide relative">FP&A</span>
        <span className="text-[10px] text-steel/70 mt-1 relative">powered by</span>
        <span className="text-base font-semibold text-steel mt-0.5 relative">Claude AI</span>
        <span className="text-[9px] text-white/40 mt-2 text-center leading-tight px-4 relative">
          Built on your Microsoft stack
        </span>
      </motion.div>
    </div>
  )
}
