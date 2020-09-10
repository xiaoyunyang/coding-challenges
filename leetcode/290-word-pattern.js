/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let words = str.split(" ")
  if(pattern.length!==words.length) return false
  const ltr2word = {}
  const word2ltr = {}
  for(let i=0; i<words.length; i++) {
    const word = words[i]
    const ltr = pattern[i]
    if(!ltr2word[ltr] && !word2ltr[word]) {
      ltr2word[ltr] = word
      word2ltr[word] = ltr
    } else if(ltr2word[ltr] !== word) return false

  }
  return true
};
