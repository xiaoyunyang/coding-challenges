// assume string only has upper or lower case letters
function stringCompression(str) {
  if(str.length<3) return str
  let count = 0
  let trackLtr = str.charAt(0)
  let compressedStr = ''
  for(let i=0; i<str.length; i++) {
    let curr = str.charAt(i)
    if(curr === trackLtr) {
      count += 1
    }
    else {
      compressedStr += `${trackLtr}${count}`
      count = 1
      trackLtr = curr
    }
    // optimization
    if(compressedStr.length>=str.length) {
      return str
    }
  }
  if(count>0) {
    compressedStr += `${trackLtr}${count}`
  }
  // if compressed str is no shorter than the original
  // str, return original str
  return compressedStr.length >= str.length ? str : compressedStr
}