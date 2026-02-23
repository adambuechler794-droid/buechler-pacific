import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import About from '../About'

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

describe('About', () => {
  it('renders the pull quote', () => {
    render(<About />)
    expect(screen.getByText(/someone had to actually fix the problem/i)).toBeInTheDocument()
  })

  it('has a LinkedIn CTA linking to the correct profile', () => {
    render(<About />)
    const linkedinLink = screen.getByRole('link', { name: /connect on linkedin/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/adambuechler/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('renders experience history', () => {
    render(<About />)
    expect(screen.getByText('Director of FP&A')).toBeInTheDocument()
    expect(screen.getByText(/alpha inc/i)).toBeInTheDocument()
    expect(screen.getByText(/finance & analytics/i)).toBeInTheDocument()
    expect(screen.getByText(/uc santa barbara/i)).toBeInTheDocument()
  })

  it('renders interest tags', () => {
    render(<About />)
    expect(screen.getByText(/maui chamber of commerce/i)).toBeInTheDocument()
    expect(screen.getByText(/surfrider foundation/i)).toBeInTheDocument()
    expect(screen.getByText(/surf forecast apps/i)).toBeInTheDocument()
  })

  it('renders the bio text', () => {
    render(<About />)
    expect(screen.getByText(/i'm adam buechler/i)).toBeInTheDocument()
  })
})
