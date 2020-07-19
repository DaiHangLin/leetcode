/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let min = len = nums.length, max = -1
    let left = 0, right = len - 1
    let found = false
    while (left <= right && !found) {
        if (nums[left] == target) {
            min = left
            found = true
        } else {
            left ++
        }
        if (nums[right] == target) {
            max = right
            found = found && true
        } else {
            found = false
            right --
        }
    }
    return found ? [min, max] : [-1, -1]
};
// @lc code=end

