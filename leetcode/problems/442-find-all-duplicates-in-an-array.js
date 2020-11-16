/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const dups = []
	for(let i=0; i<nums.length; i++) {
		const curr = nums[i]
		// negate the number at index curr-1
		const j = Math.abs(curr)-1
		if(nums[j]<0) dups.push(Math.abs(curr))
		else nums[j] = -nums[j]
  }
  return dups
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicatesSlow = function(nums) {
  nums.sort((a,b) => a-b)
  const dups = []
  let prev = nums[0]
  for(let i=1; i<nums.length; i++) {
    const curr = nums[i]
    if(curr===prev) dups.push(curr)
    prev = curr
  }
  return dups
};
