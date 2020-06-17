/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
 var findCheapestPrice = function(n, flights, src, dst, K) {
  if(src===dst) return 0
  // build graph
  const graph = {}
  const dist = {}
  for(let f of flights) {
    const [src, dst, cost] = f
    graph[src] = graph[src] || []
    graph[src].push([dst, cost])
    dist[src] = Infinity
    dist[dst] = Infinity
  }
  dist[src] = 0
  // BFS
  let q = []
  q.push([src, -1, 0])
  while(q.length>0) {
    const [u, k, uCost] = q.shift()
    if(u===dst || k=== K) continue
    if(graph[u]===undefined) continue
    for(let neighbor of graph[u]) {
      const [v, vCost] = neighbor
      let alt = uCost+vCost
      if(alt < dist[v]) {
        dist[v] = alt
        q.push([v, k+1, alt])
      }
    }
  }
  return dist[dst] < Infinity ? dist[dst] : -1
};
