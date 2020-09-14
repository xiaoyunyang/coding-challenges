/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
  // approach: backtracking
  const res = []

  const search = (num, sum, nums, kLeft) => {
    if(sum===n && kLeft===0) {
      res.push(nums)
      return
    }
    if(num>9 || num>n || sum>n || k<0) return
    search(num+1, sum+num, nums.concat(num), kLeft-1)
    search(num+1, sum, nums, kLeft)
  }
  search(1, 0, [], k)
  return res
};
