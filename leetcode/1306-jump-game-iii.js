/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  const explored = new Set()

  function dfs(i) {
    if(i<0 || i>=arr.length) return false
    if(arr[i]===0) return true
    if(explored.has(i)) return false
    explored.add(i)
    return dfs(i-arr[i]) || dfs(i+arr[i])
  }
  return dfs(start)
};

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReachIter = function(arr, start) {
  let ind
  let elem
  const s = [start]
  const explored = new Set()
  
  while(s.length>0) {
    ind = s.pop()
    if(ind<0 || ind>=arr.length) continue
    elem = arr[ind]
    if(elem === 0) return true
    if(explored.has(ind)) continue
    explored.add(ind)
    s.push(ind-elem)
    s.push(ind+elem)
  }
  return false
};
