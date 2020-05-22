/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
  let map = {}
  for(let i=0; i<s.length; i++) {
    const c = s[i]
    map[c] = map[c] || []
    map[c].push(c)
  }
  let keys = Object.keys(map).sort((a,b) => map[b].length-map[a].length)
  let res = ''
  for(key of keys) {
    res+=map[key].join('')
  }
  return res
};