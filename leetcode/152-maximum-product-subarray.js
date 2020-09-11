/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  // approach: Kadane's algorithm
  // constraint: the subarray has to be contiguous!
  let globalMax = nums[0]
  let localMax = nums[0]
  let localMin = nums[0]
  for(let i=1; i<nums.length; i++) {
    const prevLocalMax = localMax
    
    localMax = Math.max(
      nums[i],
      Math.max(localMax * nums[i], localMin * nums[i])
    )
    localMin = Math.min(
      nums[i],
      Math.min(prevLocalMax * nums[i], localMin * nums[i])
    )

    globalMax = Math.max(globalMax, localMax)
  }
  return globalMax
};
