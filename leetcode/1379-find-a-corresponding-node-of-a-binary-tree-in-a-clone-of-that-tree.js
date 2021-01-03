/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  let res = null
  function traverse(node) {
    if(!node) return
    if(node.val===target.val) {
        res = node
        return
    }
    traverse(node.left)
    traverse(node.right)
  }
  traverse(cloned)
  return res
};
