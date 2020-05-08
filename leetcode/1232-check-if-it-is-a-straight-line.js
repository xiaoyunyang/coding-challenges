/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  let first = coordinates[0]
  let second = coordinates[1]
  const getSlope = (first, second) => (second[1]-first[1]) / (second[0]-first[0])
  const m = getSlope(first, second)
  let mTest
  first = second
  for (let i=2; i<coordinates.length; i++) {
    second = coordinates[i]
    mTest = getSlope(first, second)
    if(mTest!==m) return false
    first = second
  }
  return true;
};