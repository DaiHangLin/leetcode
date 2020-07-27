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
    while (head != null) {
        len ++
        if (head.next == null) {
            head.next = orig
            head = orig
            break
        }
        head = head.next
    }
    let rk = k % len

    let newHead
    for (let i = 0; i < (len - rk); i ++) {
        newHead = head
        head = head.next
    }
    if (newHead)
        newHead.next = null
    return head
};
// @lc code=end

