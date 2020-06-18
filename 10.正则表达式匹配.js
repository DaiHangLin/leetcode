/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!p || !s) {
        return false
    }
    if (p[0] === '.') {
        return true
    }

    function compare(str, c) {
        const clen = c.length
        for (let i = 0; i< str.length; i = i + clen) {
            if (c === '.') {
                str = str.slice(clen)
                continue
            }
            if (str.slice(0, clen) != c) {
                return str
            } else {
                str = str.slice(clen)
            }
        }
        return str
    }

    const comArray = p.split('*')
    console.log('comArray', comArray)
    if (comArray.length == 1) {
        console.log('length === 1')
        if (p.endsWith('*')) {
            return compare(s, comArray[0])
        } else {
            return s === p
        }
    }

    for (let i = 0; i < comArray.length - 1; i ++) {
        console.log('will compare s: ', s, 'p:', comArray[i])
        const r = compare(s, comArray[i])
        if (!r) {
            return false
        }
    }
    return true
};
// @lc code=end

