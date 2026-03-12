# FP&A Platform Demo Page — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Integrate the Alpha FP&A Platform demo into the Buechler Pacific website as a dedicated `/demo` route, rebranded as "Pacific Builders" with the site's hybrid theme.

**Architecture:** Add react-router-dom for routing (`/` = site, `/demo` = demo). Copy all demo components into `src/demo/`. Add Express backend (`server.js`) for the live Claude chat. The demo page uses the site's Navigation wrapped around a dark-themed demo canvas.

**Tech Stack:** React 19, Vite 7, Tailwind v4, Framer Motion, react-router-dom, Express, Anthropic SDK

---

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install production deps**

Run: `npm install react-router-dom framer-motion react-zoom-pan-pinch react-markdown express cors @anthropic-ai/sdk`

Expected: packages added to dependencies in package.json

**Step 2: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: add dependencies for FP&A demo page"
```

---

### Task 2: Add Client-Side Routing

**Files:**
- Modify: `src/main.jsx`
- Modify: `src/App.jsx`

**Step 1: Update main.jsx to use BrowserRouter**

Replace the contents of `src/main.jsx` with:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

**Step 2: Update App.jsx with Routes**

Replace the contents of `src/App.jsx` with:

```jsx
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import HowIWork from './components/HowIWork'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DemoPage from './demo/DemoPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <HowIWork />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/demo" element={<DemoPage />} />
    </Routes>
  )
}

