/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  const getCharInd = (c) => c.charCodeAt(0) - 'a'.charCodeAt(0)
  const arrEqual = (a,b) => {
    for(let i in a) {
      if(a[i]!==b[i]) return false
    }
    return true
  }
  let cFreq = Array(26).fill(0)
  let cSeen = Array(26).fill(0)
  let s1Chars = new Set()
  for(let c of s1) {
    cFreq[getCharInd(c)]++
    s1Chars.add(c)
  }
  let c, i
  let toCheck = 0
  for(let j=0; j<s2.length; j++) {
    c = s2[j]
    if(s1Chars.has(c)) {
      cSeen[getCharInd(c)]++
      toCheck++
    }

    i = j-s1.length
    c = s2[i]
    if(s1Chars.has(c)) {
      cSeen[getCharInd(c)]--
      toCheck--
    }
    if(toCheck === s1.length && arrEqual(cFreq, cSeen)) return true
  }
  return false
};