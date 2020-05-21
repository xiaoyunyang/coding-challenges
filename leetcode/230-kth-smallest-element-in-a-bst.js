var kthSmallest = function(root, k) {
  // in-order traversal
  function traverse(node, arr) {
    if(!node) return

    let numLeft = traverse(node.left, arr)
    if(arr.length===k) return
    arr.push(node.val)
    let numRight = traverse(node.right, arr)
  }
  let arr = []
  traverse(root, arr)
  return arr[arr.length-1]
};