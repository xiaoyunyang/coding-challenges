/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const getCharInd = (c) => c.charCodeAt(0) - 'a'.charCodeAt(0)
  const arrEqual = (a,b) => {
    for(let i=0; i<a.length; i++) {
      if(a[i]!==b[i]) return false
    }
    return true
  }
  if(s.length<p.length) return []
  let pChars = new Set()
  let pCharCount = Array(26).fill(0)
  let sCharCount = Array(26).fill(0)
  for(let c of p) {
    pCharCount[getCharInd(c)]++
    pChars.add(c)
  }

  let res = []
  let i = 0
  let j = p.length
  let cCount = 0
  let c, cInd
  let toMatch = 0

  for(j=0; j<s.length; j++) {
    i = j-p.length
    c = s[j]
    if(pChars.has(c)) {
      sCharCount[getCharInd(c)]++
      toMatch++
    }
    c = s[i]
    if(pChars.has(c)) {
      sCharCount[getCharInd(c)]--
      toMatch--
    }

    if(toMatch===p.length && arrEqual(pCharCount,sCharCount)) {
      res.push(i+1)
    }
  }
  return res
};