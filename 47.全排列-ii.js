/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (!nums || nums.length == 0) {
        return;
    }
    nums = nums.sort((a, b) => a - b)
    let len = nums.length
    let result = []
    let used = {}
    function backtrace(index, temp) {
        if (temp.length > len) {
            return
        }
        if (temp.length == len) {
            let t = []
            for (let i = 0; i < len; i ++) {
                t.push(nums[temp[i]])
            }
            result.push(t)
            return;
        }
        for (let i = 0; i < nums.length; i ++) {
            if (used[i]) {
                continue
            }
             console.log('i', i, 'nums[i]', nums[i], 'nums[i - 1]', nums[i - 1], `used[${i}]`, used[i])

            if ((i > 0  && nums[i] == nums[i - 1]) && !used[i - 1]) {
                continue
            }
            used[i] = i + 1;
            temp.push(i)
            backtrace(i, temp)
            temp.pop()
            delete used[i]
        }
    }
    backtrace(0, [])
    return result
};
// @lc code=end

