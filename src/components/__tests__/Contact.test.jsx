import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Contact from '../Contact'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(cb) {
        setTimeout(() => cb([{ isIntersecting: true }]), 0)
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  )
})

afterEach(() => {
  vi.restoreAllMocks()
})

async function fillRequired(user) {
  await user.type(screen.getByLabelText(/^name/i), 'Jane Doe')
  await user.type(screen.getByLabelText(/^email/i), 'jane@acme.com')
  await user.type(screen.getByLabelText(/how can i help/i), 'Reports take forever')
}

describe('Contact form', () => {
  it('submits successfully and shows sent state', async () => {
    const user = userEvent.setup()
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    })
  })

  it('shows "Sending..." and disables button during submission', async () => {
    const user = userEvent.setup()
    let resolveFetch
    vi.stubGlobal(
      'fetch',
      vi.fn().mockImplementation(
        () => new Promise((resolve) => { resolveFetch = resolve }),
      ),
    )

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    const btn = screen.getByRole('button', { name: /sending/i })
    expect(btn).toBeDisabled()
    expect(screen.getByLabelText(/^name/i)).toBeDisabled()
    expect(screen.getByLabelText(/^email/i)).toBeDisabled()
    expect(screen.getByLabelText(/how can i help/i)).toBeDisabled()

    resolveFetch({ ok: true })
    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    })
  })

  it('prevents duplicate submit requests on rapid double-click', async () => {
    const user = userEvent.setup()
    const fetchMock = vi
      .fn()
      .mockImplementation(() => new Promise(() => {}))
    vi.stubGlobal('fetch', fetchMock)

    render(<Contact />)
    await fillRequired(user)
    await user.dblClick(screen.getByRole('button', { name: /send message/i }))

    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('shows error with mailto fallback on failed response', async () => {
    const user = userEvent.setup()
    const fetchMock = vi.fn().mockResolvedValue({ ok: false })
    vi.stubGlobal('fetch', fetchMock)

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    const errorMsg = await screen.findByText(/something went wrong/i)
    expect(errorMsg).toBeInTheDocument()
    const fallbackLink = errorMsg.closest('p').querySelector('a[href^="mailto:"]')
    expect(fallbackLink).toBeTruthy()
    expect(fallbackLink).toHaveAttribute('href', 'mailto:adam.buechler@buechlerpacific.com')
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('shows error with mailto fallback on network exception', async () => {
    const user = userEvent.setup()
    const fetchMock = vi.fn().mockRejectedValue(new Error('Network error'))
    vi.stubGlobal('fetch', fetchMock)

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    const errorMsg = await screen.findByText(/something went wrong/i)
    expect(errorMsg).toBeInTheDocument()
    const fallbackLink = errorMsg.closest('p').querySelector('a[href^="mailto:"]')
    expect(fallbackLink).toBeTruthy()
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('"Send another message" returns to form', async () => {
    const user = userEvent.setup()
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    })

    await user.click(screen.getByRole('button', { name: /send another/i }))
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('sends form data as JSON to Formspree', async () => {
    const user = userEvent.setup()
    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetchMock)

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1)
    })

    const [url, options] = fetchMock.mock.calls[0]
    expect(url).toBe('https://formspree.io/f/xbdapwzb')
    expect(options.method).toBe('POST')
    expect(options.headers['Content-Type']).toBe('application/json')

    const body = JSON.parse(options.body)
    expect(body.name).toBe('Jane Doe')
    expect(body.email).toBe('jane@acme.com')
    expect(body.message).toBe('Reports take forever')
  })
})
