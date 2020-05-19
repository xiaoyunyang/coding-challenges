class StockSpanner {
  constructor() {
    this.results = [] // stack
    this.prices = [] //stack
  }
  /** 
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let result = 1
    if(!this.minSoFar) this.minSoFar = price
    while(this.results.length > 0 && this.prices[this.prices.length-1] <= price) {
      result+=this.results.pop()
      this.prices.pop()
    }
    this.results.push(result)
    this.prices.push(price)
    return result
  }
}