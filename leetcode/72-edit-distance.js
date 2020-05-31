/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  const n = word1.length
  const m = word2.length
  if(n===0) return word2.length
  if(m===0) return word1.length
  const matrix = Array(n+1).fill(undefined)
  const row = Array(m+1).fill(undefined)
  for(let i in matrix) {
    matrix[i] = Array.from(row)
  }
  const getTop = (i,j) => matrix[i-1][j]
  const getLeft = (i,j) => matrix[i][j-1]
  const getDiag = (i,j) => matrix[i-1][j-1]
  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<row.length; j++) {
      if(i===0 && j===0) {matrix[i][j] = 0; continue}
      if(i===0) {matrix[i][j] = j; continue}
      if(j===0) {matrix[i][j] = i; continue}
      if(word1[i-1]===word2[j-1]) {
        matrix[i][j] = getDiag(i,j)
      } else {
        matrix[i][j] = 1+ Math.min(getTop(i,j), getLeft(i,j), getDiag(i,j))

      }
    }
  }
  return matrix[n][m]
};
