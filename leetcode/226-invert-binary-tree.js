/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  function traverse(node) {
    if(node===null) return
    // swap left and right node of current
    const temp = node.left
    node.left = node.right
    node.right = temp
    traverse(node.left)
    traverse(node.right)
  }
  traverse(root)
  return root
};