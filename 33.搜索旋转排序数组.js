/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums || nums.length <= 0) {
        return -1
    }
    const len = nums.length
    let left = 0;
    let right = len - 1
    while (left <= right) {
        const first = nums[left]
        const last = nums[right]
    
        if (target < first && target > last) {
            return -1
        }
        if (target > first) {
            left ++
            continue
        }
        if (target === first) {
            return left
        }
        if (target < last) {
            right --
            continue
        }
        if (target === last) {
            return right
        }
    }
    return -1
};
// @lc code=end

