import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import TopBar from './components/TopBar'
import OrbitalMap from './components/OrbitalMap'
import EcosystemMap from './components/EcosystemMap'
import DetailDrawer from './components/DetailDrawer'
import DifferentiatorBar from './components/DifferentiatorBar'
import ReadinessBar from './components/ReadinessBar'
import ChatPanel from './components/ChatPanel'

const PROACTIVE_GREETING = "I'm the Forecast Agent — one of five AI agents running inside this platform. I drive the FP&A cycle: orchestrating submissions, generating variance commentary, and drafting executive packages. I can walk you through any part of the platform: the 8-phase process, what's already live in Fabric, how the agents work, or how this compares to alternatives like DataRails. Click a phase to explore, or ask me anything."

export default function DemoPage() {
  const navigate = useNavigate()
  const [activeView, setActiveView] = useState('process')
  const [selectedPhase, setSelectedPhase] = useState(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const [proactiveToast, setProactiveToast] = useState(false)
  const toastTimerRef = useRef(null)

  useEffect(() => {
    toastTimerRef.current = setTimeout(() => {
      if (!chatOpen) {
        setProactiveToast(true)
      }
    }, 4000)
    return () => clearTimeout(toastTimerRef.current)
  }, [])

  const openChat = (withGreeting = false) => {
    setProactiveToast(false)
    setChatOpen(true)
    if (withGreeting && !hasAutoOpened) {
      setHasAutoOpened(true)
    }
  }

  return (
    <div className="demo-canvas h-screen overflow-hidden bg-dark-bg bg-dot-grid">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      {/* Back to site link */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-5 left-6 z-[60] text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
      >
        <span>&larr;</span> Back to Site
      </button>

      <TopBar activeView={activeView} onChangeView={setActiveView} />
      {activeView === 'process' ? (
        <OrbitalMap onSelectPhase={setSelectedPhase} />
      ) : (
        <EcosystemMap />
      )}
      {activeView === 'process' ? <DifferentiatorBar /> : <ReadinessBar />}
      {selectedPhase && (
        <DetailDrawer
          phase={selectedPhase}
          onClose={() => setSelectedPhase(null)}
        />
      )}

      {/* Proactive toast */}
      <AnimatePresence>
        {proactiveToast && !chatOpen && (
          <motion.div
            className="fixed bottom-16 right-6 z-[9000] max-w-[320px] cursor-pointer"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={() => openChat(true)}
          >
            <div className="bg-dark-card border border-coral-400/30 rounded-2xl px-4 py-3 shadow-2xl">
              <div className="flex items-start gap-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-coral-400 shrink-0 mt-1.5"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <p className="text-xs font-semibold text-coral-400 mb-1">Forecast Agent</p>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    Have questions about the platform? I can walk you through any part of it — click here to chat.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setProactiveToast(false) }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-dark-surface border border-steel/20 rounded-full flex items-center justify-center text-white/40 hover:text-white text-[10px]"
            >
              x
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Forecast Agent floating button */}
      {!chatOpen && !proactiveToast && (
        <motion.button
          onClick={() => openChat(false)}
          className="fixed bottom-16 right-6 z-[9000] bg-coral-400/90 hover:bg-coral-400 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg transition-colors"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            boxShadow: [
              '0 0 10px rgba(255,107,107,0.3)',
              '0 0 25px rgba(255,107,107,0.5)',
              '0 0 10px rgba(255,107,107,0.3)',
            ],
          }}
          transition={{
            scale: { delay: 0.3, type: 'spring', stiffness: 300 },
            opacity: { delay: 0.3 },
            boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          }}
          whileHover={{ scale: 1.08 }}
        >
          Forecast Agent
        </motion.button>
      )}
      <ChatPanel
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        initialGreeting={hasAutoOpened ? PROACTIVE_GREETING : null}
      />
    </div>
  )
}
