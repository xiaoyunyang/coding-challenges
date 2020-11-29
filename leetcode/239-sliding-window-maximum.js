import Dequeue from "../datastructure/Dequeue";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const res = []
  const q = new Dequeue()
  for(let i=0; i<nums.length; i++) {
    const start = i-(k-1)

    // remove numbers out of range k
    while(!q.isEmpty() && q.peekFront() < start) {
      q.popFront()
    }
    // remove numbers smaller than current number
    while(!q.isEmpty() && nums[q.peekBack()] < nums[i]) {
      q.popBack()
    }
    
    q.pushBack(i)
    
    if(i>=k-1) {
      res.push(nums[q.peekFront()])
    }
  }

  return res
};
