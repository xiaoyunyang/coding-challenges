import Queue from '../../datastructure/FakeQueue_immutable'
import sort2DArr from './flood-fill'

function neighbors(p) {
  let top = [p[0]-1, p[1]]
  let bottom = [p[0]+1, p[1]]
  let left = [p[0], p[1]-1]
  let right = [p[0], p[1]+1]
  return {top, bottom, left, right}
}

function isSameColor(p1, p2) {
  if (typeof grid[p1[0]] === 'undefined' || 
    typeof grid[p2[0]] === 'undefined') {
    return false
  }
  return grid[p1[0]][p1[1]] === grid[p2[0]][p2[1]]
}

function findMaxConnectedDFS(p) {
  let explored = {}
  explored[p] = true
  let res = [p] // optimization: use heap instead of array

  function explore(p) {
    if(p[0]<0 || p[1]<0) {
      return
    }
    if(p[0]>grid.length || p[1]>grid[0].length) {
      return
    }

    // breadth first search exploring all the neighbors
    Object.values(neighbors(p)).forEach(neighbor => {
      if(isSameColor(p, neighbor) && !explored[neighbor]) {
        res.push(neighbor)
        explored[neighbor] = true
        return explore(neighbor)
      }
    })
  }

  explore(p,res, explored)
  return sort2DArr(res)
}

function findMaxConnectedBFS(p) {
  let explored = {}
  let res = [p] // optimization: use heap instead of array

  let q = new Queue()
  q = q.enqueue(p)

  // explore - using a while-loop
  let u = null
  while(!q.isEmpty()) {
    [u, q] = q.dequeue()
    // console.log('u', u)
    
    Object.values(neighbors(u)).forEach(v => {
      if (isSameColor(u, v) && !explored[v]) {
        res.push(v)
        q = q.enqueue(v)
      }
    })
    explored[u] = true
  }
  return sort2DArr(res)
}

export {
  findMaxConnectedDFS,
  findMaxConnectedBFS
}
