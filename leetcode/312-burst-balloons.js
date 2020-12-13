/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  let eNums = [...nums] // extended nums
  eNums.unshift(1)
  eNums.push(1)
  const n = eNums.length

  // DP table
  let dp = Array(n).fill(undefined)
  for(let i=0; i<dp.length; i++) {
    dp[i] = Array(n).fill(0)
  }
  
  for(let k=2; k<n; k++) {
    for(let left=0; left<n-k; left++) {
      const right = left+k
      for(let i=left+1; i<right; i++) {
        const coins = eNums[left] * eNums[i] * eNums[right]
        dp[left][right] = Math.max(
          dp[left][right],
          coins + dp[left][i] + dp[i][right]
        )
      }
    }
  }
  return dp[0][n-1]
};
