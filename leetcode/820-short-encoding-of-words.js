import TreeNode from "../datastructure/Node/TreeNode";

const updateTrie = (node, newWord) => {
  if(newWord.length === 0) return
  const letter = newWord.slice(-1)
  const nextNode = node.children.find(child => child.data === letter);
  if(!nextNode) {
    nextNode = new TreeNode(letter)
    node.children.push(nextNode)
  }
  updateTrie(nextNode, newWord.substring(0, newWord.length-1))
}
const traverseTrie = (node, refString, string) => {
  if(node.children.length === 0) {
    return refString + node.data + string
  }
  let newRefString = ""
  for(let i=0; i<node.children.length; i++) {
    const child = node.children[i]
    newRefString = newRefString + traverseTrie(child, refString, node.data+string)
  }
  return refString+newRefString
}
const minimumLengthEncoding = (words) => {
  const trie = new TreeNode("#")
  for (let i=0; i<words.length; i++) {
    const newWord = words[i]
    updateTrie(trie, newWord)
  }
  let refString = traverseTrie(trie, "", "")
  return refString.length
};