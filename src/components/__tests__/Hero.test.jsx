import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
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
    render(<MemoryRouter><Hero /></MemoryRouter>)
    expect(screen.getByText('AI Systems')).toBeInTheDocument()
    expect(screen.getByText('for Real Finance Work.')).toBeInTheDocument()
  })

  it('renders the overline brand name', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>)
    expect(screen.getByText('Buechler Pacific')).toBeInTheDocument()
  })

  it('renders the subtext about AI-powered systems', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>)
    expect(screen.getByText(/spreadsheet debt/i)).toBeInTheDocument()
  })

  it('has a primary CTA linking to the contact section', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>)
    const ctaLink = screen.getByRole('link', { name: /start a project/i })
    expect(ctaLink).toHaveAttribute('href', '#contact')
  })

  it('has a secondary CTA linking to the work section', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>)
    const workLink = screen.getByRole('link', { name: /review case studies/i })
    expect(workLink).toHaveAttribute('href', '#work')
  })

  it('has a platform demo CTA', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>)
    const demoLink = screen.getByRole('link', { name: /see the platform demo/i })
    expect(demoLink).toHaveAttribute('href', '/demo/live/')
  })
})
