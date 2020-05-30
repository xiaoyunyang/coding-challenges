function leastFrequent(nums) {
  let map = {}
  for(let num of nums) {
    map[num] = (map[num] || 0) + 1
  }
  const arr = Object.keys(map).sort((a,b) => map[a]-map[b])
  let min = map[arr[0]]
  let res = []
  for(let num of arr) {
    if(map[num] > min) break
    res.push(Number(num))
  }
  return res.sort((a,b)=>a-b)
}
