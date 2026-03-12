import { useState } from 'react'

const TABS = [
  { key: 'powerbi', label: 'Power BI Dashboard' },
  { key: 'powerpoint', label: 'PowerPoint Slide' },
  { key: 'excel', label: 'Excel Billings Email' },
]

/* ── Bar chart data ── */
const MONTHS = ['A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D', 'J', 'F', 'M']
const ACTUALS = [72, 68, 75, 80, 78, 82, 85, 88, 90, 87, 92, 95]
const BUDGETS = [70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92]

/* ── Division breakdown ── */
const DIVISIONS = [
  { name: 'Civil', pct: 35, color: '#1C3A5E' },
  { name: 'Crane', pct: 20, color: '#1A6FA0' },
  { name: 'Energy', pct: 18, color: '#2E7D5B' },
  { name: 'Drilling', pct: 12, color: '#D4912A' },
  { name: 'Other', pct: 15, color: '#95A5A6' },
]

/* ── PowerPoint table data ── */
const SLIDE_ROWS = [
  { div: 'Civil', actual: '$4,980K', budget: '$4,800K', variance: '+$180K', pct: '+3.8%', positive: true },
  { div: 'Crane Services', actual: '$2,100K', budget: '$1,600K', variance: '+$500K', pct: '+31.3%', positive: true },
  { div: 'Energy', actual: '$890K', budget: '$1,100K', variance: '-$210K', pct: '-19.1%', positive: false },
  { div: 'Drilling', actual: '$1,740K', budget: '$1,700K', variance: '+$40K', pct: '+2.4%', positive: true },
]

/* ── Excel billings data ── */
const BILLINGS = [
  { project: 'Hilo Infrastructure', pm: 'Mike K.', thisWeek: '$420,000', lastWeek: '$380,000', change: '+$40,000', dir: 1 },
  { project: 'Kapolei Solar', pm: 'Sarah M.', thisWeek: '$185,000', lastWeek: '$210,000', change: '-$25,000', dir: -1 },
  { project: 'Pearl Harbor Renovation', pm: 'James T.', thisWeek: '$290,000', lastWeek: '$290,000', change: '$0', dir: 0 },
  { project: 'Kona Commercial', pm: 'Lisa R.', thisWeek: '$175,000', lastWeek: '$160,000', change: '+$15,000', dir: 1 },
  { project: 'Maui Bridge Repair', pm: 'David P.', thisWeek: '$95,000', lastWeek: '$110,000', change: '-$15,000', dir: -1 },
]

/* ================================================================
   Tab 1 — Power BI Dashboard
   ================================================================ */
