/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  const compCounts = Array(60).fill(0)
  let res = 0
  for(let i=0; i<time.length; i++) {
    const curr = time[i] % 60
    const comp = (60-curr) % 60

    res += compCounts[comp]
    compCounts[curr] = compCounts[curr] + 1
  }

  return res
};