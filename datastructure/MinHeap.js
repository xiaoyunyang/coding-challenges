export default class MinHeap {
    constructor() {
      this.arr = Array(1).fill(null);
  }
  swap(i, j) {
      const temp = this.arr[i];
      this.arr[i] = this.arr[j];
      this.arr[j] = temp;
  }
  insert(elem) {
      // For min heap, when we insert a new element, we begin with adding it to the
      // end of the array. Then we keep swapping with its parent until the parent's
      // priority is smaller than both its children. This process is called bubble up.
      // The worst-case runtime of the algorithm is O(log N) since that's the height
      // of the binary tree and the most swaps we have to do.

      this.arr.push(elem);
      const insertedIndex = this.arr.length - 1;
      this.bubbleUp(insertedIndex);
  }
  getHeap() {
      return this.arr;
  }
  isEmpty() {
      return this.arr.length < 2;
  }
  getMin() {
      if (this.isEmpty()) {
          return undefined;
      }
      return this.arr[1];
  }
  deleteMin() {
      // For min Heap, when we delete min, we fill the void with the last element in the heap.
      // Then we swap that element with its children until both its children
      // are greater in priority than the element. This process is called bubble down.
      // The worst-case runtime of the algorithm is O(log N), which is the height of
      // the binary tree.

      if (this.isEmpty()) {
          return undefined;
      }

      const parentIndex = this.arr.length - 1;
      this.swap(parentIndex, 1);
      const min = this.arr.pop();
      this.bubbleDown(1);

      return min;
  }
  bubbleUp(insertedIndex) {
      const parentIndex = Math.floor(insertedIndex / 2);

      if (this.arr[parentIndex] === null) {
          return;
      }

      if (this.arr[parentIndex].priority <= this.arr[insertedIndex].priority) {
          return;
      }

      this.swap(parentIndex, insertedIndex);
      this.bubbleUp(parentIndex);
  }
  bubbleDown(parentIndex) {
      const leftChildIndex = parentIndex * 2;
      const rightChildIndex = (parentIndex * 2) + 1;

      const smallerChildIndex = [leftChildIndex, rightChildIndex]
          .filter(i => this.arr[i] !== undefined)
          .sort((a, b) => this.arr[a].priority - this.arr[b].priority)[0];

      if (!smallerChildIndex) return;

      if (this.arr[parentIndex].priority < this.arr[smallerChildIndex].priority) {
          return;
      }

      this.swap(parentIndex, smallerChildIndex);
      this.bubbleDown(leftChildIndex);
  }
}