/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  let map = {}
  for(let i=0; i<nums.length; i++) {
    const num = nums[i]
    map[num] = (map[num] || 0)+1
  }
  const arr = Object.keys(map).sort((a,b) => map[b] - map[a])
  return arr.slice(0, k).map(a=>Number(a))
};