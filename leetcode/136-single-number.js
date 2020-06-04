/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  return nums.reduce((acc, curr) => acc ^ curr, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberSet = function(nums) {
  const s = new Set()
  for(let num of nums) {
    if(s.has(num)) {
      s.delete(num)
    } else {
      s.add(num)
    }
  }
  return Array.from(s)[0]    
};