/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  function getHeight(n, h) {
    if(!n) return h
    const leftHeight = getHeight(n.left, h+1)
    if(leftHeight===-1) return -1
    const rightHeight = getHeight(n.right, h+1)
    if(rightHeight===-1) return -1

    if(Math.abs(leftHeight-rightHeight)>1) return -1
    return Math.max(leftHeight, rightHeight)
  }
  const h = getHeight(root, 0)
  return (h!==-1)
};
