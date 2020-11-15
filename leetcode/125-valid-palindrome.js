/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const isAlphanumeric = (c) => (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9")
  let i = 0
  let j = s.length-1
  while(i<j) {
    if(!isAlphanumeric(s[i])) {
      i++
      continue
    }
    if(!isAlphanumeric(s[j])) {
      j--
      continue
    }

    const a = s[i].toLowerCase()
    const b = s[j].toLowerCase()
    if(a!==b) return false
    i++
    j--
  }
  return true   
};
