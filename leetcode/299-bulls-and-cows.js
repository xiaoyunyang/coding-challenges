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
  const sDigs = {}
  const gDigs = {}
  for(let i=0; i<secret.length; i++) {
    const s = secret[i]
    const g = guess[i]
    if(s===g) {
      A++
    } else {
      sDigs[s] = (sDigs[s] || 0)+1
      gDigs[g] = (gDigs[g] || 0)+1
      if(sDigs[g]>0) {
        B++
        sDigs[g]--
        gDigs[g]--
      }
      if(gDigs[s]>0) {
        B++
        gDigs[s]--
        sDigs[s]--
      }
    }
  }
  return `${A}A${B}B`
};
