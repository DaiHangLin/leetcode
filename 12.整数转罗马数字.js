/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // 我的解题思路
    // const map = {
    //     1: 'I',
    //     4: 'IV',
    //     5: 'V',
    //     9: 'IX',
    //     10: 'X',
    //     40: 'XL',
    //     50: 'L',
    //     90: 'XC',
    //     100: 'C',
    //     400: 'CD',
    //     500: 'D',
    //     900: 'CM',
    //     1000: 'M',
    // }
    // const keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9 , 5, 4, 1]
    // let r = []
    // let tag = 1
    // let keyLen = 13
    // function parse(n) {
    //     let i = 0
    //     let d = []
    //     do {
    //         const key = keys[i]
    //         if (n >= key) {
    //             n = n - key
    //             d.push(map[key])
    //         } else {
    //             i ++
    //         }
    //     } while(n != 0 && i < keyLen)
    //     return d
    // }
    // do {
    //     const n = num % 10 * tag
    //     const d = parse(n)
    //     Array.prototype.unshift.apply(r, d) 
    //     num = Math.floor(num / 10)
    //     tag = tag * 10
    // } while (num != 0)
    // return r.join('')


    // 最优解
    // 比如 3000 => 3000 / 1000 = 3 => 需要 MMM
    // 比如 800 => 800 / 1000 = 0, 800 / 900 = 0 800 / 500 = 1 => 需要 D 
        // 800 % 500 = 300 =>  继续
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    return Object.entries(map).reduce((result, [letter, n]) => {
        result += letter.repeat(Math.floor(num / n));
        num %= n;
        return result;
    }, '');
};
// @lc code=end

