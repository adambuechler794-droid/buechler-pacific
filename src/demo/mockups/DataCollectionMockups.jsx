import { useState } from 'react'

const TABS = [
  {
    key: 'excel',
    label: 'Excel Template',
    src: '/mockups/screenshot-excel-template.png',
    caption: 'Branded templates for bulk data entry — drop to SharePoint when done',
  },
  {
    key: 'teams-form',
    label: 'Teams Form',
    src: '/mockups/screenshot-teams-form.png',
    caption: 'Structured adaptive card form — submit directly from Teams',
  },
  {
    key: 'claude-chat',
    label: 'Claude Chat',
    src: '/mockups/screenshot-teams-claude-chat.png',
    caption: 'Natural language input — just describe your forecast in plain English',
  },
]

export default function DataCollectionMockups() {
  const [activeTab, setActiveTab] = useState('excel')

  const current = TABS.find((t) => t.key === activeTab)

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
        <img
          src={current.src}
          alt={current.label}
          className="w-full rounded-lg shadow-md object-contain"
        />
        <p className="mt-3 text-sm text-muted text-center">{current.caption}</p>
      </div>
    </div>
  )
}
