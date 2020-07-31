/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const len = nums.length
    for (let i = 0; i <len; i ++) {
        while (nums[i] <= len && nums[i] - 1 >= 0 && nums[nums[i] - 1] != nums[i]) {
            const temp = nums[i]
            nums[i] = nums[temp - 1]
            nums[temp - 1] = temp
        }
   }
   for (let i = 0; i < len; i ++) {
       if (nums[i] != i + 1) {
           return i + 1
       }
   }
   return len + 1
};
// @lc code=end

