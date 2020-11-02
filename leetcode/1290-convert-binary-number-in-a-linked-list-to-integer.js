/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let numAsStr = ""
  let node = head
  while(node) {
    numAsStr = `${numAsStr}${node.val}`
    node = node.next
  }

  return Number.parseInt(numAsStr, 2)
};
