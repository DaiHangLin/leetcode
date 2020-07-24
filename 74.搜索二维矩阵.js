/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length == 0) {
        return false
    }
    let row = 0
    let column = matrix[0].length - 1
    while (row < matrix.length && column >= 0) {
        const d = matrix[row][column]
        if (d === target) {
            return true
        } else if (d > target) {
            column --
        } else {
            row ++
        }
    }
    return false 
};
// @lc code=end

