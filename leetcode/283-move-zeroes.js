/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let i = 0
  let j = 1
  while(i<nums.length && j<nums.length) {
    if(nums[i] === 0) {
      if(nums[j]===0) { j++; continue }
      const temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
    }
    i++
    j++
  }
};