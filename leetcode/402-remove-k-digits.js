/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if(num.length===k) return "0"
  if(k===0) return num
  let res= [], i = 0
  let left = k
  while(i<num.length) {
    curr = Number(num[i])
    if(left>0 && res[res.length-1]>curr) {
      res.pop()
      left--
    } else {
      res.push(curr)
      i++
    }
  }

  // trim the tail
  while(left>0) {
    res.pop()
    left--
  }
  // trim the leading zeros
  while(res[0]===0 && res.length>1) {
    res.shift(1)
  }
  return res.join("")
}