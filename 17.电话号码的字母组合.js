/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) {
        return []
    }
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    const ds = []
    for (let  i = 0; i < digits.length; i++) {
        ds.push(map[digits[i]].split(''))
    }
    if (ds.length <= 1) {
        return ds[0]
    }
    return ds.reduce((r, d) => {
        const z = []
        for (let i = 0; i < r.length; i ++) {
            for (let j = 0; j < d.length; j ++) {
                z.push(r[i] + d[j]) 
            }
        }
        return z
    })
};
// @lc code=end

