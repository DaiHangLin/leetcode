/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let root = new ListNode(0);
    let temp = root;
    let prefix = 0
    while (l1 != null || l2 != null) {
        if (!l1 && !l2) {
            return
        }
        let v1 = !l1 ? 0 : l1.val
        let v2 = !l2 ? 0 : l2.val
        let v3 = v1 + v2 + prefix
        if (prefix == 1) {
            prefix = 0
        }
        let newNode = new ListNode(v3 % 10)
        prefix = v3 >= 10 ? 1 : 0
        temp.next = newNode
        temp = temp.next
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    if (prefix != 0) {
        temp.next = new ListNode(prefix)
    }
    return root.next
};
// @lc code=end

