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
    expect(screen.getByText(/financial intelligence/i)).toBeInTheDocument()
    expect(screen.getByText(/outgrown excel/i)).toBeInTheDocument()
  })

  it('renders the Maui badge', () => {
    render(<Hero />)
    expect(screen.getByText(/based in maui, hawaii/i)).toBeInTheDocument()
  })

  it('renders 3 proof-point stats', () => {
    render(<Hero />)
    expect(screen.getByText('$200K+')).toBeInTheDocument()
    expect(screen.getByText(/2 wks → 2 days/)).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })

  it('renders proof-point labels', () => {
    render(<Hero />)
    expect(screen.getByText(/cost overruns identified/i)).toBeInTheDocument()
    expect(screen.getByText(/reporting cycle/i)).toBeInTheDocument()
    expect(screen.getByText(/adoption in month one/i)).toBeInTheDocument()
  })

  it('has a CTA linking to the contact section', () => {
    render(<Hero />)
    const ctaLink = screen.getByRole('link', { name: /let's talk/i })
    expect(ctaLink).toHaveAttribute('href', '#contact')
  })

  it('has a secondary CTA linking to work section', () => {
    render(<Hero />)
    const workLink = screen.getByRole('link', { name: /view my work/i })
    expect(workLink).toHaveAttribute('href', '#work')
  })
})
