/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill_DFS = function(image, sr, sc, newColor) {
  const oldColor = image[sr][sc]
  function dfs(row, col) {
    if(row<0 || row>=image.length || col<0 || col>=image[0].length) return
    if(image[row][col]!==oldColor) return
    image[row][col] = newColor
    dfs(row-1, col)
    dfs(row+1, col)
    dfs(row, col-1)
    dfs(row, col+1)
  }
  if(oldColor===newColor) return image
  dfs(sr, sc)
  return image
};

var floodFill_BFS = function(image, sr, sc, newColor) {
  const getNeighbors = (row, col, color) => {
    const above = (row-1) >= 0 ? [row-1, col] : []
    const below = (row+1) < image.length ? [row+1, col] : []
    const left = (col-1) >= 0 ? [row, col-1] : []
    const right = (col+1) < image[0].length ? [row, col+1] : []
    return [above, below, left, right].filter(a => 
      a.length > 0 && image[a[0]][a[1]] === color
    )
  }
  let oldColor = image[sr][sc]
  const toExplore = []
  let u = [sr, sc]
  let seen = {}
  toExplore.push(u)
  seen[String(u)] = true
  let cs
  while(toExplore.length>0) {
    u = toExplore.shift()
    image[u[0]][u[1]] = newColor
    cs = getNeighbors(u[0], u[1], oldColor)
    for(let c of cs) {
      if(!seen[String(c)]) {
        toExplore.push(c)
        seen[String(c)] = true
      }
    }
  }
  return image
};