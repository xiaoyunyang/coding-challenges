/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let curr = head
  let next
  let prev = head
  if(head && head.next) {
    head = head.next
  }
  while(curr) {
    next = curr.next
    if(!next) return head
    prev.next = next
    curr.next = next.next
    next.next = curr

    prev = curr
    curr = prev.next

  }
  return head
};
