/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  // approach: backtracking
    // candidates need to be sorted in asc order
    candidates.sort((a,b) => a-b)
    const res = []
    const length = candidates.length
  
    const search = (i, sum, nums) => {
      if(sum===target) {
        res.push(nums)
        return
      }
      if(i >= length || sum>target) return
      const c = candidates[i]
      if(c>target) return // optimization
  
      search(i+1, sum+c, nums.concat(c))
      
      // since candidates are sorted, we skip until we find next uniq
      let nextI = i+1
      while(candidates[nextI]===c) nextI++
      search(nextI, sum, nums)
    }
  
      search(0, 0, [])
    return res  
  };
  