// map letter to board position
const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]
const h = {}
for(let i=0; i<board.length; i++) {
  for(let j=0; j<board[i].length; j++) {
    const ltr = board[i][j]
    h[ltr] = [i,j]
  }
}
const getPath = (start, end, isEndZ) => {
  // edge case: need to consider if start or end letter is z

  const vertDist = start[0]-end[0]
  const vertMove = (vertDist>0) ? "U" : "D"

  const horizDist = start[1]-end[1]
  const horizMove = (horizDist>0) ? "L" : "R"
  const horiz = Array(Math.abs(horizDist)).fill(horizMove).reduce((acc, m) => acc+m, "")
  const vert = Array(Math.abs(vertDist)).fill(vertMove).reduce((acc, m) => acc+m, "")
  return isEndZ ? horiz+vert+"!" : vert+horiz+"!"
}
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  if(target.length === 0) return ""
  // approach: graph search to find the next letter. Then calculate path 
  
  let start = [0,0]
  let end
  let res = ""
  for(let i=0; i<target.length; i++) {
    const ltr = target[i]
    end = h[ltr]
    res+=getPath(start, end, ltr==="z")
    start = end
  }
  return res
};
