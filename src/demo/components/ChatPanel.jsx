import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'

const STARTER_PROMPTS = [
  'Walk me through the FP&A process',
  'How would this work for my company?',
  'What\'s already built today?',
  'How is this different from DataRails or Vena?',
]

export default function ChatPanel({ isOpen, onClose, initialGreeting = null }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)
  const greetingApplied = useRef(false)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Apply initial greeting once when chat opens with it
  useEffect(() => {
    if (isOpen && initialGreeting && !greetingApplied.current && messages.length === 0) {
      greetingApplied.current = true
      setMessages([{ role: 'assistant', content: initialGreeting }])
    }
  }, [isOpen, initialGreeting])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const sendMessage = async (text) => {
    if (!text.trim()) return

    const userMsg = { role: 'user', content: text.trim() }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      if (!res.ok) throw new Error('API error')

      const data = await res.json()
      setMessages([...updatedMessages, { role: 'assistant', content: data.content }])
    } catch {
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: 'Sorry, I couldn\'t connect. Make sure the API server is running on port 3001.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 z-[9999] w-[420px] bg-dark-card border-l border-steel/20 flex flex-col shadow-2xl"
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-steel/10 flex items-center justify-between shrink-0">
              <div>
                <h2 className="text-white font-semibold text-sm">Forecast Agent</h2>
                <p className="text-[10px] text-steel/50">Powered by Claude AI — FP&A Platform</p>
              </div>
              <button
                onClick={onClose}
                className="text-white/30 hover:text-white text-lg w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                x
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.length === 0 && !loading && (
                <div className="space-y-3">
                  <p className="text-white/40 text-sm leading-relaxed">
                    I can walk you through how this platform works, what&apos;s already built, and how it could work for your company. Ask me anything.
                  </p>
                </div>
              )}
              {/* Show starter prompts when no user messages yet */}
              {!messages.some(m => m.role === 'user') && !loading && (
                <div className="space-y-2 pt-2">
                  {STARTER_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="block w-full text-left text-xs text-steel/70 hover:text-white bg-dark-surface hover:bg-steel/10 rounded-lg px-3 py-2 transition-colors border border-steel/10 hover:border-steel/20"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-steel/20 text-white'
                        : 'bg-dark-surface text-white/80 border border-steel/10'
                    }`}
                  >
                    {msg.role === 'assistant' ? (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                          strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                          ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                          li: ({ children }) => <li className="text-white/70">{children}</li>,
                          code: ({ children }) => <code className="bg-dark-card px-1.5 py-0.5 rounded text-amber-warm text-xs">{children}</code>,
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-dark-surface border border-steel/10 rounded-xl px-3.5 py-2.5">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-400/60 animate-pulse" />
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-400/60 animate-pulse [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-400/60 animate-pulse [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-5 py-4 border-t border-steel/10 shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about the platform..."
                  disabled={loading}
                  className="flex-1 bg-dark-surface border border-steel/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-steel/30 focus:outline-none focus:border-steel/30 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="px-4 py-2 bg-coral-400/20 text-coral-400 text-sm font-medium rounded-lg hover:bg-coral-400/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
