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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
  let res = null
  let max = 0
  function traverse(node, depth) {
    if(node===null) return depth
    const leftDepth = traverse(node.left, depth+1)
    const rightDepth = traverse(node.right, depth+1)
    if(leftDepth>rightDepth) {
      if(leftDepth>max) {
        res = node.left
        max = leftDepth
      }
      return leftDepth
    } else if(rightDepth>leftDepth) {
      if(rightDepth>max) {
        res = node.right
        max = rightDepth
      }
      return rightDepth
    } else {
      if(leftDepth >= max) {
        res = node
        max = leftDepth

      }
      return leftDepth
    }
  }
  traverse(root, 0)
  return res
};
