const encodeCoord = (i,j) => `${i},${j}`
const decodeCoord = (s) => s.split(',').map(s => parseInt(s, 10))

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if(board.length===0) return
  let h = board.length
  let w = board[0].length
  let doNotTurn = new Set()
  
  // Start with the outer edges
  // if it is an O, identify all connected O's on the
  // board and add them to a "do not turn to X" list
  let explored = new Set()
  let queue = []
  let edges = []
  for(let i=0; i<h; i++) {
    edges.push([i,0])
    edges.push([i, w-1])
  }
  for(let j=1; j<w-1; j++) {
    edges.push([0,j])
    edges.push([h-1, j])
  }
  for(let c=0; c<edges.length; c++) {
    const [i,j] = edges[c]
    const tile = board[i][j]
    
    if(tile==='O') {
      const encoded = encodeCoord(i,j)
      doNotTurn.add(encoded)
      // BFS
      explored.add(encoded)
      queue.push(encoded)
      while(queue.length>0) {
        let encoded = queue.shift()
        let [i,j] = decodeCoord(encoded)
        let neighbors = [
          [i+1, j], [i, j+1], [i-1, j], [i, j-1] 
        ].filter(coord => 
        coord[0]>=0 && coord[0]<h && coord[1]>=0 && coord[1]<w && 
        board[coord[0]][coord[1]] === 'O')
        for(let nei of neighbors) {
          const encodedNeiCoord = encodeCoord(...nei)
          if(!explored.has(encodedNeiCoord)) {
            doNotTurn.add(encodedNeiCoord)
            explored.add(encodedNeiCoord)
            queue.push(encodedNeiCoord)
          }
        }
      }
    }
  }
  
  for(let i=0; i<h; i++) {
    for(let j=0; j<w; j++) {
      const tile = board[i][j]
      if(tile==='O' && !doNotTurn.has(encodeCoord(i,j))) {
        board[i][j] = 'X'
      }
    }
  }
};
