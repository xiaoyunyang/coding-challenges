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
var rob = function(root) {
  function traverse(node) {
    if(!node) return [0,0]
    const [withLeft, withoutLeft] = traverse(node.left)
    const [withRight, withoutRight] = traverse(node.right)
    const withNode = node.val + withoutLeft + withoutRight
    const withoutNode = Math.max(withLeft, withoutLeft) + Math.max(withRight, withoutRight)

    return [withNode, withoutNode]
  }
  return Math.max(...traverse(root))
};
