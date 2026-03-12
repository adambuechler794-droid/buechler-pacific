export default function TeamsNotification() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 text-sm" style={{ background: '#1e1e1e' }}>
      {/* Channel header */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-white/10" style={{ background: '#2b2b2b' }}>
        <div className="flex items-center gap-2">
          <span className="text-white/60 text-lg font-bold">#</span>
          <div>
            <div className="text-white font-semibold text-sm">FP&A Submissions</div>
            <div className="text-white/40 text-xs">Budget & forecast input channel</div>
          </div>
        </div>
        {/* Fake toolbar icons */}
        <div className="ml-auto flex items-center gap-3 text-white/30">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" /></svg>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" /></svg>
        </div>
      </div>

      {/* Message area */}
      <div className="px-5 py-4">
        {/* Date divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-xs font-medium">Today</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Bot message */}
        <div className="flex gap-3">
          {/* Avatar */}
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">AI</span>
          </div>

          {/* Message content */}
          <div className="flex-1 min-w-0">
            {/* Sender + timestamp */}
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-semibold text-sm">FP&A Bot</span>
              <span className="text-white/30 text-xs">8:00 AM</span>
            </div>

            {/* Message text */}
            <div className="text-white/80 leading-relaxed space-y-3">
              <p>
                March forecast submissions are now open. Please submit your division's
                forecast by <span className="text-white font-medium">Friday, March 7th</span>.
              </p>
              <div>
                <p className="mb-1">You can:</p>
                <ul className="list-disc list-inside text-white/70 space-y-0.5 ml-1">
                  <li>Fill out the form below</li>
                  <li>Attach an Excel template</li>
                  <li>Or just tell me in plain English</li>
                </ul>
              </div>
              <p className="text-white/50 text-xs italic">
                Rolling 12-month forecast — all divisions, all cadences.
              </p>
            </div>

            {/* Adaptive card */}
            <div
              className="mt-3 rounded-lg overflow-hidden border border-white/10"
              style={{ background: '#2b2b2b' }}
            >
              {/* Accent border on left via wrapper */}
              <div className="flex">
                <div className="w-1 flex-shrink-0 bg-steel" />
                <div className="flex-1 p-4 space-y-3">
                  {/* Card title */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded bg-navy flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/90 font-semibold text-xs uppercase tracking-wide">
                      Forecast Submission
                    </span>
                  </div>

                  {/* Division dropdown */}
                  <div>
                    <label className="block text-white/40 text-xs mb-1">Division</label>
                    <div className="flex items-center justify-between px-3 py-2 rounded border border-white/15 bg-white/5">
                      <span className="text-white/40 text-xs">Select your division...</span>
                      <svg className="w-3 h-3 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Period field */}
                  <div>
                    <label className="block text-white/40 text-xs mb-1">Period</label>
                    <div className="flex items-center px-3 py-2 rounded border border-white/15 bg-white/5">
                      <span className="text-white/70 text-xs font-mono">2026-03</span>
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    className="w-full mt-1 px-4 py-2 rounded text-white text-xs font-semibold bg-steel hover:bg-steel/90 transition-colors cursor-default"
                    tabIndex={-1}
                  >
                    Start Submission
                  </button>
                </div>
              </div>
            </div>

            {/* Reactions row */}
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-white/10 text-xs bg-white/5 text-white/50">
                <span>&#128077;</span> 3
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
