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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) return []
  let res = [[root.val]]
  function traverse(n, level) {
    if(!n) return []
    const childLevel = level+1
    const left = traverse(n.left, childLevel)
    const right = traverse(n.right, childLevel)
    const children = left.concat(right)
    if(children.length) {
      res[childLevel] = (res[childLevel] || []).concat(children)
    }

    return [n.val]
  }
  traverse(root, 0)
  res.reverse()
  return res
};
