/*
repl:
https://repl.it/@xiaoyunyang/knuth-shuffle-and-sort
*/
// O(NlogN) runtime and O(N) space
function compare(a,b) {
  let [ax, ay] = a.split(',')
  let [bx, by] = b.split(',')
  if(ax<bx) {
    return -1
  }
  if(ax===bx) {
    return ay<by ? -1 : 1
  }
}

function sort2DArr(arr) {
  let a = [...arr]
  let dict = {}
  arr.forEach(a => {
    dict[a] = a
  })
  let sortedKeys = Object.keys(dict).sort((a,b) => compare(a,b))
  let sortedArr = sortedKeys.map(k => dict[k])
  return sortedArr
}

export default sort2DArr