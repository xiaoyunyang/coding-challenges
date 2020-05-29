/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
  let localMax = 0
  let globalMax = 0
  let balance = 0
  const balances = {0: -1}
  for(let i=0; i<nums.length; i++) {
    balance += nums[i]=== 0 ? -1 : 1
    if(balances[balance]===undefined) {
      balances[balance] = i
    }
    localMax = i-balances[balance]
    globalMax = Math.max(globalMax, localMax)  
  }
  return globalMax
};
