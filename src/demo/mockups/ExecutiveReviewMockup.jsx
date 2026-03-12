export default function ExecutiveReviewMockup() {
  const botAvatar = (
    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center">
      <span className="text-white text-xs font-bold">AI</span>
    </div>
  )

  const cfoAvatar = (
    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-steel flex items-center justify-center">
      <span className="text-white text-xs font-bold">CFO</span>
    </div>
  )

  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 text-sm" style={{ background: '#1e1e1e' }}>
      {/* Channel header */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-white/10" style={{ background: '#2b2b2b' }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">AI</span>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">FP&A Bot</div>
            <div className="text-white/40 text-xs">Executive financial assistant</div>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3 text-white/30">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" /></svg>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" /></svg>
        </div>
      </div>

      {/* Message area */}
      <div className="px-5 py-4 space-y-4 max-h-[600px] overflow-y-auto">
        {/* Date divider */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-xs font-medium">Today</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Message 1: Bot greeting */}
        <div className="flex gap-3">
          {botAvatar}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-semibold text-sm">FP&A Bot</span>
              <span className="text-white/30 text-xs">9:15 AM</span>
            </div>
            <div className="rounded-lg px-4 py-3 text-white/80 leading-relaxed" style={{ background: '#2b2b2b' }}>
              Good morning. Your February financial review package is ready. I've flagged <span className="text-white font-medium">2 items</span> that need your attention before Thursday's executive meeting.
            </div>
          </div>
        </div>

        {/* Message 2: CFO asks about Crane */}
        <div className="flex gap-3 justify-end">
          <div className="max-w-[75%]">
            <div className="flex items-baseline gap-2 mb-1 justify-end">
              <span className="text-white/30 text-xs">9:16 AM</span>
              <span className="text-white font-semibold text-sm">CFO</span>
            </div>
            <div className="rounded-lg px-4 py-3 text-white/90 leading-relaxed bg-steel/30">
              Why is Crane over budget this month?
            </div>
          </div>
          {cfoAvatar}
        </div>

        {/* Message 3: Bot explains Crane */}
        <div className="flex gap-3">
          {botAvatar}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-semibold text-sm">FP&A Bot</span>
              <span className="text-white/30 text-xs">9:16 AM</span>
            </div>
            <div className="rounded-lg px-4 py-3 text-white/80 leading-relaxed space-y-3" style={{ background: '#2b2b2b' }}>
              <p>
                Crane Services came in <span className="text-white font-medium">$500K over budget</span> for February — a <span className="text-white font-medium">31.3% variance</span>. The primary driver is unforecasted equipment maintenance on the Hilo project.
              </p>
              <p>
                The Hilo PM submitted a reforecast last week reflecting this overage through Q2. The rolling forecast now accounts for it.
              </p>
              <p className="text-white font-medium">
                Recommendation: <span className="text-white/80 font-normal">Review the Hilo maintenance contract terms at Thursday's meeting.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Message 4: CFO asks about forecast accuracy */}
        <div className="flex gap-3 justify-end">
          <div className="max-w-[75%]">
            <div className="flex items-baseline gap-2 mb-1 justify-end">
              <span className="text-white/30 text-xs">9:17 AM</span>
              <span className="text-white font-semibold text-sm">CFO</span>
            </div>
            <div className="rounded-lg px-4 py-3 text-white/90 leading-relaxed bg-steel/30">
              What's our overall forecast accuracy trending?
            </div>
          </div>
          {cfoAvatar}
        </div>

        {/* Message 5: Bot explains accuracy */}
        <div className="flex gap-3">
          {botAvatar}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-semibold text-sm">FP&A Bot</span>
              <span className="text-white/30 text-xs">9:17 AM</span>
            </div>
            <div className="rounded-lg px-4 py-3 text-white/80 leading-relaxed space-y-3" style={{ background: '#2b2b2b' }}>
              <p>
                Across all divisions, 12-month rolling forecast accuracy is <span className="text-white font-medium">91.4%</span>, up from 87.2% six months ago.
              </p>
              <div>
                <p className="mb-1.5">Biggest improvements:</p>
                <ul className="space-y-1 ml-1">
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">&bull;</span>
                    <span>Civil: <span className="text-white font-medium">+8.2 percentage points</span> (moved to weekly billings updates)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">&bull;</span>
                    <span>Crane Services: <span className="text-white font-medium">+5.1pp</span> (new PM reporting cadence)</span>
                  </li>
                </ul>
              </div>
              <p>
                Lowest accuracy: Energy at <span className="text-white font-medium">82.3%</span> — primarily due to weather-related project delays.
              </p>
              <p className="text-white font-medium">
                Trend: <span className="text-white/80 font-normal">Accuracy has improved every quarter since the platform launched.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Message 6: CFO asks for deck */}
        <div className="flex gap-3 justify-end">
          <div className="max-w-[75%]">
            <div className="flex items-baseline gap-2 mb-1 justify-end">
              <span className="text-white/30 text-xs">9:18 AM</span>
              <span className="text-white font-semibold text-sm">CFO</span>
            </div>
            <div className="rounded-lg px-4 py-3 text-white/90 leading-relaxed bg-steel/30">
              Perfect. Pull up the February deck for Thursday.
            </div>
          </div>
          {cfoAvatar}
        </div>

        {/* Message 7: Bot confirms deck */}
        <div className="flex gap-3">
          {botAvatar}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-semibold text-sm">FP&A Bot</span>
              <span className="text-white/30 text-xs">9:18 AM</span>
            </div>
            <div className="rounded-lg px-4 py-3 text-white/80 leading-relaxed space-y-3" style={{ background: '#2b2b2b' }}>
              <p>Done. Your February Financial Review deck is ready:</p>
              <ul className="space-y-1.5 ml-1">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">{"\uD83D\uDCCA"}</span>
                  <span>8 division summaries with variance commentary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">{"\uD83D\uDCC8"}</span>
                  <span>Rolling 12-month trend charts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">{"\uD83C\uDFAF"}</span>
                  <span>3 action items flagged for discussion</span>
                </li>
              </ul>
              <p>
                I've shared it to your Teams channel and sent a calendar reminder for <span className="text-white font-medium">Thursday 2:00 PM</span>.
              </p>
              <p>Anything else you'd like me to add?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Input field */}
      <div className="px-5 py-3 border-t border-white/10" style={{ background: '#2b2b2b' }}>
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-white/15 bg-white/5">
          <svg className="w-4 h-4 text-white/25 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          <span className="text-white/25 text-sm select-none">Ask about your financial data...</span>
          <div className="ml-auto flex items-center gap-2 text-white/20">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" /></svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
          </div>
        </div>
      </div>
    </div>
  )
}
