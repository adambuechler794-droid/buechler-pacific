import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Insights from '../Insights'

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

describe('Insights', () => {
  it('renders 3 article cards', () => {
    render(<Insights />)
    expect(screen.getByText(/why most bi implementations fail/i)).toBeInTheDocument()
    expect(screen.getByText(/excel to fabric/i)).toBeInTheDocument()
    expect(screen.getByText(/what mid-market companies get wrong/i)).toBeInTheDocument()
  })

  it('all article cards link to LinkedIn', () => {
    render(<Insights />)
    const articleLinks = screen.getAllByRole('link').filter(
      (link) => link.getAttribute('href') === 'https://www.linkedin.com/in/adambuechler/',
    )
    // 3 article cards + 1 "Follow on LinkedIn" button = at least 4
    expect(articleLinks.length).toBeGreaterThanOrEqual(4)
  })

  it('renders a "Follow on LinkedIn" CTA', () => {
    render(<Insights />)
    expect(screen.getByText(/follow on linkedin/i)).toBeInTheDocument()
  })

  it('displays article tags', () => {
    render(<Insights />)
    expect(screen.getByText('Adoption')).toBeInTheDocument()
    expect(screen.getByText('Data Engineering')).toBeInTheDocument()
    expect(screen.getByText('AI Strategy')).toBeInTheDocument()
  })
})
