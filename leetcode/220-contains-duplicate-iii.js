/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  const sorted = nums.map((num,i) => ({num,i})).sort((a,b) => a.num-b.num)
  let i=0
  let j=1
  while(i<sorted.length && j<sorted.length) {
    const {num: a, i: aInd} = sorted[i]
    const {num: b, i: bInd} = sorted[j]
    if(b-a>t) {
      if(j===i+1) {
        i++
        j++
      } else i++
    } else if(Math.abs(aInd-bInd)>k) {
      j++
    } else {
      return true
    }
  }
  return false
};