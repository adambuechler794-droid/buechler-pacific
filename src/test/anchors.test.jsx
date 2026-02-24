import { render } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import App from '../App'

beforeEach(() => {
  window.IntersectionObserver = class {
    constructor(cb) {
      setTimeout(() => cb([{ isIntersecting: true }]), 0)
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.scrollTo = () => {}
})

const navAnchors = ['#solutions', '#impact', '#work', '#about', '#contact']

describe('Section anchor targets', () => {
  it('every nav link href has a matching section id in the DOM', () => {
    const { container } = render(<App />)

    for (const anchor of navAnchors) {
      const id = anchor.slice(1)
      const section = container.querySelector(`[id="${id}"]`)
      expect(section, `Missing element with id="${id}" for nav link ${anchor}`).toBeTruthy()
    }
  })
})
