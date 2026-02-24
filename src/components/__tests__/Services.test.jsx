import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Services from '../Services'

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

describe('Services', () => {
  it('renders all 4 service cards', () => {
    render(<Services />)
    const titles = [
      'AI & Custom Applications',
      'Financial Planning & Analysis',
      'Power BI & Analytics',
      'Data Architecture',
    ]
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('marks AI & Custom Applications as the featured service', () => {
    const { container } = render(<Services />)
    const aiCard = screen.getByText('AI & Custom Applications').closest('[class*="card-light"]')
    expect(aiCard.className).toContain('md:col-span-2')
  })

  it('renders feature pills for each service', () => {
    render(<Services />)
    expect(screen.getByText('Custom GPT Tools')).toBeInTheDocument()
    expect(screen.getByText('Scenario Planning')).toBeInTheDocument()
    expect(screen.getByText('Custom Dashboards')).toBeInTheDocument()
    expect(screen.getByText('Microsoft Fabric')).toBeInTheDocument()
  })
})
