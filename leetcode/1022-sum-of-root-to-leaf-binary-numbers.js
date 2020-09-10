const bin2Num = (bin) => {
  let sum = 0
  for(let i=0; i<bin.length; i++) {
      sum += Number(bin[bin.length-1-i])<<i
  }
  return sum
}

const isLeaf = (node) => !node.left && !node.right

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  // pre-order traversal
  function traverse(node, bin) {
    if(node===null) return 0
    if(isLeaf(node)) {
      return bin2Num(bin+node.val)
    }

    return traverse(node.left, bin+node.val) +
      traverse(node.right, bin+node.val)
  }
  return traverse(root, "")
};
