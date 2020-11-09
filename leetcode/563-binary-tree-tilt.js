/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  let sumTilt = 0
  function traverse(node) {
    if(!node) return 0

    const leftSum = traverse(node.left)
    const rightSum = traverse(node.right)
    const tilt = Math.abs(leftSum-rightSum)
    sumTilt+=tilt
    
    return leftSum+rightSum+node.val
  }

  traverse(root, 0)
  
  return sumTilt
};
