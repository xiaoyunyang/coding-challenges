const MorseAlpha = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

const getMorseCodeFromLetter = (letter) => {
  const offset = letter.charCodeAt(0) - "a".charCodeAt(0)
  return MorseAlpha[offset]
}
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let uniqPattern = new Set()
  for(let word of words) {
    const pattern = word.split("").reduce((acc, letter) => acc+getMorseCodeFromLetter(letter), "")
    uniqPattern.add(pattern)
  }
  return uniqPattern.size
};
