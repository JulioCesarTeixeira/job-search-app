import { describe, expect, it } from 'vitest'

import { evenOrOdd } from '../../src/playground'

describe('basic math', () => {
  it('should add numbers', () => {
    expect(1 + 2).toBe(3)
  })
})

describe('evenOrOdd', () => {
  describe('when number is even', () => {
    it('should return Even when number is even', () => {
      expect(evenOrOdd(4)).toBe('Even')
    })
  })
  describe('when number is odd', () => {
    it('should return Odd when number is odd', () => {
      expect(evenOrOdd(5)).toBe('Odd')
    })
  })
})
