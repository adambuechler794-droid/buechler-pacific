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
    expect(screen.getByText('Cost overruns identified')).toBeInTheDocument()
    expect(screen.getByText('Reporting cycle')).toBeInTheDocument()
    expect(screen.getByText('Adoption in month one')).toBeInTheDocument()
  })

  it('renders the text-type stat display', () => {
    render(<Impact />)
    expect(screen.getByText('2 Days')).toBeInTheDocument()
  })

  it('renders stat descriptions', () => {
    render(<Impact />)
    expect(screen.getByText(/integrated multi-system/i)).toBeInTheDocument()
    expect(screen.getByText(/reduced from two weeks/i)).toBeInTheDocument()
    expect(screen.getByText(/meeting users where they already work/i)).toBeInTheDocument()
  })

  it('has the correct section id for nav anchoring', () => {
    const { container } = render(<Impact />)
    expect(container.querySelector('#impact')).toBeTruthy()
  })
})
