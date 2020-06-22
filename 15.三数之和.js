/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // let ans = [];
    // const len = nums.length;
    // if(nums == null || len < 3) return ans;
    // nums.sort((a, b) => a - b); // 排序
    // for (let i = 0; i < len ; i++) {
    //     if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    //     if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
    //     let L = i+1;
    //     let R = len-1;
    //     while(L < R){
    //         const sum = nums[i] + nums[L] + nums[R];
    //         if(sum == 0){
    //             ans.push([nums[i],nums[L],nums[R]]);
    //             while (L<R && nums[L] == nums[L+1]) L++; // 去重
    //             while (L<R && nums[R] == nums[R-1]) R--; // 去重
    //             L++;
    //             R--;
    //         }
    //         else if (sum < 0) L++;
    //         else if (sum > 0) R--;
    //     }
    // }        
    // return ans;
    let result = []
    if (!nums || nums.length < 3) {
        return result
    }
    nums.sort((l, r) => l - r)
    const len = nums.length
    for (let i = 0; i < len; i ++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = len - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) {
                    left ++
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right --
                }
                left ++
                right --
            } else if (sum < 0) {
                left ++
            } else if (sum > 0) {
                right --
            }
        }
    }
    return result
};
// @lc code=end

