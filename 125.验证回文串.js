/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(sx) {
    sx = sx.replace(/[^\d\w]/g, '').toLocaleLowerCase()
    const len = sx.length
    for (let i = 0, j = len - 1; i <= j; i ++, j --) {
        if (sx[i] !== sx[j]) {
            return false
        }
    }
    return true
};
// @lc code=end

