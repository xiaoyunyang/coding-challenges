/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {

  const flip = (bin) => bin === 0 ? 1 : 0

  for(let i=0; i<A.length; i++) {
    let row = [...A[i]]
    let a = 0
    let b = row.length-1
    while(a<b) {
      const temp = row[a]
      row[a] = flip(row[b])
      row[b] = flip(temp)
      a++
      b--
    }
    if(a===b) row[a] = flip(row[a])
    A[i] = row
  }
  return A
};
