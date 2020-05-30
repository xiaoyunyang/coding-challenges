function isCycle(graph, u, seen, recStack) {
  if(recStack[u]) return true
  if(seen[u]) return false // For optimization, not required for correct solution
  seen[u] = true
  recStack[u] = true
  const vs = graph[u] || []
  for(let v of vs) {
    if(isCycle(graph, v, seen, recStack)) {
      return true
    }
  }
  recStack[u] = false
  return false
}
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = {}
  // build the graph
  for(let prereq of prerequisites) {
    const [v,u] = prereq
    graph[u] = graph[u] || []
    graph[u].push(v)
  }

  // detect if graph has cycles
  const seen = {}
  const recStack = {}
  for(let i=0; i<numCourses; i++) {
    if(isCycle(graph, i, seen, recStack)) return false
  }

  return true
};
