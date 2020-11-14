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
  let level = 1 
  q.push(root)
  
  while(q.length) {
    let prevN
    let currN
    for(let i=0; i<level; i++) {
      currN = q.shift()
      if(prevN) {
        prevN.next = currN
      }
      if(currN.left) {
        q.push(currN.left)
        q.push(currN.right)
      }
      prevN = currN
    }
    
    level *= 2
  }
  return root
};
