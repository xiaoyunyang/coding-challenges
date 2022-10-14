class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;

    // Doubly linked list: maintains an ordered list and we can remove an element
    // anywhere in the list in O(1) time and add to end of list in O(1) time
    this.head = {};
    this.tail = {};
    this.head.next = this.tail; // head points to the lru element
    this.tail.prev = this.head;

    // type: key -> { key, value, prev, next }
    this.cache = new Map();
  }

  addAtTail(key, value) {
    const prevLastNode = this.tail.prev;
    const newNode = {
      key,
      value,
    };

    // make old last node and
    // new last node point to each other
    newNode.prev = prevLastNode;
    prevLastNode.next = newNode;

    // make new last node the tail
    newNode.next = this.tail;
    this.tail.prev = newNode;

    // add new tail node to cache
    this.cache.set(key, newNode);
  }
  delete(key) {
    const node = this.cache.get(key);

    // update all the references
    node.prev.next = node.next;
    node.next.prev = node.prev;

    // delete from the cache
    this.cache.delete(key);
  }
  deleteFromHead() {
    const headNodeKey = this.head.next.key;
    this.delete(headNodeKey);
  }
  put(key, value) {
    // corner case: already in the cache
    if (this.cache.has(key)) {
      // move the node to tail
      this.delete(key);
      this.addAtTail(key, value);
      return;
    }

    // check if we have space in the cache
    const hasSpace = this.cache.size < this.capacity;

    if (hasSpace) {
      // If so, just insert
      this.addAtTail(key, value);
      return;
    }

    // otherwise, evict lru then add the new
    this.deleteFromHead();
    this.addAtTail(key, value);
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const { value } = this.cache.get(key);
    this.delete(key);
    this.addAtTail(key, value);

    return value;
  }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
