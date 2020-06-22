/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
  let tot = citations.length
  let left = 0
  let right = tot
  let mid
  while(left<=right) {
    mid = left + ((right-left)>>1)
    const h = tot-mid
    if(h === citations[mid]) return h
    else if(h>citations[mid]) left = mid+1
    else right = mid-1
  }
  return tot - left
};

