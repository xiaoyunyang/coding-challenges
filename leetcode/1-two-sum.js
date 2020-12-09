/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let compMap = {}
  for(let i=0; i<nums.length; i++) {
    const comp = target-nums[i]
    if(compMap[comp]!== undefined) return [compMap[comp], i]
    compMap[nums[i]] = i
  }

  return []
};
