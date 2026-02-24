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

  it('shows a result for each project', () => {
    render(<Projects />)
    expect(screen.getByText(/\$200K\+ in cost overruns/i)).toBeInTheDocument()
    expect(screen.getByText(/2 weeks to 2 days/i)).toBeInTheDocument()
    expect(screen.getByText(/95% adoption/i)).toBeInTheDocument()
    expect(screen.getByText(/hours of analysis reduced/i)).toBeInTheDocument()
    expect(screen.getByText(/live in production/i)).toBeInTheDocument()
  })

  it('displays category labels', () => {
    render(<Projects />)
    expect(screen.getByText('Data Analytics')).toBeInTheDocument()
    expect(screen.getByText('Data Architecture')).toBeInTheDocument()
    expect(screen.getByText('Change Management')).toBeInTheDocument()
    expect(screen.getByText('AI')).toBeInTheDocument()
    expect(screen.getByText('Product')).toBeInTheDocument()
  })
})
