/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n == 0) {
        return 1.0
    }
    let flag = n > 0
    n = Math.abs(n)
    function pow(x, n) {
        if (n == 1) {
            return x
        } else if (n == 2) {
            return x * x
        } else {
            let mid = Math.floor(n / 2)
            const midval = pow(x, mid)
            return midval * midval * (n % 2 === 0 ? 1 : x) 
        }
    }
    let r = pow(x, n)
    return flag ? r : 1 / r
};
// @lc code=end

