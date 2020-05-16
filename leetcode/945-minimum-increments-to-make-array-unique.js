/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  A = A.sort((a,b) =>a-b)
  let last = A[0]
  let numIncs = 0
  let diff
  for(let i=1; i<A.length; i++) {
    if (A[i]<=last) {
      diff = last-A[i]
      A[i] += diff+1
      numIncs += diff+1
    }
    last=A[i]
  }
  return numIncs
};