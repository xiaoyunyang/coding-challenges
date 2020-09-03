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
    const range = Math.abs(sorted[j].i - sorted[i].i)
    const diff = sorted[j].num-sorted[i].num
    if(diff<=t && range<=k) return true
    if(range>k) j++
    else if (diff>t) i++
    if(i===j) j++
  }
  return false
};