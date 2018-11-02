var trap = function(height) {
    // edge case: if height needs to be at least length 3 to trap water
    if(height.length<=2) return 0;
    
    let totArea = 0;
    let left = 0
    let right = height.length-1
    let leftMax = 0
    let rightMax = 0
    while(left < right) {
      if(height[left]<height[right]) {
        if(height[left]>=leftMax) {
          leftMax = height[left]
        } else {
          totArea+=leftMax-height[left]
        }
        left +=1
      } else {
        if(height[right]>=rightMax) {
          rightMax = height[right]
        } else {
        totArea+=rightMax-height[right]
        }
        right-=1
      }
    }
    return totArea;
};