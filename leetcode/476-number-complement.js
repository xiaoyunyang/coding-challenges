/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let res = num
  let i = 0
  while(num>>i !==0) {
    res ^= (1<<i)
    i++
  }
  return res
};
