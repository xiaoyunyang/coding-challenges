/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  // approach: sliding window
  const halfLen = s.length>>1
  for(let windowSize=1; windowSize<=halfLen; windowSize++) {
    const pattern = s.substring(0,windowSize)
    for(let i=windowSize; i<s.length; i+=windowSize) {
      const end = i+windowSize
      const next = s.substring(i,end)
      
      if(pattern===next && end ===s.length) return true
      else if(pattern!==next) break
    }
  }
  return false
};
