function Node(val) {
  this.val = val
  this.color = null
  this.children = []
  this.parents = []
}
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
  const graph = {}

  // Build the graph
  for(let dislike of dislikes) {
    const [u,v] = dislike
    graph[u] = graph[u] || new Node(u)
    graph[u].children.push(v)
    graph[v] = graph[v] || new Node(v)
    graph[v].parents.push(u)
  }
  
  // color all the nodes
  let seen = {}
  let toExplore = []
  const keys = Object.keys(graph)
  let color = 1
  
  for(let i=0; i<keys.length; i++) {
    const key = keys[i]
    if(!seen[key]) {
      toExplore.push(key)
      seen[key] = true
      graph[key].color = color
    }
    // BFS
    let node
    while(toExplore.length) {
      node = graph[toExplore.shift()]
      if(node.parents.length===0 && node.color === null) {
        node.color = 1
      }
      color = node.color
      const next = node.children.concat(node.parents)
      for(let c of next) {
        if(!seen[c]) {
          graph[c].color= -color
          toExplore.push(c)
          seen[c] = true
        } else if(graph[c].color===color) {
          return false
        }
      }
    }
  }
  return true
};
