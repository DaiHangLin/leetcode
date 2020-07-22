/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []

    function backtrack(nums, temp) {
            console.log('temp', temp)
        if (temp.length === nums.length) {
            result.push([...temp])
            return
        }
        for (let i = 0; i < nums.length; i++) {
           if (temp.indexOf(nums[i]) != -1) {
               continue
           } 
           temp.push(nums[i])
           backtrack(nums, temp)
           temp.pop()
        }
    }
    backtrack(nums, [])
    return result
};
// @lc code=end

