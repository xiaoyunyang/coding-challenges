/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let n1 = l1
  let n2 = l2
  let s1 = []
  let s2 = []
  while(n1 || n2) {
    if(n1) {
      s1.push(n1.val)
      n1 = n1.next
    }
    if(n2) {
      s2.push(n2.val)
      n2 = n2.next
    }
  }

  let res = null
  let v1, v2, newVal
  let carry = 0
  while(s1.length || s2.length) {
    v1 = (s1.length) ? s1.pop() : 0
    v2 = (s2.length) ? s2.pop() : 0
    let sum = v1 + v2 + carry
    newVal = sum % 10
    carry = Math.floor(sum/10)
    res = new ListNode(newVal, res)
  }
  if(carry>0) {
    res = new ListNode(carry, res)
  }
  return res
};
