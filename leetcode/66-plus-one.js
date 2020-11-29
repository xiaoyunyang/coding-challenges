/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if(digits.length<1) return []
  let newNum = digits[digits.length-1] + 1
  let carry = (newNum>9) ? 1 : 0
  const res = [newNum%10]
  for(let i=digits.length-2; i>=0; i--) {
    newNum = digits[i]+carry
    res.unshift(newNum%10)
    carry = (newNum>=10) ? 1 : 0
  }
  if(carry===1) res.unshift(carry)
  return res
};
