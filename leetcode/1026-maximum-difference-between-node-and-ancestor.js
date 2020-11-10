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
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  function getMaxDiffOfTree(node, max, min) {
      if(!node) return max-min
      const newMax = Math.max(node.val, max)
      const newMin = Math.min(node.val, min)
      const leftDiff = getMaxDiffOfTree(node.left, newMax, newMin)
      const rightDiff = getMaxDiffOfTree(node.right, newMax, newMin)
      return Math.max(leftDiff, rightDiff)
  }
  
  return getMaxDiffOfTree(root, -Infinity, Infinity)
};
