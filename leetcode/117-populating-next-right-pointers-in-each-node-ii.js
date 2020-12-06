/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  // BFS because we need to explore level by level
  if(!root) return root
  const q = []
  let currLevel = 0
  q.push([root, currLevel])
  
  while(q.length) {
    let prevN
    while(q[0] && q[0][1] === currLevel) {
      const [currN, level] = q.shift()
      if(prevN) {
        prevN.next = currN
      }
      if(currN.left) {
        q.push([currN.left, level+1])
      }
      if(currN.right) {
        q.push([currN.right, level+1])
      }
      prevN = currN
    }
    prevN.next = null
    currLevel++
  }
  return root
};
