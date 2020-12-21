/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
 var decodeAtIndex = function(S, K) {
  let decodedLen = 0
  // pre-processing step
  for(let i=0; i<S.length; i++) {
    if(!isNaN(S[i])) {
      decodedLen *= +S[i]
    } else {
      decodedLen++
    }
  }
  for(let i=S.length-1; i>=0; i--) {
    K %= decodedLen
    const c = S[i]
    if(K===0 && isNaN(c)) {
      return c
    }
    if(!isNaN(c)) {
      decodedLen = Math.ceil(decodedLen / (+c))
      continue
    }
    decodedLen--
  }
  return null
};
