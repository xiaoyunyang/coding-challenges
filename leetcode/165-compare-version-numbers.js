/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  // approach: weighted sum of the digits

  // note can probably do this in one loop
  // but this looks cleaner
  const ds1 = version1.split(".").map((d,i) => +d)
  const ds2 = version2.split(".").map((d,i) => +d)
  const maxDigits = Math.max(ds1.length, ds2.length)

  const ws1 = ds1.reduce((acc, curr, i) => {
    const weight = Math.pow(10, maxDigits-i)
    return acc + curr*weight
  }, 0)
  const ws2 = ds2.reduce((acc, curr, i) => {
    const weight = Math.pow(10, maxDigits-i)
    return acc + curr*weight
  }, 0)

  // edge case: ignore leading zeros
  // if same return 0
  if(ws1===ws2) return 0
  return ws1>ws2 ? 1 : -1
};
