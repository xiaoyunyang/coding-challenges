/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let len = 1
  while(len<=s.length>>1) {
    const substr = s.substring(0,len)
    for(let i=len; i<s.length; i+=len) {
      // check substring matches
      const end = i+len
      const check = s.substring(i, end)
      if(check!==substr) break;
      else if(end===s.length) return true 
    }
    len++
  }
  return false
};
