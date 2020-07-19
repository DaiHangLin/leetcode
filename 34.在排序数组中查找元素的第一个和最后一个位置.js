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
    function findIndex(leftPart) {
        let lo = 0, hi = nums.length;
        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2)
            if (nums[mid] > target || (leftPart && target == nums[mid])) {
                hi = mid
            } else {
                lo = mid + 1
            }
        }
        return lo
    }
    let leftIndex = findIndex(true)
    if (leftIndex == nums.length || nums[leftIndex] != target) {
        return [-1, -1]
    }
    return [leftIndex, findIndex(false) - 1]
};
// @lc code=end

