/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  const sortedNums = nums.map(a=>a-1).sort((a,b) => b-a)
  return sortedNums[0]*sortedNums[1]
};