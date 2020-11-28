export function Dequeue() {
  this.data = []
  this.pushBack = (item) => {
    this.data.push(item)
  }
  this.pushFront = (item) => {
    this.data.unshift(item)
  }
  this.popFront = () => {
    this.data.shift()
  }
  this.popBack = () => {
    this.data.pop()
  }
  this.peekFront = () => {
    return this.data[0]
  }
  this.peekBack = () => {
    return this.data[this.data.length-1]
  }
  this.isEmpty = () => {
    return this.data.length === 0
  }
}
