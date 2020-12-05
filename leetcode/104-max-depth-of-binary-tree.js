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
var maxDepth = function(root) {
  let max = -Infinity
  function dfs(node, height) {
    if(!node) {
      max = Math.max(max, height)
      return
    }
    dfs(node.left, height+1)
    dfs(node.right, height+1)
  }
  dfs(root, 0)
  return max
};