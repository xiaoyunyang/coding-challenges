const stringifyTime = (num) => {
  const s = String(num)
  if(s.length===1) return "0" + s
  return s
}
const removeFromArr = (nums, toRemove) => {
  let res = [...nums]
  for(let i=0; i<toRemove.length; i++) {
    num = toRemove[i]
    let index = res.indexOf(num)
    if(index>=0) {
      res.splice(index, 1)
    }
  }
  return res
}
const makeMinute = (d1, d2) => {
  const min = Number(`${d1}${d2}`)
  if(min>=0 && min<60) return min
  return -1
}
/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    // look for digits for a,b,c,d where ab:cd is largest valid time possible
    // ab <-- 00, 01, ...09, 10, 11, ... 19, 20, 21, 22, 23
    // cd: 00, 01, ..., 09, 10, 11, ..., 19, 20,..., 29, ...59
    for(let h=23; h>=0; h--) {
      // find largest minutes from remaining digits
      let hs = stringifyTime(h)
      let a = +hs[0]
      let b = +hs[1]
      let nums = A
      const toRemove = [a,b]
      nums = removeFromArr(A, toRemove)
      if(nums.length!==2) continue

      // Try all permutations of the remaining 2 digits
      // to determine if valid minute can be made
      const m = Math.max(
        makeMinute(nums[0], nums[1]),
        makeMinute(nums[1], nums[0])
      )
      if(m>=0) {
        const ms = stringifyTime(m)
        return `${hs}:${ms}`
      }

    }
    return ""

};