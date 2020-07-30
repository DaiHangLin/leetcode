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
    function swap(a, i, j) {
        let temp = a[i]
        a[i] = a[j]
        a[j] = temp
    }
    function paritition(a, left, right, pivotIndex) {
        pivotValue = a[pivotIndex]
        swap(a, pivotIndex, right)
        let storeIndex = left
        for (let i = left; i < right; i ++) {
            if (a[i] <= pivotValue) {
                swap(a, i, storeIndex)
                console.log('a', a, 'storeIndex', storeIndex, 'pivotValue', pivotValue, 'left', left, 'right', right)              
                storeIndex ++
            }
        }
        swap(a, storeIndex, right)
        console.log('a', a, 'storeIndex', storeIndex, 'pivotValue', pivotValue, 'left', left, 'right', right)
        return storeIndex
    }

    function quickSort(a, left, right) {
        if (right > left) {
            let pivotIndex = Math.floor(left + (right - left) / 2)
            let pivotNewIndex = paritition(a, left, right, pivotIndex)
            quickSort(a, left, pivotNewIndex - 1)
            quickSort(a, pivotNewIndex + 1, right)
        }
    }

    quickSort(nums, 0, nums.length - 1)
};
// @lc code=end

