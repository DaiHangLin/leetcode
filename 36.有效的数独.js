/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = {}
    let column = {}
    let sb = {}
    for (let i =0; i < 9; i = i + 1) {
        for (let j = 0; j < 9; j++) {
            const d = board[i][j]
            if (d === '.') {
                continue
            }
            if (!row[i]) {
                row[i] = new Set()
            }
            if (row[i].has(d)) {
                return false
            } else {
                row[i].add(d)
            }

            if (!column[j]) {
                column[j] = new Set()
            }
            if (column[j].has(d)) {
                return false
            } else {
                column[j].add(d)
            }
            const index = `box-${Math.floor(i / 3)}-${Math.floor(j / 3)}`
            if (!sb[index]) {
                sb[index] = new Set()
            }
            if (sb[index].has(d)) {
                return false
            } else {
                sb[index].add(d)
            }
        }
    }

    return true
};
// @lc code=end

