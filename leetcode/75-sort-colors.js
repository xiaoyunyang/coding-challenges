/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  const swap = (i,j) => {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  let tail0 = 0
  let head2 = nums.length
  let i = 0

  while(i<head2) {
    if(nums[i]===0) {
      swap(i, tail0)
      tail0++
      i++
    } else if(nums[i]===2) {
      head2--
      swap(i, head2)
    } else {
      i++
    }
  }
};
