/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let temp;
    let len = nums.length;
    for (let i = 0; i < len; i ++) {
        if (nums[i] === val) {
            temp = nums[i]
            nums[i] = nums[i + 1]
            nums[i + 1] = temp
        }
    }
    for (let i = 0; i < len; i ++) {
        if (nums[i] === val) {
            return i
        }
    }
    return 0
};
// @lc code=end

