/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a,b) => a-b)
  let res = []
  const dfs = (newPerm, visited) => {
    if(newPerm.length === nums.length) {
      res.push(newPerm.slice())
      return
    }
    for(let i=0; i<nums.length; i++) {
      if(i>0 && !visited.has(i-1) && nums[i] === nums[i-1]) continue
      if(visited.has(i)) continue
      
      newPerm.push(nums[i])
      visited.add(i)
      dfs(newPerm, visited)
      visited.delete(i)
      newPerm.pop()
    }
  }
  
  dfs([], new Set())
  return res
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUniqueSlow = function(nums) {
  let seen = new Set()
  let res = []
  const permute = (arr, newPerm = []) => {
    for(let i=0; i<arr.length; i++) {
      // mutates arr      
      const curr = arr.splice(i,1)
      if(arr.length === 0) {
        const perm = newPerm.concat(curr)
        const permStr = JSON.stringify(perm)
        if(!seen.has(permStr)) {
          seen.add(permStr)
          res.push(perm)
        }
      }
      if(arr.indexOf(curr)!==i) continue
      // pass in a copy of the arr
      permute(arr.slice(), newPerm.concat(curr))
      arr.splice(i, 0, curr[0])
    }
    return res
  }
  return permute(nums)
};