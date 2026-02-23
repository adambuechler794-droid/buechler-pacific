import { render, screen } from '@testing-library/react'
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
    render(<Projects />)
    expect(screen.getByText(/multi-island construction/i)).toBeInTheDocument()
    expect(screen.getByText(/enterprise data architecture/i)).toBeInTheDocument()
    expect(screen.getByText(/excel-to-fabric workflow/i)).toBeInTheDocument()
    expect(screen.getByText(/ai-powered forecast/i)).toBeInTheDocument()
    expect(screen.getByText(/maui surf forecast/i)).toBeInTheDocument()
  })

  it('shows challenge and result for each project', () => {
    render(<Projects />)
    // Check for challenge/result labels
    const challenges = screen.getAllByText(/^challenge$/i)
    const results = screen.getAllByText(/^result$/i)
    expect(challenges).toHaveLength(5)
    expect(results).toHaveLength(5)
  })

  it('displays technology tags', () => {
    render(<Projects />)
    expect(screen.getByText('Power BI')).toBeInTheDocument()
    expect(screen.getAllByText('Microsoft Fabric').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Python').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('does not render "Live" links when projects have no liveUrl', () => {
    render(<Projects />)
    expect(screen.queryByText('Live')).not.toBeInTheDocument()
  })
})
