import TreeNode from "./Node/BSTNode";

/*
For every BST problem, you are given a BST as an input. But to manually create the BST for test cases is time consuming. It's easy to represent a BST as an array and build the BST before each test. Write a function that creates the BST from the array

Examples:
[3,1,4,null,2]
   3
  / \
 1   4
  \
   2

[5,3,6,2,4,null,null,1]
       5
      / \
     3   6
    / \
   2   4
  /
 1

[8,5,10,1,7,null,12]
       8
      / \
     5   10
    / \    \
   1   7    12

[1,2,3,4]
       8
      / \
     2   3
    /
   4

[1,2,3,null,4,null,5]
       8
      / \
     2   3
      \    \
       4    5

[3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4]
       3
      / \
     4   5
   /   \ 
  -7   -6
 /    /
-7   -5 
     /
   -4

*/


// TODO: bstFromArray fails for this case: [3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4]
// The -4 leaf node does not get added to the tree
export function bstFromArray(arr) {
  function buildTree(i) {
    if(i>=arr.length || arr[i] === null) return null
    const node = new TreeNode(arr[i], null, null)
    node.left = buildTree(2*i+1)
    node.right = buildTree(2*i+2)
    return node
  }
  return buildTree(0)
}

export function arrayFromBst(root) {
  const ARRAY_MAX_SIZE = 1000
  const arr = Array(ARRAY_MAX_SIZE).fill(null)
  let maxInd = -1
  function traverse(node, arrInd) {
    if(node===null) return
    if(arrInd>maxInd) maxInd = arrInd
    arr[arrInd] = node.val

    traverse(node.left, arrInd*2+1)
    traverse(node.right, arrInd*2+2)
  }
  traverse(root, 0)
  return arr.slice(0,maxInd+1)
}

export function arrayFromBstBFS(root) {
  const arr = []
  const queue = [root]
  while(queue.length) {
    const node = queue.shift()
    if(!node) {
      arr.push(null)
    } else {
      arr.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    }
  }
  let endIndex = arr.length - 1
  while(arr[endIndex] === null) endIndex--

  return arr.slice(0, endIndex+1)
}

export function isValidBST(root) {
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
}
