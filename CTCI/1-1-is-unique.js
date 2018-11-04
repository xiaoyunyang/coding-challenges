// determine if the string has unique characters
// use array and use hash table
function isUnique(str) {
  const seen = {}
  for(let i=0; i<str.length; i++) {
    let curr=str.charAt(i)
    if(seen[curr]) {
      return false
    } else {
      seen[curr] = true
    }
  }
  return true
}

// Can we do better?
// use no hash table
function isUniqueBetter(str) {
  // sort the characters
  const chars = str.split('').sort()
  let seen = null
  for(let i=0; i<chars.length; i++) {
    let curr = chars[i]
    if(seen!==curr) {
      seen = curr
    } else {
      return false
    }
  }
  return true
}