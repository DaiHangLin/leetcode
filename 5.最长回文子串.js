/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

  var longestPalindrome = function(s) {
    let result = s[0] || "";
    for (let i = 0; i < s.length; i++) {
        for (let j = 1; j <= 2; j++) {
            let left = i, right = j + i
            console.log('----',s[left], s[right], i )
            let flag 
            do {
                flag = s[left] == s[right]
    
                if (flag) {
                    const len = right - left + 1
                    if (len > result.length) {
                        result = s.slice(left, right + 1)
                    }
                }
                left --
                right ++
            } while (flag && left >= 0 && right < s.length)
        }
       
    }
    return result;
};

// @lc code=end

