const getNewNum = (start, len) => {
  let numStr = ""
  for(let i=start; i<=9; i++) {
    if(numStr.length<len) {
      numStr += i
    } else break
  }
  if(numStr.length!==len) return null
  return +numStr
}
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  const highLen = String(high).length
  const lowLen = String(low).length
  let res = []
  for(let len=lowLen; len<=highLen; len++) {
    let newNum
    for(let start=1; start<=9; start++) {
      newNum = getNewNum(start, len)
      if(newNum && newNum>=low && newNum<=high) res.push(newNum)
    }
  }
  return res
};
