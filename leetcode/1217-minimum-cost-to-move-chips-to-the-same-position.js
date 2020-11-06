/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let cost = 0
  let cost2 = 0
  for(let i=0; i<position.length; i++) {
    if(position[i] % 2 ===1) {
      cost+=1
    } else {
      cost2+=1
    }
  }
  return Math.min(cost, cost2)
};