function PowerBITab() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4">
        {/* Total Revenue */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <p className="text-xs font-semibold text-muted uppercase tracking-wide">Total Revenue</p>
          <p className="text-2xl font-bold text-navy mt-1">$14.2M</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-green-muted text-sm">&#9650;</span>
            <span className="text-xs text-green-muted font-medium">+3.2% vs prior month</span>
          </div>
        </div>
        {/* Total Variance */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <p className="text-xs font-semibold text-muted uppercase tracking-wide">Total Variance</p>
          <p className="text-2xl font-bold text-navy mt-1">-$420K</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="w-2 h-2 rounded-full bg-amber-warm inline-block" />
            <span className="text-xs text-amber-warm font-medium">2.9% under budget</span>
          </div>
        </div>
        {/* Forecast Accuracy */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <p className="text-xs font-semibold text-muted uppercase tracking-wide">Forecast Accuracy</p>
          <p className="text-2xl font-bold text-navy mt-1">91.4%</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-green-muted text-sm">&#9650;</span>
            <span className="text-xs text-green-muted font-medium">+1.2pp vs prior quarter</span>
          </div>
        </div>
      </div>

      {/* Bar Chart — Actual vs Budget */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
        <p className="text-sm font-semibold text-navy mb-1">Actual vs Budget — Rolling 12 Months</p>
        <div className="flex items-center gap-4 mb-3">
          <span className="flex items-center gap-1 text-xs text-muted">
            <span className="w-3 h-3 rounded-sm inline-block" style={{ background: '#1A6FA0' }} /> Actual
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <span className="w-3 h-3 rounded-sm inline-block" style={{ background: 'rgba(28,58,94,0.45)' }} /> Budget
          </span>
        </div>
        <div className="flex items-end gap-1" style={{ height: 160 }}>
          {MONTHS.map((m, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0">
              <div className="flex items-end gap-[2px] w-full justify-center" style={{ height: 140 }}>
                <div
                  className="rounded-t-sm"
                  style={{
                    width: '40%',
                    height: `${(ACTUALS[i] / 100) * 140}px`,
                    background: '#1A6FA0',
                  }}
                />
                <div
                  className="rounded-t-sm"
                  style={{
                    width: '40%',
                    height: `${(BUDGETS[i] / 100) * 140}px`,
                    background: 'rgba(28,58,94,0.45)',
                  }}
                />
              </div>
              <span className="text-[10px] text-muted mt-1">{m}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Division Breakdown — Stacked Horizontal Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
        <p className="text-sm font-semibold text-navy mb-3">Revenue by Division</p>
        <div className="flex h-7 rounded-md overflow-hidden">
          {DIVISIONS.map((d) => (
            <div
              key={d.name}
              style={{ width: `${d.pct}%`, background: d.color }}
              className="flex items-center justify-center"
            >
              <span className="text-[10px] text-white font-semibold drop-shadow-sm">
                {d.pct}%
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
          {DIVISIONS.map((d) => (
            <span key={d.name} className="flex items-center gap-1 text-xs text-muted">
              <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: d.color }} />
              {d.name} ({d.pct}%)
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   Tab 2 — PowerPoint Slide
   ================================================================ */
function PowerPointTab() {
  return (
    <div
      className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
      style={{ aspectRatio: '16 / 9' }}
    >
      {/* Title bar */}
      <div className="bg-navy flex items-center justify-between px-6 py-3">
        <span className="text-white font-bold text-sm tracking-wide">PACIFIC BUILDERS</span>
        <span className="text-white/80 text-xs">Financial Review — February 2026</span>
      </div>

      {/* Slide body */}
      <div className="px-6 py-4 flex flex-col justify-between" style={{ height: 'calc(100% - 48px - 28px)' }}>
        {/* Summary table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-light-blue text-navy">
                <th className="text-left px-3 py-1.5 font-semibold">Division</th>
                <th className="text-right px-3 py-1.5 font-semibold">Actual</th>
                <th className="text-right px-3 py-1.5 font-semibold">Budget</th>
                <th className="text-right px-3 py-1.5 font-semibold">Variance</th>
                <th className="text-right px-3 py-1.5 font-semibold">%</th>
              </tr>
            </thead>
            <tbody>
              {SLIDE_ROWS.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 py-1.5 font-medium text-dark">{r.div}</td>
                  <td className="px-3 py-1.5 text-right text-dark">{r.actual}</td>
                  <td className="px-3 py-1.5 text-right text-dark">{r.budget}</td>
                  <td className={`px-3 py-1.5 text-right font-semibold ${r.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {r.variance}
                  </td>
                  <td className={`px-3 py-1.5 text-right font-semibold ${r.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {r.pct}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Takeaways */}
        <div className="mt-4">
          <p className="text-xs font-semibold text-navy mb-1">Key Takeaways</p>
          <ul className="list-disc list-inside space-y-0.5">
            <li className="text-[11px] text-dark italic">
              Crane Services +31.3% driven by Hilo project equipment costs
            </li>
            <li className="text-[11px] text-dark italic">
              Energy -19.1% due to Kapolei mobilization delay
            </li>
            <li className="text-[11px] text-dark italic">
              Overall forecast accuracy improving — 91.4% rolling 12-month
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-1.5">
        <p className="text-[10px] text-muted text-center">
          Auto-generated by FP&A Platform | March 5, 2026
        </p>
      </div>
    </div>
  )
}

/* ================================================================
   Tab 3 — Excel Billings Email
   ================================================================ */
function ExcelBillingsTab() {
  const totalThis = '$1,165,000'
  const totalLast = '$1,150,000'
  const totalChange = '+$15,000'

  return (
    <div className="space-y-4">
      {/* Email header */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm space-y-1">
        <div className="flex gap-2 text-xs">
          <span className="font-semibold text-navy w-14">To:</span>
          <span className="text-dark">Project Managers Distribution List</span>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="font-semibold text-navy w-14">From:</span>
          <span className="text-dark">FP&A Bot</span>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="font-semibold text-navy w-14">Subject:</span>
          <span className="text-dark font-semibold">Weekly Billings Forecast — Week of March 3, 2026</span>
        </div>
        <p className="text-[10px] text-muted mt-2 italic">This report is auto-generated every Wednesday</p>
      </div>

      {/* Spreadsheet table */}
      <div className="border border-gray-400 rounded-md overflow-hidden shadow-sm">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left px-3 py-2 font-semibold border-r border-navy/60">Project</th>
              <th className="text-left px-3 py-2 font-semibold border-r border-navy/60">PM</th>
              <th className="text-right px-3 py-2 font-semibold border-r border-navy/60">This Week</th>
              <th className="text-right px-3 py-2 font-semibold border-r border-navy/60">Last Week</th>
              <th className="text-right px-3 py-2 font-semibold">Change</th>
            </tr>
          </thead>
          <tbody>
            {BILLINGS.map((r, i) => (
              <tr
                key={i}
                className={`${i % 2 === 0 ? 'bg-white' : 'bg-light-blue/40'} border-t border-gray-300`}
              >
                <td className="px-3 py-1.5 text-dark border-r border-gray-200">{r.project}</td>
                <td className="px-3 py-1.5 text-dark border-r border-gray-200">{r.pm}</td>
                <td className="px-3 py-1.5 text-right text-dark border-r border-gray-200">{r.thisWeek}</td>
                <td className="px-3 py-1.5 text-right text-dark border-r border-gray-200">{r.lastWeek}</td>
                <td
                  className={`px-3 py-1.5 text-right font-semibold ${
                    r.dir > 0 ? 'text-green-600' : r.dir < 0 ? 'text-red-600' : 'text-gray-400'
                  }`}
                >
                  {r.change}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100 border-t-2 border-gray-400 font-bold">
              <td className="px-3 py-2 text-navy border-r border-gray-200" colSpan={2}>Total</td>
              <td className="px-3 py-2 text-right text-navy border-r border-gray-200">{totalThis}</td>
              <td className="px-3 py-2 text-right text-navy border-r border-gray-200">{totalLast}</td>
              <td className="px-3 py-2 text-right text-green-600">{totalChange}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

/* ================================================================
   Main component
   ================================================================ */
export default function ReportingMockups() {
  const [activeTab, setActiveTab] = useState('powerbi')

  return (
    <div className="mt-8">
      {/* Tab bar */}
      <div className="flex border-b border-gray-200">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              activeTab === tab.key
                ? 'text-navy border-b-2 border-navy'
                : 'text-steel hover:text-navy'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {activeTab === 'powerbi' && <PowerBITab />}
        {activeTab === 'powerpoint' && <PowerPointTab />}
        {activeTab === 'excel' && <ExcelBillingsTab />}
      </div>
    </div>
  )
}
