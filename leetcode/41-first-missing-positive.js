var firstMissingPos = function(nums) {
    let maxSeen = 0; //initialize
    // build dictionary of what numbers you've seen
    let seens = {};
    for(let i=0; i<nums.length; i++) {
      let curr = nums[i]
      seens[curr] = curr
      maxSeen = curr > maxSeen ? curr : maxSeen
    }
    // edge case: your have an array of negative numbers or 0
    // or you have an empty array
    if (maxSeen === 0) {
      return 1;
    }
    
    // iterate from 1 until maxSeen. The first number you see in
    // num which does not exist in the seens dictionary is your answer
    // unless your first missing positive integer is greater
    // than maxSeen 
    for(let i=1; i<maxSeen; i++) {
      if(!seens[i]) {
        return i;
      }
    }
    // edge case, your first missing positive integer is
    // greater than maxSeen
    return maxSeen+1;
  };