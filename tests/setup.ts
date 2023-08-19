//* File that vitest will run first before running any tests
import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/vue'
import { afterEach, expect } from 'vitest'

expect.extend(matchers)

// Clean up the DOM after each test to avoid cross-test pollution
afterEach(cleanup)
