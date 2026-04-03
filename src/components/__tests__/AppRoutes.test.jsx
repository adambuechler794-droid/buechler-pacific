import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

vi.mock('../../demo/DemoPage', () => ({
  default: function DemoPageMock() {
    return <div>Demo Route Loaded</div>
  },
}))

describe('App routes', () => {
  it('renders the demo route for /demo/live/ with a trailing slash', async () => {
    window.history.pushState({}, '', '/demo/live/')
    const { default: App } = await import('../../App')

    render(<App />)

    await waitFor(() => {
      expect(screen.getByText('Demo Route Loaded')).toBeInTheDocument()
    })
  })
})
