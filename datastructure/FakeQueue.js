export default function FakeQueue() {
  let arr = [] // private variable

  this.enqueue = val => arr.push(val)
  this.dequeue = () => arr.shift()
  this.isEmpty = () => arr.length === 0
  this.getData = () => arr
  this.print = () => console.log(arr)
}
