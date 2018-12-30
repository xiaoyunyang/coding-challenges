/*
repl:
https://repl.it/@xiaoyunyang/knuth-shuffle-and-sort
*/
// O(NlogN) runtime and O(N) space
function compare(a,b) {
  let [ax, ay] = a
  let [bx, by] = b
  if(ax<bx) {
    return -1
  }
  if(ax===bx) {
    return ay<by ? -1 : 1
  }
}

function sort2DArr(arr) {
  // must make a copy. Array.sort
  // modifies the original array!
  let arrCpy = [...arr] 

  let sortedArr = arrCpy.sort((a,b) => {
    return compare(a,b)
  })
  return sortedArr
}

export default sort2DArr