/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
 var intervalIntersection = function(A, B) {
  if(A.length===0 || B.length === 0) return []
  let i = 0
  let j = 0
  let res = []
  while(i<A.length && j<B.length) {
    const [aLo, aHi] = A[i]
    const [bLo, bHi] = B[j]
    const lo = Math.max(aLo, bLo)
    const hi = Math.min(aHi, bHi)

    if(hi>=lo) res.push([lo,hi])
    if(aHi<bHi) i++
    else j++
  }
  return res
};
