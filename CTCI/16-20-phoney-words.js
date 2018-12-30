// Our dictionary
const num2Ltrs = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],      
  '4': ['g', 'h', 'i'],      
  '5': ['j', 'k', 'l'],      
  '6': ['m', 'n', 'o'],      
  '7': ['p', 'q', 'r', 's'],        
  '8': ['t', 'u', 'v'],      
  '9': ['w', 'x', 'y', 'z']
}

function canMakeWordFromNum(ltrArr, numArr) {
  // for each number in numArr, find the corresponding chars
  // then if one of the chars matches the head of the ltrsArr
  // remove the head. Otherwise, keep looking through the rest
  // of the nums. When we finish looking through all the nums
  // but there are still ltrs left in the ltrArr, return false
  // otherwise, return true.
  // O(N) where N is size of numsArr
  let ltrArrCpy = [...ltrArr] // make local copy. avoid side effects

  for(let i in numArr) {
    let num = numArr[i]

    let ltrs = num2Ltrs[num]
    if(!ltrs) continue

    // O(1) for this example because only a few ltrs
    // mapped to the num
    ltrs.forEach(ltr => {
      if(ltrArrCpy[0]===ltr) {
        ltrArrCpy.shift()
        return
      }
    })
  }
  return ltrArrCpy.length === 0
}

function phoneyWords(nums) {
  let numArr = []
  
  // We pre-process the phone number to remove dash, 1 and 0
  // O(1) - phone number length 14 always. Constant work
  for(let i=0; i<nums.length; i++) {
    let char = nums.charAt(i)
    if(char==='-' || char==='1' || char==='0') { 
      continue;
    }
    numArr.push(char)
  }

  // For each word in the list of valid words, determine if
  // you can make a word from the nums
  let res = []

  // O(M) where M is the number of words in dict
  validWords.forEach(word => {
    let ltrArr = word.split('').map(c => c.toLowerCase())

    if(canMakeWordFromNum(ltrArr, numArr)) {
      res.push(word)
    }
  })
  return res
}