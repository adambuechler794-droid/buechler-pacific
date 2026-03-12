import { motion, AnimatePresence } from 'framer-motion'
import AutomationBadge from './AutomationBadge'
import TeamsNotification from '../mockups/TeamsNotification'
import DataCollectionMockups from '../mockups/DataCollectionMockups'
import ValidationSummary from '../mockups/ValidationSummary'
import SubmissionTracker from '../mockups/SubmissionTracker'
import AnalysisMockups from '../mockups/AnalysisMockups'
import ReportingMockups from '../mockups/ReportingMockups'
import ExecutiveReviewMockup from '../mockups/ExecutiveReviewMockup'

const MOCKUP_REGISTRY = {
  TeamsNotification,
  DataCollectionMockups,
  ValidationSummary,
  SubmissionTracker,
  AnalysisMockups,
  ReportingMockups,
  ExecutiveReviewMockup,
}

export default function DetailDrawer({ phase, onClose }) {
  const MockupComponent = MOCKUP_REGISTRY[phase.mockupComponent]
  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />
      {/* Centered modal */}
      <motion.div
        key="modal"
        className="fixed inset-0 z-[9999] flex items-center justify-center p-6 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-dark-card rounded-2xl shadow-2xl overflow-y-auto pointer-events-auto w-full max-w-[680px] max-h-[90vh] border border-steel/20"
          initial={{ scale: 0.92, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.92, y: 30 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-steel tracking-widest uppercase">
                Phase {phase.number}
              </span>
              <button
                onClick={onClose}
                className="text-white/40 hover:text-white text-2xl font-bold leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                &times;
              </button>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">{phase.title}</h2>
            <AutomationBadge level={phase.automationLevel} />

            <p className="text-white/70 mt-6 leading-relaxed">{phase.description}</p>

            {/* Tools */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">Microsoft Tools</h4>
              <div className="flex flex-wrap gap-2">
                {phase.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-steel/15 text-steel text-sm font-medium border border-steel/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Mockup */}
            {MockupComponent && (
              <div className="mt-8">
                <MockupComponent />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
