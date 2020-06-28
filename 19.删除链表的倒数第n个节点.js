/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0
    let newHead = new ListNode('head')
    let copyHead = newHead
    const map = {}
    while (head != null) {
        map[len] = head
        copyHead.next = head
        head = head.next
        copyHead = copyHead.next
        len ++
    }

    const prevIndex = len - n - 1
    const nextIndex = len - n + 1

    if (prevIndex < 0) {
        return map[nextIndex] || null
    }

    map[prevIndex].next = map[nextIndex]
    return newHead.next
};
// @lc code=end

