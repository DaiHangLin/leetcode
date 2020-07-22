/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 1) {
        return 1
    }
    function pow(n) {
        return n * n
    }
    let left = 0, right = x, ans = 0;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
       if (pow(mid) <= x) {
           ans = mid
           left = mid + 1
        } else {
          right = mid - 1
       }
    }
    return ans

};
// @lc code=end

