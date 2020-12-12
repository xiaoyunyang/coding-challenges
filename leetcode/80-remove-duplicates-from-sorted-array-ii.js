/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const numCount = {}
  let i=1;
  while(i<nums.length-1) {
    if(nums[i+1]===nums[i-1]) {
      nums.splice(i,1)
    } else {
      i++
    }
  }
  return nums.length
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesNotSorted = function(nums) {
  const numCount = {}
  let extraDups = []
  let i=0;
  while(i<nums.length) {
    const num = nums[i]
    if(!numCount[num] || numCount[num]<2) {
      numCount[num] = (numCount[num] || 0) + 1
      i++
    } else {
      // remove current element from array. Don't increment i
      nums.splice(i, 1)
    }
  }
  return nums.length
};