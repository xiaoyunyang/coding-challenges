/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  let map = {}
  let max = -1
  for(let i=0; i<nums.length; i++) {
    const num = nums[i]
    map[num] = (map[num] || 0)+1
    if(map[num]>max) {
      max = map[num]
    }
  }
  const keys = Object.keys(map)
  keys.sort((a,b) => map[b] - map[a])
  let resSize = 0
  let res = []
  for(let num of keys) {
    if(resSize>=k) break 
    res.push(Number(num))
    resSize++
    
  }
  return res
};
