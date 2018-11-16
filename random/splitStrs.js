// https://repl.it/@xiaoyunyang/dynamic-programming-example

function splitWords(str, regex) {
  let subStr = str.substring(1,str.length)
  let splitStrs = str.split(regex)
  return splitStrs.filter(str => str.length>0)
}

// Given a sequence of words belonging to a dictionary concatenated
// together without space, return the sequence of words joined
// together with space
function stringPartition(str, dict) {
  // replace val every entry in dict with regex
  let keys = Object.keys(dict)

  let regexStr = Object.keys(dict).reduce((acc, curr) => {
    return `${acc}${curr}|`
  }, '(').slice(0,-1)+')'

  let regex = new RegExp(regexStr, 'g')

  let splitStrs = splitWords(str, regex)

  let res = splitStrs.join(' ')

  return res
}
