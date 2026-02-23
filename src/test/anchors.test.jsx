import { render } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import App from '../App'

beforeEach(() => {
  // Mock IntersectionObserver for all useInView hooks
  window.IntersectionObserver = class {
    constructor(cb) {
      setTimeout(() => cb([{ isIntersecting: true }]), 0)
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  // Mock scrollTo for Navigation
  window.scrollTo = () => {}
})

const navAnchors = ['#services', '#work', '#about', '#contact']

describe('Section anchor targets', () => {
  it('every nav link href has a matching section id in the DOM', () => {
    const { container } = render(<App />)

    for (const anchor of navAnchors) {
      const id = anchor.slice(1)
      const section = container.querySelector(`[id="${id}"]`)
      expect(section, `Missing element with id="${id}" for nav link ${anchor}`).toBeTruthy()
    }
  })

  it('hero section has id="home" for logo scroll target', () => {
    const { container } = render(<App />)
    expect(container.querySelector('[id="home"]')).toBeTruthy()
  })
})
