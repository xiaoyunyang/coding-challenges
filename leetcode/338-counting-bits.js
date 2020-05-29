/**
 * @param {number} num
 * @return {number[]}
 */
 var countBits = function(num) {
  if(num===0) return [0]
  const res = Array(num+1).fill(0)
  let pow = 0
  let toggleBit
  for(let i=1; i<=num; i++) {
    if(i===1<<pow) {
      res[i] = 1
      toggleBit = 1<<pow
      pow++ // the next pow of two
      continue
    }

    res[i] = 1 + res[i^toggleBit]
  }
  return res
};
