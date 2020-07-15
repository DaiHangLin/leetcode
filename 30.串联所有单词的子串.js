/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!words || words.length == 0) {
        return -1
    }

    const wl = words.length
    const len = words[0].length
    const map = {}

    for (let i = 0; i < words.length; i ++) {
        map[words[i]] = words[0]
    }
    console.log(map)

    let copy = map


    let result = []

    function compareS(str) {
        let i = 0
        let copy = map
        while (i < str.length) {
            console.log('i', i)
            if (copy[str.substr(i, len)]) {
                delete copy[str.substr(i, len)]
            }
            if (Object.keys(copy).length === 0) {
                result.push(i)
                copy = map
                continue
            }
            i = i + len
            console.log('i', i, 'str', str)
        }
    }

    for (let i = 0; i < s.length - wl * len;) {
        
    }

};
// @lc code=end

