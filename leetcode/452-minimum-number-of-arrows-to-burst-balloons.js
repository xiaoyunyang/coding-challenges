/**
 * @param {number[][]} points
 * @return {number}

 [[1,6],[2,8],[7,12],[10,16]]
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);
  // assume: at least one balloon
  let arrows = 1;
  let prevEnd = points[0][1];

  for (let i = 1; i < points.length; i++) {
    const [start, end] = points[i];
    // if start <= prevEnd, there's overlap. The last arrow
    // can be used to pop the current balloon. Do nothing
    if (start > prevEnd) {
      prevEnd = end;
      arrows++;
    }
  }
  return arrows;
};
