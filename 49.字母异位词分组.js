/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = []
    let map = {}
    let len = strs.length
    for (let i = 0; i < len; i ++) {
        if (map[i]) {
            continue
        }
        let d = strs[i]
        result[i] = result[i] || [d]
        for (let j = i + 1; j < len; j ++) {
            let t = strs[j]
            if (d.length != t.length) {
                continue
            }
            let at = []
            for (let z = 0; z < t.length; z ++) {
                at.push(t[z])
            }
            let ad = []
            for (let z = 0; z < d.length; z++) {
                ad.push(d[z])
            }
            if (at.sort().join('') === ad.sort().join('')) {
                map[j] = true
                result[i].push(t)
            }
        }
    }
    let r = []
    for (let i = 0; i < result.length; i ++) {
        if (result[i]) {
            r.push(result[i])
        }
    }
    return r
};
// @lc code=end

