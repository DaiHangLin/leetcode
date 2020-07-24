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
    let row = matrix.length 
    let column = matrix[0].length 
    let all = row * column

    let left = 0, right = all - 1
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        const d = matrix[Math.floor(mid / column)][mid % column]
        if (d === target) {
            return true
        } else if (d < target) {
            left = mid + 1
        } else if (d > target) {
            right = mid - 1
        }
    }

    return false 
};
// @lc code=end

