/**
 * Calculates the sum of an array of numbers.
 *
 * @param {Array<number>} data - The array of numbers to be summed.
 * @return {number} The sum of the numbers in the array.
 */
export function sum(data: number[]): number {
  if (data.length === 0)
    throw new Error('data is empty')

  return data.reduce((a, b) => {
    return a + b
  }, 0)
}
