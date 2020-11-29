/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let left = n
  let i = 0
  while(left>i) {
    left-=i
    if(left<i+1) return i
    i++
  }
  return i
};
