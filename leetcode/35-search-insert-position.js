/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  for(let i=0; i<nums.length; i++) {
      if(nums[i]>=target) return i
  }
  return nums.length
};
