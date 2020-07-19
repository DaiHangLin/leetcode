/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const len = nums.length
    let left = 0, right = len - 1, max = len;
    while (left <= right) {   
        let mid = ((right - left) >> 1) + left;
        const data = nums[mid]
        if (data === target) {
            return mid
        }
        if (data < target) {
            left = mid + 1
        } else {
            max = mid
            right = mid - 1
        }
    }
    return max
};
// @lc code=end

