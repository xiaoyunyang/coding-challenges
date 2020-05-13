/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let left = 0
  let right = nums.length
  let mid
  while(left<right-1) {
    mid = left+ ((right-left)>>1)
    if(nums[mid]==nums[mid-1]) {
      mid+=1 // include mid with left 
    }
    if((mid-left)%2 === 1) {
      right = mid
    } else {
      left = mid
    }
  }
  return nums[left]
};