// assume comparison is case sensitive
function checkPermutation(s1, s2) {
  if(s1.length !== s2.length) {
    return false
  }
  // build hash table
  const chars = {}
  for(let i=0; i<s1.length; i++) {
    let curr = s1.charAt(i)
    if(!chars[curr]) {
      chars[curr] = 1
    } else {
      chars[curr] += 1
    }
  }
  for(let i=0; i<s2.length; i++) {
    let curr = s2.charAt(i)
    if(!chars[curr] || chars[curr] === 0) {
      return false
    } else {
      chars[curr] -= 1
    }
  }
  return true
}