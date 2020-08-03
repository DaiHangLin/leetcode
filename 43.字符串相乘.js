/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return '0'
    }
    let result = []
    for (let i = num2.length - 1; i >= 0 ; i --) {
        for (let j = num1.length - 1; j >= 0; j --) {
            result[i + j] = result[i + j] || 0
            result[i + j] += num2[i] * num1[j] 
        }
    }
    let str = [] 
    let temp = 0
    for (let i = result.length - 1; i >= 0; i --) {
        result[i] += temp
        str.unshift(result[i] % 10)
        temp = Math.floor(result[i] / 10)
    }
    if (temp != 0) {
        str.unshift(temp)
    }
    return str.join('')
};
// @lc code=end

