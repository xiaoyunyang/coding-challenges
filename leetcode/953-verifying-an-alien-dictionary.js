/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
  // we can translate the words from alien alphabet to
  // normal alphabet. Then we can use the built-in sort function
  const map = {}
  const aCharCode = 'a'.charCodeAt(0)
  for(let i=0; i<order.length; i++) {
    const c = order[i]
    map[c] = String.fromCharCode(aCharCode+i)
  }

  const translate = (word) => {
    let res = ""
    for(let i=0; i<word.length; i++) {
      res += map[word[i]]
    }
    return res
  }
  let word = translate(words[0])
  // translate word to normal english
  for(let i=1; i<words.length; i++) {
    const nextWord = translate(words[i])
    if(nextWord<word) return false
    word = nextWord
  }
  return true
};
