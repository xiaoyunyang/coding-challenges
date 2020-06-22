/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  // twi counters
  let lo = 0
  let hi = 0
  for(let num of nums) {
    lo = (~hi) & (lo^num)
    hi = (~lo) & (hi^num)
  }
  return lo
};
