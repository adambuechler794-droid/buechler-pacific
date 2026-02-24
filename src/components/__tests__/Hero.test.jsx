import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Hero from '../Hero'

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

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText('Financial')).toBeInTheDocument()
    expect(screen.getByText('Intelligence.')).toBeInTheDocument()
  })

  it('renders the overline brand name', () => {
    render(<Hero />)
    expect(screen.getByText('Buechler Pacific')).toBeInTheDocument()
  })

  it('renders the subtext about AI-powered systems', () => {
    render(<Hero />)
    expect(screen.getByText(/ai-powered systems/i)).toBeInTheDocument()
  })

  it('has a primary CTA linking to the contact section', () => {
    render(<Hero />)
    const ctaLink = screen.getByRole('link', { name: /start a project/i })
    expect(ctaLink).toHaveAttribute('href', '#contact')
  })

  it('has a secondary CTA linking to the work section', () => {
    render(<Hero />)
    const workLink = screen.getByRole('link', { name: /view our work/i })
    expect(workLink).toHaveAttribute('href', '#work')
  })
})
