function sumSwap(arrs) {
  const [arr1, arr2] = arrs
  
  // sort mutates arr1 and arr2
  arr1.sort((a,b) => a-b)
  arr2.sort((a,b) => a-b)

  const arr1Sum = arr1.reduce((acc,curr) => acc+curr, 0)
  const arr2Sum = arr2.reduce((acc,curr) => acc+curr, 0)

  let bigArr, smallArr, bigSum, smallSum

  if(arr1Sum < arr2Sum) {
    smallArr = arr1
    smallSum = arr1Sum
    bigArr = arr2
    bigSum = arr2Sum
  } else if(arr1Sum > arr2Sum) {
    smallArr = arr2
    smallSum = arr2Sum
    bigArr = arr1
    bigSum = arr1Sum
  } else {
    // edge case. We don't need to swap. arrays already have equal sum
    return []
  }
  
  //Try swapping a big elem from bigArr with the small
  //elem from the smallArr until they are equal or you
  // run out of elem
  let s = 0;
  let b = bigArr.length-1

  while(s<smallArr.length && b>=0) {
    // revise the sum
    let bigSumRev = bigSum-bigArr[b]+smallArr[s]
    let smallSumRev = smallSum-smallArr[s]+bigArr[b]
    
    if(bigSumRev===smallSumRev) {
      // order matters!
      return arr1Sum<arr2Sum ?
        [smallArr[s], bigArr[b]] : [bigArr[b], smallArr[s]]
    } else if(bigSumRev<smallSumRev) {
      b--
    } else {
      s++
    }
  }
  // no solution
  return []
}
