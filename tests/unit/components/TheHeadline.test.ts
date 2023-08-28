import TheHeadline from '@/components/JobSearch/TheHeadline.vue'
import { render, screen } from '@testing-library/vue'

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('TheHeadline', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('displays intro action text', () => {
    render(TheHeadline)

    const actionPhrase = screen.getByRole('heading', {
      name: /code for everyone/i
    })

    expect(actionPhrase).toBeTruthy()
  })

  it('changes action text at an interval', () => {
    const mock = vi.fn()

    vi.stubGlobal('setInterval', mock)
    render(TheHeadline)

    expect(mock).toHaveBeenCalled()
  })

  it('changes action text at an interval', async () => {
    render(TheHeadline)

    await vi.advanceTimersToNextTimerAsync()

    const actionPhrase = screen.getByRole('heading', {
      name: /design for everyone/i
    })

    expect(actionPhrase).toBeTruthy()
  })

  it('removes interval when component disappears', () => {
    const clearInterval = vi.fn()
    vi.stubGlobal('clearInterval', clearInterval)

    const { unmount } = render(TheHeadline)
    unmount()
    expect(clearInterval).toHaveBeenCalled()
    vi.unstubAllGlobals()
  })
})
