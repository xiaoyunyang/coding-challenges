/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  let leader = Array(N+1)
  let rank = Array(N+1)
  let maxRank = 0
  let guess = 1
  for(let i=0; i<trust.length; i++) {
    let [p, l] = trust[i]
    leader[p] = l
    rank[l] = (rank[l] || 0) + 1
    if(rank[l] > maxRank) {
      maxRank = rank[l]
      guess = l
    }
  }
  if(maxRank < N-1) return -1
  if(leader[guess]) return -1
  return guess
};