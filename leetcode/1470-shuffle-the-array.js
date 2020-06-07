/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
  let xs = nums.slice(0, n)
  let ys = nums.slice(n, nums.length)
  let i=0
  let res = []
  while(i<xs.length || i<ys.length) {
    if(xs[i]) res.push(xs[i])
    if(ys[i]) res.push(ys[i])
    i++
  }
  return res
};
