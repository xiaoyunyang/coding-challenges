/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
  let left = 1
  let right = Math.max(...nums)

  // binary search
  let mid
  while(left<right) {
    mid = left + ((right-left)>>1)
    const sum = nums.reduce((acc,num) => acc+Math.ceil(num/mid),0)
    if(sum>threshold) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return right
};
