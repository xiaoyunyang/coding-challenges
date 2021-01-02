/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  const h = {}
  for(let piece of pieces) {
    h[piece[0]] = piece
  }
  let j = 0
  let key = null
  for(let i=0; i<arr.length; i++) {
    if(!key) key = arr[i]

    if(!h[key] || h[key][j]!==arr[i]) return false

    if(h[key].length===j+1) {
      j=0
      key = null
    } else {
      j++
    }
  }
  return true
};
