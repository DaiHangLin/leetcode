/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    const len = height.length

    let max = 0

    for (let i = 0; i < len - 1; i ++) {
        for (let j = i + 1; j < len; j ++) {
            const h1 = height[i]
            const h2 = height[j]
            const m = Math.min(h2, h1) * (j - i)
            max = max > m ? max : m
        }
    }

    return max
};
// @lc code=end