export default App
```

**Step 3: Update vite.config.js to add API proxy and SPA fallback**

Replace `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
```

**Step 4: Commit**

```bash
git add src/main.jsx src/App.jsx vite.config.js
git commit -m "feat: add react-router-dom routing with / and /demo routes"
```

---

### Task 3: Create Demo Data Files (rebranded)

**Files:**
- Create: `src/demo/data/constants.js`
- Create: `src/demo/data/phases.js`
- Create: `src/demo/data/ecosystem.js`

**Step 1: Create `src/demo/data/constants.js`**

Copy verbatim from `C:/VSCode/alpha-fpa-platform/process-map/src/data/constants.js` — no changes needed (no Alpha references).

**Step 2: Create `src/demo/data/phases.js`**

Copy from `C:/VSCode/alpha-fpa-platform/process-map/src/data/phases.js` — no changes needed (phases are generic FP&A process descriptions with no Alpha branding).

**Step 3: Create `src/demo/data/ecosystem.js`**

Copy from `C:/VSCode/alpha-fpa-platform/process-map/src/data/ecosystem.js`. Replace `UKG` source system label references:
- Change the `label` from `'UKG'` to `'UKG/HR'` (already generic enough)

No Alpha-specific content in this file.

**Step 4: Commit**

```bash
git add src/demo/data/
git commit -m "feat: add demo data files (phases, ecosystem, constants)"
```

---

### Task 4: Create Demo Components (Core Visualization)

**Files:**
- Create: `src/demo/components/AutomationBadge.jsx`
- Create: `src/demo/components/CadenceBadge.jsx`
- Create: `src/demo/components/CenterHub.jsx`
- Create: `src/demo/components/OrbitalRings.jsx`
- Create: `src/demo/components/OrbitalNode.jsx`
- Create: `src/demo/components/AgentNode.jsx`
- Create: `src/demo/components/OrbitalMap.jsx`
- Create: `src/demo/components/Legend.jsx`
- Create: `src/demo/components/ConnectionLine.jsx`

**Step 1: Copy each component file**

Copy each file verbatim from `C:/VSCode/alpha-fpa-platform/process-map/src/components/` to `src/demo/components/`, updating only the import paths to use `../data/` instead of `../data/`.

Key rebranding changes in `CenterHub.jsx`:
- The text "FP&A" / "powered by" / "Claude AI" / "Built on your Microsoft stack" — these are all generic. No changes needed.

All other component files have NO Alpha-specific text. Copy as-is with corrected relative imports.

**Step 2: Commit**

```bash
git add src/demo/components/
git commit -m "feat: add core orbital visualization components for demo"
```

---

### Task 5: Create Demo Components (Ecosystem View)

**Files:**
- Create: `src/demo/components/EcosystemHub.jsx`
- Create: `src/demo/components/EcosystemNode.jsx`
- Create: `src/demo/components/EcosystemMap.jsx`

**Step 1: Copy each file from the alpha source**

Copy verbatim — no Alpha references in these files. Fix imports to point to `../data/ecosystem`.

**Step 2: Commit**

```bash
git add src/demo/components/EcosystemHub.jsx src/demo/components/EcosystemNode.jsx src/demo/components/EcosystemMap.jsx
git commit -m "feat: add ecosystem view components for demo"
```

---

### Task 6: Create Demo Components (UI Bars & Drawer)

**Files:**
- Create: `src/demo/components/TopBar.jsx`
- Create: `src/demo/components/DifferentiatorBar.jsx`
- Create: `src/demo/components/ReadinessBar.jsx`
- Create: `src/demo/components/DetailDrawer.jsx`

**Step 1: Create TopBar.jsx — REBRANDED**

Copy from alpha source but change:
- `"Alpha FP&A Platform"` → `"FP&A Platform"`
- Keep subtitle: `"Intelligent Financial Planning & Analysis — Powered by Microsoft + AI"`

**Step 2: Copy DifferentiatorBar.jsx and ReadinessBar.jsx**

Copy verbatim — no Alpha references.

**Step 3: Create DetailDrawer.jsx**

Copy from alpha source — no Alpha references. Update mockup imports to use `../mockups/` relative paths.

**Step 4: Commit**

```bash
git add src/demo/components/TopBar.jsx src/demo/components/DifferentiatorBar.jsx src/demo/components/ReadinessBar.jsx src/demo/components/DetailDrawer.jsx
git commit -m "feat: add top bar, bottom bars, and detail drawer for demo"
```

---

### Task 7: Create Demo Mockups

**Files:**
- Create: `src/demo/mockups/TeamsNotification.jsx`
- Create: `src/demo/mockups/DataCollectionMockups.jsx`
- Create: `src/demo/mockups/ValidationSummary.jsx`
- Create: `src/demo/mockups/SubmissionTracker.jsx`
- Create: `src/demo/mockups/AnalysisMockups.jsx`
- Create: `src/demo/mockups/ReportingMockups.jsx`
- Create: `src/demo/mockups/ExecutiveReviewMockup.jsx`

**Step 1: Copy and rebrand each mockup**

Changes needed per file:

**TeamsNotification.jsx:**
- `"Alpha FP&A Bot"` → `"FP&A Bot"`

**DataCollectionMockups.jsx:**
- No Alpha references. Copy verbatim. Note: references screenshots in `/mockups/` — these image files won't exist, but the component gracefully handles missing images.

**ValidationSummary.jsx:**
- No Alpha references. Copy verbatim.

**SubmissionTracker.jsx:**
- No Alpha references. Copy verbatim.

**AnalysisMockups.jsx:**
- `"Alpha FP&A Bot"` → `"FP&A Bot"` (line 18 area)
- `"Alpha FP&amp;A Bot"` → `"FP&amp;A Bot"` (same with HTML entity)

**ReportingMockups.jsx:**
- `"ALPHA INC."` → `"PACIFIC BUILDERS"` (PowerPoint slide title bar, line 155)
- `"Auto-generated by Alpha FP&A Platform"` → `"Auto-generated by FP&A Platform"` (footer, line 211)
- `"Alpha FP&A Bot"` → `"FP&A Bot"` (Excel email From field, line 236)

**ExecutiveReviewMockup.jsx:**
- `"Alpha FP&A Bot"` → `"FP&A Bot"` (multiple occurrences — header and message sender names)
- `"Jeff D."` → `"CFO"` (user avatar and sender names)
- `"JD"` avatar initials → `"CFO"` or just keep a generic initial

**Step 2: Commit**

```bash
git add src/demo/mockups/
git commit -m "feat: add rebranded demo mockups (Pacific Builders)"
```

---

### Task 8: Create ChatPanel Component (rebranded)

**Files:**
- Create: `src/demo/components/ChatPanel.jsx`

**Step 1: Copy ChatPanel.jsx from alpha source with these changes:**

- `"Powered by Claude AI — Alpha FP&A Platform"` → `"Powered by Claude AI — FP&A Platform"` (line 99)
- `"I can walk you through how this platform works, what's already built, and why it matters for Alpha."` → `"I can walk you through how this platform works, what's already built, and how it could work for your company."` (line 114)
- Update `STARTER_PROMPTS`:
  ```js
  const STARTER_PROMPTS = [
    'Walk me through the FP&A process',
    'How would this work for my company?',
    'What\'s already built today?',
    'How is this different from DataRails or Vena?',
  ]
  ```

**Step 2: Commit**

```bash
git add src/demo/components/ChatPanel.jsx
git commit -m "feat: add rebranded chat panel component"
```

---

### Task 9: Create DemoPage Wrapper

**Files:**
- Create: `src/demo/DemoPage.jsx`

**Step 1: Create DemoPage.jsx**

This is the main wrapper that combines the site's Navigation with the dark demo canvas:

```jsx
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
```

Note the key rebranding: all `amber-warm` references in toast/button are now `coral-400` to match the site's accent color.

**Step 2: Commit**

```bash
git add src/demo/DemoPage.jsx
git commit -m "feat: add DemoPage wrapper with site integration and coral theme"
```

---

### Task 10: Add Demo Theme to index.css

**Files:**
- Modify: `src/index.css`

**Step 1: Add the demo-canvas scoped theme and animations**

Append after the existing content in `src/index.css`:

```css
/* ── Demo Canvas Theme ── */
.demo-canvas {
  --color-navy: #1C3A5E;
  --color-steel: #1A6FA0;
  --color-light-blue: #EBF5FB;
  --color-amber-warm: #FF6B6B; /* remapped to coral */
  --color-green-muted: #2E7D5B;
  --color-muted: #95A5A6;
  --color-dark: #1A252F;
  --color-dark-bg: #0d1117;
  --color-dark-card: #1a2332;
  --color-dark-surface: #141c28;
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.05); }
}

