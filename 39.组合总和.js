/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []

    function sum(nums) {
        return nums.reduce((r, n) => {
            return r + n
        }, 0)
    }

    function backtrack(start, nums, temp) {
        if (sum(temp) === target) {
            result.push([...temp])
            return
        }

        for (let i = start; i < candidates.length; i++) {
            if (sum(temp) > target) {
                continue
            }
            temp.push(nums[i])
            backtrack(i, nums, temp)
            temp.pop()
        }
    }
  
    backtrack(0, candidates, [])
    return result
};
// @lc code=end

