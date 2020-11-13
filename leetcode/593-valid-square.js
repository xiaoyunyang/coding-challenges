const getDist = (p1, p2) => {
  const [x1, y1] = p1
  const [x2, y2] = p2
  return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
}
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  const points = [p1,p2,p3,p4]

  let ds = new Set()
  for(let i=0; i<points.length; i++) {
    for(let j=i+1; j<points.length; j++) {
      const d = getDist(points[i], points[j])
      ds.add(d)
    }
  }

	// There must be two non-zero unique distances if the points make up a square
  if(ds.size!==2) return false
  const dsArr = Array.from(ds)
  
  return dsArr[0] !== dsArr[1] && dsArr[0] > 0 && dsArr[1] > 0
};
