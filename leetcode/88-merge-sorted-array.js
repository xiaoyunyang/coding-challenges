/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0
  let j = 0
  while(i<nums1.length && j<n) {
    if(i>=m) {
      nums1[i] = nums2[j]
      i++
      j++
    } else if(i<=m && nums2[j]<=nums1[i]) {
      nums1.splice(i, 0, 0)
      nums1.splice(-1)
      nums1[i] = nums2[j]
      m++
      i++
      j++
    } else {
      i++
    }
  }
};
