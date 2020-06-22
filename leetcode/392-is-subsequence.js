/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  if(s.length>t.length) return false
  if(s.length===0) return true
  const cs = s.split('')
  for(let i=0; i<t.length; i++) {
    if(t[i]===cs[0]) {
      cs.shift()
      if(cs.length===0) return true
    }
  }
  return false 
};
