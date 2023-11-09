import { describe, expect, it } from 'vitest'
import { sum } from './sum'

interface testData {
  values: number[]
  expected: number

}

// основные проверки
describe.each([
  {
    values: [1, 2],
    expected: 3,
  },
  {
    values: [-1, 5],
    expected: 4,
  },
])('sum', ({ values, expected }: testData) => {
  it(`sum ${values} = ${expected}`, () => {
    expect(sum(values)).toBe(expected)
  })
})

// Обработка исключения
describe('sum error', () => {
  it('sum error', () => {
    expect(() => {
      return sum([])
    }).toThrowError()
  })
})
