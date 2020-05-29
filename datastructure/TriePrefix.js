class Trie {
  constructor() {
    this.root = {}
  }
  insert(word) {
    let node = this.root
    for(let letter of word) {
      let nextNode = node[letter]
      if(!nextNode) {
        nextNode = {}
        node[letter] = nextNode
      }
      node = nextNode
    }
    node.end = true
  }
  traverse(word) {
    let node = this.root
    for(let letter of word) {
      let nextNode = node[letter]
      if(!nextNode) {
        return undefined
      }
      node = nextNode
    }
    return node
  }
  search(word) {
    const node = this.traverse(word)
    return node !==undefined && node.end === true
  }
  startsWith(prefix) {
    let node = this.traverse(prefix)
    return node !== undefined
  }
}
