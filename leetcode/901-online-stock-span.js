class StockSpanner {
  constructor() {
    this.weights = [] // stack
    this.prices = [] //stack
  }
  /** 
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let weight = 1
    if(!this.minSoFar) this.minSoFar = price
    while(this.weights.length > 0 && this.prices[this.prices.length-1] <= price) {
      weight+=this.weights.pop()
      this.prices.pop()
    }
    this.weights.push(weight)
    this.prices.push(price)
    return weight
  }
}