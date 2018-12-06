import DoublyNode from './Node/DoublyNode'

export default function Queue() {
  this.front = null
  this.back = null

  this.enqueue = item => {
    let newNode = new DoublyNode(item)
    if(!this.front) {
      this.front = newNode
      this.back = newNode
      return
    }
    this.back.next = newNode
    newNode.prev = this.back
    this.back = newNode
  }
  this.printForward = () => {
    let vals = ''
    let n = this.front
    while(n) {
      vals += `${n.val} -> `
      n = n.next
    }
    return `${vals}null`
  }
  this.printBackward = () => {
    let vals = ''
    let n = this.back
    while(n) {
      vals = ` <- ${n.val}`.concat(vals)
      n = n.prev
    }
    return `null${vals}`
  }
  this.dequeue = () => {
    // remove from the front and return the removed node's val
    if(!this.front) return null
    let firstNode = this.front
    this.front = this.front.next
    // edge case: if this.front.next is null, the next line of
    // code will fail because can't dereference null pointer
    if(this.front) {
      this.front.prev = null
    } else {
      this.back = null
    }
    firstNode.next = null
    return firstNode.val
  }

  this.peek = () => {
    if(!this.front) return null
    return this.front.val
  }
  this.isEmpty = () => {
    return !this.front
  }
}
