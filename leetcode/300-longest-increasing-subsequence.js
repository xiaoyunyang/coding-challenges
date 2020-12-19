/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS_Greedy = function(nums) {
  const tails = [nums[0]]
  let size = 1
  for(let i=1; i<nums.length; i++) {
    let left = 0
    let right = i
    while(left<right) {
      const mid = left + ((right-left) >> 1)
      if(tails[mid]<nums[i]) left = mid+1
      else right = mid
    }
    if(left>=tails.length) tails.push(nums[i])
    else {
      tails[left]=nums[i]
    }
  }
  return tails.length
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS_DP = function(nums) {
  const LIS = Array(nums.length).fill(undefined)
  LIS[0] = 1
  let res = 1
  for(let i=1; i<nums.length; i++) {
    let maxLIS = 0
    for(let j=0; j<i; j++) {
      if(nums[j]<nums[i] && LIS[j]>maxLIS) {
        maxLIS = LIS[j]
      }
    }
    LIS[i] = maxLIS + 1
    res = Math.max(res, LIS[i])
  }

  return res
};