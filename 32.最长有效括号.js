/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max = 0
    let stack = []
    stack.push(-1)
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i)
        } else {
            stack.pop()
            if (stack.length == 0) {
                stack.push(i)
            } else {
                const j = stack.pop()
                max = Math.max(max, i - j)
                stack.push(j)
            }
        }
    } 
    return max
};
// @lc code=end

