const getNewInterval = (prev, curr) => {
  const [prevLo, prevHi] = prev
  const [currLo, currHi] = curr
  if(prevHi>=currLo) {
    const lo = Math.min(prevLo, currLo)
    const hi = Math.max(prevHi, currHi)
    return [[lo, hi]]
  }
  return [prev, curr]
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // intervals must be sorted based 
  // on start time
  intervals.sort((a,b) => a[0]-b[0])

  let res = []
  let prev = intervals[0]
  for(let i=1; i<intervals.length; i++) {
    const curr = intervals[i]
    const newInterval = getNewInterval(prev, curr)
    res = res.concat(newInterval)

    prev = res.pop()
  }
  res.push(prev)
  return res  
};
