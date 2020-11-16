/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  let left = n
  while(left>1) {
    if(n % 4!==0) return false
    left /= 4
  }
  return left===1
};
