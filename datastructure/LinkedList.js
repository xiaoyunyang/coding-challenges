import SinglyNode from './Node/SinglyNode'

export default function LinkedList(arr) {
  this.head = arr ? createLL(arr) : null

  function createLL(arr) {
    let ll = null;
    for(let i=arr.length-1; i>=0; i-=1) {
      let newNode = new SinglyNode(arr[i])
      if(!ll) {
        ll = newNode
        continue
      }
      newNode.next = ll
      ll = newNode
    }
    return ll
  }
  this.push = item => {
    // O(1) operation, push to head of LL
    let newNode = newSignlyNode(item)
    newNode.next = this.head
    this.head = newNode
  }
  this.pop = () => {
    // O(1) operation, remove head of LL
    // error checking. If list is empty, just return
    if(this.isEmpty()) return null

    let firstNode = this.head
    this.head = this.head.next
  }
  this.isEmpty = () => {
    return !this.head
  }
  this.printLL = () => {
    let curr = this.head
    let vals = ''
    while(curr) {
      vals += `${curr.val} -> `
      curr = curr.next
    }
    return `${vals}null`
  }
  this.removeTail = () => {
    // If there's only one thing in the list
    if(!this.head || !this.head.next) {
      this.head = null
      return
    }

    const loop = (prev, curr) => {
      if(!curr) return
      let next = curr.next
      if(!next) { // curr is the last one
        prev.next = null
        return
      }
      // if there is a next, we haven't found
      // the tail yet. so
      loop(curr, curr.next)
    }

    loop(null, this.head)
  }
}
