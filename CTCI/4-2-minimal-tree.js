import * as Node  from '../datastructure/Node/BSTNode';

function createBST(arr) {
  if(arr.length === 0) return null

  let mid = Math.floor(arr.length/2)

  let leftArr = arr.slice(0,mid)
  let rightArr = arr.slice(mid+1, arr.length)

  let root = new Node(arr[mid])

  root.left = createBST(leftArr)
  root.right = createBST(rightArr)
  return root
}
