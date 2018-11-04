function palindromePermutation(str) {
  let chars = {}
  for(let i=0; i<str.length; i++) {
    let curr = str.charAt(i).toLowerCase()
    
    // ignore whitespaces
    if(curr === ' ') {
      continue
    }
    if(!chars[curr]) {
      chars[curr] = 1
    } else {
      // we want to keep track of if an occurrence of the 
      // char is being canceled out by another occurrence 
      // of the char.
      if(chars[curr]===0) {
        chars[curr] = 1
      } else if(chars[curr]===1) {
        chars[curr] = 0
      }
    }
  }
  let numUnbalanced = Object.values(chars).filter(val => val===1);
  
  let strNoWhitespace = str.replace(/\s/g, '')
  
  if(strNoWhitespace.length%2===0) {
    // if even number of characters, having any unbalanced
    // char is unacceptable
    return numUnbalanced.length === 0
  }
  
  // if odd number of characters, only allowed to have
  // exactly 1 unbalanced char
  return numUnbalanced.length === 1 
}