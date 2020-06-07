/**
 * @param {string} homepage
 */
 var BrowserHistory = function(homepage) {
  this.history = [homepage]
  this.curr = 0
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  while(this.history.length>this.curr+1) {
    this.history.pop()
  }
  this.history.push(url)
  this.curr++
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  let back = 0
  while(back<steps && this.curr>0) {
    this.curr--
    back++
  }

  return this.history[this.curr]
   
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  let forward = 0
  while(forward<steps && this.curr<this.history.length-1) {
    this.curr++
    forward++
  }
  return this.history[this.curr]
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
 