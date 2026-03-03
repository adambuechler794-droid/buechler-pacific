import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, beforeEach } from 'vitest'
import Projects from '../Projects'

beforeEach(() => {
  window.IntersectionObserver = class {
    constructor(cb) {
      setTimeout(() => cb([{ isIntersecting: true }]), 0)
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

describe('Projects', () => {
  it('renders all 5 case studies', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>)
    expect(screen.getByText(/multi-island construction/i)).toBeInTheDocument()
    expect(screen.getByText(/enterprise data platform/i)).toBeInTheDocument()
    expect(screen.getByText(/cash flow statement/i)).toBeInTheDocument()
    expect(screen.getByText(/ai-powered forecast/i)).toBeInTheDocument()
    expect(screen.getByText(/swellscore/i)).toBeInTheDocument()
  })

  it('shows a result line for each project', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>)
    expect(screen.getByText(/live in production/i)).toBeInTheDocument()
    expect(screen.getByText(/hours of analyst work reduced/i)).toBeInTheDocument()
    expect(screen.getByText(/one person, under an hour/i)).toBeInTheDocument()
    expect(screen.getByText(/pms use it daily/i)).toBeInTheDocument()
    expect(screen.getByText(/days → minutes/i)).toBeInTheDocument()
  })

  it('displays category labels', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>)
    expect(screen.getByText('AI / Product')).toBeInTheDocument()
    expect(screen.getByText('AI / LLM')).toBeInTheDocument()
    expect(screen.getByText('AI / Automation')).toBeInTheDocument()
    expect(screen.getByText('Data Intelligence')).toBeInTheDocument()
    expect(screen.getByText('Data / AI Infrastructure')).toBeInTheDocument()
  })

  it('each card links to the correct case study page', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>)
    const links = screen.getAllByRole('link')
    expect(links.some(l => l.getAttribute('href') === '/case-studies/swellscore')).toBe(true)
    expect(links.some(l => l.getAttribute('href') === '/case-studies/enterprise-data-platform')).toBe(true)
  })
})
