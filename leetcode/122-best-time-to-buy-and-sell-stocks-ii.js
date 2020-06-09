/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let last = prices[0]
  let res = 0
  for(let i=1; i<prices.length; i++) {
    const price = prices[i]
    if(price>=last) {
      res+=price-last
    }
    last = price
  }
  return res
};
