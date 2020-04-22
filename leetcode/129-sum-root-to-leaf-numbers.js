/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
	function isLeaf(node) {
	  return node.left === null && node.right === null
	}
  function traverse(node, numAsStr) {
    if(node === null) return 0
    if(isLeaf(node)) {
      return Number(`${numAsStr}${node.val}`)
    }

    return traverse(node.left, `${numAsStr}${node.val}`) + 
      traverse(node.right, `${numAsStr}${node.val}`)   
  }
  return traverse(root, "")
};