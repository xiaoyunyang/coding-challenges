// dir can be "N", "W", "S", "E"
const getNewVector = (move, dir, x, y) => {
  let newDir = dir
  let newX = x
  let newY = y
  switch(move) {
    case "G":
      if(dir === "N") newY++
      else if(dir === "W") newX--
      else if(dir === "S") newY--
      else if(dir === "E") newX++
      break
    case "L": 
      if(dir === "N") newDir = "W"
      else if(dir === "W") newDir = "S"
      else if(dir === "S") newDir = "E"
      else if(dir === "E") newDir = "N"
      break
    case "R":
      if(dir === "N") newDir = "E"
      else if(dir === "W") newDir = "N"
      else if(dir === "S") newDir = "W"
      else if(dir === "E") newDir = "S"
      break
  }
  return {
    dir: newDir,
    x: newX,
    y: newY
  }
}

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    // Approach: loop through the instructions and calculate the (x,y) 
    // after executing the move. Then return true if final (x,y) is (0,0).
    // false otherwise

    // initial conditions
    let x = 0
    let y = 0
    let dir = "N"
    for(let i=0; i<instructions.length; i++) {
      const move = instructions[i]
      const newVector = getNewVector(move, dir, x, y)
      x = newVector.x
      y = newVector.y
      dir = newVector.dir
    }
    return (x===0 && y===0) || (dir !== "N")
};
