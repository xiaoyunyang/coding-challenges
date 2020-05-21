/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var countSquares = function(matrix) {
  const numRows = matrix.length
  const rowLen = matrix[0].length
  const sumMatrix = Array(numRows)
  for(let i=0; i<sumMatrix.length; i++) {
    sumMatrix[i] = Array(rowLen).fill(null)
  }

  const getMinNeighbors = (i,j) => {
    const top = (i-1<0) ? 0 : sumMatrix[i-1][j] 
    const left = (j-1<0) ? 0 : sumMatrix[i][j-1]
    const diag = (i-1>=0 && j-1>=0) ? sumMatrix[i-1][j-1] : 0
    return Math.min(top, left, diag)
  }
  let res = 0
  for(let i=0; i<numRows; i++) {
    for(let j=0; j<rowLen; j++) {
      const item = matrix[i][j]
      if(item===0) continue
      const min = getMinNeighbors(i,j)
      sumMatrix[i][j] = item+min
      res += sumMatrix[i][j]
    }
  }
  return res
};