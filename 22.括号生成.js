/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(total) {
    let list = []
    function generate(left, right, n, s) {
        console.log('left', left, right, s)
        //  终止条件：如果左右括弧都用完则结束
        if (left === n && right === n) {
            //console.log('....', left, right, n)
            list.push(s)
            return
        }

        // 如果左括弧未用完则继续增加左括弧
        if (left < n) {
            generate(left + 1, right, n, s + "(")
        }

        // 如果右括弧少于左括弧则继续增加右括弧
        if (left > right) {
            generate(left, right + 1, n, s + ")")
        }
    }
    generate(0, 0, total, "")
  return list
};
// @lc code=end

