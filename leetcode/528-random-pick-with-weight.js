/**
 * @param {number[]} w
 */
 var Solution = function(w) {
  this.cdf = []
  let pmf = []
  const total = w.reduce((acc, curr) => acc+curr, 0)
  for(let i=0; i<w.length; i++) {
    pmf.push(w[i]/total)
  }
  
  let sum = pmf[0]
  this.cdf.push(sum)
  for(let i=1; i<pmf.length; i++) {
    sum+=pmf[i]
    this.cdf.push(sum)
  }
};
/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  if(this.cdf.length === 1) return 0
  const rand = Math.random()
  let left = 0
  let right = this.cdf.length
  let mid
  while(left<right) {
    mid = left + ((right-left)>>1)
    if(rand>this.cdf[mid]) {
      left = mid+1
    } else {
      right = mid
    }
  }
  return left
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
 