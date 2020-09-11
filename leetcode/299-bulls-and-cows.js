/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  // A = matches in both digit and location
  // B - matches of digit but wrong location
  let A = 0
  let B = 0
  // freq table. Positive means more s seen. Negative means
  // more g seen. zero means balanced.
  const h = {}
  for(let i=0; i<secret.length; i++) {
    const s = secret[i]
    const g = guess[i]
    if(s===g) {
      A++
    } else {
      if(h[g]>0) B++
      h[g] = (h[g] || 0) - 1
      if(h[s]<0) B++
      h[s] = (h[s] || 0) + 1
    }
  }
  return `${A}A${B}B`
};
