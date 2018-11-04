function replaceOneChar(s1, s2) {
  // s1 and s2 and equal lengths
  let numDiff = 0;
  for(let i=0; i<s1.length; i++) {
    // anytime we find a difference, keep track of that
    let curr1 = s1.charAt(i)
    let curr2 = s2.charAt(i)
    if(curr1 !== curr2) {
      numDiff += 1
    }
    if(numDiff>1) {
      return false
    }
  }
  return numDiff === 1
}
// use recursion
function oneExtraCharRecursion(s1, s2) {
  // base case
  if(s1 === s2) return true
  if(s1==='' && s2==='') return false
  if(s1==='' || s2==='') return true

  let first1 = s1.charAt(0)
  let rest1 = s1.substring(1, s1.length)
  let first2 = s2.charAt(0)
  let rest2 = s2.substring(1, s2.length)
  
  if(first1 === first2) {
    return oneExtraChar(rest1, rest2)
  }
  // else if the firsts do not match
  return oneExtraChar(s1, rest2) || oneExtraChar(rest1, s2)
}
function oneExtraChar(s1, s2) {
  // find which string is longer
  let long = (s1.length>=s2.length) ? s1 : s2
  let short = (s1.length<s2.length) ? s1 : s2
  for(let i=0; i<long.length; i++) {
    let firstLon = long.charAt(i)
    let restLon = long.substring(i+1, long.length)
    let firstSho = short.charAt(i)
    let currSho = short.substring(i, short.length)
    if(firstLon!==firstLon) {
      return restLon === currSho
    }
    return true
  }
}
function oneAway({s1, s2}) {
  // some optimizations. 
  
  // If s1 is more than 1 characters longer than s2 and 
  // vice versa, then no way they are one away
  let diffLen = Math.abs(s1.length-s2.length)
  if(diffLen > 1) {
    return false
  }

  // if the strings are identical, then no way they are
  // one away
  if(s1===s2) return false

  // if diffLen === 0, then we are looking for a
  // replace char case
  if(diffLen === 0) {
    return replaceOneChar(s1, s2)
  }

  // if diffLen === 1, then we are looking for an
  // insert/delete char case.
  return oneExtraChar(s1,s2)
}