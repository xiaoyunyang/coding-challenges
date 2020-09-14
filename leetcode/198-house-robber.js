/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  // Approach: dynamic programming using 
  const memo = Array(nums.length+1)
  memo[0] = 0
  memo[1] = nums[0]
  for(let i=1; i<nums.length; i++) {
    const val = nums[i]
    // the choice is (1) we can skip the current house and rob the
    // previous house, or (2) we can rob the current house and 
    // skip the previous house
    memo[i+1] = Math.max(memo[i], memo[i-1]+val)
  }
  return memo[nums.length]
};
