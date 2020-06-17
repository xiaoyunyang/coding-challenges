/**
 * Initialize your data structure here.
 */
 var RandomizedSet = function() {
  this.map = new Map()
  this.arr = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.map.has(val)) return false
  this.arr.push(val)
  this.map.set(val, this.arr.length-1)
  return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  const {map, arr} = this
  if(!map.has(val)) return false

  // fill the void of the deleted val in the array with the last val
  // swap them so the val you want to delete is at the end of the arr
  const i = map.get(val)
  const j = arr.length-1
  const last = arr[j]
  arr[j] = val
  arr[i] = last
  map.set(last, i)

  this.map.delete(val)
  arr.pop()
  return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randInd = Math.floor(Math.random() * this.arr.length)
  return this.arr[randInd]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
 