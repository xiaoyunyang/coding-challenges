function createNum2Docs(docs) {
  let keys = Object.keys(docs)
  // num2docs is a hash table that maps a number
  // to an array of documents in which the
  // number appear
  const num2docs = {}
  for(i in keys) {
    let docId = keys[i]
    let arr = docs[docId]
    for(j in arr) {
      let num = arr[j]
      let currEntry = num2docs[num]
      let newEntry = [docId]
      if(currEntry) {
        num2docs[num] = currEntry.concat(newEntry)
      } else {
        num2docs[num] = newEntry
      }
    }
  }
  return num2docs
}
function createInterDocs(num2docs) {
  let nums = Object.keys(num2docs)
  let interDocs = {} // pairs of docs
  for(i in nums) {
    let num = nums[i]
    let docIds = num2docs[num]
    if(docIds.length === 1) {
      continue // skip
    }
    // else if there are more than one docIds
    // mapped to the num
    docIds = docIds.sort((a,b) => a-b)

    while(docIds.length>0) {
      let second = docIds.pop()
      let first = docIds.pop()
      let pair = `${first},${second}`
      let currEntry = interDocs[pair]
      let newEntry = [num]
      if(currEntry) {
        interDocs[pair] = currEntry.concat(newEntry)
      } else {
        interDocs[pair] = newEntry
      }
    }
  }
  return interDocs
}
function similarityScores(interDocs, docs) {
  let keys = Object.keys(interDocs)
  let output = ''

  for(i in keys) {
    let pairIds = keys[i]
    let [firstId, secondId] = pairIds.split(',')
    let intersects = interDocs[pairIds].length
    let union = docs[firstId].length + docs[secondId].length - intersects
    let similarityScore = intersects/union
    output += `${pairIds} : ${similarityScore}` + '\n'
  }
  return output
}
function sparseSimilarity(docs) {
  let num2docs = createNum2Docs(docs)
  let interDocs = createInterDocs(num2docs)

  // calculate similarity score
  return similarityScores(interDocs, docs)
}
