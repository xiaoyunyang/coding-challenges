/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let bestSum = -Infinity
  let currSum = -Infinity
  for (let i=0; i<nums.length; i++) {
    currSum = Math.max(0, currSum) + nums[i]
    bestSum = Math.max(bestSum, currSum)
  }
  return bestSum
};