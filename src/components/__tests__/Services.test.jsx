import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
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
    render(<MemoryRouter><Services /></MemoryRouter>)
    const titles = [
      'AI & Intelligent Automation',
      'Financial Planning & Analysis',
      'Power BI & Analytics',
      'Data Architecture',
    ]
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('marks AI & Intelligent Automation as the featured service', () => {
    render(<MemoryRouter><Services /></MemoryRouter>)
    const aiCard = screen.getByText('AI & Intelligent Automation').closest('[class*="card-light"]')
    expect(aiCard.className).toContain('md:col-span-2')
  })

  it('renders feature pills for each service', () => {
    render(<MemoryRouter><Services /></MemoryRouter>)
    expect(screen.getByText('Custom GPT Tools')).toBeInTheDocument()
    expect(screen.getByText('Scenario Planning')).toBeInTheDocument()
    expect(screen.getByText('Custom Dashboards')).toBeInTheDocument()
    expect(screen.getByText('Microsoft Fabric')).toBeInTheDocument()
  })

  it('keeps the solutions section focused on the core service cards', () => {
    render(<MemoryRouter><Services /></MemoryRouter>)
    expect(screen.queryByText(/linkedin presence os/i)).not.toBeInTheDocument()
  })
})
