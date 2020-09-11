/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  
  // approach: start with curr employee and hop to their subordinates
  // and sub-subordinates until we reach an employee with no subordinates
  
  // pre-processing: create an easy way to look up employees by their id
  const h = {}
  for(let i=0; i<employees.length; i++) {
    const employee = employees[i]
    h[employee.id] = employee
  }
  // BFS
  const toExplore = []
  const seen = {}
  toExplore.push(id)
  let res = 0
  while(toExplore.length>0) {
    curr = h[toExplore.shift()]
    curr.subordinates.forEach(id => {
      if(!seen[id]) {
        toExplore.push(id)
      }
    })
    res += curr.importance
  }
  return res
};
