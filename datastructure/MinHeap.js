export default class MinHeap {
  constructor() {
    this.arr = Array(1).fill(null)
  }
  swap(i, j) {
    const temp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = temp
  }
  insert({ val, priority }) {
    // For min heap, when we insert a new element, we begin with adding it to the end of the array.
    // Then we keep swapping with its parent until the invariant that the parent 
    // is always smaller than the child is established. This process is called bubble up
    // The worst-case runtime of the algorithm is O(log n) since that's the height of the binary
    // tree and the most swaps we have to do
    
    this.arr.push({ val, priority })
    const insertedIndex = this.arr.length - 1
    this.bubbleUp(insertedIndex)
  }
  printHeap() {
    console.log("heap -> ", JSON.stringify(this.arr, null, 2))
  }
  getHeap() {
    return this.arr
  }
  getMin() {
    if (this.arr.length < 2) {
      return null
    }
    return this.arr[1]
  }
  deleteMin() {
    // For min Heap, when we delete min, we fill the void with the last element in the heap.
    // Then we swap that element with its children until the invariant that both its children 
    // are greater in priority than the guy is established. This process is called bubble down
    
    if (this.arr.length < 2) {
      return undefined
    }

    const parentIndex = this.arr.length - 1
    this.swap(parentIndex, 1)
    const min = this.arr.pop()
    this.bubbleDown(1)

    return min
  }
  bubbleUp(insertedIndex) {
    const parentIndex = Math.floor(insertedIndex / 2)

    if (this.arr[parentIndex] === null) {
      return
    }

    if (this.arr[parentIndex].priority < this.arr[insertedIndex].priority) {
      return
    }

    this.swap(parentIndex, insertedIndex)
    this.bubbleUp(parentIndex)
  }
  bubbleDown(parentIndex) {
    const leftChildIndex = parentIndex * 2
    const rightChildIndex = parentIndex * 2 + 1

    const smallerChildIndex = [leftChildIndex, rightChildIndex]
      .filter(i => this.arr[i] !== undefined)
      .sort((a,b) => this.arr[a].priority - this.arr[b].priority)[0]

    if (!smallerChildIndex) return
    
    if (this.arr[parentIndex].priority <= this.arr[smallerChildIndex].priority) {
        return
    }

    this.swap(parentIndex, smallerChildIndex)
    this.bubbleDown(leftChildIndex)
  }
}
