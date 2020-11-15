/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  const capLetters = word.split("").filter(c => 
    c >= "A" && c <= "Z"
  )
  const isAllCaps = capLetters.length === word.length
  const isOnlyFirstCap = capLetters.length === 1 && capLetters[0]=== word[0]
  const isAllLowercase = capLetters.length === 0
  return isAllCaps || isOnlyFirstCap || isAllLowercase
};
