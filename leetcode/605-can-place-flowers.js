/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let zeros = 0
  let canPlant = 0
  let prevOne = -1
  for(let i=0; i<flowerbed.length; i++) {
    if(flowerbed[i]!==1) continue

    if(prevOne===-1) {
      canPlant+= (i>>1)
    } else {
      const numZeros = (i-prevOne-1)
      canPlant+= (numZeros-1)>>1
    }
    if(canPlant>=n) return true
    prevOne = i

  }
  if(prevOne===-1) {
    canPlant+= (flowerbed.length+1)>>1
  } else if(prevOne<flowerbed.length) {
    canPlant+= (flowerbed.length-prevOne-1)>>1
  }
  return canPlant>=n
};
