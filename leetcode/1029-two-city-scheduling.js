const twoCitySchedCost = (costs) => {
  
  const costDiffs = costs.map((cost, i) => {
    const [aCost,bCost] = cost
    return [aCost - bCost, i]
  }).sort((a,b) => a[0] - b[0]);

  let a = 0
  let b = costDiffs.length-1
  let total = 0;
  while(a<b) {
    const indA = costDiffs[a][1]
    const indB = costDiffs[b][1]
    total = total + costs[indA][0] + costs[indB][1]
    a++
    b--
  }

  return total
};