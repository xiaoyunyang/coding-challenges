/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getStrongest = function(arr, k) {
  arr.sort((a,b) => a-b)
  const median = arr[(arr.length-1)>>1]
  let i=0
  let j=arr.length-1
  let res = []
  while(res.length < k) {
    const left = arr[i]
    const right = arr[j]
    if(median-left > right-median) {
      res.push(left)
      i++
    } else {
      // median-left <= right-median
      res.push(right)
      j--
    }
  }
  return res
};
