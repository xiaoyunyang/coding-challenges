/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let maj = nums[0]
  let count = 1
  for(let i=1; i<nums.length; i++) {
    const num = nums[i]
    count += (num===maj) ? 1 : -1
    if(count===0) {
      maj = num
      count++
    }
  }
  return maj
};