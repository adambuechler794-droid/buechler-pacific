import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Fit from '../Fit'

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

describe('Fit', () => {
  it('renders the "Best for" card with ideal client criteria', () => {
    render(<Fit />)
    expect(screen.getByText('Best for')).toBeInTheDocument()
    expect(screen.getByText(/hawaii-based companies/i)).toBeInTheDocument()
    expect(screen.getByText(/outgrown excel/i)).toBeInTheDocument()
  })

  it('renders the "Not a fit" card with disqualifying criteria', () => {
    render(<Fit />)
    expect(screen.getByText(/probably not a fit/i)).toBeInTheDocument()
    expect(screen.getByText(/staff augmentation/i)).toBeInTheDocument()
    expect(screen.getByText(/not ready to actually change/i)).toBeInTheDocument()
  })

  it('renders 4 items in each list', () => {
    const { container } = render(<Fit />)
    const lists = container.querySelectorAll('ul')
    expect(lists).toHaveLength(2)
    expect(lists[0].querySelectorAll('li')).toHaveLength(4)
    expect(lists[1].querySelectorAll('li')).toHaveLength(4)
  })
})