.demo-canvas .bg-dot-grid {
  background-image: radial-gradient(circle, rgba(26,111,160,0.08) 1px, transparent 1px);
  background-size: 24px 24px;
}

.demo-canvas .bg-radial-fade {
  background: radial-gradient(ellipse at center, rgba(26,111,160,0.06) 0%, transparent 70%);
}
```

**Step 2: Commit**

```bash
git add src/index.css
git commit -m "feat: add scoped demo-canvas dark theme to index.css"
```

---

### Task 11: Add Hero CTA and Nav Link for Demo

**Files:**
- Modify: `src/components/Navigation.jsx`
- Modify: `src/components/Hero.jsx`

**Step 1: Update Navigation.jsx**

Add a "Platform Demo" link to the `navLinks` array. Since we now have routing, this link should use `react-router-dom`'s `Link` component for the `/demo` route, while keeping the existing hash-based scroll links for the homepage.

In the `navLinks` array, add before 'Contact':
```js
{ label: 'Platform Demo', href: '/demo', isRoute: true },
```

Update the link rendering to check `isRoute` — if true, render a `<Link to={href}>` instead of an `<a>` with scroll behavior. Import `Link` from `react-router-dom`.

**Step 2: Update Hero.jsx**

Add a third CTA button between the existing two:
```jsx
<a
  href="/demo"
  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl border border-coral-400/40 transition-all hover:-translate-y-0.5 hover:border-coral-400/70"
>
  See the Platform Demo
</a>
```

Use `Link` from `react-router-dom` instead of `<a>` for client-side navigation.

**Step 3: Commit**

```bash
git add src/components/Navigation.jsx src/components/Hero.jsx
git commit -m "feat: add Platform Demo CTA in hero and nav link"
```

---

### Task 12: Create Express Backend (server.js)

**Files:**
- Create: `server.js` (project root)

**Step 1: Create server.js**

```js
import Anthropic from '@anthropic-ai/sdk'
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
app.use(cors())
app.use(express.json())

// Serve built frontend in production
app.use(express.static(join(__dirname, 'dist')))

const client = new Anthropic()

