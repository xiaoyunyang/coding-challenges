import Queue from '../../datastructure/FakeQueue_immutable'
import sort2DArr from './flood-fill'

function neighbors(p) {
  let top = [p[0]-1, p[1]]
  let bottom = [p[0]+1, p[1]]
  let left = [p[0], p[1]-1]
  let right = [p[0], p[1]+1]
  return {top, bottom, left, right}
}

function isSameColor(grid, p1, p2) {
  // also ensures the points are valid locations within the grid
  if(isNotInGrid(grid, p1) || isNotInGrid(grid, p2)) {
    return false
  }
  return grid[p1[0]][p1[1]] === grid[p2[0]][p2[1]]
}

function isNotInGrid(grid, p) {
  if(typeof p === 'undefined') return true
  if (typeof grid[p[0]] === 'undefined') return true
  return false
}

function findMaxConnectedDFS(grid, p) {
  let explored = {}
  explored[p] = true
  let res = [p]

  // explore neighbors via DFS using recursion
  function explore(p) {
    Object.values(neighbors(p)).forEach(neighbor => {
      if(isSameColor(grid, p, neighbor) && !explored[neighbor]) {
        res.push(neighbor)
        explored[neighbor] = true
        return explore(neighbor)
      }
    })
  }

  explore(p,res, explored)
  return sort2DArr(res)
}

function findMaxConnectedBFS(grid, p) {
  let explored = {}
  let u = p
  let res = [u]

  let q = new Queue()
  q = q.enqueue(u)
  explored[u] = true

  // explore neighbors via BFS using a queue and a while-loop
  while(!q.isEmpty()) {
    [u, q] = q.dequeue()
    Object.values(neighbors(u)).forEach(v => {
      if (!explored[v]) {
        explored[v] = true
        if(isSameColor(grid, u, v)) {
          res.push(v)
          q = q.enqueue(v)
        }
      }
    })
  }
  return sort2DArr(res)
}

export {
  findMaxConnectedDFS,
  findMaxConnectedBFS
}
