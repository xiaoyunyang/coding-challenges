/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let dups = new Set()
  for(let i=0; i<s.length; i++) {
    let c = s.charAt(i)
    if(!dups.has(c) && s.indexOf(c) === s.lastIndexOf(c)) {
      return i
    }
    dups.add(c)
  }
  return -1
};