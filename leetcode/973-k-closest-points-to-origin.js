/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
 var kClosest = function(points, K) {
  const getRsq = (p) => p[0]*p[0] + p[1]*p[1]
  points.sort((a,b) => getRsq(a)-getRsq(b))
  return points.slice(0,K)
};
