/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let localMax = 0
  let globalMax = 0
  const map = {}
  for(let i=0; i<s.length; i++) {
    const c = s[i]
    if(map[c]!==undefined) {
      localMax = Math.min(Math.max(0, i-map[c]), localMax+1)
    } else {
      localMax = Math.max(0, localMax+1)
    }
    map[c] = i
    globalMax = Math.max(globalMax, localMax)
  }
  return globalMax
};
