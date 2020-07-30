/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length

    function max(l, r) {
        if (l == r) {
            return nums[l]
        }
        let mid = (l + r) >> 1
        let maxLeft = max(l, mid)
        let maxRight = max(mid + 1,  r)
        let leftMaxnum = 0,rightMaxnum = 0;
        let sum=0;
        for(let i=mid-1;i>=l;i--){
            sum+=nums[i];
            leftMaxnum=Math.max(leftMaxnum,sum);
        }
        sum=0;
        for(let j=mid+1;j<=r;j++){
            sum+=nums[j];
            rightMaxnum=Math.max(rightMaxnum,sum);
        }
        return Math.max(leftMaxnum + nums[mid] + rightMaxnum, Math.max(maxLeft, maxRight))
    }
    return max(0, len - 1)
};

// @lc code=end

