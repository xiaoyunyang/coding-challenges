function is16BitHex(s) {
  const reg = /^[0-9a-fA-F]+$/
  return s.length<=4 && reg.test(num)
}
function isValidIPv4(IP) {
  const nums = IP.split(".")
  if(nums.length!==4) return false
  for(let num of nums) {
      const n = Number.parseInt(num, 10)
      if(String(n)!==num) return false
      if(n<0 || n>255) return false
  }
  return true
}
function isValidIPv6(IP) {
  const nums = IP.split(":")
  if(nums.length!==8) return false
  for(num of nums) {
    if(!is16BitHex(num)) return false
  }
  return true
}
/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  if(isValidIPv4(IP)) {
    return "IPv4"
  }
  if(isValidIPv6(IP)) {
    return "IPv6"
  }
  return "Neither"
};
