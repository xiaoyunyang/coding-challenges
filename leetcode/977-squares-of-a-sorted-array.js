/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const res = []
    let i = 0
    const s = [] // stack
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const numSq = num * num
        if (num < 0) {
            s.push(numSq)
            continue
        }
        // num is positive
        while (s.length) {
            if (s[s.length - 1] > numSq) break
            res.push(s.pop())
        }
        res.push(numSq)
    }
    // post processing step
    while (s.length) {
        res.push(s.pop())
    }
    return res
};
