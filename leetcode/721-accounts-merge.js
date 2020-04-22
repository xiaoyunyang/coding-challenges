/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  let emailToNames = {}
  let graph = {}
  for(let i=0; i<accounts.length; i++) {
    const [name, ...emails] = accounts[i]
    const firstEmail = emails[0]
    for(let j=0; j<emails.length; j++) {
      const email = emails[j]
      graph[firstEmail] = graph[firstEmail] || []
      graph[firstEmail].push(email)
      graph[email] = graph[email] || []
      graph[email].push(firstEmail)
      emailToNames[email] = name
    }
  }

  let seen = {}
  let toExplore = []
  let res = []
  let keys = Object.keys(graph)
  for(let i=0; i<keys.length; i++) {
    let u = keys[i]
    if(!seen[u]) {
      toExplore.push(u)
      seen[u] = true
    }
    let emails = []
    while(toExplore.length > 0) {
      u = toExplore.pop()
      emails.push(u)
      if(graph[u]) {
        for(let j=0; j<graph[u].length; j++) {
          let v = graph[u][j]
          if(!seen[v]) {
            toExplore.push(v)
            seen[v] = true
          }
        }
      }
    }
    if(emails.length > 0) {
      emails = emails.sort()
      const name = emailToNames[emails[0]]
      res.push([name, ...emails])
    }
  }

  return res
};