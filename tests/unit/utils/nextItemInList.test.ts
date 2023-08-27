import nextItemInList from '@/utils/nextItemInList'
import { describe, expect, it } from 'vitest'

describe('nextItemInList', () => {
  it('find current and return the next item in the list', () => {
    const list = ['a', 'b', 'c']
    const next = nextItemInList(list, 'b')
    expect(next).toBe('c')
  })

  describe('when the current item is the last item in the list', () => {
    it('returns the first item in the list', () => {
      const list = ['a', 'b', 'c']
      const next = nextItemInList(list, 'c')
      expect(next).toBe('a')
    })
  })
})
