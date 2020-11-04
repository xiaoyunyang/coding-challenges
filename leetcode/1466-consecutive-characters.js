/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let globalMax = 1
  let localMax = 1
  let repeatedChar = s[0]
  for(let i=1; i<s.length; i++) {
      const c = s[i]
      if(c === repeatedChar) {
          localMax++
      } else {
          repeatedChar = c
          localMax = 1
      }
      globalMax = Math.max(localMax, globalMax)
  }
  return globalMax
};