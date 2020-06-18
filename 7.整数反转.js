/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // const f = x < 0 ? -1 : 1
    // x = Math.abs(x)
    // let len = (x + '').length - 1
    // const max = Math.pow(2, 31) - 1
    // const min = Math.pow(-1, 31)
    // let n = 0
    // do {
    //     let d = x % 10
    //     x = Math.floor(x / 10)
    //     if (n > max || n < min) {
    //         n = 0
    //         break
    //     }
    //     n = d * Math.pow(10, len) + n
    //     len --
    // } while (x != 0)
    // return n * f
    let y = 0;
    while (x != 0) {
        if (y > 214748364 || y < -214748364) {
            return 0;
        }
        y = y * 10 + x % 10;
        x = ~~(x / 10);
    }
    return y;
};
// @lc code=end

