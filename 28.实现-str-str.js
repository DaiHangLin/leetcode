/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle || needle.length === 0) {
        return 0
    }
    const len = needle.length
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substr(i, len) === needle) {
            return i;
        }
    }
    return -1
};
// @lc code=end

