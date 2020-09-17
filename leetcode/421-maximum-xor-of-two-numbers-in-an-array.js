/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaximumXOR = function(nums) {
  let max = 0
  for(let i=0; i<nums.length; i++) {
    for(let j=i+1; j<nums.length; j++) {
      const curr = nums[i]^nums[j]
      if(curr>max) max = curr
    }
  }
  return max
};
