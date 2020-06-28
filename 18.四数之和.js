/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    nums.sort((l, r) => l - r)

    if (!nums || nums.length < 4) {
        return []
    }
    console.log(nums)
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue
        }
        for (let j = i + 1; j < nums.length; j ++) {
            if(result.length > 0){
                let res0 = result[result.length - 1][0]
                let res1 = result[result.length - 1][1]
                if(res0 === nums[i] && res1 === nums[j]) continue
              }
    
            let x = j + 1;
            let y = nums.length - 1
            console.log([nums[i], nums[j], nums[x], nums[y]])
            while (x < y) {
                const sum = nums[i] + nums[j] + nums[x] + nums[y]
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[x], nums[y]])
                    while (x < y && nums[x] === nums[x + 1]) {
                        x ++
                    }
                    while (x < y && nums[y] === nums[y - 1]) {
                        y --
                    }
                    x ++
                    y --
                } else if (sum > target) {
                   y -- 
                } else {
                    x ++
                }
            }
            
        }
    }
    return result

};
// @lc code=end

