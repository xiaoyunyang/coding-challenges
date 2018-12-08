/* 
repl:
https://repl.it/@xiaoyunyang/knuth-shuffle-and-sort

From wikipedia's Fisher-Yates Shuffle
To shuffle an array a of n elements (indices 0..n-1):
for i from 0 to n−2 do
  j ← random integer such that i ≤ j < n
  exchange a[i] and a[j]
*/

function getRandomInt(max) {
  // get random int between 0 and max-1
  return Math.floor(Math.random() * Math.floor(max));
}

function shuffle(arr) {
  let a = [...arr]

  function swap(i,j) {
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
  }
  // knuth shuffle
  let j = 0
  for (let i=0; i<arr.length-2; i += 1) {
    j = getRandomInt(i)
    swap(i,j)
  }
  return a
}

export default shuffle