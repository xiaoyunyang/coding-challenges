/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  const getSumOfSquares = (number) =>
    String(number).split('').reduce((acc, curr) => {
      const digitSq = Math.pow(Number(curr), 2)
      return acc+digitSq
    }, 0)

  const seen = new Set()
  const getHappy = (number) => {
    if(number === 1) return true
    if(seen.has(number)) return false
    seen.add(number)
    return getHappy(getSumOfSquares(number))
  }

  return getHappy(n)
};
