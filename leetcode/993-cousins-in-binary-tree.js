var isCousins = function(root, x, y) {
  function findNode(node, val, depth, parent) {
    if(node === null || node.val === val) {
      return {node, depth, parent}
    }
    let l = findNode(node.left, val, depth+1, node)
    if(l.node) return l
    let r = findNode(node.right, val, depth+1, node)
    return r
  }
  let xfound = findNode(root, x, 0)
  let yfound = findNode(root, y, 0)
  return xfound.depth === yfound.depth && xfound.parent !== yfound.parent
};