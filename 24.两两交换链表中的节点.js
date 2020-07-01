/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head != null && head.next == null) {
        return head
    }
    let orig = new ListNode('head')
    let copy = orig
    while (head != null && head.next != null) {
        const d3 = head.next.next
        const n = head.next
        const h = head
        
        head = n
        n.next = h
        h.next = d3
        
        copy.next = n
        copy.next.next = h
        copy = h

        head = d3
    }
    return orig.next
};
// @lc code=end

