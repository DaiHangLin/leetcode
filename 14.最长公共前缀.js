/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length == 0) {
        return ''
    }
//    return strs.reduce((r, s) => {
//         let  i = 0
//         while (r[i] && s[i] && r[i] === s[i]) {
//             i ++
//         }
//         return r.slice(0, i)
//    })

    function check(array, start, end) {
        if (start === end) {
            return array[start]
        } else {
            const mid  = Math.floor((end - start) / 2) + start
            let left = check(array, start, mid)
            let right = check(array, mid + 1, end)
            return commonCheck(left, right)
        }
    }

    function commonCheck(left, right) {
        const mid = left.length > right.length ? right.length : left.length
        for (let i = 0 ; i < mid; i ++) {
            if (left[i] != right[i]) {
                return left.slice(0, i)
            }
        }
        return left.slice(0, mid)
    }
  
    return check(strs, 0, strs.length - 1)

};
// @lc code=end

