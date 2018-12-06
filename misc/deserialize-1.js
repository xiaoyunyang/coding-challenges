import Node from '../datastructure/Node/TreeNode'

function insertIntoSortedArr(newNode, children) {
  let arr = children
  for(let i in arr) {
    let curr = arr[i]
    if(newNode.data.name < curr.data.name) {
      arr.splice(i, 0, newNode)
      return arr
    }
  }
  arr.push(newNode)

  return arr
}

function insertIntoTree(newNode, treeNode) {
  // base case
  if(newNode.data.parent_id === null) {
    treeNode.children = insertIntoSortedArr(newNode, treeNode.children)
    return true
  }
  // recursive step
  // try to find the newNode's parent in tree...
  // if parent found, insert the newNode as new child of curr treeNode
  if(treeNode.data.id === newNode.data.parent_id) {
    treeNode.children = insertIntoSortedArr(newNode, treeNode.children)
    return true
  }
  // if parent not found, keep looking in the children of curr treeNode
  for(let i in treeNode.children) {
    let inserted = insertIntoTree(newNode, treeNode.children[i])
    if(inserted) {
      return true
    }
  }
  return false
}

function buildTree(locs) {
  let tree = new Node({name:""})
  let dataArr = [...locs]

  while(dataArr.length > 0) {
    let data = dataArr.shift()
    let newNode = new Node(data)
    let inserted = insertIntoTree(newNode, tree)
    if(!inserted) {
      dataArr.push(data)
    }
  }
  return tree
}

function printTree(treeNode, prepend) {
  let children = treeNode.children
  for(let i in children) {
    console.log(`${prepend}${children[i].data.name}`)
    printTree(children[i], prepend+'-')
  }
}