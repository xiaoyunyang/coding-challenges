/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
 var bstFromPreorder = function(preorder) {
  let i = 0
  function build(min, max) {
    if(i >= preorder.length) return null
    const val = preorder[i]
    let root = null
    if(val<=min || val>=max) return null
    
    root = new TreeNode(val, null, null)
    i++
    root.left = build(min, val)
    root.right = build(val, max)
    return root
  }
  return build(-Infinity, Infinity)
};
