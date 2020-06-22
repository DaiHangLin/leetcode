/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((l, r) => l - r)
    const len = nums.length
    let min = Math.pow(10, 4)
    for (let i = 0; i < len; i++) {
        let l = i + 1
        let r = len - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum > target) {
                r --
            } else {
                l ++
            }
           min = Math.abs(min - target) > Math.abs(sum - target) ? sum : min
        }
    }
    return min
};
// @lc code=end

