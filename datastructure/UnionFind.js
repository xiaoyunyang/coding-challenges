class UnionFind {
  constructor(aLen) {
    // Note, if this data structure were implemented in TS, all these would
    // be private class variables
    this.leader = Array.from(Array(aLen).keys())
    this.rank = Array(aLen).fill(0)
    this.numSets = aLen
    this.setSize = Array(aLen).fill(1)
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
      this.setSize[iLeader] += this.setSize[jLeader]
    } else {
      this.leader[iLeader] = jLeader
      this.setSize[jLeader] += this.setSize[iLeader]
    }
    if(this.rank[iLeader] === this.rank[jLeader]) {
      this.rank[jLeader]++
    }

    this.numSets--
  }
  // returns the number of disjoint sets currently in the structure
  numDisjointSets() {
    return this.numSets
  }
  // returns the size of set that currently contains item i
  sizeOfSet(i) {
    this.setSize[this.findSet(i)]
  }
}