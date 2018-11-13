import FakeQueue from '../datastructure/FakeQueue';

// Enum
const VISITED = 'VISITED';
const UNVISITED = 'UNVISITED';
const VISITING = 'VISITING';

function unvisitGraph(node) {
  if(node === null) return
  node.state = UNVISITED
  for(i in node.children) {
    let child = node.children[i]
    if(child.state !== UNVISITED) {
      unvisitGraph(child)
    }
  }
}

// Input: start and end are both nodes in the graph.
// Output: true if there is a path between start and end
function routeBetweenNodes({graph, start, end}) {
  // there is a path between a node and itself
  if(start === end) {
    return true
  }
  // initialize all graph's nodes as UNVISITED
  unvisitGraph(graph)

  // initialize Queue
  let q = new FakeQueue();
  q.enqueue(start)

  // Step 1: traverse the graph until you find start
  // For every node we visit, mark it as VISITED
  start.state = VISITING

  while(!q.isEmpty()) {
    let u = q.dequeue()
    // console.log('u=',u.val)
    if(u.children) {
      for(i in u.children) {
        let v = u.children[i]
        if(v.state === UNVISITED) {
          if(v === end) {
            return true
          } else {
            v.state = VISITING
            q.enqueue(v)
          }
        }
      }
      u.state = VISITED
    }
  }
  return false
}
