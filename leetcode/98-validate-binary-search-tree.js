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
var isValidBST = function(root) {
  function checkTree(node) {
    if(!node) {
      return [true, null, null]
    }
    if(!node.left && !node.right) {
      return [true, node.val, node.val]
    }
    
    const [lValid, lMin, lMax] = checkTree(node.left)
    if(!lValid) return [false, 0, 0]
    
    const [rValid, rMin, rMax] = checkTree(node.right)
    if(!rValid) return [false, 0, 0]

    if((lMax && lMax>=node.val) || (rMin && rMin<=node.val)) {
      return [false, node.val, node.val]
    }
    
    const newMin = lMin===null ? node.val : lMin
    const newMax = rMax===null ? node.val : rMax
    return [true, newMin, newMax]
  }
  const res = checkTree(root)
  return res[0]
};
