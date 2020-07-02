/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
    if (head != null && head.next == null) {
        return head
    }
    let orig = new ListNode('head')
    let copy = orig
    while (head != null && head.next != null) {
        let map = {}
        for (let i = 0; i <= k; i ++) {
            map[i] = head
            head = head && head.next
        }
        if (map[k - 1]) {
            for (let i = k; i --; i >= 0) {
                copy.next = new ListNode(map[i].val)
                copy = copy.next
            }
        } else {
            copy.next = map[0]
        }
        head = map[k]
    }
    if (head != null) {
        copy.next = head
    }
    return orig.next
};
// @lc code=end

