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
    
    let cs = []

    for (let i = 0; i < len; i ++) {
        let t = strs[i]
        cs.push(t.split('').sort().join(''))
    }
    
    for (let i = 0; i < len; i ++) {
        if (map[i]) {
            continue
        }
        let d = cs[i]
        result[i] = result[i] || [strs[i]]
        for (let j = i + 1; j < len; j ++) {
            if (map[j]) {
                continue
            }   
            let t = cs[j]
            if (d.length != t.length) {
                continue
            }
            if (d === t) {
                map[j] = true
                result[i].push(strs[j])
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

