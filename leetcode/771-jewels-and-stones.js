/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const jewels = new Set(J)
  let num = 0
  for(let i=0; i<S.length; i++) {
    const stone = S.charAt(i)
    if(jewels.has(stone)) {
      num++
    }
  }
  return num
};