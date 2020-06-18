/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

/*
1. 维护一个当前最长的子串，默认为 ''
2. 比较下一个字符
    如果没有重复的，则和最长的子串进行合并
    如果有重复的，则将最长的子串进行切割，去除当前最长字串中该字符之前的字符
3. 计算最大长度
4. 重复第二步
*/

var lengthOfLongestSubstring = function(data) {
    if (!data) {
        return 0
    }
    let ls = ''
    let max = 0
    for (let s of data) {
        if (!ls.includes(s)) {
            ls += s
        } else {
            ls = ls.slice(ls.indexOf(s) + 1) + s
        }
        max = Math.max(max, ls.length)
    }
    return max
};
// @lc code=end

