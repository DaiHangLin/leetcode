/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    function quickSort(q) {
        let lessList = [], greaterList = [], pivotList = []
        if (q.length == 0 || q.length == 1) {
            return q
        }
        let len = q.length
        let pivot = Math.floor(len / 2) 
        for (let i = 0; i < len; i ++) {
            if (q[i] < q[pivot]) {
                lessList.push(q[i])
            } else if (q[i] > q[pivot]) {
                greaterList.push(q[i])
            } else {
                pivotList.push(q[pivot])
            }
        }
        return [...quickSort(lessList), ...pivotList, ...quickSort(greaterList)]
    }

    nums = quickSort(nums)
    console.log('nums', nums)

};
// @lc code=end