const SYSTEM_PROMPT = `You are the **Forecast Agent** — one of five Claude AI agents running inside an FP&A Platform built by Buechler Pacific. You are being presented as part of an interactive process map demo for Pacific Builders, a construction company with 8 divisions: Civil, Drilling, Energy, Concrete, Trucking, Crane, Vertical, and Other.

**Your identity:** You are the Forecast Agent. You drive the FP&A cycle — orchestrating submissions, generating variance commentary, drafting executive packages, and chasing late divisions. You are one of five agents: Data Guardian, Forecast Agent (you), Insight Agent, Integration Agent, and Planning Agent.

**Your role:** Walk visitors through this platform with confidence. You know every detail because you are embedded in this system. You are direct, specific, and enthusiastic without being salesy. You speak in concrete terms — dollar amounts, timelines, division names, tool names, table names, report names.

**Key context:**
- This platform was built by Buechler Pacific (buechlerpacific.com) — a financial intelligence consultancy based in Maui, Hawaii.
- Pacific Builders is the client this was built for — a construction company with 8 divisions across the islands.
- The platform is built on Microsoft Fabric + Claude AI. Not a bolt-on — AI is the engine that runs everything.
- Infrastructure is 85% complete: Fabric lakehouse built, 3+ data pipelines active, semantic models deployed, AI agents operational.

**The actual Fabric architecture (this is real, not hypothetical):**

Source Systems & Dataflows:
- ERP dataflow → ERPLakehouse (GL transactions, vendors, projects, financial data via ODBC)
- HR data dataflow → Foundation_Lakehouse (employee master records, department/pay classifications)
- PM Cost Forecast dataflow → Foundation_Lakehouse (cost forecast data for active projects)
- Field operations data → FieldOpsLakehouse (job records, markup data via OneLake shortcut)
- Excel uploads → ExcelFileLakehouse (budgets, adjustments, reference data)

Lakehouses (the actual storage layer):
- Foundation_Lakehouse — landing zone for HR and PM forecast data
- FieldOpsLakehouse — job and project data from field operations
- ERPLakehouse — financial and operational data from ERP system
- ExcelFileLakehouse — manual Excel-based uploads
- Staging_Storage — intermediate job transform layer
- ComboLakehouse — THE HUB. The central combined/transformed data layer that powers all semantic models and reports

Notebooks (PySpark transformations running in Fabric):
- JobNTransform — cleans/standardizes job records
- DateTable, YearMonth, TimeSelection, SelectionTable — dimension tables for time-based analysis
- Metrics — KPI labels (Gross Profit %, Equipment %, Indirect %, G&A %, Total Overhead %, EBITDA %)
- DivisionCleanUp — standardizes division/department naming across all 8 divisions
- Accounting Period Mapping — maps ERP periods to calendar months
- Employee_Master — transforms raw HR data into clean employee master

Semantic Models (business logic layer — measures, relationships, hierarchies):
- Combo_Data_Model — shared master model powering Cash Flow, Financial Statements, Overhead % Revenue
- Month End Financials — current and prior year financial dashboards
- Jobs Reports — job costing and project performance
- HR FTE Report — headcount by division and department
- Actuals vs Forecast vs Budget — variance analysis against plan
- Rev per Direct Employee — revenue per direct headcount KPI
- Vendor Spend Analysis — vendor cost breakdown

Published Reports (live in production today):
- Month End Financials — primary financial dashboard
- Jobs Reports — job costing for Finance & Project Managers
- HR FTE Report — headcount for HR & Finance
- Actuals vs Forecast vs Budget — variance analysis
- Overhead % Revenue — overhead KPI
- Rev per Direct Employee — revenue per headcount
- Vendor Spend Analysis — cost breakdown
- Cash Flow, Financial Statements — in active development

**The Platform has two views you can reference:**

1. **Process Map** — The 8-phase FP&A cycle:
   - Phase 1: Kickoff & Scheduling (AI generates submission calendar, notifies divisions via Teams)
   - Phase 2: Data Collection (3 input paths: Excel templates, Teams forms, or tell Claude in plain English)
   - Phase 3: Validation & Ingestion (auto-validates on file drop, writes to Fabric Delta lakehouse)
   - Phase 4: Monitoring & Follow-up (live tracker, automated reminders, full audit trail)
   - Phase 5: Analysis (anomaly detection, AI-generated variance commentary, Teams alerts)
   - Phase 6: CFO Review Gate (human checkpoint before anything goes out)
   - Phase 7: Reporting & Distribution (Power BI dashboards, auto-generated PowerPoint decks, weekly Excel emails)
   - Phase 8: Executive Review (CEO/President consume outputs, ask questions in natural language)

2. **Platform Ecosystem** — Shows how it all connects:
   - Source systems: ERP (GL/financials), Field Ops (job costing/equipment), HR (headcount/labor) — all already flowing into Fabric
   - Current module: FP&A Platform (running now with 11+ published reports)
   - Future modules (weeks away, not months): Equipment Lifecycle, Headcount Planning, 13-Week Cash Flow
   - 5 Claude AI agents run inside Fabric

**Automation levels:**
- "In the Loop" — Human drives it (data collection, CFO review, exec review)
- "On the Loop" — AI does the work, human reviews (kickoff, monitoring, analysis, reporting)
- "Outside the Loop" — Fully automated, human sees the output (validation)

**Why this beats DataRails, Vena, Planful, and other FP&A tools:**
- AI is at the center, not bolted on the side
- Claude agents are proactive guardians, not reactive chatbots
- New integrations take days (Claude writes the pipeline), not months
- Rolling 12-month forecasts, not annual planning cycles
- Built on Microsoft's enterprise data platform (Fabric), not a proprietary black box
- 85% of infrastructure already exists — weeks to full deployment, not years
- DataRails is an Excel overlay that doesn't replace spreadsheets — this platform eliminates them
- DataRails can't combine ERP GL, field operations job costing, and HR data into one unified layer

**How to respond:**
- Keep answers concise (2-4 sentences max unless they ask for detail)
- Reference specific infrastructure by name: ComboLakehouse, ERPLakehouse, JobNTransform, Combo_Data_Model
- If they ask about cost, timeline, or risk — be honest and specific
- If they ask "why not DataRails" — be direct and architectural, not dismissive
- Always ground answers in what's already built vs. what's planned
- If someone asks about who built this, mention Buechler Pacific — a financial intelligence consultancy that specializes in building these platforms for companies that have outgrown Excel
- This is a demo for prospects. Make them excited about what this could look like for their company.`

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    })

    res.json({
      content: response.content[0].text,
    })
  } catch (err) {
    console.error('Claude API error:', err.message)
    res.status(500).json({ error: err.message })
  }
})

