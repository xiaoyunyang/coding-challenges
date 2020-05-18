class UnionFind {
  constructor(aLen) {
    this.leader = Array.from(Array(aLen).keys())
    this.rank = Array(aLen).fill(0)
  }
  // find the representative item (leader) of a set
  findSet(i) {
    if(this.leader[i] === i) return i
    const root = this.findSet(this.leader[i])
    this.leader[i] = root
    return root
  }
  // determines if elements at indices i and j belong to the same set
  isSameSet(i, j) {
    return this.findSet(i) === this.findSet(j)
  }
  // union by rank heuristic
  unionSet(i, j) {
    if(this.isSameSet(i,j)) return
    const iLeader = this.findSet(i)
    const jLeader = this.findSet(j)
    
    if(this.rank[iLeader] > this.rank[jLeader]) {
      this.leader[jLeader] = iLeader
    } else {
      this.leader[iLeader] = jLeader
    }
    if(this.rank[iLeader] === this.rank[jLeader]) this.rank[jLeader]++
  }
}