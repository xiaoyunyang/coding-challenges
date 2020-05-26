/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
 var maxUncrossedLines = function(A, B) {
  const aLen = A.length
  const bLen = B.length
  const row = Array(bLen).fill(undefined)
  const matrix = Array(aLen).fill(undefined)
  for(let i=0; i<aLen; i++) {
    matrix[i] = Array.from(row)
  }
  const getMaxTopOrLeft = (i,j) => {
    let top = (i-1<0) ? 0 : matrix[i-1][j]
    let left = (j-1<0) ? 0 : matrix[i][j-1]
    return Math.max(top, left)
  }
  const getDiag = (i,j) => {
    return (i-1 >=0 && j-1 >= 0) ? matrix[i-1][j-1] : 0
  }
  const getSelf = (i,j) => {
    return A[i] === B[j] ? 1 : 0
  }
  
  for(let i=0; i<aLen; i++) {
    for(let j=0; j<bLen; j++) {
      let option1 = getDiag(i,j) + getSelf(i,j)
      let option2 = getMaxTopOrLeft(i,j)
      matrix[i][j] = Math.max(option1, option2)
    }
  }
  return matrix[aLen-1][bLen-1]
};
