/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 const traverse = (node, arr) => {
  if(node===null) return
  traverse(node.left, arr)
  arr.push(node.val)
  traverse(node.right, arr)
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
  // approach: do a in-order traversal of both trees to generate two
  // arrays sorted in asc order. Then merge these two arrays (similar to 
  // the merge step of merge-sort)
  let arr1 = []
  let arr2 = []
  traverse(root1, arr1)
  traverse(root2, arr2)
  let i = 0
  let j = 0
  const res = []
  while(i<arr1.length || j<arr2.length) {
    if(i>=arr1.length) {
      res.push(arr2[j])
      j++
    } else if(j>=arr2.length) {
      res.push(arr1[i])
      i++
    } else if(arr1[i]<=arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++  
    }
  }
  return res
};

