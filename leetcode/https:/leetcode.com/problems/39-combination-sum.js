/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  // approach: backtracking
  // candidates need to be sorted in asc order
  candidates.sort((a,b) => a-b)
  const res = []
  const length = candidates.length
  const search = (i, sum, nums) => {
    if(i === length || sum>target) return
    if(sum===target) {
      res.push(nums)
      return
    }    
    const c = candidates[i]
    if(c>target) return
    search(i, sum+c, nums.concat(c))
    search(i+1, sum, nums)
  }

  search(0, 0, [])
  return res
};
