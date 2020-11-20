const getRepeatedPattern = (pattern, rep) => {
  return Array(rep).fill(pattern).join("")
}

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = []
  
  let isLastCharNum = false
  for(let i=0; i<s.length; i++) {
    const c = s[i]
    const isCurrCharNum = Number.isInteger(+c)
    if(c==="[") {
      stack.push(c)
    } else if(c==="]") {
      let popped = ""
      let pattern = ""
      while(popped!=="[") {
        pattern = popped + pattern
        popped = stack.pop()
      }
      const rep = Number.parseInt(stack.pop(),10)
      const repeatedPattern = getRepeatedPattern(pattern, rep)
      stack.push(repeatedPattern)
    } else {
      
      let toPush = c
      if(isCurrCharNum && isLastCharNum) {
        const oldNum = stack.pop()
        toPush = oldNum+c
      }
      stack.push(toPush)
    }
    isLastCharNum = isCurrCharNum
  }
  return stack.join("")
};
