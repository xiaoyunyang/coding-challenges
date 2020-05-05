/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const rs = ransomNote.split("")
  const ms = magazine.split("")
  for(let r of rs) {
    if(!ms.includes(r)) {
      return false
    } 
    ms[ms.indexOf(r)] = ""
  }
  return true
};
