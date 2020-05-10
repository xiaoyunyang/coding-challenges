/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if(num===0 || num===1) return true
  if(num<0) return false
  let left = 0
  let right = num
  let mid
  let guess
  while(left<right) {
    mid = left + ((right-left)>>1)
    guess = mid*mid
    if(guess === num) {
      return true
    } else if(guess>num) {
      right = mid
    } else {
      left = mid+1
    }
  }
  return false
};