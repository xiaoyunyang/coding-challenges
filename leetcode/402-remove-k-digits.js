/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if(num.length===k) return "0"
  if(k===0) return num
  let res = []
  let left = k

  // get rid of everything larger than curr from tail
  for(let i=0; i<num.length; i++) {
    const curr = Number(num[i]) 
    while(left>0 && res.length>0 && res[res.length-1]>curr) {
      res.pop()
      left--
    }
    res.push(curr)
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
  return res.reduce((acc, curr) => acc+curr, "")  
}