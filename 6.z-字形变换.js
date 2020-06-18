/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(str, numRows) {
    let arr = []
    let len = str.length
    let row = 0, flag = 0

    for(let i = 0; i < len; i ++) {
        arr[row] = arr[row] || ''
        arr[row] = arr[row] + str[i]
        if (row % (numRows - 1) == 0) {
            flag = -1
        }
        if (row == 0) {
            flag = 1
        }
        row = row + flag
    }

    const result = arr.reduce((r, a) => r += a, '')
    return result
};
// @lc code=end

