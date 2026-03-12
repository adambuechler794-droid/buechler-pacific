import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Impact from '../Impact'

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

describe('Impact', () => {
  it('renders the section heading', () => {
    render(<Impact />)
    expect(screen.getByText('Numbers that matter.')).toBeInTheDocument()
  })

  it('renders all 3 stat labels', () => {
    render(<Impact />)
    expect(screen.getByText('Recovered monthly')).toBeInTheDocument()
    expect(screen.getByText('Automated')).toBeInTheDocument()
    expect(screen.getByText('Faster analysis')).toBeInTheDocument()
  })

  it('renders the text-type stat displays', () => {
    render(<Impact />)
    expect(screen.getByText('5+ Days')).toBeInTheDocument()
    expect(screen.getByText('10x')).toBeInTheDocument()
  })

  it('renders stat descriptions', () => {
    render(<Impact />)
    expect(screen.getByText(/monthly close accelerated/i)).toBeInTheDocument()
    expect(screen.getByText(/cash flow statement/i)).toBeInTheDocument()
    expect(screen.getByText(/complex queries done in minutes/i)).toBeInTheDocument()
  })

  it('has the correct section id for nav anchoring', () => {
    const { container } = render(<Impact />)
    expect(container.querySelector('#impact')).toBeTruthy()
  })
})
