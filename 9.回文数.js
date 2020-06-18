/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const sx = x + ''
    const len = sx.length
    for (let i = 0, j = len - 1; i <= j; i ++, j --) {
        if (sx[i] !== sx[j]) {
            return false
        }
    }
    return true
};
// @lc code=end

