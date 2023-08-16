import { describe, expect, it } from 'vitest'

import { evenOrOdd, multiply } from '../../src/playground'

describe('basic math', () => {
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

  describe('multiply', () => {
    it('multiplies two numbers together', () => {
      expect(multiply(2, 3)).toBe(6)
    })
  })
})
