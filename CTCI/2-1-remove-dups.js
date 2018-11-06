function removeDups(ll) {
  let curr = ll.head
  let prev = null
  let seen = {}
  while(curr) {
    if (seen[curr.val]) {
      prev.next = curr.next
    } else {
      prev = curr
      seen[curr.val] = true
    }
    curr = curr.next
  }
  return ll
}