/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
  let currMax = A[0]
  let bestMax = A[0]
  let currMin = A[0]
  let bestMin = A[0]
  let total = A[0]
  
  for(let i=1; i<A.length; i++) {
    currMax = Math.max(A[i], currMax+A[i])
    bestMax = Math.max(bestMax, currMax)

    currMin = Math.min(A[i], currMin+A[i])
    bestMin = Math.min(bestMin, currMin)
    
    total+=A[i]
  }
  if(total == bestMin) return bestMax;
  return Math.max(total - bestMin, bestMax);
};