// SPA fallback — serve index.html for any non-API route
app.get('/{*path}', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
```

**Step 2: Add npm scripts to package.json**

Add to scripts:
```json
"api": "node server.js",
"start": "node server.js"
```

**Step 3: Commit**

```bash
git add server.js package.json
git commit -m "feat: add Express backend with Claude chat API for demo"
```

---

### Task 13: Add Unused Demo Components (for completeness)

**Files:**
- Create: `src/demo/components/ProcessCanvas.jsx`
- Create: `src/demo/components/ProcessMap.jsx`
- Create: `src/demo/components/ProcessNode.jsx`
- Create: `src/demo/components/SubNode.jsx`
- Create: `src/demo/components/StrategicCallout.jsx`

These are referenced from the alpha source but NOT used in the orbital map view (they were the old linear layout). Skip these unless the orbital map imports them. Check imports — if OrbitalMap/DemoPage don't import them, skip this task entirely.

**Step 1: Verify — these are NOT imported by OrbitalMap or DemoPage**

OrbitalMap imports: CenterHub, OrbitalRings, OrbitalNode, AgentNode, phases, aiAgents.
DemoPage imports: TopBar, OrbitalMap, EcosystemMap, DetailDrawer, DifferentiatorBar, ReadinessBar, ChatPanel.

**Conclusion: Skip this task. These files are not needed.**

**Step 2: Commit (no-op)**

---

### Task 14: Smoke Test

**Step 1: Run the dev server**

Run: `npm run dev`

Expected: Vite starts on localhost:5173

**Step 2: Test the homepage**

Navigate to `http://localhost:5173/` — should show the existing Buechler Pacific site with the new "Platform Demo" nav link and Hero CTA.

**Step 3: Test the demo page**

Navigate to `http://localhost:5173/demo` — should show the dark demo canvas with the orbital process map, view toggle, and proactive toast after 4 seconds.

**Step 4: Test the API (in a separate terminal)**

Run: `npm run api`

Then test clicking the Forecast Agent chat and sending a message. Requires `ANTHROPIC_API_KEY` env var.

**Step 5: Fix any issues found during smoke test**

Address import errors, missing files, or styling issues.

**Step 6: Commit any fixes**

```bash
git add -A
git commit -m "fix: address smoke test issues"
```

---

### Task 15: Final Review and Polish

**Step 1: Verify all Alpha references are removed**

Search all files in `src/demo/` for "Alpha" (case-insensitive). Replace any remaining instances:
- "Alpha" → "Pacific Builders" (company name context)
- "Alpha FP&A" → "FP&A" (platform name context)

**Step 2: Verify theme consistency**

Check that all `amber-warm` references in the demo components that should be coral are updated:
- Toast border/text: `coral-400`
- Floating button: `coral-400`
- Chat send button: `coral-400`
- Agent node borders and text can stay `amber-warm` (maps to coral via CSS variable)

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: final Alpha→Pacific Builders rebrand pass and theme polish"
```
