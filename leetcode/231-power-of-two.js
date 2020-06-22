/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
  if(n<1) return false
  let num = n
  while(num>1) {
    if(num%2!==0) return false
    num = num>>1
  }
  return true
};
