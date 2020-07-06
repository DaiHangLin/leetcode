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
    let i = 0, len = nums.length
    let j = len - 1;
    do {
       let ni = nums[i]
       let nj = nums[j]
       if (nj != val && ni != val) {
           i ++
           continue
       }
       if (ni === val && nj != val) {
            nums[i] = nj
            nums[j] = val
            i ++
            j --
            continue
       }
       j --
       
    } while (i < j)
    for (let z = 0; z < len; z ++) {
        if (nums[z] === val) {
            return z
        }
    }
};
// @lc code=end

