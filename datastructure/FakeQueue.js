export default function FakeQueue() {
  this.front = null
  this.back = null
  let arr = []
  this.enqueue = val => arr.push(val)
  this.dequeue = () => {return arr.shift()}
  this.isEmpty = () => arr.length === 0
  this.print = () => console.log(arr)
}
