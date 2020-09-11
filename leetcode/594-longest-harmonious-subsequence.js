/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let res = 0
  let h = {}
  for(let i=0; i<nums.length; i++) {
    const curr = nums[i]
    h[curr] = (h[curr] || 0) + 1
    if(h[curr+1]) {
      res = Math.max(res, h[curr]+h[curr+1])
    }
    if(h[curr-1]) {
      res = Math.max(res, h[curr]+h[curr-1])
    }
  }
  return res
};
