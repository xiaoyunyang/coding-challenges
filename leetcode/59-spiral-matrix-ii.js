/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {

  // Build Matrix
  const row = Array(n).fill(undefined)
  const matrix = Array(n).fill(undefined)
  for(let i=0; i<n; i++) {
    matrix[i] = row.slice()
  }
  const getNext = (i,j, dir) => {
    if(dir==="RIGHT") {
      if(j+1<n && !matrix[i][j+1]) {
        return [i, j+1,dir]
      }
      return [i+1, j, "DOWN"]
    }
    if(dir==="DOWN") {
      if(i+1<n && !matrix[i+1][j]) {
        return [i+1, j, "DOWN"]
      }
      return [i, j-1, "LEFT"]
    }
    if(dir==="LEFT") {
      if(j-1>=0 && !matrix[i][j-1]) {
        return [i,j-1, "LEFT"]
      }
      return [i-1, j, "UP"]
    }
    // UP
    if(i-1>=0 && !matrix[i-1][j]) {
      return [i-1, j, "UP"]
    }
    return [i, j+1, "RIGHT"]
  
  }

  let dir = "RIGHT"
  const lastToFill = n*n
  let i = 0
  let j = 0
  for(let toFill=1; toFill<=lastToFill; toFill++) {
    matrix[i][j] = toFill
    // calculate next i and j
    const [nexti, nextj, nextDir] = getNext(i,j,dir)
    i = nexti
    j = nextj
    dir = nextDir

  }
  return matrix
};

