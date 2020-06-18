/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    }
    const len = s.length
    let r = 0
    for (let i = len - 1; i >= 0; i --) {
        const j = i - 1
        if (j >= 0) {
            const d = s[j] + s[i]
            if (map[d]) {
                r += map[d]
                i --
                continue
            }
        }

        r += map[s[i]]
    }
    return r
};
// @lc code=end

