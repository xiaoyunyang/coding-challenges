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
  let carry = 0
  let res = null
  let tail = res
  while(n1 || n2) {
    let num1 = n1 ? n1.val : 0
    let num2 = n2 ? n2.val : 0
    let sum = carry + num1 + num2
    let nextNode = new ListNode(sum % 10)
    if(tail === null) {
      res = nextNode
    } else {
      tail.next = nextNode
    }
    tail = nextNode
    carry = Math.floor(sum / 10)
    if(n1) n1 = n1.next
    if(n2) n2 = n2.next
  }
  if(carry>0) {
    let nextNode = new ListNode(carry)
    if(!tail) {
      res = nextNode
    } else {
      tail.next = nextNode
    }
  }
  return res
};
