/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
  if(A.length<3) return 0
  let localMax = 0
  let globalMax = 0

  let i = 0
  while(i<A.length) {
    // walk up
    let startUp = i
    while((i+1<A.length) && (A[i]<A[i+1])) i++

    if(i===startUp) {
      i++
      continue
    }

    // walk down
    let startDown = i
    while((i+1<A.length) && (A[i]>A[i+1])) i++
    
    if(i===startDown) {
      i++
      continue
    }

    localMax = i-startUp+1
    globalMax = Math.max(globalMax, localMax)
  }
  return globalMax
};
