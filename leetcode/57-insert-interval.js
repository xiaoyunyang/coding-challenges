const hasOverlap = (interval1, interval2) => {
  if(interval1[1]<interval2[0] || interval2[1]<interval1[0]) return false
  return true
}

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const res = []
  const [lo, hi] = newInterval
  let min = lo
  let max = hi
  let interval
  let inserted = false
  for(let i=0; i<intervals.length; i++) {
    if(inserted) {
      res.push(intervals[i])
      continue
    }
    interval = [min, max]
    if(!hasOverlap(intervals[i], interval)) {
      if(interval[1]<intervals[i][0]) {
        res.push(interval)
        res.push(intervals[i])
        inserted = true
      } else {
        res.push(intervals[i])
      }
    } else {
      const [currLo, currHi] = intervals[i]
      min = Math.min(min, currLo)
      max = Math.max(max, currHi)
    }
  }

  if(!inserted) {
    res.push([min, max])
  }
  return res
};
