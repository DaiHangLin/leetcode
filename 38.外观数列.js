/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = '1'
    for (let i = 2; i <= n; i ++) {
        let ls = result[0]
        let count = 0
        let data = ''
        for (let j = 0; j <= result.length; j ++) {
            if (j == result.length) {
                data += `${count}${ls}`
                continue
            }
            if (result[j] == ls) {
                count ++
            } else {
                data += `${count}${ls}`
                count = 1
                ls = result[j]
            }
        }
        result = data
    }
    return result
};
// @lc code=end

