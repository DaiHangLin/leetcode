/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
    const len = str.length
    if (len === 0) {
        return true
    }
    let result = [str[0]]
    let map = {
        '(': 1,
        ')': -1,
        '{': 2,
        '}': -2,
        '[': 3,
        ']': -3,
    }
    for (let i = 1; i < len; i++) {
        const s = str[i]
        if (result.length === 0) {
            result.push(s)
            continue
        }
        const last =  result.pop()

        if (map[last] + map[s] === 0) {
            continue
        }
        result.push(last)
        result.push(s)
    }

    return result.length === 0
};
// @lc code=end

