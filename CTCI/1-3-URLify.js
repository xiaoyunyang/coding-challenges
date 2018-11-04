function URLify(str) {
  const matchWhitespace = /^\s$/
  const whitespaceChar = '%20'
  let res = ''
  let last = ''
  for(let i=0; i<str.length; i++) {
    let curr = str.charAt(i)
    if(matchWhitespace.test(curr)) {
      res += last === ' ' ? '' : whitespaceChar
    } else {
      res += curr
    }
    last = curr
  }
  // post-processing step. Chop off single instance of %20 at the end
  return res.replace(/%20$/, '')
}