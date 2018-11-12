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

function removeDupsNoBuffer(ll) {
  let curr = ll.head
  while(curr) {
    let runner = curr
    while(runner.next) {
      // walk runner through the nodes that come after the curr node
      // to check for any duplicates. remove all dups
      if(runner.next.val === curr.val) {
        runner.next = runner.next.next
      } else {
        runner = runner.next
      }
    }
    curr = curr.next
  }
  return ll
}