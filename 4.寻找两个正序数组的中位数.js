/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/*
 1. 首先如何计算中位数，按题目的意思，
    偶数集合，取中间位置的值
    基数集合，取中间两位数字的平均数
 2. 已知两个数组是已经排序的
 3. 基本思路只需要挨个取数组的第一个元素进行排序合并，算法复杂度为O(m + n)
 4. 取第一个元素的方式有很多，可以通过记下标，也可以通过array的shift，取出数组首元素，
    并且会从数组中删除该元素
*/

var findMedianSortedArrays = function(nums1, nums2) {
    function calc(nums) {
        const len = nums.length
        if (len % 2 == 0) {
            return (nums[len / 2] + nums[len / 2 - 1]) / 2
        } else {
            return nums[(len - 1) / 2]
        }
    }
    if (!nums1) {
        return calc(nums2)
    }
    if (!nums2) {
        return calc(nums1)
    }
    // n1 的 length  大于 n2 的length
    function merge(n1, n2) {
        const mn = []
        function isUndefined(n) {
            return typeof(n) == 'undefined'
        }
        while (n1.length > 0 || n2.length > 0) {
            const f1 = n1[0]
            const f2 = n2[0]
            if (isUndefined(f1) && isUndefined(f2)) {
                break
            }
            if (!isUndefined(f1) && !isUndefined(f2)) {
                if (f1 < f2) {
                    mn.push(n1.shift())
                } else {
                    mn.push(n2.shift())
                }
                continue
            }
            if (!isUndefined(f1)) {
                mn.push(n1.shift())
                continue
            }
            if (!isUndefined(f2)) {
                mn.push(n2.shift())
            }
        }
        return mn
    }
    const mn = merge(nums1, nums2)
    return calc(mn)
};
// @lc code=end

