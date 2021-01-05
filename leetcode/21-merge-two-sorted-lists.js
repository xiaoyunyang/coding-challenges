function createLL(nodeVals) {
  let head = null
  for(let i=nodeVals.length-1; i>=0; i--) {
    const node = new ListNode(nodeVals[i])
    node.next = head
    head = node
  }
  return head
}

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
var mergeTwoLists = function(l1, l2) {
  let merged = []
  let n1 = l1
  let n2 = l2
  while(n1 || n2) {
    if(!n2 || (n1 && n2 && n1.val<=n2.val)) {
      merged.push(n1.val)
      n1 = n1.next
    } else {
      merged.push(n2.val)
      n2 = n2.next
    }
  }
  // post-processing step: create the LL from merged List
  return createLL(merged)
};
