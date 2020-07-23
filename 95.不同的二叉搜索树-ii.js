/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let result = []

   
    function build(head, val) {
        if (head == null) {
            head = new TreeNode(val)
            console.log('head', head)
        }
        for (let i = 1; i <= n; i ++) {
            if (head.val < i) {
                // head.right = build(head.right, i)
            } else if (head.val > i) {
                head.left = build(head.left, i)
            } else {
                continue    
            }
        }
        return head
    }
    for (let i = 1; i <= n; i ++) {
        let head = new TreeNode(0)
        let r = build(head, i)
        result.push(r.right)
    }
    console.log(result)
    return result
};
// @lc code=end

