/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
function myAtoi2() {
    let r = 0
    let i = 0
    let flag = 1
    const max = Math.pow(2, 31) - 1
    const min = Math.pow(-2, 31)
    for (i in str) {
        if (str[i] != ' ') {
            break
        }
    }
    if (str[i] === '-') {
        flag = -1
    }
    if (str[i] === '+' || str[i] === '-') {
        i ++
    }
    for (i; i < str.length; i ++) {
        const s = str[i]
        if (s === ' ' || isNaN(Number(s))) {
            break
        }
        r = r * 10 + Number(s)
        if (r * flag > max) {
            return max
        }
        if (r * flag < min) {
            return min
        }
    }
    
    return r * flag
}

var myAtoi = function(str) {
    let r = ''
    for (const s of str) {
        if (s != ' ' && s != '-' && s!= '+' && (s < '0' || s > '9')) {
            break
        }
        if (s === ' ' && r.length === 0) {
            continue
        }
        if (s === ' ') {
            break
        }
        if ((s === '+' || s === '-') && r.length === 0) {
            r += s
            continue
        }
        if ((s === '+' || s === '-')) {
            break
        }
        r += s
    }
    const n = Number(r)
    if (isNaN(n)) {
        return 0
    }
    const max = Math.pow(2, 31) - 1
    const min = Math.pow(-2, 31)
    if (n > max) {
        return max
    }
    if (n < min) {
        return min
    }
    return n
};
// @lc code=end

