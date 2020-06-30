/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    function mergeList(l1, l2) {
        let orig = new ListNode('head')
        let head = orig
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                head.next = l1
                l1 = l1.next
            } else {
                head.next = l2
                l2 = l2.next
            }
            head = head.next
        }
        head.next = l1 === null ? l2 : l1
        return orig.next
    }
    const len = lists.length
    const mid = Math.floor(len / 2)

    if (len === 0) {
        return null
    }
    if (len === 1) {
        return lists[0]
    }
    else if (len === 2) {
        return mergeList(lists[0], lists[1])
    }
    const l = mergeKLists(lists.slice(0, mid))
    const r = mergeKLists(lists.slice(mid))
    return mergeList(l, r)
};
// @lc code=end

