/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a,b) => a-b).push(h)
  verticalCuts.sort((a,b) => a-b).push(w)
  let last = 0
  let maxH = 0
  for(let i=0; i<horizontalCuts.length; i++) {
    const gap = horizontalCuts[i]-last
    maxH=Math.max(maxH, gap)
    last = horizontalCuts[i]
  }
  
  last = 0
  maxV = 0
  for(let i=0; i<verticalCuts.length; i++) {
    const gap = verticalCuts[i]-last
    maxV=Math.max(maxV, gap)
    last = verticalCuts[i]
  }
  
  return (maxH*maxV)%(Math.pow(10,9)+7)
};
