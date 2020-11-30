/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const openCloseMap = {
      "[": "]",
      "(": ")",
      "{": "}"
  }
  const opens = new Set(Object.keys(openCloseMap))
  const stack = []
  for(let i=0; i<s.length; i++) {
    if(opens.has(s[i])) {
      stack.push(s[i])
    } else if(openCloseMap[stack.pop()] !== s[i]) {
      return false
    }
  }
  return stack.length === 0
};
