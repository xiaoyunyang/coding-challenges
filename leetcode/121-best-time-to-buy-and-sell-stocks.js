/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let min = prices[0]
  let max = prices[0]
  let profit = 0
  for(let i=1; i<prices.length; i++) {
      let price = prices[i]
      if(price<=min) {
          min = price
          max = price
      } else if(price>max) {
          max = price
      }
      profit = Math.max(profit, max-min)
  }
  return profit  
};
