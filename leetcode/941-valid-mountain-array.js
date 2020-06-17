/**
 * @param {number[]} A
 * @return {boolean}
 */
 var validMountainArray = function(A) {
  if(A.length<3) return false
  let i=0
	
	// Walk up
  while(i+1<A.length && A[i]<A[i+1]) i++
  if(i===0 || i===A.length-1) return false
  
	// Walk down
  while(i+1<A.length && A[i]>A[i+1]) i++
  
  return i===A.length-1
};
