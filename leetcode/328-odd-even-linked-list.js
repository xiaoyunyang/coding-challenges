var oddEvenList = function(head) {
  if(!head) return head
  let oddTail = head
  let evenHead = head.next
  let node = head.next
  while(node && node.next) {
    oddTail.next = node.next
    oddTail = oddTail.next
    node.next = oddTail.next
    node = node.next
  }
  oddTail.next = evenHead
  return head
};