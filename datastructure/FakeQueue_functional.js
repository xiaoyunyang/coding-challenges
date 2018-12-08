/* FakeQueue_functional:
A functional datastructure for Queue implemented using the array
One advantage of a functional data structure is chaining.
For instance:
  
 let q = new Queue() // queue as functional datastructure
 q.isEmpty() //> true
 let q2 = q.enqueue(1).enqueue(2)
 q = q2 //q is [2,1] now
 q2 = q2.dequeue()[1] // q2 is [1] now and q is still [2,1]

 let q = q.enqueue(1).enqueue(2).enqueue(3).dequeue()[1].getData() //> [2,1]
 let removed = q.dequeue()[0] //> 2
 q.getData() //> [1]

 On the other hand, the non-functional FakeQueue implementation 
 requires the following to construct the queue

  let q = new Queue() // non-functional queue
  q.enqueue(1)
  q.enqueue(2)
  q.enqueue(3)
  q.dequeue() //> 3
  q.data //> [2, 1]
  let removed = q.dequeue() //> 2
  q.data //> [1]
 */

function Queue(data = []) { // data is an optional parameter
  this.data = data
  this.enqueue = item => {
    let newData = this.data.concat([item]) // concat returns a new arr
    return new Queue(newData)
  }
  this.dequeue = () => {
    let [head, ...rest] = this.data
    return [head, new Queue(rest)]
  }
  this.getData = () => this.data
  this.isEmpty = () => this.data.length === 0
}

export default Queue;