var candy = function(ratings) {
  let l2r = Array(ratings.length).fill(1)
  let r2l = Array(ratings.length).fill(1)

  for(let i=1; i<ratings.length; i++) {
    let l = i
    let r = ratings.length-1-i

    if(ratings[l]>ratings[l-1]) {
      l2r[l] = l2r[l-1]+1
    }
    if(ratings[r]>ratings[r+1]) {
      r2l[r] = r2l[r+1]+1
    }
  }
  // combine l2r and r2l
  let sum = 0
  for(let i=0;i<ratings.length;i++) {
    sum += Math.max(l2r[i], r2l[i])
  }
  return sum
};
