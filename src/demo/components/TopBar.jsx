export default function TopBar({ activeView, onChangeView }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg border-b border-steel/10 text-white px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold tracking-wide">FP&A Platform</h1>
        <p className="text-sm text-steel/60">
          Intelligent Financial Planning &amp; Analysis — Powered by Microsoft + AI
        </p>
      </div>
      <div className="flex items-center gap-1 bg-dark-surface rounded-lg p-1">
        <button
          onClick={() => onChangeView('process')}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            activeView === 'process'
              ? 'bg-steel/20 text-white'
              : 'text-steel/50 hover:text-white/70'
          }`}
        >
          Process Map
        </button>
        <button
          onClick={() => onChangeView('ecosystem')}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            activeView === 'ecosystem'
              ? 'bg-steel/20 text-white'
              : 'text-steel/50 hover:text-white/70'
          }`}
        >
          Platform Ecosystem
        </button>
      </div>
    </header>
  )
}
