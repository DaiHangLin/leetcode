/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(orig, k) {
    let len = 0
    let head = orig
    let map = {}
    while (head != null) {
        len ++
        map[len] = head
        head = head.next
    }
    let rk = k % len


    for (let i = 0; i < rk; i ++) {
        let node = map[len - i]
        map[len -i - 1].next = null
        node.next = orig
        orig = node
    }
    return orig
};
// @lc code=end

