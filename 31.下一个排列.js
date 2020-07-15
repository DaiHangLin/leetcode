/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // initialize start and end index
  // at last we will reverse range [start, end] of nums
  let start = 0, end = nums.length - 1

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }

  // initialize two loop invariant related variables: left and right
  // at last we maybe, just maybe call swap(left-1, right)
  let left = right = end

  // iterate to update left to ensure our loop invariant
  for (; left > 0; left--) {
    if (nums[left] > nums[left - 1]) break
  }

  console.log('left', left, 'nums', nums)

  // if next permutation is possible
  // we should iterate to update right to ensure our loop invariant 
  // and call swap(left-1, right)
  // and update start index
  if (left > 0) {
    for (; right >= left; right--) {
      if (nums[right] > nums[left - 1]) break
    }
    console.log('left', left, 'nums', nums, right)
    swap(left-1, right)
    console.log('left', left, 'nums', nums, right)
    start = left
  }

  // anyway, at last, we should do the reverse job
  let sum = start + end
  console.log('sum', sum, 'start', start)
  for (let i = start; i <= sum / 2; i++) {
    swap(i, sum - i)
  }
};
// @lc code=end

