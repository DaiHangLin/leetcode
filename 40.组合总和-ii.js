/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = []
    candidates = candidates.sort((a, b) => a -b)
    console.log(candidates)
    function sum(nums) {
        return nums.reduce((r, n) => {
            return r + n;
        }, 0)
    }

    function backTrack(index, nums, temp) {
        const s = sum(temp)
        if (s === target) {
            result.push([...temp])
            return
        } 
        if (s > target) {
            return
        }

        for (let i = index; i < nums.length; i ++) {
            
            const d = nums[i]
            if(i > index && d == nums[i-1])
            {
                continue
            } 
            temp.push(d)
            backTrack(i + 1, nums, temp)
            temp.pop()
        }
    }

    backTrack(0, candidates, [])
    return result
};
// @lc code=end

