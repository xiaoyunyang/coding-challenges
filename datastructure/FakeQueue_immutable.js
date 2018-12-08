/* FakeQueue_functional:
A functional datastructure for Queue implemented using the array
see repl:
https://repl.it/@xiaoyunyang/queue
*/

function Queue(dataIn = []) { // data is an optional parameter
  let data = dataIn // private variable
  this.enqueue = item => {
    let newData = data.concat([item]) // concat returns a new arr
    return new Queue(newData)
  }
  this.dequeue = () => {
    let [head, ...rest] = data
    return [head, new Queue(rest)]
  }
  this.getData = () => data
  this.isEmpty = () => data.length === 0
}

export default Queue;