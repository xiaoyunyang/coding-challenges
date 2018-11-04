var multiply = function(num1, num2) {
  const m = num1.length
  const n = num2.length
  const pos = new Array(m+n)
  pos.fill(0)
    
  for(let i = m - 1; i >= 0; i--) {
    for(let j = n - 1; j >= 0; j--) {
      let mul = (num1.charAt(i)-'0') * (num2.charAt(j)-'0')
      let p1 = i + j, p2 = i + j + 1
      let sum = mul + pos[p2]
      pos[p1] += Math.floor(sum / 10)
      pos[p2] = (sum) % 10;
    }
  }
  
  let sb = ''
  for(let i=0; i<pos.length; i++) {
    let p = pos[i]
    if(!(sb.length === 0 && p === 0)) {
      sb = sb+p
    }
  }

  return sb.length === 0? '0' : sb  
};